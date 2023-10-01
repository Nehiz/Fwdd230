// Get the current year
const currentYear = new Date().getFullYear();

// Get the element with the id "copyright-year"
const yearElement = document.querySelector("#copyright-year");

// Insert the current year into the yearElement
yearElement.innerHTML = currentYear;