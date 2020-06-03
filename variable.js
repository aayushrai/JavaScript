// Variable,let,constant

 var name = "aayush rai";
 console.log(name);
 name = "iron man";
 console.log(name);

 // Init Var

 var greeting;
 console.log(greeting);
 greeting = "init";
 console.log(greeting);

var firstName = "hi"; // camel case
var first_name = "sam"; // Underscore
var FirstName = "tem"; // Pascal case

//let
let game;
console.log(name);
game = "let";
console.log(name);

//const

const surname = "rai";
console.log(surname);
// you can't change constant

//objects
obj = {name:'aayush',age:20}
console.log(obj);

obj.name = "kuber";
obj["age"] = 14;
console.log(obj);

//arr
arr = [1,2,3,4]
console.log(arr)
arr[0] = 4
console.log(arr)

const arr2 = [1,2,3,4,4]
console.log(arr2);
arr2.push(7); // you can add in constant array but not assign new arr to that variable
arr2[3] = 10;
console.log(arr2);
arr2 = [3,4,5] // error because constant