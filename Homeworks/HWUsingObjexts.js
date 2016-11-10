//remove elements
function solve(args) {
  var output = (args[0] + '')
    .split(' ')
    .filter(function (a) {
      return !(a === output[0]);
    });
console.log(output);
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);

====
function solve(args) {
  var arr = args,
    remove = arr[0];

  Array.prototype.removeel = function (rem) {
    var result = [];

    for(var i in this){
      if (this[i] !== rem && typeof this[i] !== 'function') {
        result.push(this[i]);
      }
    }
   return result;
  };

  //Youngest person

// jshint esversion:6

let Person = function (first, last, age) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
};
Person.prototype.constructor = Person;

let p1 = new Person('first', 'last', 15);
let p2 = new Person('pesho', 'peshev', 10);

YoungestPerson();

function YoungestPerson(){
  let people = [p1, p2];

  let len = people.length;
  let min = 0;
  for (let index = 1; index < len; index += 1){
    if (people[index].age < people[min].age) {
      min = index;
    }
  }

  console.log(people[min]);

  console.log(arr.removeel(remove).join('\n'));
}

solve(['_h/_',
  '^54F#',
  'V',
'^54F#'