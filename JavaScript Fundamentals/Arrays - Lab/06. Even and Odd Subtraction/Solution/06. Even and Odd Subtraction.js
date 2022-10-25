function evenAndOddSubtraction(array) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let el of array) {
        let num = Number(el);
        if (num % 2 === 0) {
            sumEven += num;
        }
        else {
            sumOdd += num;
        }
    }
    console.log(sumEven - sumOdd);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]) //3
evenAndOddSubtraction([3, 5, 7, 9]) //-24
evenAndOddSubtraction([2, 4, 6, 8, 10]) //30
