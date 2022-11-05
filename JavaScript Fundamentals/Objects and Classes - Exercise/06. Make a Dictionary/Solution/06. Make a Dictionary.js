function makeADictionary(array) {
    let dictionary = {};
    for (let el of array) {

        let elAsObj = JSON.parse(el);
        let newWord = Object.keys(elAsObj);
        let isInDictionary = dictionary.hasOwnProperty(newWord);

        if (isInDictionary === false) {
            dictionary = {
                ...dictionary,
                ...elAsObj
            }
        } else {
            let description = Object.values(elAsObj);
            dictionary[newWord] = description[0];
        }

    }

    let sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
    for (let el of sortedKeys) {
        let currentWordInfo = dictionary[el];
        console.log(`Term: ${el} => Definition: ${currentWordInfo}`);
    }

}
makeADictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

]);