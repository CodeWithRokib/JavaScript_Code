function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
