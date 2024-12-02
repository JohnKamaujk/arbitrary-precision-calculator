import * as readline from "readline";
import { add } from "./operations/add";
import { subtract } from "./operations/subtract";
import { multiply } from "./operations/multiply";
import { divide } from "./operations/divide";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">> ",
});

console.log("Welcome to the Arbitrary Precision Calculator!");
console.log(
  "Type commands like: add 12345678901234567890 98765432109876543210"
);
console.log('Type "exit" to quit.\n');

rl.prompt();

rl.on("line", (input: string) => {
  input = input.trim();
  if (input === "exit") {
    console.log("Goodbye!");
    rl.close();
    return;
  }

  try {
    const result = processInput(input);
    console.log(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("An unknown error occurred.");
    }
  }

  rl.prompt();
});

rl.on("close", () => {
  console.log("Calculator session ended.");
  process.exit(0);
});

/**
 * Processes user input and executes the appropriate operation.
 * @param input - The user input as a string.
 * @returns The result of the operation.
 * @throws Error if the command is unknown or arguments are invalid.
 */
function processInput(input: string): string {
  const [command, ...args] = input.split(" ");

  switch (command) {
    case "add":
      if (args.length !== 2) {
        throw new Error("Add operation requires exactly 2 arguments.");
      }
      return add(args[0], args[1]);
    case "subtract":
      if (args.length !== 2) {
        throw new Error("Subtract operation requires exactly 2 arguments.");
      }
      return subtract(args[0], args[1]);
    case "multiply":
      if (args.length !== 2) {
        throw new Error("Multiply operation requires exactly 2 arguments.");
      }
      return multiply(args[0], args[1]);
    case "divide":
      if (args.length !== 2) {
        throw new Error("Divide operation requires exactly 2 arguments.");
      }
      return divide(args[0], args[1]);
    default:
      throw new Error(
        "Unknown command. Supported commands: add, subtract, multiply, etc."
      );
  }
}
