function solve(args) {
    var heights = args[0].split(" ").map(Number);
    
    var peaks = [0];
    for (let i = 1; i < heights.length - 1; i+=1) {
        if (isGreaterThanNeighbours(i, heights)) {
            peaks.push(i);
        }       
    }
    peaks.push(heights.length - 1);

    let bestCount = -1;
    for (let i = 0; i < peaks.length; i+=1) {
        bestCount = Math.max(bestCount, peaks[i] - peaks [i - 1]);        
    }
    console.log(bestCount);

    function isGreaterThanNeighbours(index, arr) {
        return arr[index - 1] < arr[index] &&
        arr[index] > arr[index + 1];
    }
}

/*function solve(args){
    let heights = args[0].split(" ").map(Number);
    let bestCount = -1;
    let count = 0;

    let current;
    let isDescending = true;

    current = heights[0];
    heights.push(-1);
    for (var i = 0; index < heights.length; i+=1) {
        let height = heights[i];
        
        if (isDescending) {
            //descent finished
            if (current < height) {
                isDescending = false; //!isDescending
            }
        } else {
            //ascending
            if (current > height) {
                bestCount = Math.max(bestCount, count);
                count = 0; //reset count
                isDescending = !isDescending;
            }
        }
        current = height;
        count +=1;
    }
    console.log(bestcount);
}*/