function equalNeighbors(array) {
    let pairs = 0;

    for (let i = 0; i < array.length; i++) {
        pairs += pairsInOneArray(array[i]);

    }

    for (let i = 0; i < array.length-1; i++) {
        for (let k = 0; k < array[0].length; k++) {
            if (array[i][k] === array[i+1][k]) {
                pairs++;
            }
        }
    }

    console.log(pairs);
    function pairsInOneArray(array) {
        let pairs = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i + 1] === array[i]) {
                pairs++;
            }
        }

        return pairs;
    }
}

equalNeighbors([['2', '3', '4', '7', '0'],

['4', '0', '6', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '2']])