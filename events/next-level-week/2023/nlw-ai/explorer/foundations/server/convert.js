import fs from 'fs'; // File System library to manipulate files.
import wav from 'node-wav'; // Library to convert audio files to WAV.
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

const filePath = "./tmp/audio.mp4"; // The path to the audio file.
const outputPath = filePath.replace(".mp4", ".wav"); // The path to the output file.

export const convert = () => 
    new Promise((resolve, reject) => {
        console.log("Converting audio file...");
        
        ffmpeg.setFfmpegPath(ffmpegStatic)
        ffmpeg()
        .input(filePath)
        .audioFrequency(16000)
        .audioChannels(1)
        .format('wav')
        .on('end', () => {
            const file = fs.readFileSync(outputPath); // Read the file.
            const fileDecoded = wav.decode(file); // Decode the file - Get the audio and transform it in a code.

            const audioData = fileDecoded.channelData[0]; // Get the audio data.
            const floatArray = new Float32Array(audioData); // Transform the audio data in a float 32 array.

            console.log("Audio file converted.");
            
            resolve(floatArray)
            fs.unlinkSync(outputPath); // Delete the file as it won't be used anymore.
        })
        .on('error', (error) => {
            console.log("Audio file conversion failed. Error code: " + error);
            reject(error)
        })
        .save(outputPath)
}); // Exporting the function to be able to use it in another file.