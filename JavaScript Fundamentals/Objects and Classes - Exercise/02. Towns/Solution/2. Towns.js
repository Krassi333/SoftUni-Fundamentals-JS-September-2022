function towns(array) {
    let townList = [];

    for (let el of array) {
        let townInfo = el.split(" | ");
        let currentTown ={
            town:townInfo[0],
            latitude: Number(townInfo[1]).toFixed(2),
            longitude:Number(townInfo[2]).toFixed(2)
        } ;
        townList.push(currentTown);
    }

    for (let el of townList) {
        console.log(el);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])


    // Резултата е с клас Town , джъдж може да го приеме като грешка.