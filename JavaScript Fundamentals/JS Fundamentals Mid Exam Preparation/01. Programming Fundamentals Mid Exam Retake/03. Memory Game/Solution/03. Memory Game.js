function memoryGame(array) {
    let cards = array.shift()
        .split(" ");
    let nextGues = array.shift();
    let count = 1;

    while (nextGues != "end") {
        nextGues = nextGues.split(" ");

        let isCheating = false;

        if (nextGues[0] == nextGues[1]) {
            isCheating = true;
        } else if (nextGues[0] < 0 || nextGues[0] >= cards.length) {
            isCheating = true;
        } else if (nextGues[1] < 0 || nextGues[1] >= cards.length) {
            isCheating = true;
        }

        if (isCheating) {
            let middle = cards.length / 2;
            let element = "-" + count + "a";
            cards.splice(middle, 0, element, element);
            console.log("Invalid input! Adding additional elements to the board");
            nextGues = array.shift();
            count++;
            continue;

        }

        if (cards[nextGues[0]] === cards[nextGues[1]]) {
            console.log(`Congrats! You have found matching elements - ${cards[nextGues[0]]}!`);

            if (nextGues[0] > nextGues[1]) {
                cards.splice(nextGues[0], 1);
                cards.splice(nextGues[1], 1);
            } else {
                cards.splice(nextGues[1], 1);
                cards.splice(nextGues[0], 1);
            }
        } else {
            console.log("Try again!");
        }

        if (cards.length == 0) {
            console.log(`You have won in ${count} turns!`);
            return;
        }

        nextGues = array.shift();
        count++;
    }

    if (nextGues == "end" && cards.length != 0) {
        console.log("Sorry you lose :(");
        console.log(cards.join(" "));
    }
}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
)