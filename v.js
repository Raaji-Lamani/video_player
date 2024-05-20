const video = document.getElementById('video');
const playPauseButton = document.getElementById('playPause');
const forwardButton = document.getElementById('forward');
const backwardButton = document.getElementById('backward');
const videoSource = document.getElementById('videoSource');

const videos = ['Radhamma Radhamma HD video Song _  Nene Raju Nene Mantri _ Rana _ Kajal Agarwal _ Anup Rubens _ Teja.mp4', 'Sukhibhava HD Full Video Song _ NRNM _ Rana Daggubatti _ Kajal Agarwal _ Anup Rubens _ Teja (1).mp4', '15921892-uhd_3840_2160_50fps (1) (1).mp4'];
let currentVideoIndex = 0;

playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

forwardButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    changeVideo(currentVideoIndex);
});

backwardButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    changeVideo(currentVideoIndex);
});

function changeVideo(index) {
    videoSource.src = videos[index];
    video.load();
    video.play();
    playPauseButton.textContent = 'Pause';
}