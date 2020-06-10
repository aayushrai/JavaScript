// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('hello world');
     //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    let val;
    val = e;

    //Event target element
    val = e.target.className;
    val = e.target.classList;
    e.target.textContent = "hello";

    //Event Type
    val = e.type;

    //time Stamp
    val = e.timeStamp;

    //coordinate relative to window
    val = e.clientY;
    val = e.clientX;

    //coordinate relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}