// BFS approach
// https://leetcode.com/problems/clone-graph/solutions/3392084/javascript-php-bfs-dfs-approaches/
var cloneGraph = function (node) {
  // BFS approach
  // 1. create a new node
  // 2. add the new node to the queue
  // 3. add the new node to the visited map
  // 4. while the queue is not empty
  // 5.    get the first node from the queue
  // 6.    for each neighbor of the node
  // 7.        if the neighbor is not in the visited map
  // 8.            create a new node
  // 9.            add the new node to the queue
  // 10.           add the new node to the visited map
  // 11.       add the new node to the neighbors of the new node
  if (!node) return null;

  let newNode = new Node(node.val);
  let queue = [node];
  let visited = new Map();
  visited.set(node, newNode);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    for (let neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        let newNeighbor = new Node(neighbor.val);
        queue.push(neighbor);
        visited.set(neighbor, newNeighbor);
      }
      visited.get(currentNode).neighbors.push(visited.get(neighbor));
    }
  }
  return newNode;
};

// var cloneGraph = function(node) {
//     // If start node is null then we can't do any cloning
//     let start = node;
//     if (start === null) return null;
//     // vertexMap is the original node reference to our node
//     const vertexMap = new Map();

//     // Add the start node to the queue. Give the start node a clone in the vertex map
//     const queue = [start]
//     vertexMap.set(start, new Node(start.val));

//     /*
//     * Breadth first search continues until we process all the vertices in the graph
//     * In the original graph. We know this is done when queue is empty
//     */

//     while (queue.length > 0) {
//         // We grab a node. We will express all of the edges coming off of this node.
//         const currentVertex = queue.shift();
//         // Iterate over all adjacents.
//         for (const neighbor of currentVertex.neighbors) {
//           // Has this neighbor been given a clone?
//             if (!vertexMap.has(neighbor)) {
//                 /*
//                 * No? Give it a mapping and add the original neighbor to the search queue so we
//                 * can express ITS edges later
//                 */
//                 vertexMap.set(neighbor, new Node(neighbor.val))
//                 queue.push(neighbor);
//             }

//             /*
//             * Draw the edge from currVertex's clone to neighbor's clone. Do you see how our
//             * hashtable makes this quick access possible?
//             */
//             vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor));
//         }
//     }
//    return vertexMap.get(start);

// };

// /**
//  * Clones a given graph node and its neighbors recursively while preserving the graph structure.
//  *
//  * @param {Node} node - the input node to clone
//  * @param {Map<Node, Node>} clonedNodes - a map to keep track of cloned nodes to avoid creating duplicates
//  * @return {Node} - a cloned node that is a copy of the input node and its neighbors
//  */
// var cloneGraph = function (node, clonedNodes = new Map()) {
//   // If the input node is null, return null
//   if (!node) return null;

//   // If the input node has already been cloned, return the corresponding cloned node
//   if (clonedNodes.has(node)) return clonedNodes.get(node);

//   // Create a new node object that is a copy of the input node
//   const clonedNode = new Node(node.val);

//   // Add the input node and its corresponding cloned node to the clonedNodes map
//   clonedNodes.set(node, clonedNode);

//   // Loop over each neighbor of the input node
//   for (const neighbor of node.neighbors) {
//     // Recursively call cloneGraph on the neighbor to create a deep copy of the neighbor node
//     const clonedNeighbor = cloneGraph(neighbor, clonedNodes);

//     // Add the cloned neighbor to the clonedNode.neighbors array to preserve the graph structure
//     clonedNode.neighbors.push(clonedNeighbor);
//   }

//   // Return the cloned node object
//   return clonedNode;
// }

//
//
//   My attempt
//
//
//

/**
 * function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function (node) {
  if (!node) return node;

  let firstNewlyCreatedNode = null;
  const prevNodes = [];

  // If running on Leetcode
  // const queue = new Queue();
  // queue.enqueue(node);
  // If running on node.js
  const queue = [];
  queue.push(node);

  // If running on Leetcode
  //   while (queue.size() > 0) {

  // If running on node.js
  while (queue.length > 0) {
    // If running on Leetcode
    // const currNode = queue.dequeue();
    // If running on node.js
    const currNode = queue.shift();
    const currNodeVal = currNode.val;

    console.log(prevNodes);
    let newNode;
    if (prevNodes[currNodeVal]) {
      newNode = prevNodes[currNodeVal];
    } else {
      newNode = new Node(currNode.val);
    }

    if (!firstNewlyCreatedNode) firstNewlyCreatedNode = newNode;
    if (currNode.neighbors.length === 0) return firstNewlyCreatedNode;

    let newNodesNewNeighbors = [];
    for (const neighbor of currNode.neighbors) {
      if (!prevNodes[neighbor.val]) {
        const newNeighborNode = new Node(neighbor.val);
        prevNodes[neighbor.val] = newNeighborNode;
        newNodesNewNeighbors.push(newNeighborNode);
        // If running on Leetcode
        // queue.enqueue(neighbor);
        // If running on node.js
        queue.push(neighbor);
      } else {
        newNodesNewNeighbors.push(prevNodes[neighbor.val]);
      }
    }
    newNode.neighbors = newNodesNewNeighbors;
  }

  console.log("prevNodes", prevNodes);
  return firstNewlyCreatedNode;
};

/**
 * For Making + Printing out a Graph of Nodes
 * @param {number} val
 * @param {[node]} neighbors
 */

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

// Configure your nodes here
const a1 = new Node(1, []);
const a2 = new Node(2, []);
const a3 = new Node(3, []);
const a4 = new Node(4, []);

a1.neighbors = [a2, a4];
a2.neighbors = [a1, a3];
a3.neighbors = [a2, a4];
a4.neighbors = [a1, a3];

// // Printing - bad way
// const allNodes = [a1, a2, a3, a4];
// for (let i = 0; i < allNodes.length; i++) {
//   let currNodeNeighbors = allNodes[i].neighbors;
//   process.stdout.write(`Node ${allNodes[i].val}'s neighbors: `);
//   for (const [i, node] of currNodeNeighbors.entries()) {
//     process.stdout.write(node.val.toString());
//     i !== currNodeNeighbors.length - 1 && process.stdout.write(" + ");
//   }
//   console.log("");
// }

// Printing - Good recursive way
function printGraph(head) {
  const haveVisited = [];
  const queue = [];
  queue.push(head);

  while (queue.length > 0) {
    let currNode = queue.shift();
    haveVisited[currNode.val] = 1;
    process.stdout.write(currNode.val + " -- ");
    for (const neighbor of currNode.neighbors) {
      haveVisited[neighbor.val] !== 1 && queue.push(neighbor);
    }
  }
  console.log(" the end ");
}

printGraph(cloneGraph(a1));
console.log(" INTERMISSION ");
printGraph(a1);
