function maxProduct(nums) {
    if (nums.length === 0) return 0;  // Edge case: empty array

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];

        // Store the current maxProduct temporarily
        let tempMax = Math.max(current, current * maxProduct, current * minProduct);
        
        // Update the minProduct for the current iteration
        minProduct = Math.min(current, current * maxProduct, current * minProduct);
        
        // Update the maxProduct for the current iteration
        maxProduct = tempMax;

        // Update the result with the largest product found so far
        result = Math.max(result, maxProduct);
    }

    return result;
}

// Example usage:
console.log(maxProduct([2, 3, -2, 4])); // Output: 6
console.log(maxProduct([-2, 0, -1]));   // Output: 0
