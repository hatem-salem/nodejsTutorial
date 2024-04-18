const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync("./content/first.txt", "utf8", "r");
const second = readFileSync("./content/subfolder/test.txt", "utf8", "r");
writeFileSync('./content/result-sync.txt', `Here is the result:${first},${second}\n`, { flag: 'a' });