function tsp_ls(distance_matrix) {
  let n = distance_matrix.length;
  let memo = new Set();
  let minRoute = Array.from({ length: n }, (v, i) => i).sort((a, b) => 0.5 - Math.random());
  let minCost = calcCost(minRoute, distance_matrix);
  let improving = true;
  
  while(improving) {
    let routePath = [...minRoute]; // Get a deep copy of min route
    let r = Math.floor(Math.random() * (n - 1)) + 1; // Random Number in the range 1 to n - 1
    let l = Math.floor(Math.random() * (n - r - 1)) + (r + 1); // Random number in the range r + 1 to n
    
    // If the swap was already done don't undo it
    if (memo.has('${r}, ${l}')) continue;
    improving = false;
    memo.add('${r}, ${l}');
    swap(routePath, r, l);

    let newCost = calcCost(routePath, distance_matrix);

    if (newCost < minCost) {
      minCost = newCost;
      minRoute = routePath;
      improving = true;
    }
  }
  
  return minCost;
}
 function calcCost(route, distance_matrix){
    let newCost = 0;
    for (let i = 0; i < distance_matrix.length - 1; i++) {
      newCost += distance_matrix[route[i]][route[i + 1]];
    }
    return newCost;
 }

function swap(arr, r, l) {
  while (r < l) {
    let temp = arr[r];
    arr[r] = arr[l];
    arr[l] = temp;
    r++;
    l--;
  }
}
dm = [[]];
console.log(tsp_ls(dm) == 0);

dm = [[0]];
console.log(tsp_ls(dm) == 0);

dm = [[0,0,0],
      [0,0,0],
      [0,0,0]];
console.log(tsp_ls(dm) == 0);

dm = [[0,1,2],
      [1,0,2],
      [2,2,0]];
console.log(tsp_ls(dm) >= 3);

dm = [[0,3,4,2,7],
      [3,0,4,6,3],
      [4,4,0,5,8],
      [2,6,5,0,6],
      [7,3,8,6,0]];
console.log(tsp_ls(dm) >= 13);
