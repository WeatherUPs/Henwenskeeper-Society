function playClick() {
    const audio = new Audio('ui_click.mp3'); // You'll need the sound file in your folder
    audio.play();
}

// Apply to all Minecraft buttons
document.querySelectorAll('.mc-button').forEach(btn => {
    btn.addEventListener('click', playClick);
});