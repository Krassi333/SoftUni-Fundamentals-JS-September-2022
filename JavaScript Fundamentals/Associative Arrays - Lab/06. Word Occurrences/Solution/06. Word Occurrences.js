function wordOccurrences(array) {
    let input = array.slice();
    let result = {};
    while (input.length > 0) {
        let word = input.shift();
        if (result.hasOwnProperty(word)) {
            let oldCount = result[word];
            result[word] = oldCount + 1;
        } else {
            result[word] = 1;
        }

    }

    let sortedEntries = Object.entries(result).sort(([keyA, valA], [kayB, valB]) => valB - valA);

    for (let [key, value] of sortedEntries) {
        console.log(`${key} -> ${value} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",

    "finally", "the", "third", "sentence"])