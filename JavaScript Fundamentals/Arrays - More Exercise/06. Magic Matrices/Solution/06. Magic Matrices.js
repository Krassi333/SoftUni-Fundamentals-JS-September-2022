function magicMatrices(array) {
    let length = array.length;
    let isMagic = true;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += array[0][i];
    }

    for (let i = 0; i < length; i++) {

        let curentSum = 0;

        for (let j = 0; j < length; j++) {

            curentSum += Number(array[i][j]);
        }

        if (curentSum != sum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])