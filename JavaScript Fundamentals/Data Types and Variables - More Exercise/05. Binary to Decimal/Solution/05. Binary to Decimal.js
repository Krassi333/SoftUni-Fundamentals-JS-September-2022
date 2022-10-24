function BinaryToDecimal(binNumber) {
    //1011 = (1.23) + (0.22) + (1.21) + (1.20) = 8 + 0 + 2 + 1 = 11
    let number = 0;

    for (let i = 0; i < binNumber.length; i++) {
        let position = binNumber.length - 1 - i;
        let digit = binNumber[position];
        number += Number(digit)* Math.pow(2, i);

    }

    console.log(number);
}
BinaryToDecimal('11110000')