//01.Increase array members
function fix(args) {
    var num = +args[0];
    var arr = [];

    for (var i = 0; i < num; i += 1) {
        arr[i] = +(i * 5);
        console.log(arr[i]);
    }
}


function solve(args) {
    var i;

    for (i = 0; i < +args; i += 1) {
        console.log(i * 5);
    }
}
solve(['5']);

//02.Lexicograph compare
function compare(args) {

    var arr = args[0].split('\n'),
        a = String(arr[0]),
        b = String(arr[1]);

    if (a > b) {
        console.log('>');
    }
    else if (a < b) {
        console.log('<');
    }
    else if (a === b) {

        console.log('=');
    }
}

function solve(args) {
    var arr = args[0].split('\n'),
        firstStr = arr[0],
        secondStr = arr[1];

    if (firstStr > secondStr) {
        console.log('>');
    } else if (firstStr < secondStr) {
        console.log('<');
    } else {              // firstStr === secondStr
        console.log('=');
    }
}

solve(['hello\nhalo']);

//03.MaxSequence
function longest(args) {

    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1),

        current = +numbers[0],
        sum = 1,
        best = 0;

    for (var i = 0; i < n; i += 1) {

        if (current === +numbers[i + 1]) {
            sum++;
        }
        else {
            if (sum > best) {
                best = sum;
            }
            sum = 1;
        }
        current = +numbers[i + 1];
    }

    console.log(best);
}


function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1),  // copy the array from the first element 
        currentLength = 1,
        maxSeqLength = 0;

    for (i = 0; i < n - 1; i += 1) {
        if (+numbers[i] === +numbers[i + 1]) {
            currentLength += 1;
        } else {
            if (currentLength > maxSeqLength) {
                maxSeqLength = currentLength;
            }
            currentLength = 1;
        }
    }

    // in case when the last sequence is the maximal sequence of equal elements
    if (currentLength > maxSeqLength) {
        maxSeqLength = currentLength;
    }

    console.log(maxSeqLength);
}

solve(['10\n2\n1\n1\n2\n3\n3\n2\n2\n2\n1']);

//04.Max increasing sequence
function longest(args) {

    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1),

        current = +numbers[0],
        sum = 1,
        best = 0;

    for (var i = 0; i < n; i += 1) {

        if (current < +numbers[i + 1]) {
            sum++;
        }
        else {
            if (sum > best) {
                best = sum;
            }
            sum = 1;
        }
        current = numbers[i + 1];
    }

    console.log(best);
}

function solve(args) {
    var arr = args[0].split('\n'),
        n = +arr[0],
        numbers = arr.slice(1),  // copy the array from the first element 
        currentLength = 1,
        maxIncrSeqLength = 0;

    for (i = 0; i < n - 1; i += 1) {
        if (+numbers[i] < +numbers[i + 1]) {
            currentLength += 1;
        } else {
            if (currentLength > maxIncrSeqLength) {
                maxIncrSeqLength = currentLength;
            }
            currentLength = 1;
        }
    }

    // in case when the last sequence is the maximal sequence of equal elements
    if (currentLength > maxIncrSeqLength) {
        maxIncrSeqLength = currentLength;
    }

    console.log(maxIncrSeqLength);
}

solve(['8\n7\n3\n2\n3\n4\n2\n2\n4']);

//05.Selection sort
function sort(args) {

    var input = args[0].split('\n'),
        n = +input[0],
        numbers = input.slice(1),
        min = numbers[0];

    for (var j = 0; j < n; j += 1) {
        min = numbers[j];
        for (var i = j; i < n; i += 1) {

            if (+numbers[i] < min) {
                min = +numbers[i];
                numbers[i] = +numbers[j];
                numbers[j] = min;
            }
        }
    }
    console.log(numbers.join('\n'));
}

//06.Most frequent numbers
function mostfrequent(args) {

    var input = args[0].split('\n'),
        n = input[0],
        numbers = input.slice(1),
        current = numbers[0],
        counter = 1,
        bestNum = 0;
    bestCounter = 0;

    numbers.sort();

    for (var i = 0; i < n; i += 1) {

        if (current === numbers[i + 1]) {
            counter++;
        }
        else {
            if (counter > +bestCounter) {
                bestCounter = counter;
                bestNum = numbers[i];
            }
            counter = 1;
        }
        current = numbers[i + 1];
    }
    console.log(bestNum + " (" + bestCounter + " times)");
}

function solve(args) {
    var input = args[0].split('\n'),
        n = +input[0],             // numbers.length
        numbers = input.slice(1),  // copy the array from the first element => the numbers
        count = 1,
        bestRepeatCount = 0,
        bestRepeatNumber = 0,
        i;

    // sorting the numbers in ascending order, so the elements with same value will be placed next to each other
    numbers.sort();

    // find the longest sequence of neighbor equal elements
    for (i = 0; i < n - 1; i += 1) {
        if (+numbers[i] === +numbers[i + 1]) {
            count++;
        }
        else {
            if (count > bestRepeatCount) {
                bestRepeatCount = count;
                bestRepeatNumber = +numbers[i];
            }
            count = 1;
        }
    }

    // in case when the last sequence is the maximal sequence of equal elements
    if (count > bestRepeatCount) {
        bestRepeatCount = count;
        bestRepeatNumber = +numbers[n - 1];
    }

    // output
    console.log(bestRepeatNumber + ' (' + bestRepeatCount + ' times)');
}

solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']);

//07.Binary search
function search(args) {

    var arr = (args + '').split('\n').map(Number),
        n = +arr[0],
        x = +arr[arr.length - 1],
        min = 0,
        max = n - 1,
        mid = 0;

    arr.shift();
    arr.pop();
    while (min <= max) {

        mid = ((min + max) / 2) | 0;

        if (x === +arr[mid]) {
            return mid;
        }
        else if (x < +arr[mid]) {
            max = mid - 1;
        }
        else {
            min = mid + 1;
        }
    }
    console.log('-1');
}

//10.Prime numbers
function prime(args) {

    var number = +args[0],
        isPrime;

    for (var i = number; i >= 2; i -= 1) {
        isPrime = true;
        for (var j = 2; j <= Math.sqrt(number); j += 1) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            return i;
        }
    }
    console.log(-1);
}

function solve(args) {
    var i,
        j,
        n = +args,
        primes = new Array(n + 1),
        lengthPrimes = primes.length;

    for (i = 0; i < lengthPrimes; i += 1) {
        primes[i] = true; // array of boolean
    }

    // Find all prime numbers in the range [1...n]
    for (i = 2; i < Math.sqrt(lengthPrimes); i += 1) {
        // Skip those numbers that are not prime
        if (primes[i]) {
            for (j = i * i; j < lengthPrimes; j += i) {
                primes[j] = false;
            }
        }
    }

    for (i = lengthPrimes - 1; i >= 2; i--) {
        if (primes[i]) {
            console.log(i);
            break;
        }
    }

    // Print all prime numbers in the range [1...n]
    // process.stdout.write('2');
    // for (i = 3; i < lengthPrimes; i++) {
    //     // the numbers remaining not marked in the list are all the primes below n
    //     if (primes[i]) {
    //         process.stdout.write(', ' + i);
    //     }
    // }
    // console.log();

}

solve(13);
solve(126);
solve(26);