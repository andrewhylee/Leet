/**
 * For Making + Printing out a Graph of Nodes
 * @param {number} val
 * @param {[node]} neighbors
 */

function Node1(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

// Configure your nodes here
const a1 = new Node1(1, []);
const a2 = new Node1(2, []);
const a3 = new Node1(3, []);
const a4 = new Node1(4, []);

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
