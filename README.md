# 📁 Node.js File Stream & Directory Structure Organizer

This Node.js project demonstrates how to:
- Stream and process large file data chunk-by-chunk
- Organize different file types into corresponding folders (e.g., images, audio, text)
- Copy files safely using the built-in `fs` module

## 🧩 Features

- Read and process large files using `fs.createReadStream()`
- Organize files by extension (e.g., `.mp3` to `audio/`, `.jpg` to `images/`)
- Automatically create destination folders if they don't exist
- Copy and move files with error handling

## 📁 Folder Structure

project-root/
│
├── audio/ # Contains audio files (.mp3)
├── images/ # Contains image files (.jpg)
├── text/ # Contains organized .txt files
├── data.txt # Source text file for streaming/copying
├── data.json # JSON file used for testing file read/write
├── file-structure-organizer.js # Script for organizing files
├── filestream.js # Script for reading data.txt in chunks
├── index.js # Main entry script (can be extended)
├── package.json # Node project metadata
└── README.md # You're reading it :)

markdown
Copy
Edit

## 🚀 How to Run

1. **Install Node.js** if not already installed:  
   [https://nodejs.org](https://nodejs.org)

2. **Clone the repository** (or upload folder manually to GitHub):

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
Run file stream reader:

node filestream.js
Run file organizer:

node file-structure-organizer.js

---

🔧 Tech Stack
Node.js – Core file system operations using fs and path
No external dependencies – fully native

👨‍💻 Author
Sayandeep-cpu
📧 sayandeepsaha.70@gmail.com
🔗 GitHub
