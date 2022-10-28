function rotateArray(array) {
    let rotations = Number(array.pop());

    for (let i = 1; i <= rotations; i++) {
        let element = array.pop();
        array.splice(0, 0, element);

    }

    console.log(array.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut',

'Apple', '15'])