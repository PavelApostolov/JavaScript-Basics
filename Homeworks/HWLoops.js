//01.Numbers
function solve(args) {
    var num = +args[0],
        i;

    process.stdout.write('1');

    for (i = 2; i <= num; i += 1) {
        process.stdout.write(' ' + i);
    }

    console.log();
}

solve([5]);
solve([1]);


function printNumbers(endNumber) {
	var i, 
	result = '';

	for (i = 1; i <= endNumber; i += 1) {
		result += i + ' ';
	}
	return result.trim();	
}

console.log(printNumbers(5));

// Implement a javascript function that accepts an array with a single element -
// positive integer N as string and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

//02.Minmaxsum
function solve(args) {
    var min = +args[0],
        max = +args[0],
        sum = +args[0],
        avg = 0,
        len = args.length;

    for (var i = 1; i < len; i += 1) {
        min = Math.min(min, +args[i]);
        max = Math.max(max, +args[i]);
        sum += +args[i];
    }

    avg = sum / len;
    
    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
}

solve([2, 5, 1]);
solve([2, -1, 4]);

//03.Matrix of numbers
function printMatrix(args) {
	var i, j,
		result = '';
	for (i = 0; i < +args[0]; i += 1) {
		for (j = i + 1; j <= +args[0] + i; j += 1) {
			result += j + ' ';
		}
		result += '\n';
	}

	return result;
}

console.log(printMatrix(['2']));
console.log(printMatrix(['3']));
console.log(printMatrix(['4']));

function solve(params) {
    var num = +params[0];
    var row = '';

    for (var i = 1; i <= num; i++) {
        for (var j = i; j <= num + (i-1); j++) {
            row+=j+' ';
        }
        console.log(row);
        row ='';
    }

}

//04.Lexicographically smallest
function domObjectMinMaxProperty(domObject) {
    var minProperty = domObject,
        maxProperty = domObject;

    for (var key in domObject) {
        if (key < minProperty) {
            minProperty = key;
        }

        if (key > maxProperty) {
            maxProperty = key;
        }

    }
    
    console.log(minProperty);
    console.log(maxProperty);
}

//05.Hex to dec
function toDecimal(args) {
	var i, digitAsString = '', decNum = 0;	
	var hexNum = args[0];
	for (i = 0, len = hexNum.length; i < len; i += 1) {
		digitAsString = hexNum[i];
		
		switch(digitAsString){
			case 'A': digitAsString = '10'; break;
			case 'B': digitAsString = '11'; break;
			case 'C': digitAsString = '12'; break;
			case 'D': digitAsString = '13'; break;
			case 'E': digitAsString = '14'; break;
			case 'F': digitAsString = '15'; break;			
		}
		decNum = +digitAsString + decNum * 16;		
	}
	return decNum;
}

console.log(toDecimal(['FE']));
console.log(toDecimal(['1AE3']));
console.log(toDecimal(['4ED528CBB4']));

// js goodies
var decimalNum = parseInt('4ED528CBB4', 16);
console.log(decimalNum);
var decimalNumber = 254;
var hexNumber = decimalNumber.toString(16).toUpperCase();
console.log(hexNumber);

function solve(args) {
    var n = args[0],
        length = n.length,
        result=0;


    for (var i = 0; i < length; i++) {
        result += Math.pow(16, length - i-1) * RetrunNumber(n[i]);
    }

    console.log(result);

    function RetrunNumber(n) {
        switch (n) {
            case '0': return 0;
            case '1': return 1;
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
            case 'A': return 10;
            case 'B': return 11;
            case 'C': return 12;
            case 'D': return 13;
            case 'E': return 14;
            case 'F': return 15;
        }
    };
}