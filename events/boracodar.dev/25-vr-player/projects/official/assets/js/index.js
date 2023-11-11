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

    ambilight = new YT.Player('ambilight', {
        videoId,
        events: {
            onReady: ambilightReady,
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
            if(!ambilight) return
            ambilight.seekTo(event.target.getCurrentTime())
            ambilight.playVideo()
            break
        case YT.PlayerState.PAUSE:
            if(!ambilight) return
            ambilight.seekTo(event.target.getCurrentTime())
            ambilight.pauseVideo()
            break
    }
}

function improvedAmbilight(event) {
    event.target.mute()

    const qualityLevels = event.target.getAvailableQualityLevels()
    
    if(qualityLevels && qualityLevels.length && qualityLevels.length > 0) {
        qualityLevels.reverse()
        console.log(qualityLevels)
    }

    const lowestQuality = 
    qualityLevels[qualityLevels.findIndex(q => q !== 'auto')]
    /* q => q !== 'auto' means if the quality is different from the automatic, continue and get the index */

    event.target.setPlaybackQuality(lowestQuality)
}

function ambilightReady(event) {
    improvedAmbilight(event)
}

function ambientStateChange(event) {
    switch(event.data) {
        case YT.PlayerState.BUFFERING:
            case YT.PlayerState.PLAYING:
                improvedAmbilight(event)
    }
}

/* Quando a animacao acabar, roda esse pedaco de codigo. Se ela nao tiver o nome appear, nao faz nada */
const app = document.querySelector('#app')
app.addEventListener('animationend', e => {
    if(e.animationName !== 'appear') return

    animationHasEnded = true
    createAmbilight()
})