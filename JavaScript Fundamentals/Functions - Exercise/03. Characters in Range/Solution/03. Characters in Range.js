function charactersInRange(char1, char2) {
    let asciiCode = char => char.charCodeAt(0);
    let firstCharCode = asciiCode(char1);
    let secondCharCode = asciiCode(char2);
    let result = "";

    if (secondCharCode < firstCharCode) {
        let temp = firstCharCode;
        firstCharCode = secondCharCode;
        secondCharCode = temp;
    }

    for (let i = firstCharCode + 1; i < secondCharCode; i++) result += String.fromCharCode(i) + " ";

    console.log(result);
}

charactersInRange('#', ':')