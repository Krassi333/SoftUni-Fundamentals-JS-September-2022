function ChessBoard(n) {
    let color = [];

    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            color[i] = "black";
        } else {
            color[i] = "white";
        }
    }
    console.log(`<div class="chessboard">`);

    for (let i = 0; i < n; i++) {
        console.log(`  <div>`);
        if (i % 2 == 0) {
            for (let j = 0; j < n; j++) {
                console.log(`    <span class="${color[j]}"></span>`);
            }
        } else {
            for (let j = 1; j <= n; j++) {
                console.log(`    <span class="${color[j]}"></span>`);
            }
        }


        console.log(`  </div>`);
    }

    console.log("</div>");
}
ChessBoard(3);