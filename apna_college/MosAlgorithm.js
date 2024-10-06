
class Query{
	constructor(L, R)
	{
		this.L = L;
		this.R = R;
	}
}

// Prints sum of all query ranges. m is number of queries
	// n is the size of the array.
function printQuerySums(a, n, q, m)
{

	// One by one compute sum of all queries
		for (let i = 0; i < m; i++)
		{
			// Left and right boundaries of current range
			let L = q[i].L, R = q[i].R;
	
			// Compute sum of current query range
			let sum = 0;
			for (let j = L; j <= R; j++)
				sum += a[j];
	
			// Print sum of current query range
			document.write("Sum of [" + L +
						", " + R + "] is " + sum+"<br>");
		}
}

// Driver program
let a = [1, 1, 2, 1, 3, 4, 5, 2, 8];
let n = a.length;

let q = [];
q.push(new Query(0,4));
q.push(new Query(1,3));
q.push(new Query(2,4));

let m = q.length;
printQuerySums(a, n, q, m);

