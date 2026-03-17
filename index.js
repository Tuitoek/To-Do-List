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
    if(newTask.trim() === "") { 
        alert("Please enter a task."); 
    } else {

    tasks.push(newTask);
    console.log(newTask);

    // Create an element for posting ordered data
    let taskLink = document.querySelector("#tasklist ul");
    let li = document.createElement("li");
    li.classList.add("flex", "items-center", "justify-between", "w-full", "p-2", "border-b-2", "border-black","decoration-wavy") 

    // Create a delete button for each task
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("border-1", "border-solid", "p-1", "font-mono", "text-sm", "ml-4", "bg-lime-500", "font-semibold", "text-black", "rounded", "hover:bg-rose-900", "hover:text-white", "transition-colors", "duration-300");

    // Add event listener to the delete button
    deleteBtn.addEventListener('click', deleteTask);

    // Create a span for the task text 
    let taskSpan = document.createElement("span");
    taskSpan.textContent = " " + newTask;


    //Append the new task to the list and the delete button to the task
    li.appendChild(checkboxInput.cloneNode()); // Add a checkbox to each task
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

//get the UL (the parent of all tasks)
let taskList = document.querySelector("#tasklist ul");

checkboxInput.addEventListener('click', function (event) {
    //If the user clicked the text (the span) or the list item itself
    // if (event.target.tagName === "INPUT" || event.target.tagName === "LI") {
  // if (event.target.tagName === "INPUT" || event.target.tagName === "LI") {
        // Find the closest LI to apply the styling to
        let listItem = event.target.closest("li");

        let taskSpan = listItem.querySelector("span");
        taskSpan.classList.toggle("line-through");
        taskSpan.classList.toggle("text-gray-500");
    }
});