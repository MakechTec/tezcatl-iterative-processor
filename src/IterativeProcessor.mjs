import { Pipe } from "@makechtec/pipe";
import { Argument, CLI, Reader } from "@makechtec/tezcatl-cli";

export class IterativeProcessor{

    parse(text){

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

        args.map((arg) => {
                return new Argument(iterable, arg.value);
            })
            .forEach((arg) => {
                let insideContent = originalText.substring(lessDeep.start.endIndex, lessDeep.end.startIndex);
                newText += Reader.changePlaceholders(insideContent, [arg]);
            });

        


        let originalConditionContent = originalText.substring(lessDeep.start.startIndex, lessDeep.end.endIndex);
        let cleanText = originalText.replace(originalConditionContent, newText);
        return cleanText;
    }

    loopWithLessDeep(loops){

        let minDeep = loops.map(c => c.deep).reduce((a, b) => Math.min(a, b));
        let lessDeep = loops.find(loop => loop.deep === minDeep);
        return lessDeep;
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
        let startRegex = new RegExp("(@foreach\\(.*?\\))|(@endforeach)", "g");
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
        let startRegex = new RegExp("(@foreach\\(.*\\))", "g");
        let endRegex = new RegExp("(@endforeach)", "g");

        return startRegex.test(text) && endRegex.test(text);
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
        return this.start.content.replace("@foreach(", "").replace(")", "");
    }
}

export const FOREACH_STATEMENT = "@foreach\\(.*\\)";
export const END_FOREACH_STATEMENT = "@endforeach";