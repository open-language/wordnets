import * as fs from 'fs';
import * as path from 'path';

const jsonPath = path.resolve(__dirname, "..", "data", "data.json");
const wordnets = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

export default wordnets;
