function bombNumbers(array1, array2) {
    let numbers = array1.slice();
    let bombNumber = array2.slice();

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == bombNumber[0]) {
            for (let a = 1; a <= bombNumber[1]; a++) {
                delete numbers[i - a];
                delete numbers[i + a];
                // numbers = numbers.slice(i-1, 1);
                //numbers = numbers.slice(i+1, 1);
            }

            delete numbers[i];
        }
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != undefined) {
            sum += numbers[i];
        }
    }
    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1,

    2, 1, 1, 1],
    
    [2, 1])