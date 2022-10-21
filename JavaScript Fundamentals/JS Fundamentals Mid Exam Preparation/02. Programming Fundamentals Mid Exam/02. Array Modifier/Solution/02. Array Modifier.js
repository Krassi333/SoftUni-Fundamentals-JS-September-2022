function arrayModifier(array) {
    let numbers = array.shift()
        .split(" ")
        .map(Number);
    let commands = array.slice();
    let index = 0;
    let nextCommand = commands[index];
    index++;

    while (nextCommand != "end") {
        nextCommand = nextCommand.split(" ");
        switch (nextCommand[0]) {
            case "swap":
                let el1 = numbers[nextCommand[1]];
                let el2 = numbers[nextCommand[2]];
                numbers[nextCommand[1]] = el2;
                numbers[nextCommand[2]] = el1;

                break;
            case "multiply":
                let firstEl = numbers[nextCommand[1]];
                let secondEl = numbers[nextCommand[2]];
                numbers[nextCommand[1]] = firstEl * secondEl;
                break;

            case "decrease":
                numbers = numbers.map(el => el - 1);
                break;

        }

        nextCommand = commands[index];
        index++;
    }

    console.log(numbers.join(", "));

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  
)