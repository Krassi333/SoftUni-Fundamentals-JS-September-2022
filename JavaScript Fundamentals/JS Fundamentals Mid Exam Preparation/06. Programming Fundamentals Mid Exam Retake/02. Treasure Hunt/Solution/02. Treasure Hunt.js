function treasureHunt(array) {
    let treasure = array.shift()
        .split("|");
    let commands = array.slice();
    let nextCommand = commands.shift()
        .split(" ");

    while (nextCommand[0] != "Yohoho!") {
        switch (nextCommand[0]) {
            case "Loot":
                for (i = 1; i < nextCommand.length; i++) {
                    if (!treasure.includes(nextCommand[i])) {
                        treasure.unshift(nextCommand[i]);
                    }
                }
                break;
            case "Drop":
                if (nextCommand[1] >= 0) {

                    if (nextCommand[1] < treasure.length) {
                        let dropItem = treasure[nextCommand[1]];
                        treasure.splice(nextCommand[1], 1);
                        treasure.push(dropItem);
                    }

                }
                break;

            case "Steal":
                if (nextCommand[1] > treasure.length) {
                    nextCommand[1] = treasure.length;
                }
                let startIndex = treasure.length - nextCommand[1];
                let stolanItems = treasure.slice(startIndex);


                for (let i = 0; i < nextCommand[1]; i++) {
                    let item = treasure.pop();
                }
                console.log(stolanItems.join(", "));

        }

        nextCommand = commands.shift()
            .split(" ");
    }

    if (treasure.length == 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;

        for (let i = 0; i < treasure.length; i++) {
            sum += treasure[i].length;
        }

        let averageGain = sum / treasure.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }

}

treasureHunt((["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]))