function sumEvenNumbers(array) {
    let sum = 0;
    for (let el of array) {
        let num = Number(el);
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']) //12
sumEvenNumbers(['3', '5', '7', '9']) //0

sumEvenNumbers(['2', '4', '6', '8', '10']) //30
