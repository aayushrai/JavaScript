// Replace element

//create element
const newHeading = document.createElement('h2');
//new id
newHeading.id = "task-title";
// new text node
newHeading.appendChild(document.createTextNode("Task List"));

// get the old heading
const oldHeading = document.getElementById('task-title');
// get parent
const cardAction = document.querySelector('.card-action');

// replace 
cardAction.replaceChild(newHeading,oldHeading);

//remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove()

// remove child element
list.removeChild(lis[3]);

// classes and attribute
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

//classes
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
val = link;
link.classList.remove('test');


// attribute

val = link.getAttribute('href');
val =link.setAttribute('href',"https://google.com");
val = link.hasAttribute("href");
link.removeAttribute('href');

console.log(val);