const form = document.querySelector('form');
const taskInput = document.getElementById("task");

form.addEventListener('submit',runEvent);

//clear input
taskInput.value = "";

//keydown
// taskInput.addEventListener('keydown',runEvent);

// keyup
// taskInput.addEventListener('keyup',runEvent);

//keypress
// taskInput.addEventListener('keypress',runEvent);

//focus
// taskInput.addEventListener('focus',runEvent); // when you click inside input

//blur
//taskInput.addEventListener('blur',runEvent); // when you click outside input

//cut
// taskInput.addEventListener('cut',runEvent); // when you ctrl+x or cut input

//paste
//taskInput.addEventListener('paste',runEvent); // when you ctrl+v or paste input

//input
taskInput.addEventListener('input',runEvent);  // any input


function runEvent(e){
    console.log(`Event Type:${e.type}`);

    // console.log(e.target.value)
    // e.preventDefault();
    //get input value
    // console.log(taskInput.value);
}