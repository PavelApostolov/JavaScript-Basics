function solve(input) {
    var rowsColsAndJumps = input[0].split(' ').map(Number);
    var startPosition = input[1].split(' ').map(Number);
    
    var rows = rowsColsAndJumps[0];
    var cols = rowsColsAndJumps[1];
    var allJumps = rowsColsAndJumps[2];

    var currentRow = startPosition[0];
    var currentCol = startPosition[1];

    return getAnswer();
    
    function getAnswer(){   
    var field = initField();
    var jumps = readJumps();

    var jumpsIndex = 0;
    var escaped = false; 
    var sumOfNumbers = 0;
    var totalJumps = 0;
    
    while(true){
        if(currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols){
            escaped = true;
            break;
        }
        if(field[currentRow][currentCol] === 'X'){
            escaped = false;
            break;
        }

        sumOfNumbers += field[currentRow][currentCol];
        totalJumps++;

        var currentJump = jumps[jumpsInde++];
        if(jumpsIndex >= jumps.length){
            jumpsIndex = 0;
        }

        field[currentRow][currentCol] = 'X';

        currentRow += currentJump.row;
        currentCol += currentJump.col;
    }
    return escaped ? 'escaped ' + sumOfNumbers : 'caught ' + totalJumps;   
}
    
    function initField() {
        var field = [];
        var counter = 1;
        
        for (var i = 0; i < rows; i++) {
        field[i] = [];
        for (var j = 0; j < cols; j++) {
            field[i][j] = counter++;        
        } 
    }
    return field;    
    }

    function parseNumbers(input){
        return input.split(' ').map(Number);
    }
    
    function readJumps(){
        var jumps = [];
        for (var i = 2; i < 2 + allJumps; i++) {
            var parsedJump = parsedNumbers(input[i]);
            
            var currentJump = {
                row: parsedJump[0],
                col: parsedJump[1]
            };
            jumps.push(currentJump)
        }
        return jumps;
    }
}

------------
function solve(params) {
	var sizes = params[0].split(' ');
	
	var n = sizes[0] * 1, m = sizes[1] * 1, j = sizes[2] * 1;
	
	var start = params[1].split(' ');
	
	var r = start[0] * 1, c = start[1] * 1;
	var i = 2, sum = 0, cells = 1;
	
	var field = [];
	
	for (var j = 2; j < params.length; j+=1) {
		params[j] = params[j].split(' ');
		
	}
	
	while(r >= 0 && r < n && c >= 0 && c < m) {
		sum+= r * m + c + 1;
		if(field[r] === undefined) {
			field[r] = [];
		}
		field[r][c] = true;
		r+=params[i][0] * 1;
		c+=params[i][1] * 1;
		
		if(field[r] !== undefined) {
			if(field[r][c] == true) {
				console.log('caught ' + cells);
				return;
			}
			
			
		}
		
		if(i === params.length - 1){
			i = 2;
		} else {
			i += 1;
		}
		cells+=1;
	}
	
	console.log('escaped ' + sum);
	
}

var test = [
"6 7 3",
"0 0",
"2 2",
"-2 2",
"3 -1"
];