let currentIndex = 0;

document.getElementById("color-change").addEventListener("click", function () {
    let colors = ["red", "blue", "green", "yellow", "purple"];
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});