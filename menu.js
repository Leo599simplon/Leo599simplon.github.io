// Function to load HTML content into an element
function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Optionally, reinitialize JavaScript related to the loaded content
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadHTML('header.html', 'header-placeholder');
    loadHTML('menu.html', 'nav-placeholder');
});