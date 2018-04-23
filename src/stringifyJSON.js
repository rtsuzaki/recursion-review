// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //your code goes here

  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }
  if (typeof(obj) === 'object') {
    if (obj === null) {
      return '' + null;
    } else if (Array.isArray(obj)) {
      var result = [];
      for (var i = 0; i < obj.length; i++) {
        result.push(stringifyJSON(obj[i]));
      }
      return '[' + result.join(',') + ']';
    } else {
      var result = [];
      for (var key in obj) {
        if (obj[key] === undefined || typeof(obj[key]) === 'function') {
          continue;
        } 
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + result.join(',') + '}';
    }
  } else {
    return '' + obj;
  }
};