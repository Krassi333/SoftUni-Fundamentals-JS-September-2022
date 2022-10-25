function reverseAnArrayOfNumbers(n, array) {
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    console.log(result.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])