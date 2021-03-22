//Piano and piano keys variables definitions
const keys = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano');

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

const toggleFullScreen = ()=>{
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
};

//Piano keys names switch handlers
const buttonContainer = document.querySelector('.btn-container');
const toggleButtons = document.querySelectorAll('.btn');

const createKeyboardMapping = () =>{
    let mapping = new Map();
    mapping.set("D", "c");
    mapping.set("F", "d");
    mapping.set("G", "e");
    mapping.set("H", "f");
    mapping.set("J", "g");
    mapping.set("K", "a");
    mapping.set("L", "b");
    mapping.set("R", "c♯");
    mapping.set("T", "d♯");
    mapping.set("U", "f♯");
    mapping.set("I", "g♯");
    mapping.set("O", "a♯");
    return mapping;
};

const keysMap = createKeyboardMapping();

buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn')) {
        if (!event.target.classList.contains('btn-active')) {
            toggleButtons.forEach((item) => {
                item.classList.remove('btn-active');
            });
            event.target.classList.add('btn-active');
        }
        if (event.target.classList.contains('btn-notes')) {
            keys.forEach((item) => {
                item.classList.remove('piano-key-letter');
            });
        }
        if (event.target.classList.contains('btn-letters')) {
            keys.forEach((item) => {
                item.classList.add('piano-key-letter');
            });
        }
    }
});

//Keyboard event handlers
document.addEventListener('keydown', (event) => {
    let keyboardKey = event.key.toUpperCase();
    let note = keysMap.get(keyboardKey);
    keys.forEach((item) => {
        if (item.dataset.note === note) {
            item.classList.add('piano-key-active');
        }
    })
    playSound(note);
});

document.addEventListener('keyup', (event) => {
    let keyboardKey = event.key.toUpperCase();
    let note = keysMap.get(keyboardKey);
    keys.forEach((item) => {
        if (item.dataset.note === note) {
            item.classList.remove('piano-key-active');
        }
    })
});

//Playing sound
const playSound = (note)=> {
    const audio = new Audio();
    audio.src = `\\assets\\audio\\${note}.mp3`;
    audio.loop = false;
    audio.currentTime = 0;
    audio.play();
};