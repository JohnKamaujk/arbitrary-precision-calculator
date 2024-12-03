# Arbitrary Precision Calculator

An interactive, arbitrary-precision integer calculator built in JavaScript. This project implements mathematical operations for integers of any size without relying on native support or libraries.

## Features
- Addition, subtraction, multiplication, division, and modulo.
- Exponentiation and factorial calculations.
- Interactive REPL for user input.
- Arbitrary-precision support using string-based number representation.

### Bonus Features
- Support for non-decimal bases (binary, octal, hexadecimal).
- Fractions and logarithms (optional).

---

## Getting Started

### Prerequisites
- Node.js installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/JohnKamaujk/arbitrary-precision-calculator.git
   ```
2. cd into the folder arbitrary-precision-calculator and install dependencies:
    ```bash
    npm install
    ```
2. Run the REPL:
    ```bash
    npm run start
    ```
### Usage
Type commands in the REPL like:

- Add two numbers:
    ```bash
    add 12345678901234567890 98765432109876543210
    ```

- Subtract two numbers:
    ```bash
    subtract 98765432109876543210 12345678901234567890
    ```

- Multiply:
    ``` bash
    multiply 12345 6789
    ```
- Divide:
    ``` bash
    divide 6789876 1234
    ```

- Factorial:
    ```bash
    factorial 20
    ```

- Exponentiation:
    ```bash
    exponentiation 2 100
    ```
- Modulo:
    ```bash
    modulo 100 9
    ```

### How It Works
This calculator uses string-based number representation to perform arithmetic operations without relying on JavaScript's native Number or BigInt.

### Contributing
Feel free to contribute by submitting issues, suggesting features, or creating pull requests.

### License
This project is licensed under the MIT License.

### Contact
For questions or feedback, feel free to reach out:

GitHub: JohnKamaujk

Email: johnjkkamau@gmail.com