function longestPalindrome(s) {
    if (s.length < 2) return s;  

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // If we found a longer palindrome, update the start and maxLength
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);        
        expandAroundCenter(i, i + 1); 
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd")); 
