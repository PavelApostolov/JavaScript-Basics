function solve(args) {
	'use strict';
	var sizes = args[0].split(' ').map(Number),
		field = args.slice(1).map(function (row) {
			return row.split('').map(Number);
		}),
		rows = sizes[0],
		cols = sizes[1],
		row = rows - 1,
		col = cols - 1,
		used = {},
		jumps,
		sum,
		directions = [{}, {
			row: -2,
			col: 1
		}, {
			row: -1,
			col: 2
		}, {
			row: 1,
			col: 2
		}, {
			row: 2,
			col: 1
		}, {
			row: 2,
			col: -1
		}, {
			row: 1,
			col: -2
		}, {
			row: -1,
			col: -2
		}, {
			row: -2,
			col: -1
		}, ];
	var line = [];
	for (var c = 0; c < cols; c += 1) {
		var value = c.toString();
		while (value.length < 5) {
			value = ' ' + value;
		}
		line.push(value);
	}
	function getValue(row, col) {
		return (1 << row) - col;
	}

	function hash(row, col, cols) {
		return row * cols + col;
	}

	function inRange(value, border) {
		return 0 <= value && value < border;
	}

	jumps = 0;
	sum = 0;
	while (true) {
		if (used[hash(row, col, cols)]) {
			return 'Sadly the horse is doomed in ' + jumps + ' jumps';
		}
		if (!inRange(row, rows) || !inRange(col, cols)) {
			return 'Go go Horsy! Collected ' + sum + ' weeds';
		}

		used[hash(row, col, cols)] = true;

		jumps++;
		sum += getValue(row, col);

		var dirIndex = field[row][col],
			dir = directions[dirIndex];

		row += dir.row;
		col += dir.col;
	}
}
----------

function solve(params) {
	var sizes = params[0].split(' ');
	
	var rows = parseInt(sizes[0]), cols = parseInt(sizes[1]);
	
	var field = params.slice(1, params.length);
	
	var r = rows - 1, c = cols - 1;
	
	var dir = {
		1: [-2, 1],
		2: [-1, 2],
		3: [1, 2],
		4: [2, 1],
		5: [2, -1],
		6: [1, -2],
		7: [-1, -2],
		8: [-2, -1]
	};
	
	var sum = 0, cells = 0;
	var store;
	var used = [];
	while (r >= 0 && r < rows && c >= 0 && c < cols) {
		sum+= (1 << r) - c;
		used[r * cols + c] = false;
		store = r;
		r+=dir[field[r][c]][0];
		c+=dir[field[store][c]][1];
		cells+=1;
		if(used[r * cols + c] === false) {
			console.log("Sadly the horse is doomed in " + cells + " jumps");
			return;
		}
		
	}
	
	console.log("Go go Horsy! Collected " + sum + " weeds");
}

var args = [
  '3 5',
  '54361',
  '43326',
  '52188',
];

----------

function solve(args) {
 
    var matrixSize = args[0].split(' ').map(Number);
 
    function inRange(val, range) {
        return val >= 0 && val < range;
    }
 
    function createMatrix(row, col) {
 
        var matrix = Array(row);
        for (var i = 0; i < matrix.length; i++) {
            matrix[i] = new Array(col);
        }
 
        for (var i = 0; i < matrix.length; i++) {
            var currentFirst = Math.pow(2, i);
            for (var j = 0; j < matrix[i].length; j++) {
 
                matrix[i][j] = currentFirst--;
 
            }
        }
        return matrix;
    }
 
    function createVisited(row, col) {
        var visited = new Array(row);
        for (var i = 0; i < visited.length; i++) {
            visited[i] = new Array(col);
            for (var j = 0; j < visited[i].length; j++) {
                visited[i][j] = false;
            }
        }
        return visited;
    }
 
    var maxRows = matrixSize[0];
    var maxCols = matrixSize[1];
 
    var numsMatrix = createMatrix(maxRows, maxCols);
 
    var directions = {
        '1': { r: -2, c: 1 },
        '2': { r: -1, c: 2 },
        '3': { r: 1, c: 2 },
        '4': { r: 2, c: 1 },
        '5': { r: 2, c: -1 },
        '6': { r: 1, c: -2 },
        '7': { r: -1, c: -2 },
        '8': { r: -2, c: -1 }
    }
 
    var used = createVisited(maxRows, maxCols);
    var lab = args.slice(1);
    var count = 0;
    var sum = 0;
    var pos = {
        r: maxRows - 1,
        c: maxCols - 1
    };
 
    while (1) {
       
        if (!inRange(pos.r, maxRows) || !inRange(pos.c, maxCols)) {
            return "Go go Horsy! Collected "+sum+" weeds";
        }
        if (used[pos.r][pos.c]) {
            return "Sadly the horse is doomed in "+count+" jumps";
        }
 
        used[pos.r][pos.c] = true;
        sum += numsMatrix[pos.r][pos.c];
        count++;
 
        var nextMove = lab[pos.r].charAt(pos.c);
 
 
        pos.r += directions[nextMove].r;
        pos.c += directions[nextMove].c;
    }
 
}
