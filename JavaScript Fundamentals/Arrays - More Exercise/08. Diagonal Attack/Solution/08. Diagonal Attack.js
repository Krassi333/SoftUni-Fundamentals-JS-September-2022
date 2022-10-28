function diagonalAttack(array) {
    let input = [];

    for (let el of array) {
        input.push(el.split(" ").map(Number));
    }

    let n = input.length;
    let sumLeftDiagonal = 0;

    for (let i = 0; i < n; i++) {
        sumLeftDiagonal += input[i][i];
    }

    let sumRigthDiagonal = 0;

    for (let i = 0; i < n; i++) {
        sumRigthDiagonal += input[i][n - 1 - i];
    }

    if (sumLeftDiagonal === sumRigthDiagonal) {
        for (let i = 0; i < n; i++) {
            let number = input[i][i];
            input[i][i] = `${number}`;
        }
        for (let i = 0; i < n; i++) {
            let number = input[i][n - 1 - i];
            input[i][n - 1 - i] = `${number}`;
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (typeof input[i][j] != 'string') {
                    input[i][j] = sumLeftDiagonal;
                }
            }
        }

    }

    
    for (let el of input) {
        console.log(el.join(" "));
    }
}
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);