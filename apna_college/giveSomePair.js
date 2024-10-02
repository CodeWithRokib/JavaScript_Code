function findPairWithSum(arr, n, sum) {
    let pivot = findPivot(arr, n);
    
    let left = (pivot + 1) % n; // The smallest element (after rotation)
    let right = pivot;          // The largest element (before rotation)
    
    while (left != right) {
        let currentSum = arr[left] + arr[right];
        
        if (currentSum == sum) {
            return true;
        }
        
        // Move the left pointer clockwise if the sum is less
        if (currentSum < sum) {
            left = (left + 1) % n;
        }
        // Move the right pointer counterclockwise if the sum is more
        else {
            right = (n + right - 1) % n;
        }
    }
    
    return false;
}

function findPivot(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return i;
        }
    }
    return n - 1;
}

// Example usage:
let arr = [11, 15, 6, 8, 9, 10];
let sum = 16;
console.log(findPairWithSum(arr, arr.length, sum));  // Output: true

arr = [4, 5, 6, 7, 8, 1, 2, 3];
sum = 10;
console.log(findPairWithSum(arr, arr.length, sum));  // Output: true

arr = [1, 2, 3, 4, 5];
sum = 8;
console.log(findPairWithSum(arr, arr.length, sum));  // Output: true
