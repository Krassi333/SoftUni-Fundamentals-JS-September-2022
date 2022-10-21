function numbers(string) {
    let numbers = string.split(" ")
        .map(Number);

    let greaterNumbersThanAverage = greaterNumbers(numbers);

    if (greaterNumbersThanAverage.length == 0) {
        console.log("No");
        return;
    }
    greaterNumbersThanAverage.sort((a, b) => b - a);

    if (greaterNumbersThanAverage.length <= 5) {
        console.log(greaterNumbersThanAverage.join(" "));
    } else {
        let first5Elements = [];
        for (let i = 0; i < 5; i++) {

            first5Elements.push(greaterNumbersThanAverage[i]);
        }
        console.log(first5Elements.join(" "));
    }

    function greaterNumbers(array) {
        let numbers = array.slice();
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        let average = sum / numbers.length;
        let greaterNumbers = [];

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > average) {
                greaterNumbers.push(numbers[i]);
            }
        }

        return greaterNumbers;
    }
}

numbers('-1 -2 -3 -4 -5 -6')