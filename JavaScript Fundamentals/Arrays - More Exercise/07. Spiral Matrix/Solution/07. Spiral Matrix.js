function spiralMatrix(rowsNumber, columnsNumber) {
    let result = [];

    for (let i = 0; i < rowsNumber; i++) {
        result.push([]);
    }

    let number = 1;
    let startCol = 0;
    let endCol = columnsNumber - 1;
    let startRow = 0;
    let endRow = rowsNumber - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = number;
            number++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = number;
            number++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = number;
            number++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = number;
            number++;
        }
        startCol++;
    }

   for(let el of result){
    console.log(el.join(" "));
   }
}
spiralMatrix(5, 5)