
// Driver code 
let a = 2, b = 10;
let size = Math.abs(b - a) + 1;
let array = [];

// Iterate through a to b, If 
// it is a multiple of 2 or 5 
// Mark index in array as 1
for(let i = a; i <= b; i++)
	if (i % 2 == 0 || i % 5 == 0)
		array[i - a] = 1;

document.write("MULTIPLES of 2" + 
			" and 5:" + "<br/>");
for(let i = a; i <= b; i++)
	if (array[i - a] == 1)
		document.write(i + " ");
