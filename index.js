import chalk from "chalk";

export function beautifyConsoleOutput(text, styles) {
  let styledOutput = text;

  if (styles) {
    styles.forEach((style) => {
      const [property, value] = style.split(":");
      switch (property) {
        case "color":
          styledOutput = chalk[value](styledOutput);
          break;
        case "bgColor":
          styledOutput = chalk.bgHex(value)(styledOutput);
          break;
        case "bold":
          styledOutput = chalk.bold(styledOutput);
          break;
        case "underline":
          styledOutput = chalk.underline(styledOutput);
          break;
        case "italic":
          styledOutput = chalk.italic(styledOutput);
          break;
        default:
          console.warn(`Invalid style property '${property}'`);
      }
    });
  }

  return styledOutput;
}
