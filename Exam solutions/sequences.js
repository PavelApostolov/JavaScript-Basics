function solve(input) {
    var result = 1;

    input = input.map(Number);

    for (var i = 2; i < input.length; i++) {
        if (input[i - 1] > input[i]) {
            result++;
        }     
    }

    console.log(result);
}