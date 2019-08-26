// A function that adds and remove the class "active" on the section you click on.
const toggle = () => {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
