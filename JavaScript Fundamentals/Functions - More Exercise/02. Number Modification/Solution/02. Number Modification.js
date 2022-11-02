function numberModification(number) {
    let numberAsString = String(number);
let average = findAverage(numberAsString);

    while (average < 5) {
        numberAsString += "9";
        average = findAverage(numberAsString);
    }
    console.log(numberAsString);

    function findAverage(numberAsString) {

        let sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            sum += Number(numberAsString[i]);
        }

        let average = sum / numberAsString.length;
        return average;
    }


}

numberModification(5835)