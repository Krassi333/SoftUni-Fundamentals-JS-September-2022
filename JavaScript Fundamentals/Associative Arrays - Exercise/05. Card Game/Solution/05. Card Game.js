function cardGame(array) {
    let input = array.slice();
    let players = {};

    while (input.length > 0) {
        let nextInfo = input.shift()
            .split(": ");
                                                        //3H, 10S, JC, KD, 5S, , 6H, 7S, KC, ,, 10C  all 9
        let name = nextInfo[0];
        let newCards = new Set(nextInfo[1]
            .split(", "));

        let oldCards = new Set(players[name]);
        newCards.forEach(el => oldCards.add(el));
        players[name] = oldCards;
    }


    Object.keys(players).forEach(key => {
        let cards = players[key];
        let points = 0;
        cards.forEach(card => {
            let cardPoints = 0;
            switch (card[0]) {
                case "2":
                    cardPoints += 2;
                    break;
                case "3":
                    cardPoints += 3;
                    break;
                case "4":
                    cardPoints += 4;
                    break;
                case "5":
                    cardPoints += 5;
                    break;
                case "6":
                    cardPoints += 6;
                    break;
                case "7":
                    cardPoints += 7;
                    break;
                case "8":
                    cardPoints += 8;
                    break;
                case "9":
                    cardPoints += 9;
                    break;
                case "1":
                    cardPoints += 10;
                    switch (card[2]) {
                        case "S":
                            cardPoints *= 4;
                            break;
                        case "H":
                            cardPoints *= 3;
                            break;
                        case "D":
                            cardPoints *= 2;
                            break;
                        case "C":
                            cardPoints *= 1;
                            break;
        
                    }
                    break;
                case "J":
                    cardPoints += 11;
                    break;
                case "Q":
                    cardPoints += 12;
                    break;
                case "K":
                    cardPoints += 13;
                    break;
                case "A":
                    cardPoints += 14;
                    break;
            }

            switch (card[1]) {
                case "S":
                    cardPoints *= 4;
                    break;
                case "H":
                    cardPoints *= 3;
                    break;
                case "D":
                    cardPoints *= 2;
                    break;
                case "C":
                    cardPoints *= 1;
                    break;

            }
            points += cardPoints;

        })
        console.log(`${key}: ${points}`);
    })


}

cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])