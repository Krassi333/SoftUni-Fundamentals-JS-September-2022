function Division(number) {
    let greaterDivision = 0;

    if (number % 2 === 0) {
        greaterDivision = 2;
    }

    if (number % 3 === 0) {
        if (3 > greaterDivision) {
            greaterDivision = 3;
        }
    }

    if (number % 6 === 0) {
        if (6 > greaterDivision) {
            greaterDivision = 6;
        }
    }

    if (number % 7 === 0) {
        if (7 > greaterDivision) {
            greaterDivision = 7;
        }
    }


    if (number % 10 === 0) {
        if (10 > greaterDivision) {
            greaterDivision = 10;
        }
    }

    if (greaterDivision === 0) {
        console.log("Not divisible");
    } else {
        console.log(`The number is divisible by ${greaterDivision}`);
    }
}
//Division(30)
//Division(15)
//Division(12)
Division(1643)
