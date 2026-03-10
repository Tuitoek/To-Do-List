// Get the plus sign & form div
let add = document.getElementById("add");
let form = document.getElementById("form");

// Eventlistener for toggling the input div
add.addEventListener('click', function (event) {
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});

// Eventlistener for capturing submit data
function addTask(event){
    let task = document.getElementById("do").value;
    console.log(task);

    // Create an element for posting ordered data
    let taskLink = document.querySelector(".tasklist li");
    let li = document.createElement("li");
    li.textContent = ". " + task;

    taskLink.appendChild(li);

    // Prevent Form from refreshing once submitted
    event.preventDefault();
};

