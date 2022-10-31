function perfectNumber(number) {
    let isPerfect = true;

    if (number < 0) isPerfect = false;

    let divisors = divisorNumbers(number);
    let divisionsSum = sumOfArrayEl(divisors);

    if (number != divisionsSum) isPerfect = false;

    if (isPerfect) console.log("We have a perfect number!");
    else console.log("It's not so perfect.");


    function divisorNumbers(number) {
        let result = [];
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                result.push(i);
            }
        }
        return result;
    }

    function sumOfArrayEl(array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }

}

perfectNumber(1236498)