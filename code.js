
function tsp_ls(distance_matrix) {
  let n = distance_matrix.length;
  let minCost = Infinity; // Start with an arbitrarily high value
  let minRoute = Array.from({ length: n }, (v, i) => i);  // Initial route is just 0, 1, 2, ..., n-1

  // Initial route cost calculation
  let cost = 0;
  for (let i = 0; i < n - 1; i++) {
    cost += distance_matrix[i][i + 1];
  }
  minCost = cost;  // Set the initial cost

  for (let i = 0; i < (n - 1); i++) {
    let routePath = [...minRoute];
    
    let r = Math.floor(Math.random() * n);  // Random index r between 0 and n-1
    let l = Math.floor(Math.random() * (n - r - 1)) + r + 1;  // Random index l greater than r

    swap(routePath, r, l);
    
    // Calculate the cost of the new route
    let newCost = 0;
    for (let i = 0; i < n - 1; i++) {
      newCost += distance_matrix[routePath[i]][routePath[i + 1]];
    }

    if (newCost < minCost) {
      minCost = newCost;
      minRoute = routePath;
    }
  }
  
  return minCost;
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
//console.log(tsp_ls(dm) == 0);
console.log(tsp_ls(dm));

dm = [[0,0,0],
      [0,0,0],
      [0,0,0]];
//console.log(tsp_ls(dm) == 0);
console.log(tsp_ls(dm));

dm = [[0,1,2],
      [1,0,2],
      [2,2,0]];
//console.log(tsp_ls(dm) >= 3);
console.log(tsp_ls(dm));

dm = [[0,3,4,2,7],
      [3,0,4,6,3],
      [4,4,0,5,8],
      [2,6,5,0,6],
      [7,3,8,6,0]];
// console.log(tsp_ls(dm) >= 13);
console.log(tsp_ls(dm));
