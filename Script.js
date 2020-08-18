
    // A function which gets the image to load at a random coordinate
function setRandomPosition() {
    var img = document.getElementById("image");
    // Making random coordinates with the inner screen height and inner screen width
    var randomX = Math.random() * window.innerWidth;
    var randomY = Math.random() * window.innerHeight;
    // Fixed positions for the image itself
    var imageWidth = 19;
    var imageHeight = 19;
    // So that the image doesnt get out of the screen due to its original drawing
    var positionX = Math.max(randomX - imageWidth, 0);
    var positionY = Math.max(randomY - imageHeight, 0);

    // activating the code (styling)
    img.style.left = positionX + "px";
    img.style.top = positionY + "px";
}

// Even listener that listens to the specific key I desire to be pressed and have a function
window.addEventListener("keypress", function (event) {
    if (event.charCode === 32) {
        setRandomPosition();
    }
});