import { Pipe } from "@makechtec/pipe";
import { Argument, CLI, Pattern, Reader } from "@makechtec/tezcatl-cli";
import {ArrayTools} from "@makechtec/array-tools";

export class IterativeProcessor{

    parse(text){

        if(this.isBadLoop(text)){
            console.error("ERROR: The loop is not well formed or is not closed");
            return "";
        }

        let newText = text;
        let shouldBeResolved = this.isAnyLoop(newText);

        while( shouldBeResolved){
            
            newText = new Pipe(newText)
                        .addAction(this.read)
                        .addAction(this.createLoops)
                        .addAction((loops) => {
                            return this.evaluate(loops, newText);
                        })
                        .execActions();

            shouldBeResolved = this.isAnyLoop(newText);
        }

        return newText;
        
    }

    evaluate(loops, originalText) {
        let lessDeep = this.loopWithLessDeep(loops);
        let iterable = lessDeep.iterableName();
        let newText = "";

        let args = CLI.getArgumentsGroup(iterable);
        let bags = this.createBags(args)
                        .map(bag => {
                            return bag.map((arg) => {
                                let argName = arg.name.substring(0, arg.name.indexOf(".") + 1);
                                argName = arg.name.replace(argName, "");
                                argName = iterable + "." + argName;
                                return new Argument(argName, arg.value);
                            });
                        });

        bags.forEach((bag) => {
            let insideContent = originalText.substring(lessDeep.start.endIndex, lessDeep.end.startIndex);
            newText += Reader.changePlaceholders(insideContent, bag);
        });

        let originalConditionContent = originalText.substring(lessDeep.start.startIndex, lessDeep.end.endIndex);
        let cleanText = originalText.replace(originalConditionContent, newText);
        return cleanText;
    }

    loopWithLessDeep(loops){

        let minDeep = loops.map(loop => loop.deep)
                            .reduce((prev, current) => Math.min(prev, current));
        return loops.find(loop => loop.deep === minDeep);
    }

    createLoops(matchesAll){

        let deepCount = 0;
        let loops = [];

        for(let i = 0; i < matchesAll.length; i++){

            let startRegex = new RegExp(FOREACH_STATEMENT);
            let endRegex = new RegExp(END_FOREACH_STATEMENT);

            if(startRegex.test(matchesAll[i].content)){
                deepCount++;
                let loop = new Loop();
                loop.start = matchesAll[i];
                loop.deep = deepCount;
                loops.push(loop);
            }
            else if(endRegex.test(matchesAll[i].content)){
                for(let j = loops.length - 1; j >= 0; j--){
                    if(loops[j].completed){
                        continue;
                    }

                    loops[j].end = matchesAll[i];
                    loops[j].completed = true;
                    deepCount--;
                    break;
                }
                
            }

        }

        return loops;
    }

    read(text) {
        let startRegex = new RegExp(ANY_STATEMENT, "g");
        let result;
        let matchesAll = [];

        while ((result = startRegex.exec(text)) !== null) {
            let pointer = new Pointer();
            pointer.startIndex = result.index;
            pointer.endIndex = startRegex.lastIndex;
            pointer.content = result[0];

            matchesAll.push(pointer);
        }

        return matchesAll;
    }

    isAnyLoop(text){
        let startRegex = new RegExp(FOREACH_STATEMENT, "g");
        let endRegex = new RegExp(END_FOREACH_STATEMENT, "g");

        return startRegex.test(text) && endRegex.test(text);
    }

    isBadLoop(text){
        let startRegex = new RegExp(FOREACH_STATEMENT, "g");
        let endRegex = new RegExp(END_FOREACH_STATEMENT, "g");

        let matchesStart = Pattern.countMatches(text, startRegex);
        let matchesEnd = Pattern.countMatches(text, endRegex);

        return matchesStart !== matchesEnd;
    }

    createBags(args){
        return ArrayTools.group(args, (arg) => {
            return arg.name.substring(0, arg.name.indexOf(SEPARATOR));
        });
    }
}

class Pointer{
    startIndex;
    endIndex;
    content;
}

class Loop{
    start;
    end;
    deep;
    loops = [];
    completed = false;

    iterableName(){
        return this.start.content.replace("@foreach\\s*\\(", "")
                                .replace("\\s*\\)", "");
    }
}

export const FOREACH_STATEMENT = "@foreach\\s*\\(\\s*([a-z|A-Z|\\d]*)\\s*\\)";
export const END_FOREACH_STATEMENT = "@endforeach";
export const ANY_STATEMENT = "("+FOREACH_STATEMENT+")|("+END_FOREACH_STATEMENT+")";
export const SEPARATOR = ".";