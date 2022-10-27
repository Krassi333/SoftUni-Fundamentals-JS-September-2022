function commonElements(array1, array2) {
    let result = [];

    for (let el1 of array1) {
        for (let el2 of array2) {
            if (el1 === el2) {
                result.push(el1);
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']
)