// src/index.ts
import * as fs from "fs";
import * as path from "path";
var __dirname = "/Users/sudhanshuraheja/code/src/github.com/open-language/wordnets/src";
var jsonPath = path.resolve(__dirname, "..", "data", "data.json");
var wordnets = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
var src_default = wordnets;
export {
  src_default as default
};
