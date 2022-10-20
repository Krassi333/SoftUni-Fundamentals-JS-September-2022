function theLift(array) {
    let queue = Number(array.shift());
    let wagons = array[0].split(" ")
        .map(Number);

    let isThereFreeSeats = false;

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            if (queue > (4 - wagons[i])) {
                queue -= 4 - wagons[i];
                wagons[i] = 4;
            } else {
                wagons[i] += queue;
                queue=0;
                break;
            }
        }
    }

    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] != 4) {
            isThereFreeSeats = true;
        }
    }

    if (queue === 0 && isThereFreeSeats == true) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));
    }

    if (queue != 0 && isThereFreeSeats == false) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
        console.log(wagons.join(" "));
    }

    if (queue === 0 && isThereFreeSeats == false) {
        console.log(wagons.join(" "));
    }
}

theLift([
    "20",
    "0 2 0"
   ]
   
)