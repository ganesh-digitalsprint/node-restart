import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function askQuestion(): Promise<string> {
  return new Promise((resolve) => {
    rl.question("Please enter your question: ", (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}