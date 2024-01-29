// Internet Solution
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  // Build the Graph - i understand this one - basically building adj list
  const graph = new Map();
  for (const [node1, node2] of edges) {
    if (!graph.has(node1)) graph.set(node1, []);

    graph.get(node1).push(node2);

    if (!graph.has(node2)) graphe.set(node2, []);

    graph.get(node2).push(node1);
  }

  // Iterate over connections, from the last to first
  // Simulate dropping a connection and see if you are able to still reach all the nodes in the graph
  for (let i = edges.length - 1; i >= 0; i--) {
    const startNode = edges[i][0];
    const skipNode = edges[i][1];
  }
};

////////////////////////////////////////////////
//// My own - Failed Attempt ///////////////////
////////////////////////////////////////////////

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  // Solution 1 - FAIL

  // const seenSet1 = new Set()
  // const seenSet2 = new Set()
  // for(let i = 0; i < edges.length; i++){
  //     // break condition 1
  //     if( seenSet2.has(edges[i][0]) || seenSet2.has(edges[i][1])){
  //         return edges[i]
  //     }

  //     // adding conditions
  //     if( seenSet1.has(edges[i][0]) ){
  //         seenSet2.add(edges[i][0])
  //     }else{
  //         seenSet1.add(edges[i][0])
  //     }
  //     if( seenSet1.has(edges[i][1]) ){
  //         seenSet2.add(edges[i][1])
  //     }else{
  //         seenSet1.add(edges[i][1])
  //     }

  //     // break condition 2
  //     if(seenSet2.size === seenSet1.size) return edges[i]
  // }
  // return [-1,-1]

  // Solution 2

  const cycleSet = new Set();
  const totalNodes = edges.length;

  // function dfs(node, adj, visited, cycleSetArg){
  //     cycleSetArg.add(node)
  //     visited[node] = 2
  //     for(let i = 0; i < adj[node].length ;i++){
  //         const adjacentNode = adj[node][i]
  //         if(visited[ adjacentNode ] === 2 || dfs(adjacentNode, adj, visited, cycleSetArg)) {
  //                 if(cycleSetArg.size !== 2){
  //                     return true
  //                 }
  //             }

  //     }
  //     visited[node] = 1
  //     return false // cycle not found
  // }

  function dfs2(node, adj, cycleSetArg) {
    if (cycleSetArg.has(node)) {
      return node;
    } else {
      cycleSetArg.add(node);
    }
    for (let i = 0; i < adj[node].length; i++) {
      const adjacentNode = adj[node][i];
      const res = dfs2(adjacentNode, adj, cycleSetArg);
      if (res !== null) {
        return res;
      }
    }
    cycleSetArg.delete(node);
    return null;
  }

  // Create adj list
  // Created visited list
  const adj = [];
  // const visited = []
  for (let i = 1; i <= totalNodes; i++) {
    adj[i] = [];
    // visited[i] = 0
  }
  for (let i = 0; i < totalNodes; i++) {
    adj[edges[i][0]].push(edges[i][1]);
    adj[edges[i][1]].push(edges[i][0]);
  }

  // // Start DFS
  // for(let i = 0; i < edges.length; i++){
  //     if( !dfs(edges[i][0], adj, visited, cycleSet)){
  //         cycleSet.clear()
  //         continue
  //     }else{
  //         break
  //     }
  // }
  // for (let i = edges.length - 1; i >= 0; i-- ){
  //     if( cycleSet.has(edges[i][0]) && cycleSet.has(edges[i][1]) ){
  //         return edges[i]
  //     }
  // }

  // return [] // should never be reached
};
