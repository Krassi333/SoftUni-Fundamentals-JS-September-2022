function smallestOfThreeNumbers(num1, num2, num3) {
    let firstNumber = smallestOfTwoNumbers(num1, num2);
    let secondNumber = smallestOfTwoNumbers(num2, num3);
    let result = smallestOfTwoNumbers(firstNumber, secondNumber);
    console.log(result);


    function smallestOfTwoNumbers(firstNumber, secondNumber) {
        if (firstNumber > secondNumber) return secondNumber;
        else return firstNumber;
    }
}

smallestOfThreeNumbers(600,

    342,
    
    123)