function magicSum(array, n) {
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            let sum = array[i];
            sum += array[j];

            if (sum == n) {
                let result = [];
                result.push(array[i]);
                result.push(array[j]);
                console.log(result.join(" "));
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],

6)