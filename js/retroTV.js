var position = 0;
var playlist;
var video;

window.onload = function() {
    playlist = [
        "../videos/preroll.mp4",
        "../videos/areyoupopular.mp4",
        "../videos/destinationearth.mp4"
    ];
    
    video = document.getElementById("video");
    video.addEventListener("ended", nextVideo, false); // or onended.
    video.src = playlist[position];
    video.load();
}

function nextVideo() {
    if (++position >= playlist.length) position = 0;
    video.src = playlist[position];
    video.load();
    if (position !== 0) video.play();
}