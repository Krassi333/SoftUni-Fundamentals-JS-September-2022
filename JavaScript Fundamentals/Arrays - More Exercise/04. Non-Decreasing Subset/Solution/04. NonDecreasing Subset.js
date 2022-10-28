function nonDecreasingSubset(array) {
    let biggestNumber = array[0];
    let result = [biggestNumber];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= biggestNumber) {
            result.push(array[i]);
            biggestNumber = array[i];
        }
    }

    console.log(result.join(" "));
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])