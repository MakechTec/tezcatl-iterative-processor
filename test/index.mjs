import { IterativeProcessor } from "../src/IterativeProcessor.mjs";
import fs from "node:fs";

let processor = new IterativeProcessor();

let text = fs.readFileSync("./test/templates/default/jscomponent.temp", "utf8");

let newText = processor.parse(text);
console.log(newText);