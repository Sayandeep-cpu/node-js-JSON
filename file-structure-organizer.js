const fs = require('fs');
const path = require('path');

//const currentFilePath = path.join(__dirname, "audiotesting.mp3");
//const destinationFilePath = path.join(__dirname, "audio", "testedaudio.mp3");
//const dirPath = path.join(__dirname, "audio");

//const currentFilePath = path.join(__dirname, "imagetest.jpg");
//const destinationFilePath = path.join(__dirname, "images", "imagetest.jpg");
//const dirPath = path.join(__dirname, "audio");

const currentFilePath = path.join(__dirname, "data.txt");
const destinationFilePath = path.join(__dirname, "text", "updateddata.txt");
const dirPath = path.join(__dirname, "text");

 function manageFileStructure(currentFilePath, destinationFilePath, dirPath) {   
    if(fs.existsSync(dirPath)){
        if(fs.existsSync(destinationFilePath)){
            console.log("file already exists");
        } else{
            fs.copyFile(currentFilePath, destinationFilePath, (err) => {
                if(err) throw err;
                });
        }
    } else {
        fs.mkdir(dirPath , (err) => {
            if(err) throw err;
            fs.copyFile(currentFilePath, destinationFilePath, (err) => {
                if(err) throw err;
                });
        })
    }
 }
manageFileStructure(currentFilePath, destinationFilePath, dirPath);