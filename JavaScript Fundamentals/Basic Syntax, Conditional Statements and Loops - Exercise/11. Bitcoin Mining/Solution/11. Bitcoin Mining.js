function BitcoinMining(input) {
    let index = 0;
    let shiftDays = input.length;
    let money = 0;
    let bitcoins = 0;
    let firstBitcoin = 0;

    for (let i = 1; i <= shiftDays; i++) {
        let gold = input[index];
        index++;

        if (i % 3 === 0) {
            gold -= gold * 0.3;
        }

        money += gold * 67.51;

        if (money >= 11949.16) {
            while (money >= 11949.16) {
                bitcoins++;

                if (bitcoins === 1) {
                    firstBitcoin = i;
                }

                money -= 11949.16;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstBitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
//BitcoinMining([100, 200, 300])
//BitcoinMining([50, 100])
BitcoinMining([3124.15, 504.212, 2511.124])
