//Fullscreen handlers
const fullScreeenButton = document.querySelector('.fullscreen');

document.addEventListener("keypress", function (e) {
    if (e.code === "Escape") {
        toggleFullScreen();
    }
}, false);

fullScreeenButton.addEventListener('click', (event) => {
    toggleFullScreen();
});
