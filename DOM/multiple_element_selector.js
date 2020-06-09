// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].textContent = 'Hello';

const listItems =document.querySelector("ul").getElementsByClassName('collection-item'); // it's only select collection-item class inside the ul not globally

console.log(listItems);


// tag name
let lis = document.getElementsByTagName('li');
console.log(items);

// convert htmlcollection into array so we can array methods
lis = Array.from(lis);
lis.reverse();
console.log(lis);

lis.forEach(function(i,index){
    console.log(i.className);
    i.textContent = `${index}:Item`
});

// document.querySelectorAll

const items2 = document.querySelectorAll('ul.collection li.collection-item'); // its return node list on which we perform array many array opertion without converting into array

console.log(items2); 

items2.forEach(function(i,index){
    i.textContent =`${index}:Node`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(i,index){
    i.style.background = "#ccc";
})

for(let i =0;i<liEven.length;i++){
  liEven[i].style.color = "white";
  liEven[i].style.background = "Black";
};