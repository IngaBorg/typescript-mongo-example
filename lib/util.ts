import * as readline from 'readline';

export default class Util {
  rl: readline.ReadLine;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  ask(question) {
    let that = this;

    return new Promise(function(resolve) {
      that.rl.setPrompt(question + ' >');
      that.rl.prompt();

      that.rl.on('line', (line) => {
        resolve([line, that.rl]);
      })
    });
  }
}