class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }

  read() {
    return this.data[0];
  }
}

class PrintManager {
  constructor() {}
  queue = new Queue();

  queuePrintJob(document) {
    this.queue.enqueue(document);
  }

  run() {
    while (this.queue.read()) {
      console.log(this.queue.dequeue());
    }
  }

  print(document) {
    console.log(document);
  }
}

let printManager = new PrintManager();
printManager.queuePrintJob("First");
printManager.queuePrintJob("Second");
printManager.queuePrintJob("Third");
printManager.run();
