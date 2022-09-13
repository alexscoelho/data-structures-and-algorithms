class Node {
  constructor(data, nextNode, previousNode) {
    this.data = data;
    this.nextNode = nextNode;
    this.previousNode = previousNode;
  }
}

class DoublyLinkedList {
  constructor(firstNode, lastNode) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }

  insertAtEnd(value) {
    let newNode = new Node(value);

    if (!this.firstNode) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    } else {
      newNode.previousNode = this.lastNode;
      this.lastNode.nextNode = newNode;
      this.lastNode = newNode;
    }
  }

  removeFromFront() {
    let removedNode = this.firstNode;
    this.firstNode = this.firstNode.nextNode;
    return removedNode;
  }

  reversed() {
    let currentNode = this.lastNode;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.previousNode;
    }
  }
}

class Queue {
  constructor(data) {
    this.data = new DoublyLinkedList();
  }

  enqueue(element) {
    this.data.insertAtEnd(element);
  }

  dequeue() {
    let removedNode = this.data.removeFromFront();
    return removedNode.data;
  }

  read() {
    if (!this.data.firstNode) {
      return null;
    }
    return this.data.firstNode.data;
  }
}

let myQueue = new Queue();
myQueue.enqueue("Car");
myQueue.enqueue("Ship");
myQueue.dequeue();
let reading = myQueue.read();
console.log(reading);
