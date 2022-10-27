function maxNumber(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i]);
        let isBigger = true;

        for (let j = i + 1; j < array.length; j++) {
            if (number <= array[j]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            result.push(number);
        }

    }

    console.log(result.join(" "));
}
//maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])

//maxNumber([41, 41, 34, 20])

//maxNumber([27, 19, 42, 2, 13, 45, 48])
