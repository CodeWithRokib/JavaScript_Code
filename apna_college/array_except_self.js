function productExceptSelf(nums) {
    let n = nums.length;
    let answer = new Array(n);

    // Step 1: Calculate the prefix product for each element
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // Step 2: Calculate the suffix product and multiply with the prefix product
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {

        answer[i] = answer[i] * suffix;
        suffix *= nums[i];  // Update suffix product
    }

    return answer;
}

// Example usage:
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));  // Output: [24, 12, 8, 6]

