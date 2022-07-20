class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  read() {
    return this.data[this.data.length - 1];
  }
}

class Linter {
  constructor() {}
  stack = new Stack();

  lint(text) {
    for (let char of text) {
      if (isOppeningBrace(char)) {
        this.stack.push(char);
      } else if (isClosingBrace(char)) {
        let poppedOpeningBrace = this.stack.pop();
        if (!poppedOpeningBrace) return `${char} doesnt have oppening brace`;
        if (isNotAMatch(poppedOpeningBrace, char))
          return `${char} has mismatched oppening brace`;
      }
    }
    if (this.stack.read())
      return `${this.stack.read()} does not have a closing brace`;

    return true;
  }
}

function isOppeningBrace(char) {
  return ["(", "[", "{"].includes(char);
}
function isClosingBrace(char) {
  return [")", "]", "}"].includes(char);
}
function isNotAMatch(oppeningBrace, closingBrace) {
  return closingBrace !== { "(": ")", "[": "]", "{": "}" }[oppeningBrace];
}

let linter = new Linter();
console.log(linter.lint("x={]x:y}"));
