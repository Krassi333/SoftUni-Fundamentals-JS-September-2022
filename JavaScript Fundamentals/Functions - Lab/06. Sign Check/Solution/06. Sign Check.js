function signCheck(num1, num2, num3) {
    let countNegativNumbers = 0;

    if (isNegative(num1)) countNegativNumbers++;
    if (isNegative(num2)) countNegativNumbers++;
    if (isNegative(num3)) countNegativNumbers++;

    switch (countNegativNumbers) {
        case 0: printResult("Positive"); break;
        case 1: printResult("Negative"); break;
        case 2: printResult("Positive"); break;
        case 3: printResult("Negative"); break;
    }


    function isNegative(num) {
        if (num < 0) return true;
        else return false;
    }

    function printResult(result) {
        console.log(result);
    }
}
signCheck(-5,

    1,
    
    1)