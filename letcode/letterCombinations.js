/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];
  const hash = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // if (digits.length === 0) return [];
  // if (digits.length === 1) return hash[digits].split();

  const backtrack = (i, curStr) => {
    if (curStr.length === digits.length) {
      res.push(curStr);
      return;
    }

    for (c of hash[digits[i]]) {
      backtrack(i + 1, curStr + c);
    }
  };

  if (digits) {
    backtrack(0, "");
  }

  return res;
};
