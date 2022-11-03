function sorting(array) {
    let numbers = array.slice();
    let result = [];
    while (numbers.length > 0) {
        let maxNumberResult = maxNumberFunction(numbers);
        numbers = maxNumberResult[0];
        let maxNumber = maxNumberResult[1];
        result.push(maxNumber);
        let minNumberResult = minNumberFunction(numbers);
        numbers = minNumberResult[0];
        let minNumber = minNumberResult[1];
        result.push(minNumber);
    }

    console.log(result.join(" "));

    function maxNumberFunction(array) {
        let maxValue = Number.MIN_SAFE_INTEGER;
        let position = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i];
                position = i;
            }
        }

        let maxNumber = array[position];
         array.splice(position,1);
        //result.unshift(maxNumber);
       // console.log(result);
        return [array, maxNumber];

    }

    function minNumberFunction(array) {
        let minValue = Number.MAX_SAFE_INTEGER;
        let position = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
                position = i;
            }
        }

        let minNumber = array[position];
         array.splice(position,1);
        //result.unshift(maxNumber);
        //console.log(result);
        return [array, minNumber];
    }
}

sorting([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47])
    //690 2 47 6 45 7 34 19 32 32