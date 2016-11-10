function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        tests = parseInt(params[rows + 2]),
        knightMoves = [
            [-2, 1],
            [-1, 2],
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1]
        ],
        i, move;

    var curentRow = 0;
    var curenrCol = 0;
    var nextPositionRow = 0;
    var nextPositionCol = 0;
    var currentPosition = 0;
    var nextPosition = 0;
    var chessFigures = params.slice(2, rows + 2);
    var matrix = [];
    var counter;
    for (var i = 0; i < rows; i += 1) {
        matrix[i] = [];
        counter = chessFigures[i].split('');
        for (var j = 0; j < cols; j += 1) {

            matrix[i][j] = counter[j];
        }
    }

    //console.log(matrix);

    for (i = 0; i < tests; i++) {
        move = params[rows + 3 + i];
        currentPosition = move.split(' ')[0];
        curentRow = rows - parseInt(currentPosition[1]);
        curenrCol = currentPosition.charCodeAt(0) - 97;
        nextPosition = move.split(' ')[1];
        nextPositionRow = rows - parseInt(nextPosition[1]);
        nextPositionCol = nextPosition.charCodeAt(0) - 97;

        if (matrix[curentRow][curenrCol] == '-') {
            console.log('no');
            continue;
        }
        if (matrix[curentRow][curenrCol] == 'K') {
            var arrMoveK = [nextPositionRow - curentRow, nextPositionCol - curenrCol];
            var check = false;
            for (var l = 0; l < knightMoves.length; l++) {
                if (knightMoves[l][0] == arrMoveK[0] && knightMoves[l][1] == arrMoveK[1]) {
                    check = true;
                }
            }
            if (!check) {
                console.log('no');
                continue;
            };
        }
        if (matrix[nextPositionRow][nextPositionCol] != '-') {
            console.log('no');
            continue;
        }
        if (matrix[curentRow][curenrCol] === 'Q') {
            check = false;
            var y;

            if (curentRow == nextPositionRow || curenrCol == nextPositionCol) {

                if (curentRow > nextPositionRow && curenrCol == nextPositionCol) {
                    for (y = curentRow - 1; y >= nextPositionRow; y--) {
                        if (matrix[y][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow < nextPositionRow && curenrCol == nextPositionCol) {
                    for (y = curentRow + 1; y <= nextPositionRow; y++) {
                        if (matrix[y][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow == nextPositionRow && curenrCol > nextPositionCol) {
                    for (y = curenrCol - 1; y >= nextPositionCol; y--) {
                        if (matrix[curentRow][y] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow == nextPositionRow && curenrCol < nextPositionCol) {
                    for (y = curenrCol + 1; y <= nextPositionCol; y++) {
                        if (matrix[curentRow][y] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
            } else if ((curentRow + curenrCol) === (nextPositionRow + nextPositionCol) || (curentRow - nextPositionRow) === (curenrCol - nextPositionCol)) {

                if (curentRow > nextPositionRow && curenrCol < nextPositionCol) {
                    for (y = curentRow - 1; y >= nextPositionRow; y--) {
                        curenrCol += 1;
                        curentRow -= 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow > nextPositionRow && curenrCol > nextPositionCol) {
                    for (y = curentRow - 1; y >= nextPositionRow; y--) {
                        curenrCol -= 1;
                        curentRow -= 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow < nextPositionRow && curenrCol > nextPositionCol) {
                    for (y = curentRow + 1; y <= nextPositionRow; y++) {
                        curenrCol -= 1;
                        curentRow += 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
                if (curentRow < nextPositionRow && curenrCol < nextPositionCol) {
                    for (y = curentRow + 1; y <= nextPositionRow; y++) {
                        curenrCol += 1;
                        curentRow += 1;
                        if (matrix[curentRow][curenrCol] !== '-') {
                            check = true;
                        }
                    }
                    if (check) {
                        console.log('no');
                        continue;
                    }
                }
            } else {
                console.log('no');
                continue;
            }
        }
        console.log('yes'); // or console.log('no');
    }
}

------------

function solve(params) {
            var letters = 'abcdefghijklmnopqrstuvwxyz',
                lettersLength = letters.length,
                columns = {},
                rows = params[0] | 0,
                cols = params[1] | 0,
                tests = params[rows + 2] | 0,
                i,
                j,
                from,
                to,
                fromRowCol = [],
                toRowCol = [],
                fromRow,
                toRow,
                fromCol,
                toCol,
                moveRowsCols,
                currentPiece,
                isValid,
                matrix = [];

            for (i = 2; i < rows + 2; i += 1) {
                matrix[i - 2] = params[i].split('');
            }

            for (i = 0; i < lettersLength; i+= 1) {
                columns[letters[i]] = letters[i].charCodeAt() - 97;
            }

            for (i = 0; i < tests; i += 1) {
                moves = params[rows + 3 + i].split(' ');
                moveRowsCols = getFromToRowsCols(moves);
                fromRow = moveRowsCols['from']['row'];
                fromCol = moveRowsCols['from']['col'];
                toRow = moveRowsCols['to']['row'];
                toCol = moveRowsCols['to']['col'];
                currentPiece = matrix[fromRow][fromCol];

                if (fromCol === toCol && fromRow === toRow) { // no move
                    console.log('no');
                } else if (currentPiece === '-') { // no figure
                    console.log('no');
                } else if (fromRow === toRow) { // move horizontal
                    if (currentPiece === 'B') {
                        console.log('no');
                    } else {
                        moveHorizontal();
                    }
                } else if (fromCol === toCol) { // move vertical
                    if (currentPiece === 'B') {
                        console.log('no');
                    } else {
                        moveVerical();
                    }
                } else { // move diagonal
                    if (currentPiece === 'R') {
                        console.log('no');
                    } else {
                        moveDiagonal();
                    }
                }
            }

            function getFromToRowsCols(moves) {
                from = moves[0];
                to = moves[1];

                return {
                    from: {
                        row: rows - (from[1] | 0),
                        col: columns[from[0]],
                    },
                    to: {
                        row: rows - (to[1] | 0),
                        col: columns[to[0]],
                    }
                };
            }

            function moveToCell(rowMove, colMove) {
                isValid = true;
                var currentRow, currentCol;
                for (currentRow = fromRow + rowMove, currentCol = fromCol + colMove; (currentRow !== toRow) || (currentCol !== toCol) ; currentRow += rowMove, currentCol += colMove) {
                    if (matrix[currentRow][currentCol] !== '-') {
                        isValid = false;
                        break;
                    }
                }

                if ((currentRow === toRow && currentCol === toCol && matrix[currentRow][currentCol] === '-') && isValid) {
                    console.log('yes');
                } else {
                    console.log('no');
                }
            }

            function moveHorizontal() {
                if (fromCol < toCol) { // R
                    moveToCell(0, 1);
                } else { // L
                    moveToCell(0, -1);
                }
            }

            function moveVerical() {
                if (fromRow < toRow) { // U
                    moveToCell(1, 0);
                } else {             // D
                    moveToCell(-1, 0);
                }
            }

            function moveDiagonal() {
                if (Math.abs(fromRow - toRow) !== Math.abs(fromCol - toCol)) { // rowsChanged !== colsChanged
                    console.log('no');
                } else if (fromRow < toRow && fromCol < toCol) { // UR
                    moveToCell(1, 1);
                } else if (fromRow < toRow && fromCol > toCol) { // UL
                    moveToCell(1, -1);
                } else if (fromRow > toRow && fromCol > toCol) { // DL
                    moveToCell(-1, -1);
                } else if (fromRow > toRow && fromCol < toCol) { // DR
                    moveToCell(-1, 1);
                }
            }
        }

        ========

        function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        tests = parseInt(params[rows + 2]), i, move;

    var board = [];

    for (i = 2; i < rows + 2; i+=1) {
    	var tempArr = [];
    	for (j = 0; j < cols; j +=1) {
    		var temp = params[i][j];
    		tempArr.push(temp);
    	}
    	board.push(tempArr);
    }

    for (i = 0; i < tests; i++) {
        move = params[rows + 3 + i];
        var both = move.split(' ');
        var s = both[0];
        var start = toCoords(s);
        var e = both[1];
        var end = toCoords(e);

        //rook logic
        if (board[start[0]][start[1]] == 'R') {
        	if ( (start[0] - end[0] === 0) ||
        		 (start[1] - end[1] === 0)) {
        		if (checkObs(end[0], end[1], start[0], start[1])) {
        			console.log('no');
        			continue;
        		}
        		console.log('yes');
        	}
        	else {
        		console.log('no');
        	}

        } else if (board[start[0]][start[1]] == 'Q') { //queen
        	if ( (Math.abs(start[0] - end[0]) == Math.abs(start[1] - end[1])) ||
        		 ((start[0] - end[0] === 0) ||
        		 (start[1] - end[1] === 0)) ) {
        		if (checkObs(end[0], end[1], start[0], start[1])) {
        			console.log('no');
        			continue;
        		}
        		console.log('yes');
        	} else {
        		console.log('no');
        	}
        } else if (board[start[0]][start[1]] == 'B') { //bishop
        	if ( (Math.abs(start[0] - end[0]) == Math.abs(start[1] - end[1]))) {
        		if (checkObs(end[0], end[1], start[0], start[1])) {
        			console.log('no');
        			continue;
        		}
        		console.log('yes');
        	} else {
        		console.log('no');
        	}
        } else {
        	console.log('no');
        }

    }

    function checkObs(dstX, dstY, srcX, srcY) {
    	var dx, dy;
		if (dstY == srcY) dy = 0;
		else dy = (dstY - srcY) / Math.abs(dstY - srcY);
		if (dstX == srcX) dx = 0;
		else dx = (dstX - srcX) / Math.abs(dstX - srcX);

		while (srcX != dstX || srcY != dstY) {
		  srcX += dx; srcY += dy;
		  if (board[srcX][srcY] != '-')
		    return true;
		}
		return false;
    }

    function toCoords(chessCoords) {
    	var letter = chessCoords[0];
    	var number = chessCoords[1];

    	var temp = letter.charCodeAt(0);
    	temp -= 97;

    	var numberToCoords = parseInt(rows - number);
    	var letterToCoords = parseInt(temp);

    	var answer = [];
    	answer.push(numberToCoords);
    	answer.push(letterToCoords);

    	return answer;
    }
}

var test = 
[
'3',
'4',
'--R-',
'B--B',
'Q--Q',
'12',
'd1 b3',
'a1 a3',
'c3 b2',
'a1 c1',
'a1 b2',
'a1 c3',
'a2 b3',
'd2 c1',
'b1 b2',
'c3 b1',
'a2 a3',
'd1 d3',
]

solve(test);