class SortableArray {
  constructor(array) {
    this.array = array;
  }

  partition(leftPointer, rightPointer) {
    let pivotIndex = rightPointer;
    let pivot = array[pivotIndex];
    rightPointer -= 1;

    while (true) {
      while (array[leftPointer] < pivot) {
        leftPointer += 1;
      }
      while (array[rightPointer] > pivot) {
        rightPointer -= 1;
      }

      if (leftPointer >= rightPointer) {
        break;
      } else {
        array[leftPointer],
          (array[rightPointer] = array[rightPointer]),
          array[leftPointer];

        leftPointer += 1;
      }
    }
    array[leftPointer],
      (array[pivotIndex] = array[pivotIndex]),
      array[leftPointer];

    return leftPointer;
  }

  quicksort(leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) return;

    let pivotIndex = this.partition(leftIndex, rightIndex);
    this.quicksort(leftIndex, pivotIndex - 1);
    this.quicksort(pivotIndex + 1, rightIndex);
  }

  sortedArray() {
    return this.array;
  }
}

let array = [0, 5, 2, 1, 6, 3];
let sortableArray = new SortableArray(array);
sortableArray.quicksort(0, array.length - 1);
console.log(sortableArray.sortedArray());
