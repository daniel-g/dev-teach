var a = 1;
var b = [];
var c = {};
var d = "Hello World"

function sum(a, b){
  a = a + 1;
  return a+b;
};

(function substract(a, b){
  return a - b;
})(5, 6);

var multiply = function(a, b){
  return a*b;
}

function factorial(k){
  var factorial = 1;
  for(var i = 1; i <= k; i++){
    factorial *= i;
  };
  return factorial;
};

function manyOperations(){
  var i = 3;
  return factorial(i);
}
