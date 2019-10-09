// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle

function showFAQ() {
  document.getElementById("wt").style.display = "none"
  document.getElementById("signup-form").style.display = "none"
  document.getElementById("faq-section").style.display = "flex"
}

function showWelcomeText() {
  document.getElementById("faq-section").style.display = "none"
  document.getElementById("signup-form").style.display = "none"
  document.getElementById("wt").style.display = "flex"
}

function showSignUpForm() {
  document.getElementById("wt").style.display = "none"
  document.getElementById("faq-section").style.display = "none"
  document.getElementById("signup-form").style.display = "flex"
}

document.getElementById("faq").onclick = showFAQ
document.getElementById("close-faq").onclick = showWelcomeText
document.getElementById("sign-up").onclick = showSignUpForm
document.getElementById("close-signup-form").onclick = showWelcomeText


