function characterReplacement(s, k) {
    let left = 0;
    let maxCount = 0;
    let maxLength = 0;
    const count = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;

        maxCount = Math.max(maxCount, count[char]);

        if (right - left + 1 - maxCount > k) {
            count[s[left]] -= 1;
            left += 1;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
console.log(characterReplacement("AABABBA", 1));  
