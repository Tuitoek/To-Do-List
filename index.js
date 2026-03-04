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
