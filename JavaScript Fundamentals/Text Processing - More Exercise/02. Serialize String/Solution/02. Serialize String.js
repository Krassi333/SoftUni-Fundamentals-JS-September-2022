function serializeString(array) {
    let input = array.slice();
    let text = input[0];

    let serializedText = {};

    for (let i = 0; i < text.length; i++) {
        if (serializedText.hasOwnProperty(text[i])) {
            serializedText[text[i]].push(i);
        } else {
            serializedText[text[i]] = [i];
        }
    }

    for (let [key, val] of Object.entries(serializedText)) {
        console.log(`${key}:${val.join("/")}`);
    }
}

serializeString(["avjavamsdmcalsdm"])