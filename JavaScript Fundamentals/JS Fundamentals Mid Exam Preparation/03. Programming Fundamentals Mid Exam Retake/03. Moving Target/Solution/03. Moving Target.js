function movingTarget(array) {
    let targets = array.shift()
        .split(" ")
        .map(Number);

    let command = array.shift()
        .split(" ");

    while (command[0] != "End") {
        switch (command[0]) {
            case "Shoot":
                let index = Number(command[1]);
                let shootingValue = Number(command[2]);

                if (index >= 0 && index < targets.length) {
                    targets[index] -= shootingValue;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case "Add":
                let insertIndex = Number(command[1]);
                let value = Number(command[2]);

                if (insertIndex >= 0 && insertIndex < targets.length) {
                    targets.splice(insertIndex, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let removeIndex = Number(command[1]);
                let radius = Number(command[2]);
                if (removeIndex >= 0 && removeIndex < targets.length) {
                    if (removeIndex - radius >= 0 && removeIndex + radius < targets.length) {
                        let startIndex = removeIndex - radius;
                        let indexToRemove = 2 * radius + 1;
                        targets.splice(startIndex, indexToRemove);
                    } else {
                        console.log("Strike missed!");
                        break;
                    }
                }
                break;

        }

        command = array.shift()
            .split(" ");
    }

    if (command[0] == "End") {
        console.log(`${targets.join("|")}`);
    }
}

movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])

    
)