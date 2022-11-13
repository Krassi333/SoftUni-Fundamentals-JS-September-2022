function revealWords(words, string) {
    words = words.split(", ");
    let str = string.split(" ");

    for (let word of words) {
        for (let i = 0; i < str.length; i++) {
            if (str[i].includes("*") && word.length === str[i].length) {
                str[i] = word;
            }
        }
    }
    console.log(str.join(" "));
}


revealWords('great, learning',

    'softuni is ***** place for ******** new programming languages')