function mergeOverlap(arr) {

    // Sort intervals based on start values
    arr.sort((a, b) => a[0] - b[0]);

    let res = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        let last = res[res.length - 1];
        let curr = arr[i];

        // If current overlaps with the last 
        // merged, merge them
        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            // Add current to the result
            res.push(curr);
        }
    }

    return res;
}

// Driver Code
let arr = [[6, 8], [1, 9], [2, 4], [4, 7]];
let res = mergeOverlap(arr);

console.log("The Merged Intervals are:");
res.forEach(interval => {
    console.log(`[${interval[0]}, ${interval[1]}]`);
});