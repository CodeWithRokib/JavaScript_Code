function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate([23,4,4,5,6,3,2,2]));