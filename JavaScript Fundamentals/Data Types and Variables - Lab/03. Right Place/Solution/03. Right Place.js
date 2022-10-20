function RightPlace(word, char, wordToCompare) {
    let result = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "_") {
            result += char;
        } else {
            result += word[i];
        }
    }

    if (result === wordToCompare) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
RightPlace('Str_ng', 'i',

'String')