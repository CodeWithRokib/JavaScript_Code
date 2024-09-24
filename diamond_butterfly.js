function printDiagonalButterfly(rows) {
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= rows - i; j++) {
        console.log(" ");
      }
      for (let j = 1; j <= i; j++) {
        console.log("*");
      }
      console.log("  *  ");
      // Print the right wing
      for (let j = 1; j <= i; j++) {
        console.log("*");
      }
      console.log("");
    }
  
    for (let i = 1; i <= rows - 1; i++) {
      for (let j = 1; j <= i; j++) {
        console.log(" ");
      }
      console.log("\\  /");
    }
  }
  
  const rows = 6;
  printDiagonalButterfly(rows);