function nextPermutation(nums) {

    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);  // Output: [1, 3, 2]

nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums);  // Output: [1, 2, 3]

nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums);  // Output: [1, 5, 1]
