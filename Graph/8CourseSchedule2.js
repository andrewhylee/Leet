/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// Actually able to learn this one
//
var findOrder = function (numCourses, prerequisites) {
  const adj = Array(numCourses)
    .fill(0)
    .map(() => []);
  const inDegree = Array(numCourses).fill(0);
  const queue = [];
  const res = [];

  for (let [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    inDegree[course] += 1;
  }

  for (let course = 0; course < numCourses; course++) {
    if (inDegree[course] === 0) queue.push(course);
  }

  while (queue.length > 0) {
    let prereq = queue.shift();

    res.push(prereq);

    for (course of adj[prereq]) {
      inDegree[course] -= 1;
      if (inDegree[course] === 0) queue.push(course);
    }
    numCourses--;
  }
  return numCourses === 0 ? res : [];
};
