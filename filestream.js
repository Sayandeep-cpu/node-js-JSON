const stream = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream("data.txt", {
    highWaterMark: 4900, 
    encoding: "utf-8"}
);
//highWaterMark sets the buffer size to 4900 bytes
let sumOfChunks = 0;
readStream.on("data", (chunk) => {
    sumOfChunks ++;
    console.log("Chunk of Data ", chunk)
})

setTimeout(() => {
    console.log("Sum of Chunks: ", sumOfChunks);
}, 4000);