import * as readline from 'readline';

class Calculator {
  add(a: string | number, b: string | number): string | number {
    if (typeof a === 'string' || typeof b === 'string') {
      return `${a}${b}`;
    }
    return a + b; // Perform addition if both are numbers
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number | string {
    if (b === 0) {
      return "Error: Division by zero is not allowed.";
    }
    return a / b;
  }

  operate(a: string | number, b: string | number, operation: string): string | number | never {
    switch (operation) {
      case 'add':
        return this.add(a, b);
      case 'subtract':
        if (typeof a === 'string' || typeof b === 'string') {
          throw new Error("Cannot subtract strings.");
        }
        return this.subtract(a as number, b as number);
      case 'multiply':
        if (typeof a === 'string' || typeof b === 'string') {
          throw new Error("Cannot multiply strings.");
        }
        return this.multiply(a as number, b as number);
      case 'divide':
        if (typeof a === 'string' || typeof b === 'string') {
          throw new Error("Cannot divide strings.");
        }
        return this.divide(a as number, b as number);
      default:
        throw new Error('Error: Invalid operation.');
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const main = async () => {
  try {
    const input1 = await askQuestion("Enter the first value: ");
    const input2 = await askQuestion("Enter the second value: ");
    const operation = await askQuestion("Enter operation (add, subtract, multiply, divide): ");

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    const calculator = new Calculator();
    const result = calculator.operate(
      isNaN(num1) ? input1 : num1,
      isNaN(num2) ? input2 : num2,
      operation
    );

    console.log(`Result: ${result}`);
  } catch (error: any) {
    console.error(error.message);
  } finally {
    rl.close();
  }
};

main();

