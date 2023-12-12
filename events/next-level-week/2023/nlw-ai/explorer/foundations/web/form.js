import { server } from './server.js';

const form = document.querySelector('#form');
const input = document.querySelector('#url');
const content = document.querySelector('#content');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const videoURL = input.value;

    if(!videoURL.includes('shorts')){
        return content.innerHTML = `Please, enter the URL of a YouTube Short video.`
    }

    const params = videoURL.split('shorts/')[1];
    const videoID = params.split('?si')[0]; // const [videoID] = params.split('?si') would also work.

    content.innerHTML = 'Obtaining text from audio...'

    const transcription = await server.get("/summary/" + videoID)

    content.innerHTML =  transcription.data.result
});