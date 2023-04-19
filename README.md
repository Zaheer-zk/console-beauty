# Beautify Console Output

A simple npm package that adds styles to console output using the chalk library.
## Installation

You can install this package using npm:
```
npm i console-beauty
```

## Usage

To use this package, import it into your project and call the beautifyConsoleOutput function.


import { beautifyConsoleOutput } from 'console-beauty';

console.log(beautifyConsoleOutput('Hello, World!', ['bold', 'underline', 'color:red']));

The beautifyConsoleOutput function takes two arguments:

    text: The text you want to style.
    styles: An array of strings that define the styles you want to apply to the text.

The styles array can contain the following properties:

    color: The text color. You can use any valid CSS color value, or one of the predefined chalk colors.
    bgColor: The background color. You can use any valid CSS color value, or one of the predefined chalk background colors.
    bold: Makes the text bold.
    underline: Underlines the text.
    italic: Makes the text italic.


Here are some examples of using beautifyConsoleOutput:

```
import { beautifyConsoleOutput } from 'console-beauty';

// Add bold and underline to the text
console.log(beautifyConsoleOutput('Hello, World!', ['bold', 'underline']));

// Add a red text color
console.log(beautifyConsoleOutput('Hello, World!', ['color:red']));

// Add a blue background color
console.log(beautifyConsoleOutput('Hello, World!', ['bgColor:blue']));

// Add bold and italic to the text
console.log(beautifyConsoleOutput('Hello, World!', ['bold', 'italic']));
```

## License

This package is licensed under the MIT license. See the LICENSE file for more information.

## Credit

zaheer__zk [Hi!](https://zaheer-zk.github.io/Advanced-porfolio/)
