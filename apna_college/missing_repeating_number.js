function findMissingAndRepeating(arr) {
    let n = arr.length;

    let expectedSum = (n * (n + 1)) / 2;
    let expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

    // Calculate actual sum and sum of squares from the array
    let actualSum = 0, actualSumOfSquares = 0;

    for (let i = 0; i < n; i++) {
        actualSum += arr[i];
        actualSumOfSquares += arr[i] * arr[i];
    }

    // Difference between expected and actual sums
    let sumDiff = expectedSum - actualSum; // Y - X
    let squareSumDiff = expectedSumOfSquares - actualSumOfSquares; // Y^2 - X^2

    // We know that (Y^2 - X^2) = (Y - X)(Y + X)
    // Therefore, squareSumDiff = sumDiff * (Y + X)
    let sumPlusDiff = squareSumDiff / sumDiff; // Y + X

    // Now we have two equations:
    // sumDiff = Y - X
    // sumPlusDiff = Y + X
    // Solving for X and Y:
    let X = (sumPlusDiff - sumDiff) / 2;
    let Y = (sumPlusDiff + sumDiff) / 2;

    return [X, Y];
}

// Example usage:
let arr = [3, 1, 2, 5, 3];
let result = findMissingAndRepeating(arr);
console.log("Repeating: " + result[0] + ", Missing: " + result[1]);
