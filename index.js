// Get the plus sign & form div
let add = document.getElementById("add");
let form = document.getElementById("form");
let taskLink = document.querySelector("#tasklist li span");

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
    if (!newTask) return; // Prevent adding empty tasks

    tasks.push(newTask);
    console.log(newTask);

    // Create an element for posting ordered data
    let taskLink = document.querySelector("#tasklist ul");
    let li = document.createElement("li");

    // Create a delete button for each task
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("border-1", "border-solid", "p-1", "font-mono", "text-sm", "ml-4", "bg-red-500", "text-white", "rounded", "hover:bg-yellow-700");

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', deleteTask);

    li.textContent = "." + " " + newTask;

    //Append the new task to the list and the delete button to the task
    li.appendChild(deleteBtn);
    taskLink.appendChild(li);
    

    // Prevent Form from refreshing once submitted
    event.preventDefault();
};

// Eventlistener for deleting the last task
function deleteTask(event) {
    event.preventDefault();

    const listItem = event.target.closest("li");
    const parent = listItem.parentNode;

    // Now that 1 LI = 1 Task, this index is accurate
    const index = Array.from(parent.children).indexOf(listItem);

    if (index > -1) {
        tasks.splice(index, 1); // Remove from data
        listItem.remove();      // Remove from UI
    }

    console.log("Remaining tasks:", tasks);

}

taskLink.addEventListener('click', function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("line-through");
        event.target.classList.toggle("text-gray-500");
    }
});