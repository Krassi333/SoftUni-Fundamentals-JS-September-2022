function asciiSumator(array) {
    let input = array.slice();
    let firstCh = input[0].charCodeAt(0);
    let secondCh = input[1].charCodeAt(0);
    let startCode;
    let endCode;

    if (firstCh < secondCh) {
        startCode = firstCh;
        endCode = secondCh;
    } else {
        startCode = secondCh;
        endCode = firstCh;
    }

    let text = input[2];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let chCode = text.charCodeAt(i);
        if (chCode > startCode && chCode < endCode) {
            sum += chCode;
        }
    }

    console.log(`${sum}`);
    console.log(`\n`);
}

asciiSumator(['?',

'E',

'@ABCEF'])