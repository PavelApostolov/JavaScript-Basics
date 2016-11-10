function solve(args) {
  'use strict';
  var key,
    lab = args.slice(1).map(function(line) {
      return line.split(' ');
    }),
    directions = {
      d: +1,
      u: -1,
      l: -1,
      r: +1
    },
    visited = {},
    row, col, sum;

  function getValueAt(row, col) {
    return (1 << row) + col;
  }

  row = 0;
  col = 0;
  sum = 0;
  while (true) {
    if (!lab[row] || !lab[row][col]) {
      return 'successed with ' + sum;
    }
    key = row + ';' + col;
    if (visited[key]) {
      return 'failed at (' + row + ', ' + col + ')';
    }

    visited[key] = true;
    sum += getValueAt(row, col);
    var dir = lab[row][col];
    row += directions[dir[0]];
    col += directions[dir[1]];
  }
}

------

function solve(args){
  var rowsCols = args[0].split(' '),
  bounds = {
    rows: +rowsCols[0],
    cols: +rowsCols[1]
  },
  matrix = args.slice(1).map(function(line){
    return line.split(' ');
  })
row = 0,
col = 0,
sum = 0,
dir,
deltas = {
  u: -1,
  d: +1,
  l: -1,
  r: +1
},
leftRight,
upDown;

while (1) {
  if (!matrix[row] || matrix[row][col])
    /*row < 0 || row >= bounds.rows ||
    //col < 0 || col >= bounds.cols*/) {
    return 'successed with ' + sum;
  }

  if (matrix[row][col] === 'used') {
    return 'failed at (' + row + ', ' + col + ')';
  }

  //sum += Math.pow(2,row) + col;
  sum += (1 << row) + col;

  dir = matrix[row][col];
  matrix[row][col] === 'used';
  upDown = dir[0];
  leftRight = dir[1];

  row += deltas[upDown];
  col += deltas[leftRight];
}
return matrix;
}
-----------

function solve(input) {
    var rows = parseInt(input[0].split(' ')[0]);
    var cols = parseInt(input[0].split(' ')[1]);
    input.shift();
    var numberArray = fillArray(rows, cols);

    function fillArray(rows, cols) {
        var resultArray = new Array(rows);
        for (var row = 0; row < rows; row++) {
            var filler = Math.pow(2, row);
            resultArray[row] = new Array(cols);
            for (var col = 0; col < cols; col++) {
                resultArray[row][col] = filler++;
            }
        }
        return resultArray;
    }

    var labyrinth = new Array(rows);
    for (var row = 0; row < rows; row++) {
        labyrinth[row] = input[row].split(' ');
    }

    function getNextStep(curRow, curCol, instruction) {
        var nextRow = curRow;
        var nextCol = curCol;

        switch (instruction) {
            case 'dr':
                nextCol++;
                nextRow++;
                break;
            case 'ur':
                nextRow--;
                nextCol++;
                break;
            case 'ul':
                nextRow--;
                nextCol--;
                break;
            case 'dl':
                nextRow++;
                nextCol--;
                break;
        }

        return {
            row: nextRow,
            col: nextCol
        };
    }

    // first step
    var sumOfNumber = numberArray[0][0];
    numberArray[0][0] = 0;
    var nextStep;
    var curRow = 0;
    var curCol = 0;

    while (true) {
        nextStep = getNextStep(curRow, curCol, labyrinth[curRow][curCol]);
        curRow = nextStep.row;
        curCol = nextStep.col;

        if ((curRow < rows && curRow >= 0) && (curCol < cols && curCol >= 0)) {
            if (numberArray[curRow][curCol] > 0) {
                sumOfNumber += numberArray[curRow][curCol];
                numberArray[curRow][curCol] = 0;
            } else {
                return "failed at (" + curRow + ', ' + curCol + ')';
            }
        } else {
            return "successed with " + sumOfNumber;
        }
    }
}