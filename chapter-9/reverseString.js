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

function reverseString(string) {
  let stack = new Stack();
  let reversed = "";

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  for (i = 0; i < string.length; i++) {
    let removed = stack.pop();

    reversed += removed;
  }
  return reversed;
}

const r = reverseString("abcde");
console.log(r);
