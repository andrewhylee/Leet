/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// Sol 1
var dfs = function (s, adj, vis) {
  // s = selected course number
  vis[s] = 2; // Label "2" indicates it's currently being checked for Cycle
  for (let i = 0; i < adj[s].length; i++) {
    // Go thru all nodes "s" is connected to
    if (vis[adj[s][i]] == 0) {
      // Were they not visited? then continue
      if (dfs(adj[s][i], adj, vis)) {
        // Then go thru all the ADJ's or the ADJ
        return true; // if any of them give true, pass back up the true value (aka part of curr cycle checking)
      }
    } else if (vis[adj[s][i]] == 2) return true;
  } // nothing else to dfs, nor we couldnt find node that causes a cycle
  vis[s] = 1; // set it to "1" to indicate TRULY Visted.
  return false; // return false to close all the other previously opened up for-loops
};

var canFinish = function (num, pre) {
  // Create adjacency list. - This part I understand
  const adj = [];
  for (let i = 0; i < num; ++i) {
    // does this ++ matter?
    adj[i] = [];
  }
  for (let i = 0; i < pre.length; ++i) {
    // SO far, O(N) - 2 N passes
    adj[pre[i][0]].push(pre[i][1]);
  }

  // Check for loops
  const vis = new Array(num).fill(0); // Make a Visited list
  for (let i = 0; i < num; ++i) {
    // Go through all possible course numbers
    if (vis[i] == 0) {
      // If NOT visited
      if (dfs(i, adj, vis)) return false; // DFS into that course number
    }
  }
  return true;
};

///
/// TOPOLOGICAL SORTING
///
///
var canFinish = function (numCourses, prerequisites) {
  let graph = Array(numCourses)
    .fill(0)
    .map(() => []);
  let inDegree = Array(numCourses).fill(0);
  let q = [];

  for (let [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course] += 1;
  }

  for (let course = 0; course < numCourses; course++) {
    if (inDegree[course] === 0) q.push(course);
  }

  while (q.length) {
    let prereq = q.shift();
    numCourses -= 1;
    for (let course of graph[prereq]) {
      inDegree[course] -= 1;
      if (inDegree[course] === 0) q.push(course);
    }
  }

  return numCourses === 0;
};
