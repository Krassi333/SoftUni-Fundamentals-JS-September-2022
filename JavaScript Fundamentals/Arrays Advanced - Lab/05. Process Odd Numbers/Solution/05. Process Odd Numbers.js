function processOddNumbers(array) {
    let result = oddPositionsNumbers(array);
    let double = result.map(x => x * 2);
    let reversedArray = double.reverse();
    console.log(reversedArray.join(" "));


    function oddPositionsNumbers(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (i % 2 != 0) {
                result.push(array[i]);
            }
        }

        return result;
    }



}

processOddNumbers([3, 0, 10, 4, 7, 3])