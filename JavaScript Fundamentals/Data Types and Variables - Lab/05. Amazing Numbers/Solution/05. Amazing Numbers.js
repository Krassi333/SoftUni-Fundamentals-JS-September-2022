function AmazingNumbers(num) {
    let numAsString = String(num);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    let sumAsString = String(sum);
    let result = num + " Amazing? ";
    let isAmazing = false;

    for (let i = 0; i < sumAsString.length; i++) {

        if (sumAsString[i] == 9) {
            isAmazing = true;
        }
    }

    isAmazing ? result += "True" : result += "False";
    console.log(result);
}
AmazingNumbers(1233)