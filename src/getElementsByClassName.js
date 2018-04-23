// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elements = [];
  var getNode = function(node) {
    if (node.classList.contains(className)) {
      elements.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      getNode(node.children[i]);
    }
  };
  getNode(document.body);
  return elements;
};