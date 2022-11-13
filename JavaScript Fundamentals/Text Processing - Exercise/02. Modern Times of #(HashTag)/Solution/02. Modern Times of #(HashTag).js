function modernTimesofHashTag(string) {
    let str = string.split(" ");

    let words = [];

    for (let el of str) {
        if (el.length > 1 && el.startsWith("#")) {
            words.push(el);
        }
    }

    for (let word of words) {
        let isCorrect = true;
        let wordLower = word.toLowerCase();
        for (let i = 1; i < wordLower.length; i++) {
            if (wordLower[i].charCodeAt() < 97 || wordLower.charCodeAt() > 122) {
                isCorrect = false;
                break;
            }
        }

        if (isCorrect) {

            console.log(word.slice(1));
        }

    }
}

modernTimesofHashTag('The symbol # is known #variously1 in English-speaking #regions as the #number sign')