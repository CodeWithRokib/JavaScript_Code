function myCompare(X, Y) {
    // Compare two concatenated results
    if (X + Y > Y + X) {
        return -1;
    } else {
        return 1;
    }
}

function largestNumber(arr) {
    // Sort the array with the custom comparator
    arr.sort(myCompare);

    // Concatenate the sorted array
    let result = '';
    for (let num of arr) {
        result += num;
    }

    // Handle the case where all numbers are zero
    if (result[0] === '0') {
        return '0';
    }

    return result;
}

// Example usage
const arr1 = ["3", "30", "34", "5", "9"];
console.log(largestNumber(arr1));  // Output: "9534330"

const arr2 = ["54", "546", "548", "60"];
console.log(largestNumber(arr2));  // Output: "6054854654"
