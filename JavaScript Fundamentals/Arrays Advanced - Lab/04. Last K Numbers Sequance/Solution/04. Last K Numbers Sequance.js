function lastKNumbersSequance(n, k) {
    let result = [1];

    while (result.length < n) {
        result.push(sumOfKElements(result, k));
    }

    console.log(result.join(" "));

    function sumOfKElements(array, k) {
        let sum = 0;

        if (k > array.length) {
            for (let j = 0; j < array.length; j++) {
                sum += array[j];
            }
        } else {
            for (let i = array.length - k; i < array.length; i++) {
                sum += array[i];
            }
        }
        return sum;
    }
}

lastKNumbersSequance(8,2)