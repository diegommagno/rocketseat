import { server } from './server.js';

const form = document.querySelector('#form');
const input = document.querySelector('#url');
const content = document.querySelector('#content');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    content.classList.add('placeholder')

    const videoURL = input.value;

    if(!videoURL.includes('shorts')){
        return content.innerHTML = `Please, enter the URL of a YouTube Short video.`
    }

    const params = videoURL.split('shorts/')[1];
    const videoID = params.split('?si')[0]; // const [videoID] = params.split('?si') would also work.

    content.innerHTML = 'Obtaining text from audio... Please note, this process may take a few minutes.'

    // First request - Passamos o ID do vídeo e ele retorna a transcrição do áudio.
    const transcription = await server.get("/summary/" + videoID)

    content.innerHTML = 'Transcribing audio to text...'

    // Second request - Enviando no corpo do request através do text enviando o resultado da transcrição.
    // const summary = await server.post("/summary/", {
    //     text: transcription.data.result,
    // })

    content.innerHTML = transcription.data.result
    content.classList.remove('placeholder')
});