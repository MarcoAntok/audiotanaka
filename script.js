function start() {
    const bgmusic = document.getElementById('bgmusic');
       bgmusic.play()
    ;

    bgmusic.addEventListener("play", function() {
        const elements = document.querySelectorAll("*");
        elements.forEach((element) => {
            element.style.animationPlayState = "running,running";  // start them animatins
        });
    });
}

function audiomute() {
    const bgmusic = document.getElementById('bgmusic');
    bgmusic.muted = !bgmusic.muted;
}


document.querySelector('.mute').addEventListener('click', function() {
    const button = this;
    if (button.style.backgroundImage == 'url("audio/muted.png")') {
        button.style.backgroundImage = 'url("audio/unmuted.png")';
    } else {
        button.style.backgroundImage = 'url("audio/muted.png")';
    }
});
