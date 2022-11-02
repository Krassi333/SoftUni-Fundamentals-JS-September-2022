function firstAndLastKNumbers(array) {
    let k = array.shift();
    let firstElements = array.slice(0, k);
    let lastElements = array.slice(array.length - k, array.length + 1);
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));

}

firstAndLastKNumbers([2,

    7, 8, 9])