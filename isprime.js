function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 


function isPrime2(number){
    if(number <=1){
        return false;
    }
    for(let i = 2; i<number; i++){
        if(number % i === 0){
            return false;
        }
        return true;
    }
}
console.log(isPrime2(10));