var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video 
let ambientLight
let animationHasEnded = false
const videoId = 'qC0vDKVPCrw'

/* function for the iframe to load later, otherwise it's too much to load */

function createAmbientLight() {
    if(!animationHasEnded) return

    ambientLight = new YT.Player('ambient-light', {
        videoId,
        events: {
            onReady: ambientLightReady,
            onStateChange: ambientStateChange,
        },
    })
}

window.onYouTubeIframeAPIReady = function() {
    video = new YT.Player('video', {
        videoId,
        events: {
            onStateChange: videoStateChange,
        },
    })
}

function videoStateChange(event) {

}