function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
        while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
const array = [1, 2, 3, 4, 5];
console.log("Original Array:", array);
const reversedArray = reverseArray(array);
console.log("Reversed Array:", reversedArray);

// function rokib(arrr){
//     let start1 = 0;
//     let end1 = arrr.length-1;
//     while(start1<end1){
//         let temp = arr[start1];
//         arr[end1] = temp;
//         start1++;
//         end1--;
//     }
//     return arrr;
// }
// const array1 = [1, 2, 3, 4, 5,8,9,10];
// console.log("Original Array:", array1);
// const reversedArray1 = reverseArray(array1);
// console.log("Reversed Array:", reversedArray1);