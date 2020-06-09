console.log(document.getElementById("task-title"));
console.log(document.getElementById("task-title").id);

//change style
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.padding = '5px';

// change content
document.getElementById('task-title').textContent = "Task List";
document.getElementById('task-title').innerText = "My List";
document.getElementById('task-title').innerHTML = "<span style='color:red'>Task List</span>"

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));

document.querySelector('li').style.color = "red";
document.querySelector('li:last-child').style.color = "yellow"; //last item of list
document.querySelector('li:nth-child(3)').style.color= "blue"; // 3rd item of list
document.querySelector('li:nth-child(odd)').style.background = "pink";//only first odd because single element selector
document.querySelector('li:nth-child(even)').style.background = "gray";//only first even because single element selector
