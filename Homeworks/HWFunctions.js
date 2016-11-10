//Appearance count
function solve(args) {
    var n = +args[0],
    arr = args[1].split(' '),
    number = +args[2];

    console.log(AppearanceCount(number, arr));

    function AppearanceCount(number, array) {
        var count = 0,
        i;

        for(i = 0; i < n; i += 1) {
            if(+array[i] === number){
                count += 1;
            }
        }

        return count;
    }
}

----
function appearanceCount(args) {
  var array = [8 ,6, 21, 6, -7856, 73, 73, -56];
        var number = 3;
        console.log(count(array, number));
        function count(array, number) {
            var counter = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] == number) {
                    counter++;
                }
            }
            return counter;
        }
}

//English digit
function solve(args) {
    var number = +args[0];

    console.log(GetEnglishWord(number));

    function GetEnglishWord(number) {
        var digit = +number % 10;

        switch(digit){
            case 1: return "one"; 
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            case 0: return "zero";
        }
    }
}

solve([42]);

//First larger than neighbours
function solve(args) {
    var n = +args[0],
    arr = args[1].split(' ');

    console.log(FirstLarger(arr));

    function FirstLarger(array) {
        var i;
        for(i = 0; i < array.length - 1; i += 1) {
            if(+array[i] > +array[i + 1]){
                return i;
            }
        }
        return -1;
    }
}

solve(['6\n-26 -25 -28 31 2 27]']);

-----
function firstLargerThanNeighbours(args) {
    var input = args[0].split('\n'),
        arrayLength = input[0],
        array = input[1].split(' ').map(Number);

    return indexFinder(array, arrayLength);

    function indexFinder(sequence, arrLength) {
        var index = 0,
            i;
        for (i = 1; i < arrLength - 1; i++) {
            if (sequence[i] > sequence[i - 1] && sequence[i] > sequence[i + 1]) {
                index = i;
                break;
            } else {
                index = -1;
            }
        }

        return index;
    }
}

// test
console.log(firstLargerThanNeighbours(['6\n-26 -25 -28 31 2 27']));

//Get largest number
function solve(args) {
    var input = args[0].split(' ');

    console.log(GetMaxOfThree(+input[0], +input[1], +input[2]));

    function GetMax(a, b) {
        return a > b ? a : b;
    }

    function GetMaxOfThree(a, b, c){
        return a > b ? GetMax(a, c) : GetMax(b, c);
    }
}

//larger than neighours
function solve(args) {
    var n = +args[0],
    arr = args[1].split(' '),
    k,
    count = 0;

    for(k = 0; k < n - 1; k += 1) {
        if(LargerThanNeighbours(k, arr)){
            count += 1;
        }
    }

    console.log(count);
    function LargerThanNeighbours(i, array) {
        if(+i === 0 || +i >= array.lenght - 1){
            return false;
        }

        if(+array[i] > +array[i - 1] && +array[i] > +array[i + 1]){
            return true;
        } else{
            return false;
        }
    }
}

----
function largerThanNeighbours(args) {
    var input = args[0].split('\n'),
        arrayLength = input[0],
        array = input[1].split(' ').map(Number);

    return neighboursChecker(array, arrayLength);

    function neighboursChecker(sequence, arrLength) {
        var counter = 0,
            i;
        for (i = 1; i < arrLength - 1; i++) {
            if (sequence[i - 1] < sequence[i] && sequence[i + 1] < sequence[i]) {
                counter += 1;
            }
        }

        return counter;
    }
}

// test
console.log(largerThanNeighbours(['6\n-26 -25 -28 31 2 27']));


//say hello
function SayHello(name) {
    console.log('Hello, ' + name + '!');
}

//sorting arrays
function solve(args) {
    var n = +args[0];
  	arr = args[1].split(' ');

    console.log(SortArray(arr).join(' '));

    function SortArray(array) {
        array = SortArrayByDescending(array);
        return array.reverse();
    }

    function SortArrayByDescending(array) {
        var i,
            max,
            index,
            keeper;

        for (i = 0; i < array.length; i += 1) {

            max = GetMax(i, array);
            index = array.indexOf(max, i);

            keeper = array[i];
            array[i] = max;

            array[index] = keeper;
        }
        
        return array;
    }


    function GetMax(k, array) {
        var i,
            max = -Number.MAX_VALUE;

        for (i = k; i < array.length; i += 1) {
            if (+array[i] > max) {
                max = array[i];
            }
        }

        return max;
    }
}
solve(['6\n3 4 1 5 2 6']);

----
function sorting(args){
   function sortingArray(args) {
       arrayLength = +args[0],
       array = args[1].split(' ').map(Number);

    var sortedArray = array.sort(function (a, b) {
        return a - b
    });

    return sortedArray.join(' ');
}