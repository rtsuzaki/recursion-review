// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
    
  // if the input is undefined or a function; return error//
  // if the input is an string in a Array sintax; return an array;
  //if the input is an string in a Obj model; return into an obj;
  
  
if (json === undefined || typeof json === 'function') {
    return 'SyntaxError';
}
var result = [];
if (typeof json === Boolean){
  return json;
} if (typeof json === 'string' && json[0] === '[' && json[json.length-1] === ']'){
//'["one", "two"]'
  var slice1 = json.slice(1, json.indexOf(']'));
//"one", "two"
  var array = slice1.split(', ')
//[""one"", " "two""]
    for (var i = 0; i < array.length; i++) {
          result.push(parseJSON(array[i]))};
  return result;
} else if (typeof json === 'string') {
  return json.slice(1,json.length-1)
  }
}




// } else if (typeof json === 'string' && json[0] === '{' && json[json.length-1] === '}')