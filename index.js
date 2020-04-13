const fs = require("fs");
const path = require("path");

const jsonPath = path.resolve(__dirname, "data", "data.json");
const wordnets = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

module.exports = wordnets;
