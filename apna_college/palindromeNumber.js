function isPalindrome(s) {
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return cleanedString === cleanedString.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
