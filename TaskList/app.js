const form = document.querySelector("#task-form");
const clearBtn = document.querySelector(".clear-tasks");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners() {
    form.addEventListener("submit", addTask);
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
    taskInput.value = "";
    e.preventDefault();
}