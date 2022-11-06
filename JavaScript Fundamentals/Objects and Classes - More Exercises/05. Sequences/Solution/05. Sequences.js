function sequences(array) {

    let numbers = array.map(el => Object.values(JSON.parse(el)));
    numbers = numbers.map(el => el.sort((a, b) => b - a));
    numbers = numbers.sort((a, b) => a.length - b.length);
    for (let i = 0; i < numbers.length-1; i++) {
        let isEqual = true;
        for (let j = 0; j < numbers[i].length; j++) {
            if (numbers[i + 1] != undefined && numbers[j] != undefined) {
                if (numbers[i][j] != numbers[i + 1][j]) {
                    isEqual = false;
                }
            }

        }
        if (isEqual) {
            numbers.splice(i, 1);
        }
    }

    numbers.forEach(element => {
        console.log(`[${element.join(", ")}]`);
    });
   
}

sequences(["[1,2,3]",

"[8,9,10,11]",

"[4,5,6,7]"])