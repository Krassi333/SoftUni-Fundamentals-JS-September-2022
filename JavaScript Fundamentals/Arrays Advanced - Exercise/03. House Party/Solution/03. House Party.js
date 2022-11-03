function houseParty(array) {

    let list = [];

    while (array.length > 0) {
        let guest = array.shift()
            .split(" ");
        if (guest[2] == "not") {
           list = removeGuest(list, guest[0]);

        } else {
            list = addGuest(list, guest[0]);
        }

    }
    console.log(list.join("\n"));

    function addGuest(list, name) {
        let isInList = false;

        for (let i = 0; i < list.length; i++) {
            if (name == list[i]) isInList = true;
            break;
        }

        if (isInList) {
            console.log(`${name} is already in the list!`);
        } else {
            list.push(name);
        }

        return list;
    }

    function removeGuest(list, name) {
        let result = list.filter(el => el !== name);

        if (list.length == result.length) {
            console.log(`${name} is not in the list!`);
        }

        return result;
    }

}

houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])