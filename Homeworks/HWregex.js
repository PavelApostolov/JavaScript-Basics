//01.Format with placeholders
function solve(args) {
    var str = JSON.parse(args[0]);
    var result = args[1];
    
		for (var property in str) {
var regex = new RegExp("#\{"+property+"\}", "g");result = result.replace(regex, str[property]);
}
return result;}

function solve(args) {
String.prototype.format = function(options) {
    var prop,
        result = this;
    for (prop in options) {
        result = result.replace(new RegExp('#{' + prop + '}', 'g'), options[prop]);
    }
    return result;
};

var options = JSON.parse(args[0]);
    result = args[1].format(options);

console.log(result);
}

//02.HTML binding
function solve(args){
    var obj = JSON.parse(args[0]);
    var text = ''+args[1];
    text = text.replace(/'/, '"');    
    var regex = /data-bind-(.*?)="(.*?)"/gmi;
    var currentMatch;
    while(currentMatch = regex.exec(text)){
        var index = text.indexOf('>');
        if (text[index - 1] === '/') { // if tag is self closing
            index--;
        }
        var field = currentMatch[1];
        if (field.toLowerCase() === 'content') {
            var arr = text.split('');
            var x = arr.splice(index + 1, 0, obj[currentMatch[2]]);
            text = arr.join('');
        }
        else {
            var arr2 = text.split('');
            var x2 = arr2.splice(index, 0, " " + field + '="'+ obj[currentMatch[2]] + '"');
            text = arr2.join('');
        }
    }
 
    console.log(text);
}