/*
Matrices Program - Keith Burgess
November 2021
Desc: This programme requests information about two matrices and then 
      add, subtracts, multiplies or transposes the matrices.
      version: 1.0
*/

const readline = require("readline-sync");
const chalk = require("chalk");

//  creates one column for the array.
addColumn = (nums) => {
  let newArr = nums
    .split(" ")
    .map((elm) => parseFloat(elm))
    .filter((elem) => !isNaN(elem));
  return newArr;
};

//  build a matrix with elements
createMatrix = (cols, rows) => {
  let newMatrix = [];
  for (let r = 1; r <= rows; r++) {
    do {
      let colNums = readline.question(
        chalk.green(`Enter ${cols} numbers for row ${r} separated spaces: `)
      );
      colData = addColumn(colNums);
    } while (colData.length !== cols);
    newMatrix.push(colData);
  }
  return newMatrix;
};

//  Add the elements of the 2 matrices
addMatrices = (mata, matb) => {
  let result = mata;
  for (let i = 0; i < mata.length; i++) {
    for (let j = 0; j < matb[0].length; j++) {
      result[i][j] = mata[i][j] + matb[i][j];
    }
  }

  console.log(`\nHere's the two matrices combined...\n`);
  console.table(result);
};

//  Subtract the elements of matrixB from MatrixA
subMatrices = (mata, matb) => {
  let result = mata;
  for (let i = 0; i < mata.length; i++) {
    for (let j = 0; j < matb[0].length; j++) {
      result[i][j] = mata[i][j] - matb[i][j];
    }
  }

  console.log(`\nHere's the two matrices subtracted...\n`);
  console.table(result);
};

//  Subtract the elements of matrixB from MatrixA
multMatrices = (mata, matb) => {
  let result = mata;
  for (let i = 0; i < mata.length; i++) {
    for (let j = 0; j < matb[0].length; j++) {
      result[i][j] = mata[i][j] * matb[i][j];
    }
  }

  console.log(`\nHere's the two matrices multiplied...\n`);
  console.table(result);
};

transposeMatrices = (mata, matb) => {
  let [rowA] = mata;
  let [rowB] = matb;
  console.log(`\nHere's the two matrices transposed...\n`);
  console.table(rowA.map((elem, index) => mata.map((row) => row[index])));
  console.log();
  console.table(rowB.map((elem, index) => matb.map((row) => row[index])));
  console.log();
};

//  Collect user data and table results
buildMatrices = (callback) => {
  // Start here by asking the user to nominate rows and columns.
  let cols = readline.question(
    chalk.green("How many columns for each Matrix: ")
  );
  let rows = readline.question(chalk.green("How many rows for each Matrix: "));
  cols = parseFloat(cols);
  rows = parseFloat(rows);

  try {
    if (cols == 0 || rows == 0) {
      throw "Rows and columns must be greater than 0. Try again.";
    } else {
      console.clear();
      console.log(`\nEnter numbers for the first Matrix.\n`);
      let ma = createMatrix(cols, rows);
      console.log(`\nHere's the first matrix...\n`);
      console.table(ma);

      console.log(`\nEnter numbers for the Second Matrix.\n`);
      let mb = createMatrix(cols, rows);
      console.log(`\nHere's the second matrix...\n`);
      console.table(mb);

      callback(ma, mb);
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log(`\nThanks for playing!\n`);
  }
};

mainMenu = () => {
  do {
    console.clear();
    console.log(chalk.green("      MATRIX MAIN MENU"));
    console.log(chalk.green(`      ================\n`));
    console.log(chalk.yellow("      1") + " - Add 2 Matrices");
    console.log(chalk.yellow("      2") + " - Subtract 2 Matrices");
    console.log(chalk.yellow("      3") + " - Multiply 2 Matrices");
    console.log(chalk.yellow("      4") + " - Transpose 2 Matrices");
    console.log(chalk.yellow("      0") + " - Exit the program\n");
    var menuChoice = readline.question(
      chalk.green("    Which Method Would You like? ")
    );
    menuChoice = parseFloat(menuChoice);
    if (menuChoice === 1) {
      console.clear();
      console.log("Add Two Matrices\n");
      buildMatrices(addMatrices);
    } else if (menuChoice === 2) {
      console.clear();
      buildMatrices(subMatrices);
    } else if (menuChoice === 3) {
      console.clear();
      buildMatrices(multMatrices);
    } else if (menuChoice === 4) {
      console.clear();
      buildMatrices(transposeMatrices);
    } else if (menuChoice === 0) {
      console.clear();
      console.log("We hope you choose to play next time.\n\n");
    } else {
    }
  } while (menuChoice > 4 || menuChoice < 0);
};

mainMenu();
