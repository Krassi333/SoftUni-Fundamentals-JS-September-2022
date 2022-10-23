function SumDigits(num) {
    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    console.log(sum);
}
SumDigits(5)