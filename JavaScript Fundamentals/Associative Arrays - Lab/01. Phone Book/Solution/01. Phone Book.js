function phoneBook(array) {
    let input = array.slice();

    let phoneBook = {};
    while (input.length > 0) {
        let newName = input.shift()
            .split(" ");
        phoneBook[newName[0]] = newName[1];

    }
    for (let key of Object.keys(phoneBook)) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}

phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])