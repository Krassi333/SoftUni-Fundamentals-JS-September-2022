function piccolo(array) {
    let input = array.slice();
    let parking = new Set();

    while (input.length > 0) {
        let nextCommand = input.shift()
            .split(", ");
        let command = nextCommand[0];
        let number = nextCommand[1];

        if (command === "IN") {
            parking.add(number);
        } else {
            parking.delete(number);
        }
    }

    if (parking.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedParking = Array.from(parking).sort();
        for (let el of sortedParking) {
            console.log(el);
        }
    }

    //console.log(sortedParking);
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])