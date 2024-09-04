// bellmanFord.js
export function bellmanFord(grid, startNode, finishNode) {
    const nodes = getAllNodes(grid);
    startNode.distance = 0;
  
    for (let i = 1; i < nodes.length; i++) {
      for (const node of nodes) {
        if (node.distance === Infinity) continue;
  
        const neighbors = getUnvisitedNeighbors(node, grid);
        for (const neighbor of neighbors) {
          const newDist = node.distance + 1;
          if (newDist < neighbor.distance) {
            neighbor.distance = newDist;
            neighbor.previousNode = node;
          }
        }
      }
    }
  
    for (const node of nodes) {
      if (node.distance === Infinity) continue;
  
      const neighbors = getUnvisitedNeighbors(node, grid);
      for (const neighbor of neighbors) {
        const newDist = node.distance + 1;
        if (newDist < neighbor.distance) {
          return []; // Negative weight cycle detected
        }
      }
    }
  
    const visitedNodesInOrder = [];
    for (const node of nodes) {
      if (node.distance !== Infinity) {
        visitedNodesInOrder.push(node);
      }
    }
  
    return visitedNodesInOrder;
  }
  
  function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {row, col} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isWall);
  }
  