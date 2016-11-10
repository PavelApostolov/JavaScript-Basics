//01.Reverse
function solve(args) {
    str = args[0];
    str=str.split('').reverse().join('');
    console.log(str);
}

function ReverseString(str) {
  var input = String(str);
  var output = '';
  var len = input.length;

  for (var index = len - 1; index >= 0; index -= 1) {
    output += input[index];
  }

  return output;
}

//02.Correct brackets
function solve(args) {
    var str = args[0] + '',
        i,
        len,
        count = 0;

    for (i = 0, len = str.length; i < len; i += 1) {
        if (str[i] === '(') {
            count++;
        } else if (str[i] === ')') {
            count--;
        }
    }

    console.log(count ? 'Incorrect' : 'Correct');
}

function solve(str) {
  var input = str[0] + '',
    openBracket = 0,
    closeBracket = 0,
    brackets = [],
    counter = 0;

  for (var i in input) {
    var c = input[i];

    if (c === '(') {
      openBracket += 1;
    } else if (c === ')') {
      closeBracket += 1;
    }

    if (closeBracket > openBracket) {
      console.log('Incorrect');
      return;
    }
  }

  // Output
  if (openBracket === closeBracket) {
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
}

//03.Substring in Text
function solve(args) {
    var needed = args[0].toLowerCase(),
        text = args[1].toLowerCase();
    reg = new RegExp(needed, 'g');
    console.log(text.match(reg).length);
}

function solve(args) {
  var find = (args[0] + '').toLowerCase(),
    parse = (args[1] + '').toLowerCase(),
    counter = 0;

  var index = parse.indexOf(find);
  while (index >= 0) {
    counter += 1;
    index = parse.indexOf(find, index + 1);
  }

  console.log(counter);
}

//04.Parse tags
function solve(params) {

  String.prototype.ToMixCase = function () {
    var input = this;
    var result = '';

    // var len = input.length;
    // for (var index = 0; index < len; index += 1) {
    //   if (mixCaseTracker % 2 === 0) {
    //     result += input[index].toUpperCase();
    //   } else {
    //     result += input[index].toLowerCase();
    //   }

    //   mixCaseTracker += 1;
    // }

    return result;
  };

  var mixCaseTracker = 0;
  var openUp = 'upcase';
  var closeUp = '/upcase';
  var openLow = 'lowcase';
  var closeLow = '/lowcase';
  var openMix = 'orgcase';
  var closeMix = '/orgcase';

  // states
  var isTag = false;
  var curTag = '';
  var isUp = false;
  var isLow = false;
  var isMix = false;
  var toTransform = false;
  var curTransform = '';
  var transform = '';
  var tagStack = [];
  var result = '';

  function ParseTags(text) {
    var parse = String(text);

    var len = parse.length;
    for (var index = 0; index < len; index += 1) {
      var chr = parse[index];

      if (chr === '<') {
        isTag = true;
      }
      else if (chr === '>') {
        isTag = false;
        // check tag
        CheckTag(curTag);
        curTag = '';

        if (!toTransform) {
          Print(transform);
        }
      }
      else if (isTag) {
        curTag += chr;
      }
      else if (toTransform) {
        transform += chr;
      }
      else {
        // Print
        result += chr;
      }
    }

    console.log(result);
  }

  function Print(arg) {
    var text = String(arg);

    if (curTransform === openUp) {
      text = text.toUpperCase();
    }

    else if (curTransform === openLow) {
      text = text.toLowerCase();
    }

    else if (curTransform === openMix) {
      // text = text.ToMixCase();
    }

    result += text;
    transform = '';
    curTransform = '';
  }

  function CheckTag(tag) {
    var curTag = String(tag);

    if (curTag === openUp ||
      curTag === openLow ||
      curTag === openMix) {

      toTransform = true;
      AddToStack(curTag);
    }
    else if (curTag === closeUp ||
      curTag === closeLow ||
      curTag === closeMix) {

      toTransform = false;
      RemovaFromStack();
    }
  }

  function AddToStack(arg) {
    var curTag = String(arg);
    tagStack.push(curTag);
  }

  function RemovaFromStack(arg) {
    var curTag = String(arg);
    curTransform = tagStack.pop();
  }

  ParseTags(params[0] + '');

}

//05.nbsp
function solve(args) {
  var output = (args + '').replace(/ /g, '&nbsp;');
  console.log(output);
}

function solve(args) {
    var regex = / /g;
    args[0] = args[0].replace(regex, '&nbsp;');
    console.log(args[0]);
}

//06.Extract text from HTMl 
function solve(args) {
    let output = '';
    let matchTags = /<.*?>/ig;

    for (let line of args) {
        output += line.replace(matchTags, '').trim();
    }

    console.log(output);
}

//07.Parse URL
function solve(args) {
    args = args[0] + '';
    var splited = args.split('/'),
        sl;
    splited[0] = splited[0].substring(0, splited[0].length - 1);
    console.log('protocol: ' + splited[0]);
    console.log('server: ' + splited[2]);
    sl = splited.slice(3);
    console.log('resource: /' + sl.join('/'));
}

//08.Replace tags
function solve(args) {
    var StartsWith = /^<a href="/,
        regexBegin = /<a href="/g,
        matchExtractLable = /(.*?)">(.*?)<\/a>(.*)/,
        part,
        splited,
        result = '';

    splited = args[0].split(regexBegin);

    if (!args[0].match(StartsWith)) {
        result += splited.shift();
    }

    part = splited.map(m => {
        var match = m.match(matchExtractLable);
        if (match) {
            return '[' + match[2] + '](' + match[1] + ')' + match[3];
        } else {
            return m;
        }
    });

    result += part.join('');

    console.log(result);
}