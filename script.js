function changeText() {
    let title = document.getElementById("title");
    let currentTime = new Date().toLocaleTimeString();
    title.innerHTML = `Hello! The time is ${currentTime}`;
    
    // Change background color randomly
    document.body.style.background = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
