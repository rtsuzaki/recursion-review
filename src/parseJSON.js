// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
    
  // if the input is undefined or a function; return error//
  // if the input is an string in a Array sintax; return an array;
  //if the input is an string in a Obj model; return into an obj;
  
if (json === undefined || typeof json === 'function') {
    return 'SyntaxError';
} else if (json === 'true'){
    return true;
} else if (json === 'false'){
    return false;
} else if (json === 'null'){
    return null;
} else if (typeof json === 'string' && json[0] === '[' && json[json.length-1] === ']') {
    if (json.length === 2) {
      return [];
    } else {
      var result = [];
    //'["one", "two"]'
      var noSpaces = json.split(' ').join('');
    //'["one","two"]'
      console.log(noSpaces);
      var slice1 = noSpaces.slice(1, noSpaces.indexOf(']'));
      var array = slice1.split(',')
      console.log(array)
    //[""one"", ""two""]
        for (var i = 0; i < array.length; i++) {
          result.push(parseJSON(array[i]))
        };
      return result;
    } 
} else if (json.match(/\d/g)){ 
    return Number(json);
} else if (typeof json === 'string' && json[0] === '{' && json[json.length-1] === '}') {
    if (json.length === 2) {
      return {};
    } else {
      //'{"a": "b", "c": "d"}'
       var noSpaces = json.split(' ').join('');
      //'{"a":"b","c":"d"}'
       console.log(noSpaces);
       var noBraces = noSpaces.slice(1,noSpaces.length-1);
       console.log(noBraces);
      //"a":"b","c":"d"
       var keyValPairs = noBraces.split(',');
       console.log(keyValPairs);
      //[""a":"b"", ""c":"d""]
       var key = noSpaces.slice(2, noSpaces.indexOf(':')-1);
       var val = noSpaces.slice(noSpaces.indexOf(':') + 2, noSpaces.length-2);
       var result = {};
       result[key] = val;
       return result; 
    }
} else if (typeof json === 'string') {
      return json.slice(1,json.length-1);
  }
} 




// } else if (typeof json === 'string' && json[0] === '{' && json[json.length-1] === '}')