function findPairWithSum(arr, X) {
    let n = arr.length;
    
    // Find the pivot point (the index of the smallest element)
    let pivot = findPivot(arr, n);
    
    // The smallest element (starting point of the rotated array)
    let left = (pivot + 1) % n;
    // The largest element (ending point of the rotated array)
    let right = pivot;
    
    // Now use the two-pointer technique to find the pair with the given sum
    while (left != right) {
        let currentSum = arr[left] + arr[right];
        
        // If we found the pair
        if (currentSum == X) {
            return true;
        }
        
        // If current sum is less, move the left pointer (increment in circular manner)
        if (currentSum < X) {
            left = (left + 1) % n;
        }
        // If current sum is greater, move the right pointer (decrement in circular manner)
        else {
            right = (n + right - 1) % n;
        }
    }
    
    // No pair found
    return false;
}

function findPivot(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return i;
        }
    }
    return n - 1;  // If no pivot, the array is not rotated
}

// Example usage
let arr = [11, 15, 6, 8, 9, 10];
let X = 16;
console.log(findPairWithSum(arr, X)); // Output: true

arr = [11, 15, 26, 38, 9, 10];
X = 35;
console.log(findPairWithSum(arr, X)); // Output: true

arr = [11, 15, 26, 38, 9, 10];
X = 45;
console.log(findPairWithSum(arr, X)); // Output: false
