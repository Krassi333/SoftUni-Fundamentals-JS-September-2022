function jansNotation(array) {
    let numbers = [];
    let input = array.slice();

    while (input.length > 0) {
        let nextInput = input.shift();

        if (typeof nextInput == "number") {
            numbers.push(nextInput);
        } else {
            let firstNumber;
            let secondNumber;
            let functionResult;

            switch (nextInput) {
                case "+":
                    functionResult = lastTwoNumbrs(numbers);
                    firstNumber = functionResult[0];
                    secondNumber = functionResult[1];

                    if (firstNumber != undefined && secondNumber != undefined) {
                        let sum = firstNumber + secondNumber;
                        numbers.push(sum);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case "-":
                    functionResult = lastTwoNumbrs(numbers);
                    firstNumber = functionResult[0];
                    secondNumber = functionResult[1];

                    if (firstNumber != undefined && secondNumber != undefined) {
                        let result = firstNumber - secondNumber;
                        numbers.push(result);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case "*":
                    functionResult = lastTwoNumbrs(numbers);
                    firstNumber = functionResult[0];
                    secondNumber = functionResult[1];

                    if (firstNumber != undefined && secondNumber != undefined) {
                        let multiply = firstNumber * secondNumber;
                        numbers.push(multiply);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
                case "/":
                    functionResult = lastTwoNumbrs(numbers);
                    firstNumber = functionResult[0];
                    secondNumber = functionResult[1];

                    if (firstNumber != undefined && secondNumber != undefined) {
                        let devide = firstNumber / secondNumber;
                        numbers.push(devide);
                    } else {
                        console.log("Error: not enough operands!");
                        return;
                    }
                    break;
            }

        }



    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(numbers[0]);
    }

    function lastTwoNumbrs(array) {
        let firstNumber;
        let secondNumber;

        if (array.length > 0) {
            secondNumber = array.pop();
        }

        if (array.length > 0) {
            firstNumber = array.pop();
        }

        return [firstNumber, secondNumber];

    }


}

jansNotation([5,

    3,
    
    4,
    
    '*',
    
    '-'])