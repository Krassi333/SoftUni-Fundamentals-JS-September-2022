function addAndSubtract(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {

        result[i] = array[i];

    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0) {
            result[i] += i;
        }
        else {
            result[i] -= i;
        }
    }

    let sumFirstArray = 0;
    let sumSecondArray = 0;

    for (let i = 0; i < array.length; i++) {
        sumFirstArray += array[i];
    }

    for (let i = 0; i < result.length; i++) {
        sumSecondArray += result[i];
    }

    console.log(result);
    console.log(sumFirstArray);
    console.log(sumSecondArray);

}
addAndSubtract([-5, 11, 3, 0, 2])
//addAndSubtract()
