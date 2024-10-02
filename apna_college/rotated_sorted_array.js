function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    // Handle the case where the array is not rotated (already sorted)
    if (nums[left] <= nums[right]) {
        return nums[left];
    }

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is the minimum
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }

        // Decide which side to explore based on sorted/unsorted part
        if (nums[mid] > nums[left]) {
            // Left side is sorted, so the minimum must be on the right side
            left = mid + 1;
        } else {
            // Right side is sorted, so the minimum must be on the left side
            right = mid - 1;
        }
    }

    return -1;  // This shouldn't happen in a valid rotated sorted array
}
