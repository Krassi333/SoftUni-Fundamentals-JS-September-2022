function train(array) {
    let train = array.shift()
        .split(" ")
        .map(Number);
    let capacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        if (command[0] == "Add") {
            add(train, command[1]);
        } else {
            for (let k = 0; k < train.length; k++) {
                if (train[k] + Number(command[0]) <= capacity) {
                    train[k] += Number(command[0]);
                    break;
                }
            }
        }

    }

    console.log(train.join(" "));

    function add(array, number) {
        array.push(Number(number));
        return array;
    }
}

train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])
    //72 54 21 12 4 75 23 10 0