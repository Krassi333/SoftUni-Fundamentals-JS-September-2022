function partyTime(array) {
    let input = array.slice();
    let vip = [];
    let regular = [];

    let index = 0;
    let guest = input[index];
    index++;

    while (guest != "PARTY") {
        let firstCh = Number(guest[0]);
        if (isNaN(firstCh)) {
            regular.push(guest);
        } else {
            vip.push(guest);
        }

        guest = input[index];
        index++;
    }

    while (index < input.length) {
        guest = input[index];
        index++;

        let firstCh = Number(guest[0]);
        if (isNaN(firstCh)) {
            let position = regular.indexOf(guest);
            regular.splice(position, 1);
        } else {
            let position = vip.indexOf(guest);
            vip.splice(position, 1);
        }
    }
    let countOfGuests = regular.length + vip.length;
    console.log(countOfGuests);

    for (let el of vip) {
        console.log(el);
    }

    for (let el of regular) {
        console.log(el);
    }





}

partyTime(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])