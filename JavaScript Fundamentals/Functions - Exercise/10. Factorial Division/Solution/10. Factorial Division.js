function factorialDivision(num1, num2) {
    let firsFactorial = factorial(num1);
    let secondFactorial = factorial(num2);
    let result = firsFactorial / secondFactorial;
    console.log(`${result.toFixed(2)}`);

    function factorial(num) {
        let result = 1;
        for (let i = 0; i < num; i++) {
            result *= (num - i);
        }
        return result;
    }
}

factorialDivision(5,2)