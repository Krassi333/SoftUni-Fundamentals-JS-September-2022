function arrayManipulator(array, commands) {
    let numbers = array.slice();

     while (commands.length > 0) {
    let firstCommand = commands.shift()
        .split(" ");
    switch (firstCommand[0]) {
        case "add":
            let indexAdd = Number(firstCommand[1]);
            let addNumber = Number(firstCommand[2]);
            numbers.splice(indexAdd, 0, addNumber);

            break;
        case "addMany":
            let indexAddMany = Number(firstCommand[1]);
            for (let i = 2; i < firstCommand.length; i++) {
                numbers.splice(indexAddMany, 0, Number(firstCommand[i]));
                indexAddMany++;
            }

            break;
        case "contains":
            let index = -1;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] == Number(firstCommand[1])) {
                    index = i;
                    break;
                }
            }

            console.log(index);
            break;
        case "remove":
            let indexRemove = firstCommand[1];
            numbers.splice(indexRemove, 1);
            break;
        case "shift":
            for (let i = 1; i <= firstCommand[1]; i++) {
                let firstEl = numbers.shift();
                numbers.push(firstEl);
            }
           // console.log(numbers);
            break;
        case "sumPairs":
            let result = [];

            if (numbers.length % 2 != 0) {
                numbers.push(0);
            }
            for (let i = 0; i < numbers.length; i += 2) {
                let sum = numbers[i] + numbers[i + 1];
                result.push(sum);

            }
            numbers = result;
            break;
        case "print":
            console.log(`[ ${numbers.join(", ")} ]`);
            break;

         }
    }

}

arrayManipulator([1, 2, 3, 4, 5],

['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',

'shift 1', 'print'])