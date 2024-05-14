const imageButton = document.getElementById('imageButton');


function changeImage() {

    const images = [
        'url(images/BG1.jpg)',
        'url(images/BG2.jpg)',
        'url(images/BG3.jpg)',
        'url(images/BG4.jpg)',
        'url(images/BG5.jpg)'
    ];


    const randomIndex = Math.floor(Math.random() * images.length);

    document.body.style.backgroundImage = images[randomIndex];
}


imageButton.addEventListener('click', changeImage);


const increaseTextBtn = document.getElementById('increaseTextBtn');
const decreaseTextBtn = document.getElementById('decreaseTextBtn');
const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');


function increaseTextSize() {
    textElements.forEach(element => {
        let currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        element.style.fontSize = (currentSize * 1.1) + 'px'; // Increase by 10%
    });
}


function decreaseTextSize() {
    textElements.forEach(element => {
        let currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        element.style.fontSize = (currentSize * 0.9) + 'px'; // Decrease by 10%
    });
}


increaseTextBtn.addEventListener('click', increaseTextSize);
decreaseTextBtn.addEventListener('click', decreaseTextSize);
