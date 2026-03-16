// Get the plus sign & form div
let add = document.getElementById("add");
let form = document.getElementById("form");

// Array for storing tasks
let tasks = [];

// Eventlistener for toggling the input div
add.addEventListener('click', function (event) {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

// Eventlistener for capturing submit data
function addTask(event) {
    let newTask = document.getElementById("do").value;
    tasks.push(newTask);
    console.log(newTask);

    // Create an element for posting ordered data
    let taskLink = document.querySelector(".tasklist li span");
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("border-1", "border-solid", "p-1", "font-mono", "text-sm", "ml-4");
    deleteBtn.addEventListener('click', deleteTask);

    // Numbering the tasks
    let taskNumber = tasks.length;

    li.textContent = taskNumber + ". " + " " + newTask;

    //Append the new task to the list and the delete button to the task
    taskLink.appendChild(li);
    taskLink.appendChild(deleteBtn);

    // Prevent Form from refreshing once submitted
    event.preventDefault();
};

// Eventlistener for deleting the last task
function deleteTask(event) {
    let taskLink = document.querySelector(".tasklist li");
    taskLink.removeChild(taskLink.lastChild);
    tasks.pop();
    console.log(tasks);
    event.preventDefault();
}

