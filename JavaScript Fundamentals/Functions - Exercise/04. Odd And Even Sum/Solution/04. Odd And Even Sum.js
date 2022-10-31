function oddAndEvenSum(num) {
    let numAsString = String(num);
    let sumOdd = 0;
    let sumEven = 0;


    for (let i = 0; i < numAsString.length; i++) {
        if (Number(numAsString[i]) % 2 == 0) sumEven += Number(numAsString[i]);
        else sumOdd += Number(numAsString[i]);
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(3495892137259234)