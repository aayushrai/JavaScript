const form = document.querySelector("#task-form");
const clearBtn = document.querySelector(".clear-tasks");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const card = document.querySelector(".card");
const filterInput = document.querySelector("#filter");
loadEventListeners();

function loadEventListeners() {
    document.addEventListener("DOMContentLoaded", getTasks());
    form.addEventListener("submit", addTask);
    card.addEventListener("click", removeTask);
    clearBtn.addEventListener("click", removeAllTasks);
    filterInput.addEventListener("keyup", filterTasks);
}

function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task) {
        li = document.createElement("li");
        li.className = "collection-item";
        li.textContent = task;
        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>'
        li.appendChild(link);
        taskList.appendChild(li);
    })
}

function addTask(e) {
    const inputText = taskInput.value;
    if (inputText === "") {
        alert("empty field")
    }

    li = document.createElement("li");
    li.className = "collection-item";
    li.textContent = inputText;

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
    taskList.appendChild(li);

    storeTaskInLocalStorge(inputText);
    taskInput.value = "";
    e.preventDefault();
}

function storeTaskInLocalStorge(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskLi) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task, index) {
        if (taskLi.textContent === task) {
            tasks.splice(index, 1);
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function removeTask(e) {
    if (e.target.classList.contains("fa-remove")) {
        if (confirm("Are you sure ?")) {
            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeAllTasks(e) {
    // taskList.innerHTML = "";   // slower method

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // first methode
    // localStorage.setItem("tasks", JSON.stringify([]));
    // second methode
    localStorage.clear();
}

function filterTasks(e) {
    const search = e.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function(element) {
        const item = element.firstChild.textContent.toLowerCase();
        if (item.indexOf(search) != -1) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}