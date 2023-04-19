import { beautifyConsoleOutput } from './index.js';

console.log(beautifyConsoleOutput("Hello World!", ["color:red", "bgColor:#000", "bold", "underline", "italic"]));

// Add bold and underline to the text
console.log(beautifyConsoleOutput('Hello, World!', ['bold', 'underline']));

// Add a red text color
console.log(beautifyConsoleOutput('Hello, World!', ['color:red']));

// Add a blue background color
console.log(beautifyConsoleOutput('Hello, World!', ['bgColor:blue']));

// Add bold and italic to the text
console.log(beautifyConsoleOutput('Hello, World!', ['bold', 'italic']));
