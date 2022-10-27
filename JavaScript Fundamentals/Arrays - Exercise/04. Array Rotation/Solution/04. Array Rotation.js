function arrayRotation(array, n) {
    for (let i = 1; i <= n; i++) {
        let element = array.shift();
        array.push(element);
    }
    console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)
