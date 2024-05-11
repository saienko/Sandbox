const app = document.getElementById('app')
// Create a new H1 element
const header = document.createElement('h1');

// Create a new text node for the H1 element
const text = 'Develop. Preview. Ship.';
const headerContent = document.createTextNode(text);

// Append the text to the H1 element
header.appendChild(headerContent);

// Place the H1 element inside the div
app.appendChild(header);