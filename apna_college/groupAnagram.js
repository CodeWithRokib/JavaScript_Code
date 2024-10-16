function groupAnagrams(strs) {
    const map = {};

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }
        
        map[sortedStr].push(str);
    }

    return Object.values(map);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
