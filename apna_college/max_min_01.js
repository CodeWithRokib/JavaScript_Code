function findMaxMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    
    let max = arr[0];
    let min = arr[0];
    
    // Traverse the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  
        }
        if (arr[i] < min) {
            min = arr[i];  
        }
    }
    
    return { max, min };
}
const array = [3, 5, 7, 2, 8, -1, 4, 10, 12];
const result = findMaxMin(array);
console.log(`Maximum: ${result.max}, Minimum: ${result.min}`);


// function rokib(arrr){
//     if(arrr.length === 0){
//         throw new error('The array is empty');
//     }
//     let max1 = arrr[0];
// let min1 = arrr[0];

// for (let i = 1; i<arrr.length; i++){
//     if(arrr[i] > max1){
//        max1 = arrr[i];
//     }
//     if(arrr[i]<min1){
//        min1 = arrr[i]
//     }
//  return { max1, min1 };
// }

// }

// let array1 = [3, 5, 7, 2, 8, -1, 4, 10, 12,13,19,-5];
// let result1 = rokib(array1);
// console.log(`Maximum: ${result1.max1}, Minimum: ${result1.min1}`);

