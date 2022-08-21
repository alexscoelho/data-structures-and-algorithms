/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const backTrack = (i, cur, total) => {
    if (total === target) {
      result.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) return;

    cur.push(candidates[i]);
    backTrack(i, cur, total + candidates[i]);
    cur.pop();
    backTrack(i + 1, cur, total);
  };

  backTrack(0, [], 0);
  return result;
};
