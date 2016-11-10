function solve(args) {
    var sizes = args[0].split(' '),
    rows = parseInt(sizes[0]),
    cols = parseInt(sizes[1]),
    
    startPosition = args[1].split(' '),
    row = parseInt(startPosition[0]),
    col = parseInt(startPosition[1]),
    
    lab = args.slice(2);
    visited = { },
    sum,
    count,
    directions = {
        u: {
            row: -1,
            col: 0
        },
        r: {
            row: 0,
            col: +1
        },
        d: {
            row: +1,
            col: 0
        },
        l: {
            row:0,
            col: -1
        }
    };

    function getValueAt(row, col, cols) {
        return row * cols + col + 1;
    }

    function inRange(value, border) {
        return 0 <=value && value < border;
    }

    sum = 0;
    count = 0;
    
    while(true) {
        //check if outside
        if(!inRange(row, rows) || inRange(col, cols)){
            return 'out ' + sum;
        }
        
        //check if on visited cell;

        var cellValue = getValueAt(row, col, cols);
        sum += cellValue;
        count++;
        visited[cellValue] = true;

        var dir = lab[row][col];
        row += directions[dir].row;
        col += directions[dir].col;

        
    }    
}

---------

function solve(params) {

	var funcs = [], 
	len = params.length;

	function evaluate(str) {

		var nested,
		sum = 0,
		evaled;

		if (str.length === 2 && typeof (str) !== typeof ('')) {
			nested = str[1];
		}

		if (typeof (str) !== typeof ('')) {
			str = str[0].split(' ');
		} else {
			str = str.split(' ');
		}

		switch (str[0]) {
			case 'def':
				if (nested !== undefined) {
					evaled = evaluate(nested);
					if (evaled === 'Division by 0! At line:') {
						return evaled;
					}
					funcs[str[1]] = evaled;
				} else {

					if (isNaN(str[2] * 1)) {
						funcs[str[1]] = funcs[str[2]];
					} else {
						funcs[str[1]] = str[2] * 1;
					}

				}
				break;
			case '+':
				for (var i = 1; i < str.length; i += 1) {
					if (isNaN(str[i] * 1)) {
						sum += funcs[str[i]];
					} else {
						sum += str[i] * 1;
					}

				}
				return sum;
			case '-':
				sum = isNaN(str[1]) ? funcs[str[1]] : 1 * str[1];
				for (var i = 2; i < str.length; i += 1) {
					if (isNaN(str[i] * 1)) {
						sum -= funcs[str[i]];
					} else {
						sum -= str[i] * 1;
					}

				}
				return sum;
				break;
			case '/':
				sum = isNaN(str[1]) ? funcs[str[1]] : 1 * str[1];
				for (var i = 2; i < str.length; i += 1) {

					if (isNaN(str[i] * 1)) {
						if (funcs[str[i]] === 0) {
							return 'Division by 0! At line:';
						}
						sum /= funcs[str[i]];
					} else {
						sum /= str[i] * 1;
						if (str[i] * 1 === 0) {
							return 'Division by 0! At line:';
						}
					}
					sum = (sum | 0);
				}
				return sum;
				break;
			case '*':
				sum = isNaN(str[1]) ? funcs[str[1]] : 1 * str[1];

				for (var i = 2; i < str.length; i += 1) {

					if (isNaN(str[i] * 1)) {
						sum *= funcs[str[i]];
					} else {
						sum *= str[i] * 1;
					}

				}
				return (sum);
				break;

			default:
				break;
		}
	}

	for (var i = 0; i < len; i += 1) {
		// replace all brackets with one string so we can split by it, then reduce all whitespaces to 1 at most
		params[i] = params[i].replace(/\(|\)/g, ' | ').replace(/\s\s+/g, ' ');
		params[i] = params[i].split(' | ');
		// get rid of the first element
		params[i] = params[i].slice(1, params[i].length - 1);
		console.log(params[i]);
		var evaluatedExpr = evaluate(params[i]);
		if (evaluatedExpr === 'Division by 0! At line:') {
			console.log('Division by zero! At Line:' + (i + 1));
			break;
		}

		if (i === len - 1) {
			console.log(evaluatedExpr);
		}



	}

}