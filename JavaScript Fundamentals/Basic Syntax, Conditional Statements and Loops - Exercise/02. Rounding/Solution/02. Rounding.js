function Rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    let result=number.toFixed(precision);
    console.log(`${parseFloat(result)}`);
}
Rounding(3.1415926535897932384626433832795, 2)
Rounding(10, 3)
