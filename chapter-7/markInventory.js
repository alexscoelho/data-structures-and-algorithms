function markInventory(clothingItems) {
  let clothingOptions = [];
  for (let item of clothingItems) {
    let range = 6;
    for (let i = 1; i < range; i++) {
      clothingOptions.push(`${item} Size: ${i}`);
    }
  }
  return clothingOptions;
}

const r = markInventory(["Purple Shirt", "Green Shirt"]);
console.log(r);
