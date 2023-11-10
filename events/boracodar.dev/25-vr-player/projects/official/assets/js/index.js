var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video 
let ambilight
let animationHasEnded = false
const videoId = 'qC0vDKVPCrw'

/* function for the iframe to load later, otherwise it's too much to load */

function createAmbilight() {
    if(!animationHasEnded) return

    Ambilight = new YT.Player('ambient-light', {
        videoId,
        events: {
            onReady: AmbilightReady,
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
    switch(event.data) {
        case YT.PlayerState.PLAYING:
            if(!Ambilight) return
            Ambilight.seekTo(event.target.getCurrentTime())
            Ambilight.playVideo()
            break
        case YT.PlayerState.PAUSE:
            if(!Ambilight) return
            Ambilight.seekTo(event.target.getCurrentTime())
            Ambilight.pauseVideo()
            break
    }
}

function AmbilightReady(event) {
    event.target.mute()
}

function ambientStateReady(event) {}

/* Quando a animacao acabar, roda esse pedaco de codigo. Se ela nao tiver o nome appear, nao faz nada */
const app = document.querySelector('#app')
app.addEventListener('animationend', e => {
    if(e.animationName !== 'appear') return

    animationHasEnded = true
    createAmbilight()
})