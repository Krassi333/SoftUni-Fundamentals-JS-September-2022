function valueOfString(array) {
    let input = array.slice();
    let text = input[0];
    let command = input[1];
    let sum = 0;

    if (command === "UPPERCASE") {
        for (let i = 0; i < text.length; i++) {
            let asciiCode = text.charCodeAt(i);
            if (asciiCode >= 65 && asciiCode <= 90) {
                sum += asciiCode;
            }
        }

    } else {
        for (let i = 0; i < text.length; i++) {
            let asciiCode = text.charCodeAt(i);
            if (asciiCode >= 97 && asciiCode <= 122) {
                sum += asciiCode;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}
valueOfString(['AC/DC',

'UPPERCASE']);