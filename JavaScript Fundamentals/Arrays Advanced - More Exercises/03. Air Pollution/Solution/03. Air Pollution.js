function airPollution(array, commands) {

    let mapSofia = array.slice();

    for (let i = 0; i < 5; i++) {
        mapSofia[i] = mapSofia[i].split(" ")
            .map(Number);
    }

    while (commands.length > 0) {
        let nextCommand = commands.shift()
            .split(" ");

        switch (nextCommand[0]) {
            case "breeze":
                let row = nextCommand[1];
                for (let i = 0; i < 5; i++) {
                    mapSofia[row][i] -= 15;
                    if (mapSofia[row][i] < 0) {
                        mapSofia[row][i] = 0;
                    }
                }
                break;

            case "gale":
                let column = nextCommand[1];
                for (let i = 0; i < 5; i++) {
                    mapSofia[i][column] -= 20;
                    if (mapSofia[i][column] < 0) {
                        mapSofia[i][column] = 0;
                    }
                }
                break;
            case "smog":
                let value = Number(nextCommand[1]);
                for (let i = 0; i < 5; i++) {
                    for (let k = 0; k < 5; k++) {
                        mapSofia[i][k] += value;
                    }
                }
                break;
        }
    }
    let pollutedCells = [];
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            if (mapSofia[i][k] >= 50) {
                let curentCell = "[" + i + "-" + k + "]";
                pollutedCells.push(curentCell);
            }
        }
    }

    if (pollutedCells.length == 0) {
        console.log("No polluted areas");
    } else {
        console.log(`Polluted areas: ${pollutedCells.join(", ")}`);
    }


}

airPollution(['5 7 2 14 4',

    '21 14 2 5 3',

    '3 16 7 42 12',

    '2 20 8 39 14',

    '7 34 1 10 24'],

    ['breeze 1', 'gale 2', 'smog 35'])