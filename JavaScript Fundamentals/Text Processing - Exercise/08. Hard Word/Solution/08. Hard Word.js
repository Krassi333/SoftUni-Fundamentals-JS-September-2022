function hardWord(array) {
    let text = array[0];
    let missingWords = array[1]
        .sort((a, b) => b.length - a.length);

    let res = text;

    for (let word of missingWords) {
        let splitedText = res.split("_".repeat(word.length));
        res = splitedText.join(word);
    }

    console.log(res);

}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

    ['glad', 'pie', 'bring',  'During', 'amazing', 'pharmacist', 'sprained']])