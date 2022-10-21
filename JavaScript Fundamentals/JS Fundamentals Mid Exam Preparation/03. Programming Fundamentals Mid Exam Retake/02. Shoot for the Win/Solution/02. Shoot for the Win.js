function shootForTheWin(array) {
    let targets = array.shift()
        .split(" ")
        .map(Number);
    let index = array.shift();
    let count = 0;

    while (index != "End") {
        index = Number(index);
        if (index >= 0 && index < targets.length && targets[index] != -1) {
            let shootTargetValue = targets[index];
            targets[index] = -1;
            count++;

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > shootTargetValue) {
                    targets[i] -= shootTargetValue;
                } else if (targets[i] >= 0) {
                    targets[i] += shootTargetValue;
                }
            }

        }
        index = array.shift();
    }

    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);


}

shootForTheWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

)