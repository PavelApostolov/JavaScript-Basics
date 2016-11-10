function solve(args) {
    var n = args[0] * 1,
        k = args[1] * 1,
        arr = args[2].split(' ').map(Number),
        result = [],
        i;

    for (i = 0; i <= n - k; i += 1) {
        result.push(Math.min.apply(null, arr.slice(i, i + k)) +
            Math.max.apply(null, arr.slice(i, i + k)));
    }
    console.log(result.join(','));
}

------
function solve(args) {
    var n = +args[0],
        k = +args[1];
    arr = args[2].split(' ').map(Number);

    var i,
        result = [];

    for (i = 0; i < n - k + 1; i++) {
        result.push(calcMinMaxSum(arr.slice(i, i + k)));
    }
    console.log(result.join(','));

    function calcMinMaxSum(part) {
        var min = part[0],
            max = part[0],
            i, len;
        for (i = 1, len = part.length; i < len; i += 1) {
            min = Math.min(min, part[i]);
            max = Math.max(max, part[i]);
        }
        return min + max;
    }
}

-------

function solve(params) {
    var N = parseInt(params[0]),
        K = parseInt(params[1]),
        numbersAsString = params[2].split(" ");

    var tempArray = [],
        tempMin = 0,
        tempMax = 0,
        minAndMaxSum = 0,
        result = "";
    for (var i = 0; i < (N - K + 1); i++) {
        for (var j = i; j < (K + i); j++) {
            tempArray.push(numbersAsString[j]);
        }
        tempMin = parseInt(findMin(tempArray));
        tempMax = parseInt(findMax(tempArray));
        minAndMaxSum = tempMin + tempMax;
        tempArray = [];
        if (i != (N - K)) {
            result += minAndMaxSum + ",";
        }
        else {
            result += minAndMaxSum.toString();
        }

    }

    function findMin(array) {
        var i = Number.POSITIVE_INFINITY;
        for (var j = 0; j < array.length; j++) {
            if (parseInt(array[j]) < i) {
                i = parseInt(array[j]);
            }
        }
        return i;
    }

    function findMax(array) {
        var i = Number.NEGATIVE_INFINITY;
        for (var j = 0; j < array.length; j++) {
            if (parseInt(array[j]) > i) {
                i = parseInt(array[j]);
            }
        }
        return i;
    }

    console.log(result);
}
test = ['4', '2',
    '1 3 1 8'];
solve(test);
