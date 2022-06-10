var videoElement = document.getElementById('video');
var button = document.getElementById('button');

// Promt the user to select a Media Stream, pass to video element, then play
async function selectMediaStream() {
    try {
        var mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch Error Here
        console.log ('whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset Button
    button.disabled = false;
});

// on Load
selectMediaStream();