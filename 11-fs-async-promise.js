const { readFile, writeFile } = require('fs/promises');

async function mergeFiles() {
  const first = await readFile("./content/first.txt", "utf8");
  const second = await readFile("./content/subfolder/test.txt", "utf8");
  await writeFile('./content/result-promise.txt', `Here is the result:${first},${second}\n`, { flag: 'a' });
  console.log("Task Done");
}
console.log("Start");
mergeFiles();

console.log("Start the next task");

