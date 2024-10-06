
function longestSubarrWthSumDivByK(arr, N, k) {
	let maxl = 0;
	for (let i = 0; i < N; i++) {
		let sum1 = 0;
		for (let j = i; j < N; j++) {
			sum1 += arr[j];
			if (sum1 % k === 0) {
				maxl = Math.max(maxl, j - i + 1);
			}
		}
	}
	return maxl;
}

// Driver code
let arr = [ 2, 7, 6, 1, 4, 5 ];
let N = arr.length;
let k = 3;
console.log("Length = " + longestSubarrWthSumDivByK(arr, N, k));

//This code is contributed by dhanshri borse
