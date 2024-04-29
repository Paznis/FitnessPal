// Get reference to the button
const imageButton = document.getElementById('imageButton');

// Function to change background image
function changeImage() {
    // Array of image URLs
    const images = [
        'url(images/BG1.jpg)',
        'url(images/BG2.jpg)',
        'url(images/BG3.jpg)',
        'url(images/BG4.jpg)',
        'url(images/BG5.jpg)'
    ];

    // Generate a random index to select a random image from the array
    const randomIndex = Math.floor(Math.random() * images.length);

    // Set the body's background image
    document.body.style.backgroundImage = images[randomIndex];
}

// Add click event listener to the button
imageButton.addEventListener('click', changeImage);
