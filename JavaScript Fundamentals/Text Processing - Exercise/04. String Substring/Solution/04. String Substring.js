function stringSubstring(word, text) {
    let wordLower = word.toLowerCase();
    let textLower = text.toLowerCase()
        .split(" ");
    let isTheWordIn = false;

    for (let word of textLower) {
        if (word === wordLower) {
            isTheWordIn = true;
        }
    }
    if (isTheWordIn) {
        return console.log(word);

    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('Javascript',

    'JavaScript is the best programming language')