// index.ts

// Function to create and append elements to the DOM
function createElement(tag: string, text: string, parent: HTMLElement) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.appendChild(element);
}

// Entry point function
function main() {
    // Create a <div> element to hold our text
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.marginTop = '50px';

    // Create a <h1> element with "Hello world!" text
    createElement('h1', 'Hello world!', container);

    // Append our container to the body
    document.body.appendChild(container);
}

// Call the main function when the DOM is loaded
document.addEventListener('DOMContentLoaded', main);
