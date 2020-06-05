const numArray = [3,34,34,3,3,333,43,4];
const numArray2 = new Array(2,3,5,3,6,7);
const strArray = ["Apple","orange","banna"];
const mixArray = [22,'hello',true,null,false,{a:1,b:2},new Date()];

// array length
val = numArray.length;
//check array or not
val = Array.isArray(mixArray);
// get single value
val = numArray[3];

//Mutating array

numArray.push(240); // add in back
numArray.unshift(44); // add in front
numArray.pop(); // remove from last
numArray.shift(); //remove from last
numArray.splice(1,3);  // remove subarray
numArray.reverse(); // reverse array

// concate array
val = numArray.concat(strArray);
//sort
val = strArray.sort()
val = numArray.sort() // sort numberwith digits

// use the compare function
// acending
val = numArray.sort(function(x,y){
    return x - y;
});
//decending order
val = numArray.sort(function(x,y){
    return x + y;
});

//find

function under50(num){
    return num <50;
}
val = numArray.find(under50);
console.log(val);
console.log(numArray);