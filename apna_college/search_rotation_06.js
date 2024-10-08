function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; 
        }

     
        if (nums[left] <= nums[mid]) { 
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1; 
            }
        } else { 
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
    }

    return -1; 
}


const nums = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;
const target2 = 3;
console.log(`Index of target ${target1}:`, search(nums, target1)); 
console.log(`Index of target ${target2}:`, search(nums, target2)); 
