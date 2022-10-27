function ladybugs(array) {
    let field = [];
    let fieldLength = array.shift();

    let ladybugs = array.shift();
    let ladybugsInField = ladybugs.split(" ");

    for (let i = 0; i < fieldLength; i++) {
        for (let k = 0; k < ladybugsInField.length; k++) {
            if (i == Number(ladybugsInField[k])) {
                field[i] = 1;
            }
        }

    }

    if (field.length < fieldLength) {
        //let n=fieldLength-field.length;
        for (let i = field.length; i < fieldLength; i++) {
            field.push(0);
        }
    }

    for (let i = 0; i < field.length; i++) {
        if (field[i] != 1) {
            field[i] = 0;
        }
    }

    while (array.length >= 1) {
        let commandAsString = array.shift(0);
        let command = commandAsString.split(" ");
        let position = Number(command[0]);
        if (field[position] == 1) {
            if (command[1] == "right") {
                field[position] = 0;
                let newPosition = position + Number(command[2]);
                while (field[newPosition] == 1) {
                    newPosition += Number(command[2]);
                }
                if (newPosition < field.length) {
                    field[newPosition] = 1;
                }

            }

            if (command[1] == "left") {
                field[position] = 0;
                let newPosition = position - Number(command[2]);
                while (field[newPosition] == 1) {
                    newPosition -= Number(command[2]);
                }
                if (newPosition > 0) {
                    field[newPosition] = 1;
                }

            }
        }
    }


    console.log(field.join(" "));
}

ladybugs([ 3, '0 1','0 right 1','2 right 1' ])
//ladybugs([5, '3', '3 left 2', '1 left -2'])

