
function tsp_ls(distance_matrix) {
  let n = distance_matrix.length;
  let memo = new Set();
  
  let minCost = Infinity;
  let minRoute = Array.from({ length: n }, (v, i) => i).sort((a, b) => 0.5 - Math.random());
  
  let cost = 0;
  for (let i = 0; i < n - 1; i++) {
    cost += distance_matrix[i][i + 1];
  }
  minCost = cost;
  for (let i = 0; i < factorial(n - 1); i++) {
    let routePath = [...minRoute];
    let r = Math.floor(Math.random() * (n - 1)) + 1;
    let l = Math.floor(Math.random() * (n - r - 1)) + r + 1;
    if (memo.has(`${r}, ${l}`)) continue;
    memo.add(`${r}, ${l}`);
    swap(routePath, r, l);

    let newCost = 0;
    for (let i = 0; i < (n - 1); i++) {
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

//From my Euler 
function factorial(n) {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
