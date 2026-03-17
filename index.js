// Get the plus sign & form div
let add = document.getElementById("add");
let form = document.getElementById("form");
let taskLink = document.querySelector("#tasklist li span");

// Creating a checkbox input element for each task 
let checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.classList.add("mr-2");

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
    if (newTask.trim() === "") {
        alert("Please enter a task.");
    } else {

        tasks.push(newTask);
        console.log(newTask);

        // Create an element for posting ordered data
        let taskLink = document.querySelector("#tasklist ul");
        let li = document.createElement("li");
        li.classList.add("flex", "items-center", "justify-between", "w-full", "p-2", "border-b-2", "border-black", "decoration-wavy")

        // Create a delete button icon 
        let deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "<i class=\"fas fa-trash-alt\"></i>";

        // Create a delete button for each task
        let deleteBtn = document.createElement("button");
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.classList.add("font-semibold", "text-rose-900", "hover:text-rose-700", "transition-colors", "duration-300", "ml-5");

        // Add event listener to the delete button
        deleteBtn.addEventListener('click', deleteTask);

        // Create a span for the task text 
        let taskSpan = document.createElement("span");
        taskSpan.textContent = " " + newTask;

        // Create checkbox for this task
        let checkbox = checkboxInput.cloneNode();
        checkbox.addEventListener('change', function () {
            let listItem = this.closest("li");
            let taskSpan = listItem.querySelector("span");
            taskSpan.classList.toggle("line-through");
        });

        //Append the new task to the list and the delete button to the task
        li.appendChild(checkbox); // Add a checkbox to each task
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskLink.appendChild(li);
    }

    // Prevent Form from refreshing once submitted
    event.preventDefault();
};

// Eventlistener for deleting the last task
function deleteTask(event) {
    event.stopPropagation(); // Prevent the click from toggling the task's completion state
    event.preventDefault();

    let listItem = event.target.closest("li");
    let parent = listItem.parentNode;

    // Now that 1 LI = 1 Task, this index is accurate
    let index = Array.from(parent.children).indexOf(listItem);

    if (index > -1) {
        tasks.splice(index, 1); // Remove from data
        listItem.remove();      // Remove from UI
    }

    console.log("Remaining tasks:", tasks);

}
