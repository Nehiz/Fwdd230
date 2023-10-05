// Get the current year
const currentYear = new Date().getFullYear();

// Get the element with the id "copyright-year"
const yearElement = document.querySelector("#datetime");

// Insert the current year into the yearElement
yearElement.innerHTML = currentYear;

// Get the date and time the document was last modified
const lastModified = document.lastModified;

// Get the element with the id "lastModified"
const modifiedElement = document.querySelector("#lastModified");

// Insert the last modified date into the modifiedElement
modifiedElement.innerHTML = lastModified;