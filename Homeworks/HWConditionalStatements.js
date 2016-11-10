//01Exchange if greater
function solve(args) {
    var numberA = +args[0],
        numberB = +args[1];

    if (numberA > numberB) {
        numberB += numberA;
        numberA = numberB - numberA;
        numberB -= numberA;

        // other way
        // var temp = numberA;
        // numberA = numberB;
        // numberB = temp;
    }

    console.log(numberA + " " + numberB);
}

solve([5, 2]);
solve([3, 4]);

function solve(args) {
    var a = +args[0];
        b = +args[1];
    if(a>b) {
        console.log(b + " " + a);
    }
    else {
        console.log(a + " " + b);
    }
}

var str = ["100", "63"];
solve(str);

//02.Multiplication sign
function solve(args) {
    var negativeNumbersCount = 0,
        number;

    for (var i = 0; i < 3; i++) {
        number = +args[i];

        if (number === 0) {
            console.log(0);
            return;
        } else {
            if (number < 0) {
                negativeNumbersCount++;
            }
        }
    }

    if (negativeNumbersCount % 2 === 0) {
        //If the negative multiples are even number, the product is positive.
        console.log("+");
    } else {
        //If the count of the negative numbers is odd, the product is negative.
        console.log("-");
    }

}
solve([5, 2, 2]);
solve([-2, -2, 1]);

//03.Biggest of 3
function solve(args) {
    var numA = +args[0],
        numB = +args[1],
        numC = +args[2],
        biggestNum = numA;

    if (numB > biggestNum) {
        biggestNum = numB;
    }

    if (numC > biggestNum) {
        biggestNum = numC;
    }

    // other way
    //biggestNum = Math.max(Math.max(numA, numB), numC);

    console.log(biggestNum);
}

solve([5, 2, 2]);
solve([-2, -2, 1]);

//04.Sort 3 numbers
function solve(args) {
    var numA = +args[0],
        numB = +args[1],
        numc = +args[2];

    if (numA > numB && numA > numc) {
        if (numB > numc) {
            console.log(numA + ' ' + numB + ' ' + numc);
        } else {
            console.log(numA + ' ' + numc + ' ' + numB);
        }
    } else if (numB > numA && numB > numc) {
        if (numA > numc) {
            console.log(numB + ' ' + numA + ' ' + numc);
        } else {
            console.log(numB + ' ' + numc + ' ' + numA);
        }
    } else {
        if (numA > numB) {
            console.log(numc + ' ' + numA + ' ' + numB);
        } else {
            console.log(numc + ' ' + numB + ' ' + numA);
        }
    }
}

solve([5, 1, 2]);
solve([-2, -2, 1]);

//05.Digit as word
function solve(args) {
    var number = +args[0];

    switch (number) {
        case 0: console.log('zero'); break;
        case 1: console.log('one'); break;
        case 2: console.log('two'); break;
        case 3: console.log('three'); break;
        case 4: console.log('four'); break;
        case 5: console.log('five'); break;
        case 6: console.log('six'); break;
        case 7: console.log('seven'); break;
        case 8: console.log('eight'); break;
        case 9: console.log('nine'); break;
        default: console.log('not a digit'); break;
    }
}

solve([2]);

//06.Quadratic equation
function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        D = b * b - 4 * a * c, // Discriminant
        x1,
        x2;

    if (D < 0) {
        console.log('no real roots');
    } else {
        if (D === 0) {
            x1 = x2 = -b / (2 * a);
            console.log('x1=x2=' + x1.toFixed(2));
        } else {
            x1 = (-b - Math.sqrt(D)) / (2 * a);
            x2 = (-b + Math.sqrt(D)) / (2 * a);

            if (x1 < x2) {
                console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
            } else {
                console.log('x1=' + x2.toFixed(2) + '; x2=' + x1.toFixed(2));
            }
        }
    }

}

solve(['2', '5', '-3']);
solve(['-1', '3', '0']);

//07.Biggest of 5
function solve(args) {
    var biggestNum = +args[0],
        i;

    for (i = 1; i < 5; i++) {
        if (+args[i] > biggestNum) {
            biggestNum = args[i];
        }
    }

    console.log(biggestNum);
}

solve([5, 2, 2, 4, 1]);
solve([-2, -22, 1, 0, 0]);

function solve(args) {
    var a = +args[0];
        b = +args[1];
        c = +args[2];
        d = +args[3];
        e = +args[4];
        
   return Math.max(a, Math.max(b, Math.max(c, Math.max(d, e))));
}

var str = ['8', '2', '1', "15", "35"];
solve(str);

//08.Numbers as words
function solve(args) {
    var number = +args[0],
        numAsString = args[0];

    if (number >= 100 && number <= 999) {
        switch (numAsString[0]) {
            case '1': process.stdout.write('One hundred'); break;
            case '2': process.stdout.write('Two hundred'); break;
            case '3': process.stdout.write('Three hundred'); break;
            case '4': process.stdout.write('Four hundred'); break;
            case '5': process.stdout.write('Five hundred'); break;
            case '6': process.stdout.write('Six hundred'); break;
            case '7': process.stdout.write('Seven hundred'); break;
            case '8': process.stdout.write('Eight hundred'); break;
            case '9': process.stdout.write('Nine hundred'); break;
        }

        if (numAsString[1] === '0') {
            switch (numAsString[2]) {
                case '0': console.log(); break;
                case '1': console.log(' and one'); break;
                case '2': console.log(' and two'); break;
                case '3': console.log(' and three'); break;
                case '4': console.log(' and four'); break;
                case '5': console.log(' and five'); break;
                case '6': console.log(' and six'); break;
                case '7': console.log(' and seven'); break;
                case '8': console.log(' and eight'); break;
                case '9': console.log(' and nine'); break;
            }
        } else if (numAsString[1] === '1') {
            switch (numAsString[2]) {
                case '0': console.log(' and ten'); break;
                case '1': console.log(' and eleven'); break;
                case '2': console.log(' and twelve'); break;
                case '3': console.log(' and thirteen'); break;
                case '4': console.log(' and fourteen'); break;
                case '5': console.log(' and fifteen'); break;
                case '6': console.log(' and sixteen'); break;
                case '7': console.log(' and seventeen'); break;
                case '8': console.log(' and eighteen'); break;
                case '9': console.log(' and nineteen'); break;
            }
        } else if (numAsString[1] !== '1') {
            switch (numAsString[1]) {
                case '2': process.stdout.write(' and twenty'); break;
                case '3': process.stdout.write(' and thirty'); break;
                case '4': process.stdout.write(' and fourty'); break;
                case '5': process.stdout.write(' and fifty'); break;
                case '6': process.stdout.write(' and sixty'); break;
                case '7': process.stdout.write(' and seventy'); break;
                case '8': process.stdout.write(' and eighty'); break;
                case '9': process.stdout.write(' and ninety'); break;
            }

            if (numAsString[2] !== '0') {
                switch (numAsString[2]) {
                    case '1': console.log(' one'); break;
                    case '2': console.log(' two'); break;
                    case '3': console.log(' three'); break;
                    case '4': console.log(' four'); break;
                    case '5': console.log(' five'); break;
                    case '6': console.log(' six'); break;
                    case '7': console.log(' seven'); break;
                    case '8': console.log(' eight'); break;
                    case '9': console.log(' nine'); break;
                }
            } else {
                console.log(); // for new line
                //process.stdout.write('\n');
            }
        }
    }

    if (number >= 20 && number < 100) {
        switch (numAsString[0]) {
            case '2': process.stdout.write('Twenty'); break;
            case '3': process.stdout.write('Thirty'); break;
            case '4': process.stdout.write('Forty'); break; // Fourty
            case '5': process.stdout.write('Fifty'); break;
            case '6': process.stdout.write('Sixty'); break;
            case '7': process.stdout.write('Seventy'); break;
            case '8': process.stdout.write('Eighty'); break;
            case '9': process.stdout.write('Ninety'); break;
        }

        if (numAsString[1] !== '0') {
            switch (numAsString[1]) {
                case '1': console.log(' one'); break;
                case '2': console.log(' two'); break;
                case '3': console.log(' three'); break;
                case '4': console.log(' four'); break;
                case '5': console.log(' five'); break;
                case '6': console.log(' six'); break;
                case '7': console.log(' seven'); break;
                case '8': console.log(' eight'); break;
                case '9': console.log(' nine'); break;
            }
        } else {
            console.log(); // for new line
            //process.stdout.write('\n');
        }
    }

    if (number >= 10 && number <= 19) {
        switch (numAsString[1]) {
            case '0': console.log('Ten'); break;
            case '1': console.log('Eleven'); break;
            case '2': console.log('Twelve'); break;
            case '3': console.log('Thirteen'); break;
            case '4': console.log('Tourteen'); break;
            case '5': console.log('Fifteen'); break;
            case '6': console.log('Sixteen'); break;
            case '7': console.log('Seventeen'); break;
            case '8': console.log('Eighteen'); break;
            case '9': console.log('Nineteen'); break;
        }
    }

    if (number >= 1 && number <= 9) {
        switch (numAsString[0]) {
            case '1': console.log('One'); break;
            case '2': console.log('Two'); break;
            case '3': console.log('Three'); break;
            case '4': console.log('Four'); break;
            case '5': console.log('Five'); break;
            case '6': console.log('Six'); break;
            case '7': console.log('Seven'); break;
            case '8': console.log('Eight'); break;
            case '9': console.log('Nine'); break;
        }
    } else if (numAsString[0] === '0') {
        console.log('Zero');
    }
}

solve(['0']);
solve(['9']);