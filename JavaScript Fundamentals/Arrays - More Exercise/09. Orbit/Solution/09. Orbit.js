function orbit(array) {
    let [width, height, x, y] = [array[0], array[1], array[2], array[3]];
    let field = [];

    for (let i = 0; i < height; i++) {
        field[i] = [];
    }

    field[x][y] = 1;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            field[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    }

    for (let el of field) {
        console.log(el.join(" "));
    }

}

orbit([5, 5, 2, 2])