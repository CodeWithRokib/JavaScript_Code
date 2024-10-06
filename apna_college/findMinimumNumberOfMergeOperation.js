
    function findMinOps(arr, n)
    {
        let ans = 0; 
  
        // Start from two corners
        for (let i=0,j=n-1; i<=j;)
        {
            // If corner elements are same,
            // problem reduces arr[i+1..j-1]
            if (arr[i] == arr[j])
            {
                i++;
                j--;
            }
  
            // If left element is greater, then
            // we merge right two elements
            else if (arr[i] > arr[j])
            {
                // need to merge from tail.
                j--;
                arr[j] += arr[j+1] ;
                ans++;
            }
  
            // Else we merge left two elements
            else
            {
                i++;
                arr[i] += arr[i-1];
                ans++;
            }
        }
  
        return ans;
    }
  

// Driver Code

        let arr = [1, 4, 5, 9, 1];
        console.log("Count of minimum operations is "+
                                findMinOps(arr, arr.length));

