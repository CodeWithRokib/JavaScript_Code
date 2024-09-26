function containsDuplicate(nums) {
    const seen = new Set(); 

    for (let num of nums) {
        if (seen.has(num)) {
            return true; 
        }
        seen.add(num); 
    }

    return false; 
}

const array1 = [1, 2, 3, 1];
const result1 = containsDuplicate(array1);
console.log(result1); 

const array2 = [1, 2, 3, 4];
const result2 = containsDuplicate(array2);
console.log(result2);
