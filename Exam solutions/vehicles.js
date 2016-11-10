function solve(args){
  var s = +args[0];
  i,
  j,
  k,
  count = 0;
  for (var i = 0; i <= s/10; i+=1) {
    for (var j = 0; j <= s/4; j+=1) {
      for (var k = 0; k <= s/3; k+=1) {
        if ((i * 10 + j * 4 + k * 3) === s) {
          count +=1;
        }
      }
    }
  }
  console.log(count);
  //return count;
}

console.log(solve(['7']));
console.log(solve(['10']));
console.log(solve(['40']));

/*function solve(params) {
    var wheelCount = parseInt(params[0]);
    var combinationsFound = 0;
    var currentSolution;
    for (var trucks = 0; trucks <= wheelCount / 10; trucks++) {
        for (var cars = 0; cars <= wheelCount / 4; cars++) {
            for (var trikes = 0; trikes <= wheelCount / 3; trikes++) {
                currentSolution = trucks * 10 + cars * 4 + trikes * 3;
                if (currentSolution === wheelCount) {
                    combinationsFound++;
                } else if (currentSolution > wheelCount) {
                    break;
                }
            }
        }
    }
    return combinationsFound;
}
*/
