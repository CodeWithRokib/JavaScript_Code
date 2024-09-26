function findMinDiff(arr, n, m) {
  if (m == 0 || n == 0) return 0;

  arr.sort(function (a, b) {
    return a - b;
  });

  if (n < m) return -1;

  let min_diff = Number.MAX_VALUE;

  for (let i = 0; i + m - 1 < n; i++) {
    let diff = arr[i + m - 1] - arr[i];

    if (diff < min_diff) min_diff = diff;
  }
  return min_diff;
}

let arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];

let m = 7;
let n = arr.length;

console.log("Minimum difference is " + findMinDiff(arr, n, m));

// Another_solutions


// function minDifference(chocolates, m) {
//     const n = chocolates.length;

//     if (n === 0 || m === 0 || n < m) {
//         return 0;
//     }

//     chocolates.sort((a, b) => a - b);

//     let minDiff = Infinity;

//     for (let i = 0; i + m - 1 < n; i++) {
//         const maxChocolates = chocolates[i + m - 1];
//         const minChocolates = chocolates[i];
//         const currentDiff = maxChocolates - minChocolates;

//         minDiff = Math.min(minDiff, currentDiff);
//     }

//     return minDiff;
// }

// const chocolates = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
// const m = 7;
// const result = minDifference(chocolates, m);
// console.log("Minimum difference is:", result);
