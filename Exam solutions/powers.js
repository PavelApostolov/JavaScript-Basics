function solve(args) {
  let line = args[0].split(' ')
  let n = +line[0];
  let k = +line[1];

  let array = args[1].split(' ').map(Number);

  function transform(num, n1, n2){
    if(num === 0) {
      return Math.abs(n1 - n2);
    }
    else if (num === 1) {
      return n1 + n2;
    }
    else if (num % 2 === 0) {
      return Math.max(n1, n2);
    }
    else {
      return Math.min(n1, n2);
    }
  }
    array[-1] = array[n-1];
    array[n] = array[0];

    for (let i = 0; i < k; i+=1) {
      let transformedArray = [];

      for (let j = 0; j < n; j+=1) {
        transformedArray[j] = transform(array[j], array[j-1], array[j+1]);

      }
      array = transformedArray.slice();

      array[-1] = array[n-1];
      array[n] = array[0];
    }
    array[-1] = 0;
    array[n] = 0;
    let sum = array.reduce((a, b) => a + b);
    console.log(sum);

  /*for (let i = 0; i < k; i+=1) {
    let transformedArray = [];

    if (array[0] === 0) {
      transformedArray[0] = Math.abs(array[1] - array[n-1]);
    }
    else if (array[0] === 1) {
      transformedArray[0] = array[1] + array[n-1];
    }
    else if (array[0] % 2 === 0) {
      transformedArray[0] = Math.max(array[1], array[n-1]);
    }
    else {
      transformedArray[0] = Math.min(array[1], array[n-1]);
    }
  }
}*/


-----------

function solve(params) {
    var nk = params[0].split(' ').map(Number),
         s = params[1].split(' ').map(Number),
             result = 0;

    var n = nk[0];
    var k = nk[1];

    for (i = 0; i < k; i++) {
    	var tr = [];
    	for (j = 0; j < n; j++) {
     		var nbs = getNeighbours(s, j);

    		if(s[j] == 0) {
    			tr[j] = Math.abs( (nbs[0] - nbs[1]) );
    		}
    		else if (s[j] == 1) {
    			tr[j] = Math.abs( (nbs[0] + nbs[1]) );
    		}
    		else if (s[j] % 2 == 0) {
    			tr[j] = Math.max(nbs[0], nbs[1]);
    		}
    		else {
    			tr[j] = Math.min(nbs[0], nbs[1]);
    		}
    	}
    	s = tr;
    }

    for (k = 0; k < s.length; k++) result += s[k];

    function getNeighbours(s, index) {
    	var answer = [];
    	if (index == 0) {
    		answer.push(s[1]);
    		answer.push(s[s.length - 1]);
		} else if (index == s.length - 1) {
			answer.push(s[s.length - 2]);
			answer.push(s[0]);
		} else {
			answer.push(s[index-1]);
			answer.push(s[index+1]);
		}
		return answer;
	}
    console.log(result);
}
