const fs = require('node:fs');

function initGame() {
}

function loadWord() {
    let allWords = fs.readFileSync('./wordList.txt').toString('UTF-8').split('\n');
    let randomIndex = Math.floor(Math.random() * 14855) + 1;
    let randomWord = allWords[randomIndex];
    return randomWord;
}
