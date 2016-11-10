

function solve(args) {
    "use strict";

    let heights = args[0].split(" ")
        .map(Number);

    let sum = 0;

    for (let i = 2; i < heights.length - 2; i += 1) {
        if (isPocket(i, heights)) {
            sum += heights[i];
        }
    }

    console.log(sum);

    // return sum;

    function isPocket(index, heights) {
        return isValley(index, heights) && isPeak(index - 1, heights) && isPeak(index + 1, heights);
    }

    function isValley(index, valley) {
        return valley[index] < valley[index - 1] &&
            valley[index] < valley[index + 1];
    }

    function isPeak(index, valley) {
        return valley[index] > valley[index - 1] &&
            valley[index] > valley[index + 1];
    }
}
==============

function solve(args) {
    let heights = args[0].split(' ').map(Number), peaks = new Array(heights.length), result = 0;
    //your solution here

    //find the peaks
    for (var i = 1; i < heights.length - 1; i++) {
        var current = heights[i], previous = heights[i - 1], next = heights[i + 1];

        if (current > previous && current > next) {
            //we have a peaks
            peaks[i] = true;
        }
    }

    for (var i = 1; i < peaks.length - 1; i++) {
        current = peaks[i], previous = peaks[i - 1], next = peaks[i + 1];
        if (!current && previous && next) {
            result += heights[i];
        }
    }

    console.log(result);
}

// solve(["53 20 1 30 2 40 3 3 10 1"])