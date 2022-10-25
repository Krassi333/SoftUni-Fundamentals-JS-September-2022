function reverseInPlace(array) {
    let element = '';
    for (let i = 0; i < array.length / 2; i++) {

        element = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = element;
    }

    console.log(array.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])  //e d c b a 
