/** Problem 1. Odd or Even
 Write an expression that checks if given integer is odd or even.
 */

function isOdd(number) {
	var result;	
	if (number % 2) {
		result = 'odd' + ' ' + number;
		return result;
	} else {
		result = 'even' + ' ' + number;
		return result;
	}
}
console.log(isOdd(3));
console.log(isOdd(2));

function solve(args) {
    var num = +args;
    if (num % 2) {
        console.log('odd ' + num);
    } else {
        console.log('even ' + num);
    }
}

solve("3");
solve("2");

/**Problem 2. Divisible by 7 and 5
 Write a boolean expression that checks for given integer if it
 can be divided (without remainder) by 7 and 5 in the same time.
 */

function solve(args) {
      var num = +args;

      if (num % 35) {
            console.log('false ' + num);
      } else {
            console.log('true ' + num);
      }
}
solve("3");
solve("0");

function solve(args) {

    var input = +args[0];

    if (input % 7 === 0 && input % 5 === 0) {
        console.log("true " + input);
    }
    else {
        console.log("false " + input);
    }
}
solve([0]);

/**Problem 3. Rectangle area
 Write an expression that calculates rectangle’s area by given width and height.
 */

/*function CalculateArea(width, height) {
 return console.log(width * height);
 }*/
//CalculateArea(2.5, 3);    // check function
function CalculateArea(args) {
    var a = +args[0],
        b = +args[1];

    var area = a * b,
        perimeter = a * 2 + b * 2;

   return console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));
}

function solve(args) {
    var width = +args[0];
    var height = +args[1];
    var area,
        perimeter;

    area = width * height;
    perimeter = 2 * (width + height);

    console.log(area.toFixed(2), perimeter.toFixed(2));
}

/**Problem 4. Third digit
 Write an expression that checks for given integer if its third digit (right-to-left) is 7.
 */

function CheckThirdDigit(number) {
    var digit = (number / 100) % 10 | 0,
        check = digit == 7; // round with | 0

    if (check) {
        return console.log(check);
    } else {
        return console.log('false ' + digit);
    }
}

function solve(args) {
    var digit = +args[0];
    digit /= 100;
    digit = digit % 10 - 0.5;
    // console.log(digit);
    digit = Math.round(digit);
    // console.log(digit);
    
    if (digit === 7) {
        console.log("true");
    }
    else {
        console.log("false " + digit)
    }
}

solve([5]);
solve([701]);

/**Problem 5. Third bit
 Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
 The bits are counted from right to left, starting from bit #0.
 The result of the expression should be either 1 or 0.
 */

function FindThirdBit(number) {
    var position = 3,
        mask = 1 << position,
        nAndMask = number & mask,
        bit = nAndMask >> position;

    return console.log(bit);
}

function solve(args) {
    var number = +args[0],
        position = 3,
        mask,
        numberAndMask,
        bit;


    mask = 1 << position;
    numberAndMask = number & mask;
    bit = numberAndMask >> position;
    console.log(bit);
}

/**Problem 6. Point in Circle
 Write an expression that
 checks if given point P(x, y) is within a circle K({0,0}, 2). //{0,0} is the centre and 2 is the radius
 */

function solve(args) {
    var x = +args[0];
    var y = +args[1];

    var distance = Math.sqrt(x * x + y * y);

    // first way
    if (distance <= 2) {
        console.log('yes ' + distance.toFixed(2));
    } else {
        console.log('no ' + distance.toFixed(2));
    }

    // other way
    // var output = distance <= 2 ? 'yes ' + distance.toFixed(2) : 'no ' + distance.toFixed(2);
    // console.log(output);
}

solve([-2, 0]);
solve([-1, 2]);

function solve(args) {
    var xCoord = parseFloat(args[0]),
        yCoord = parseFloat(args[1]),
        radius = 2,
        distanceFromCenter,
        distance;

    distance = Math.pow(xCoord, 2) + Math.pow(yCoord, 2);
    radius = Math.pow(radius, 2);
    // console.log(distance, radius);

    distanceFromCenter = Math.sqrt(distance);

    if (radius >= distance) {
        console.log("yes " + distanceFromCenter.toFixed(2));
    }
    else {
        console.log("no " + distanceFromCenter.toFixed(2));
    }
}

solve(["-2", "0"]);

/**Problem 7. Is prime
 Write an expression that checks if given positive integer number n (n ? 100) is prime.
 */
function CheckIsPrime(number) {
    var isPrime = true,
        index;
    if (number < 2) {
        isPrime = false;
    }
    for (i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i == 0) {
            isPrime = false;
        }
    }
    return console.log(isPrime);
}

function solve(args) {
    var number = +args[0],
        index = 2,
        isPrime = true;

    if (number <= 1) {
        console.log("false");
    }
    else if (number <= 3) {
        console.log("true");
    }
    else if (number % 2 === 0 || number % 3 === 0) {
        console.log("false");
    }
    else {
        while (index * index <= number) {
            if (number % index === 0) {
                isPrime = false;
            }

            index++;
        }
        if (isPrime) {
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
}

/**Problem 8. Trapezoid area
 Write an expression that calculates trapezoid's area by given sides a and b and height h.
 */
function CalculateTrapezid(args) {
    var a = +args[0],
        b = +args[1],
        h = +args[2];

    var area = ((a + b) / 2) * h;

    return console.log(area.toFixed(7));
}

function solve(args) {
    //area = ((a + b) / 2) * h)
    var a = +args[0],
        b = +args[1],
        h = +args[2],
        area;

    area = (((a + b) / 2) * h);
    console.log(area.toFixed(7));
}

solve([5, 7, 12]);

/*problem 9. Point in circle outside rectangle*/
function solve(args) {
    //R * R > [ (Xт - X) * (Xt - X) + (Yt - Y) * (Yт - Y) ]
    //if -1 <= Xt <= 5 and -1 <= Yt <= 1
    var xCoord = +args[0],
        yCoord = +args[1],
        xCircleCoord = 1,
        yCircleCoord = 1,
        radius = 1.5,
        doubleRadius = radius * radius,
        insideCircleFormula,
        isInsideCircle,
        isInsideRectangle,
        rectangleMsg,
        circleMsg;

    insideCircleFormula = ((xCoord - xCircleCoord) * (xCoord -xCircleCoord)) + ((yCoord - yCircleCoord) * (yCoord - yCircleCoord));

        if (doubleRadius >= insideCircleFormula) {
            isInsideCircle = true;
        }

        if (-1 <= xCoord && xCoord <=5 && -1 <= yCoord && yCoord <= 1) {
            isInsideRectangle = true;
        }

        if (isInsideRectangle) {
            rectangleMsg = "inside rectangle";
        }
        else {
            rectangleMsg = "outside rectangle";
        }

        if (isInsideCircle) {
            circleMsg = "inside circle";
        }
        else {
            circleMsg = "outside circle";
        }

        console.log(circleMsg + " " + rectangleMsg);
}
solve([2.5, 2]); 
//outside circle outside rectangle
solve([0, 1]); 
//inside circle inside rectangle

function solve(args) {
    var output;
    var x = +args[0];
    var y = +args[1];

    // circle (01{x1,y1}, r)
    var x1 = 1;
    var y1 = 1;
    var r = 1.5;

    // rectangle's parameters
    var top = 1;
    var left = -1;
    var width = 6;
    var height = 2;

    // using Pythagorean theorem
    var insideCircle = (x - x1) * (x - x1) + (y - y1) * (y - y1) <= r * r;

    var insideRectangle = (x >= left) && (x <= (left + width)) && (y >= (top - height)) && (y <= top);

    if (insideCircle && insideRectangle) {
        output = "inside circle inside rectangle";
    } else if (insideCircle && !insideRectangle) {
        output = "inside circle outside rectangle";
    } else if (!insideCircle && insideRectangle) {
        output = "outside circle inside rectangle";
    } else {
        output = "outside circle outside rectangle";
    }
    console.log(output);
}

solve([2.5, 2]);
solve([0, 1]);