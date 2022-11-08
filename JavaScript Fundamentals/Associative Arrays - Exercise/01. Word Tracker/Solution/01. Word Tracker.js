function wordTracker(array) {
    let input = array.slice();

    let wordsToSearch = input.shift()
        .split(" ");
    let words = {};
    for (let i = 0; i < wordsToSearch.length; i++) {
        let newWord = wordsToSearch[i];
        words[newWord] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        if (words.hasOwnProperty(input[i])) {
            let currentNumber = words[input[i]];
            words[input[i]] = currentNumber + 1;
        }
    }

let sorted=Object.entries(words).sort(([keyA,valA],[keyB,valB]) => valB-valA);

    for (let [key,value] of sorted ) {
        console.log(`${key} - ${value}`);
    }
}

wordTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])