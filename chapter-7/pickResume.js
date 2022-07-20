function pickResume(resumes) {
  let eliminate = "top";

  while (resumes.length > 1) {
    if (eliminate === "top") {
      resumes = resumes.slice(resumes.length / 2, resumes.length - 1);

      eliminate = "bottom";
    } else if (eliminate === "bottom") {
      resumes = resumes.slice(0, resumes.length / 2);
    }
  }
  return resumes[0];
}

const r = pickResume([2, 4, 4, 5, 9, 7, 6]);
console.log(r);
