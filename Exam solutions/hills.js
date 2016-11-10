    function solve(params) {
    var land = params[0].split(' ').map(Number),
        tempBestCount = 1,
        bestCount = 1,
        len = land.length,
        isOnTop = false, //if is not on top - count the rocks
        i;

    for (i = 1; i < len-1; i += 1) {

        if(land[i - 1] < land[i] && land[i] > land[i+1]){ //onTop here
            i+=1;                   //move back to the next stone
            tempBestCount=1;        //it's a new beginning so temp gets back to 1
            isOnTop = false;        //we are not on top anymore
        }
        if(!isOnTop){
            tempBestCount+=1;
        }

        if(tempBestCount > bestCount){
            bestCount = tempBestCount;
        }

    }
     console.log(bestCount);

}

--------

//Използвам в логиката си  индексите на елементите в масива, които са ми върхове.
//За да получа върховете правя проста проверка дали следващия елемент е по-малък от настоящия и дали предодния също е по-малък от настоящия.
//Така съм сигурен ,че елемента на масива е връх.Целта ми е да взема всички върхове и на всеки втори връх да изваждам индекса му,с индекса на предходния връх.
//Тази логика дава така желаното като имаме три елемента  между два върха да изпише 4 а не 3.
//След като по условие е казано,че началото на масива е връх и края също,за да не правя допълнителна проверка,просто ги избягвам като слагам 0 в началото и края на масива.
//Като начало си правя променлива index =0 защото и без това 0-я индекс е връх,та все едно маркирам първия връх.
//След това влизам в цикъла и проверявам дали настоящия елемент е връх-ако да,то вадя индекса му от индекса на предходния връх,като запаметявам на всяка врътка ако съм намерил връх в променливата tempIndex.
//Когато съм намерил връх,смятам колко е разликата между индексите на върховете и го записвам в променливата countRock.
//Проверявам дали bestCount ми е по-малка от countRock и ако да,записвам като най-добра стойност в нея настоящия брой камъни(Линий).
//Отне ми сигурно половин час да разбера ,че трябва да броя линийте,а не кръгчетата.



function solve(par) {
    args = par[0].split(' ').map(Number);
    args.push(0);     // добавям нула в края на масива
    args.unshift(0);            //тук добавям нула най-отпред в масива
    var countRock = 0;           //променлива да записвам камъните(броя линий)в долината
    var bestCount = 0;                 //променлива за запазване на най-много камъни
    var index = 0;                       //променлива за индекс
    tempIndex = 0;                        //променлива,която пази индекса на предходния връх.
    for (var i = 0; i < args.length; i++) {
        if (args[i] > args[i + 1] && args[i] > args[i - 1]) {//проверка дали елемента е връх
            index = i;                                           // ако е връх настоящия индекс-и става индекс
            countRock = index - tempIndex;      //намирам броя камъни,
            if (bestCount < countRock) {        //проверка дали най-големия запаметен брой камъни е по-малък от настоящия
                bestCount = countRock;
            }
        }
        tempIndex = index;                      //запазвам индекса на настоящия връх,за да мога после да го използвам
    }
    console.log(bestCount);
}

-------

function solve(params) {
    var s = params[0].split(' ').map(Number),
        result = 0,
        counter = 1;

    if (s.length > 3) {
        for (var i = 1; i < s.length - 1; i++) {
            while (s[i - 1] > s[i]) {
                counter++;
                i++;
            }
            while (s[i] < s[i + 1]) {
                counter++;
                i++;
            }

            if (counter > result) {
                result = counter;
            }
            counter = 1;
        }
    }
    else{
        result = 2;
    }
    console.log(result);
}

------

function solve(params) {
    var s = params[0].split(' ').map(function (num) {
            return +num;
        }),
        currRocks = 1,
        maxRocks = 0;

    for (var i = 1; i < s.length - 1; i++)
        if (s[i] > s[i - 1] && s[i] > s[i + 1]) {
            maxRocks = Math.max(currRocks, maxRocks);
            currRocks = 1;
        } else {
            currRocks++;
        }
    return Math.max(currRocks, maxRocks);
}


------------
function solve(params) {
	var s = params[0],
		result = 0;
	var numbers = s.split(' ').map(Number),
		i,
		k,
		len = numbers.length,
		peak = [],
		plen = peak.length,
		rock = 0;

	peak.push(0);
	for (i = 0; i < len; i += 1){
		if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]){
			peak.push(i);

		}
	}
	peak.push(len - 1);

	for (k = 1; k < peak.length; k += 1){
		rock = peak[k] - peak[k-1];
		if(rock > result){
			result = rock;
			rock = 0;
		}
	}
	console.log(result);
}

----
function solve(params) {
        var s = params[0],
                result;
        // Your solution here
 
        var heights = s.split(' ').map(function(item) {
                return item | 0;
        });
        var i = 0,
                j, len = heights.length;
        var peak1, peak2, valey,
                maxCount = 0,
                count;
        while (i < len - 1) {
                peak1 = i;
                j = i;
                while (heights[j + 1] < heights[j]) {
                        j += 1;
                        valey = j;
                }
                while (heights[j + 1] > heights[j]) {
                        j += 1;
                        peak2 = j;
                }
                i = peak2;
                count = peak2 - peak1;
                if (count > maxCount) {
                        maxCount = count;
                }
        }
        result = maxCount;
        console.log(result);
}
 
 
//var args=['5 1 7 4 8'];