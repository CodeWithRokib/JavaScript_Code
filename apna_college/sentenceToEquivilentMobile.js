
	function printSequence(arr,input)
	{
		let output = "";
	
		// length of input string
		let n = input.length;
		for (let i = 0; i < n; i++)
		{
			// Checking for space
			if (input[i] == ' ')
				output = output + "0".charCodeAt(0);
	
			else
			{
				// Calculating index for each 
				// character
				let position = input[i].charCodeAt(0) - 'A'.charCodeAt(0);
				output = output + arr[position];
			}
		}
	
		// Output sequence
		return output;
	}
	
	// Driver Function
	let str = ["2", "22", "222",
	"3", "33", "333",
	"4", "44", "444",
	"5", "55", "555",
	"6", "66", "666",
	"7", "77", "777", "7777",
	"8", "88", "888",
	"9", "99", "999", "9999" ]
	
	let input = "GEEKSFORGEEKS";
	document.write(printSequence(str, input));
	