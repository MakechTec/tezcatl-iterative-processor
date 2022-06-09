# IterativeProcessor #

the next code is in /test directory:

    import { IterativeProcessor } from "../index.js";
    import fs from "node:fs";

    let processor = new IterativeProcessor();

    let text = fs.readFileSync("./test/templates/default/jscomponent.temp", "utf8");

    let newText = processor.parse(text);
    console.log(newText);

the /test/templates/default/jscomponent.temp have:

    @foreach(import)
    import ${import} from '';
    @endforeach

    @if(class)
    export default class ${component}{
        @if(state)
        @endif
    }
    @else
    export const ${component} = {
        
    };
    export default ${component};
    @endif
    @if(func)
    export const ${component} = () => {
        return;
    };

    export default ${component};
    @endif

    @foreach(const)
    export const ${const} = () => {
        return (
            <div>
                <h1>${const}</h1>
            </div>
        );
    };
    @endforeach

    @foreach(func)
    export const ${func} = () => {
        @foreach(inside)
            let ${inside} = "";
        @endforeach
        return;
    };
    @endforeach

suposse you use the next command:

    node test/index.mjs import1=react import2=makech const1=Navbar const2=Topbar func1=toggle func2=hidde inside1=hello inside2=world

the result is:

    import react from '';

    import makech from '';


    @if(class)
    export default class ${component}{
            @if(state)
            @endif
    }
    @else
    export const ${component} = {
        
    };
    export default ${component};
    @endif
    @if(func)
    export const ${component} = () => {
        return;
    };

    export default ${component};
    @endif


    export const Navbar = () => {
            return (
                    <div>
                            <h1>Navbar</h1>
                    </div>
            );
    };

    export const Topbar = () => {
            return (
                    <div>
                            <h1>Topbar</h1>
                    </div>
            );
    };



    export const toggle = () => {

                    let hello = "";

                    let world = "";

        return;
    };

    export const hidde = () => {

                    let hello = "";

                    let world = "";

        return;
    };