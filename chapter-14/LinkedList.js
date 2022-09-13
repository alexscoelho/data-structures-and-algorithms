class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  read(index) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;

      if (!currentNode) return null;
    }

    return currentNode.data;
  }

  indexOf(value) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentIndex;
      } else {
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
    }
    return null;
  }

  insertAtIndex(index, value) {
    let newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.firstNode;
      this.firstNode = newNode;
      return;
    }

    // inserting anywhere other than the beginning
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  deleteAtIndex(index) {
    if (index == 0) {
      this.firstNode = this.firstNode.nextNode;
      return;
    }

    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    let nodeAfterDeletedOne = currentNode.nextNode.nextNode;
    currentNode.nextNode = nodeAfterDeletedOne;
  }

  printAll() {
    let currentNode = this.firstNode;

    while (currentNode) {
      console.log(currentNode.data);

      currentNode = currentNode.nextNode;
    }
  }

  giveLast() {
    let currentNode = this.firstNode;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.data;
  }

  reverse() {
    let previousNode = null;
    let currentNode = this.firstNode;

    while (currentNode) {
      let nextNode = currentNode.nextNode;

      currentNode.nextNode = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.firstNode = previousNode;
  }
}

nodeOne = new Node("Once");
nodeTwo = new Node("upon");
nodeThree = new Node("a");
nodeFour = new Node("time");

nodeOne.nextNode = nodeTwo;
nodeTwo.nextNode = nodeThree;
nodeThree.nextNode = nodeFour;

list = new LinkedList(nodeOne);

// console.log(list.read(3));
// console.log(list.indexOf("time"));
// list.insertAtIndex(3, "purple");

// console.log(list.read(3));
// list.deleteAtIndex(3);
// console.log(list.read(3));
// console.log(list.read(1));
list.reverse();
console.log(list.printAll());
// console.log(list.giveLast());
