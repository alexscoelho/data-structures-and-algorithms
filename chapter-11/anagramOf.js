function anagramOf(string) {
  if (string.length === 1) {
    return [string[0]];
  }
  let collection = [];

  let substringAnagrams = anagramOf(string.slice(1));

  for (let subStringAnagram of substringAnagrams) {
    for (let i = 0; i <= subStringAnagram.length; i++) {
      let copy = subStringAnagram.slice();
      let anagram = copy.slice(0, i) + string[0] + copy.slice(i);
      collection.push(anagram);
    }
  }

  return collection;
}

const r = anagramOf("abcd");
console.log(r);
