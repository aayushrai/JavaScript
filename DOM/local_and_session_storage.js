// //set local storage 
// localStorage.setItem("name","aayush");
// localStorage.setItem("age",20);

// //set session storage 
// sessionStorage.setItem("name","yash");

// // remove from local storage
// localStorage.removeItem("name");

//get value from local storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name);
// console.log(age);

// localStorage.clear();

document.querySelector("form").addEventListener("submit",function(e){
    const task = document.querySelector("#task").value;

    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(tasks));
    alert("task saved");
    e.preventDefault();
})