function countStringOccurrences(text, word) {
    let newText = text.split(" ");
    let count = 0;
    for (let el of newText) {
        if (el === word) {
            count++;
        }
    }
    console.log(count);
}

countStringOccurrences('softuni is great place for learning new programming languages',

'softuni')