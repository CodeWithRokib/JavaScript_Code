function threeSum(nums) {
    const result = [];
    
    // Sort the array to use two-pointer technique
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for i to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for the left pointer
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                
                // Skip duplicates for the right pointer
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                
                // Move pointers after processing current valid triplet
                left++;
                right--;
            } else if (sum < 0) {
                // If sum is less than 0, move the left pointer to increase the sum
                left++;
            } else {
                // If sum is greater than 0, move the right pointer to decrease the sum
                right--;
            }
        }
    }
    
    return result;
}

// Example usage:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// Output: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 0, 0, 0])); 
// Output: [[0, 0, 0]]

console.log(threeSum([-2, 0, 1, 1, 2])); 
// Output: [[-2, 0, 2], [-2, 1, 1]]
