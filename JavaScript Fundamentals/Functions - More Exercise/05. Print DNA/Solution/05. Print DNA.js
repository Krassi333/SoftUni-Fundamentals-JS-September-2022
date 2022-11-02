function printDNA(helixLength) {
    let sequence = "ATCGTTAGGG";
    let index = 0;
    let count = 0;

    while (count < helixLength) {
        console.log(`**${sequence[index]}${sequence[index + 1]}**`);
        index += 2;

        if (index >= sequence.length) {
            index = 0;
        }

        count++;

        if (count == helixLength) break;

        console.log(`*${sequence[index]}--${sequence[index + 1]}*`);
        index += 2;

        if (index >= sequence.length) {
            index = 0;
        }

        count++;

        if (count == helixLength) break;

        console.log(`${sequence[index]}----${sequence[index + 1]}`);
        index += 2;

        if (index >= sequence.length) {
            index = 0;
        }

        count++;

        if (count == helixLength) break;

        console.log(`*${sequence[index]}--${sequence[index + 1]}*`);
        index += 2;

        if (index >= sequence.length) {
            index = 0;
        }

        count++;
    }
}

printDNA(15)