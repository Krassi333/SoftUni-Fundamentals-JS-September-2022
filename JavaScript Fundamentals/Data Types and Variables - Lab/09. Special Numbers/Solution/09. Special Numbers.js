function SpecialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let result = i + " -> ";
        let iAsString = String(i);
        let sum = 0;

        for (let j = 0; j < iAsString.length; j++) {
            sum += Number(iAsString[j]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            result += "True";
        } else {
            result += "False";
        }

        console.log(result);

    }
}
SpecialNumbers(20) //5 7 14