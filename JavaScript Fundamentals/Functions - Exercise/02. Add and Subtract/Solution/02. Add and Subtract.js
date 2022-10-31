function addAndSubtract(num1, num2, num3) {
    let sumFunction = (num1, num2) => num1 + num2;
    let sum = sumFunction(num1, num2);
    let subtract = (sum, num3) => sum - num3;
    let result = subtract(sum, num3);
    console.log(result);
}

addAndSubtract(42,58,100)