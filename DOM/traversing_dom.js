let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;

//get child nodes
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// 1 - element
// 2 - Attribute
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype

// get children element nodes 
val = list.children;
val = list.children[1];
list.children[1].textContent = 'hello';
// children of child
val = list.children[3].children[0];

val = list.firstChild; // it's also give text
val = list.firstElementChild;

val = list.lastChild; // it's also give text
val = list.lastElementChild;
// count child element
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);