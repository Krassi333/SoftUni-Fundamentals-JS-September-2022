function lettersChangeNumbers(string) {
    string = string.split(' ');
    let sum = 0;

    for (let line of string) {
        if (line != '') {
            let firstLetter = line[0];
            let lastLetter = line[line.length - 1];
            let number = Number(line.slice(1, line.length - 1));

            if (firstLetter.charCodeAt(0) >= 97 && firstLetter.charCodeAt(0) <= 122) {
                number *= firstLetter.charCodeAt(0) - 96;
            } else {
                number /= firstLetter.charCodeAt(0) - 64;
            }

            if (lastLetter.charCodeAt(0) >= 97 && lastLetter.charCodeAt(0) <= 122) {
                number += lastLetter.charCodeAt(0) - 96;
            } else {
                number -= lastLetter.charCodeAt(0) - 64;
            }
            sum += number;
        }

    }
    console.log(sum.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f   H456z')