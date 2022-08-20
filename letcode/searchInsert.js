var searchInsert = function (nums, target) {
  let low = 0;
  let hight = nums.length - 1;
  let mid;

  while (low <= hight) {
    mid = low + Math.floor((hight - low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      hight = mid - 1;
    }
  }

  return low;
};

console.log(searchInsert([1, 3, 5, 6], 5));
