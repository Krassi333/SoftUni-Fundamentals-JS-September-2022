function ThePyramidOfKingDjoser(base, increment) {

    let row = 0;
    let marble = 0;
    let stone = 0;
    let lapis = 0;
    let gold = 0;

    for (let i = base; i >= 1; i -= 2) {
        row++;

        if (i - 2 <= 0) {
            gold = i * i * increment;
            break;
        }

        stone += (i - 2) * (i - 2) * increment;

        if (row % 5 === 0) {

            lapis += (i - 1) * 4 * increment;
        } else {
            marble += (i - 1) * 4 * increment;

        }


    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(row * increment)}`);

}
//ThePyramidOfKingDjoser(11, 1)
//ThePyramidOfKingDjoser(11, 0.75)
//ThePyramidOfKingDjoser(12, 1)
ThePyramidOfKingDjoser(23, 0.5)
