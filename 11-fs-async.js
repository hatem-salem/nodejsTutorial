const { readFile, writeFile } = require('fs');
console.log("Start");
readFile('./content/first.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  const first = data;
  readFile('./content/subfolder/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    const second = data;
    writeFile('./content/result-async.txt', `Here is the result:${first},${second}\n`, { flag: 'a' }, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      console.log("Task Done");
    });
  });

});
console.log("Start the next task");