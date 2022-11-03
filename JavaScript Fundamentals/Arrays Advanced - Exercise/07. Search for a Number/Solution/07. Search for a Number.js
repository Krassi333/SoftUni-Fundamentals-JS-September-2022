function searchForANumber(array1, commands) {
    let numbers = [];
    for (let i = 0; i < commands[0]; i++) {
        numbers.push(array1[i]);
    }

    for (let i = 1; i <= commands[1]; i++) {
        numbers.shift();
    }

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === commands[2]) {
            count++;
        }
    }


    console.log(`Number ${commands[2]} occurs ${count} times.`);
}


searchForANumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5])