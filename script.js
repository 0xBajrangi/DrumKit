window.document.addEventListener("keydown", function (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio == null) {
        return;
    }
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.add("playing");
    audio.currentTime = 0;
    audio.play();


});

window.document.addEventListener("keyup", function(e){
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.remove("playing");
})