function removeConsecutiveDuplicates(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] !== s[i - 1]) {
            result += s[i];
        }
    }
    return result;
}

console.log(removeConsecutiveDuplicates("aabbcc"));    
console.log(removeConsecutiveDuplicates("aabaa"));    
console.log(removeConsecutiveDuplicates("abccba"));    
