function TriplesOfLatinLetters(n) {
    let num = Number(n);
    for (let first = 0; first < num; first++) {


        for (let second = 0; second < num; second++) {

            for (let third = 0; third < num; third++) {
                let result = String.fromCharCode(97 + first) + String.fromCharCode(97 + second) + String.fromCharCode(97 + third);
                console.log(result);
            }
        }
    }
}
TriplesOfLatinLetters("3")