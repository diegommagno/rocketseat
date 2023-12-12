import ytdl from 'ytdl-core';
import fs from 'fs'; // File System library to manipulate files.

export const download = (videoId) => new Promise((resolve, reject) => {
    const videoURL = "https://www.youtube.com/shorts/" + videoId; // The video URL.
    console.log("Downloading video " + videoId + "...");

    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly"})
        .on("info", (info) => {
            const seconds = info.formats[0].approxDurationMs / 1000; // Get the video duration in seconds.
            
            if(seconds > 60) {
                throw new Error("Video is longer than 60 seconds. Aborting download...");
            }
        })
        
        .on("end", () => {
            console.log("Download finished.");
            resolve()
        })
        
        .on("error", (error) => {
            console.log("Video download failed. Error code: " + error);
            reject(error)
        })
        .pipe(fs.createWriteStream("./tmp/audio.mp4")); // info returns video information, end signs that the video download ended, error signs that an error occurred. Pipe is for getting the video information and saving it.
}); // Exporting the function to be able to use it in another file.