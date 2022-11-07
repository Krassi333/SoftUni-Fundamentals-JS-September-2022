function addressBook(array) {
    let input = array.slice();

    let personInfo = {};
    while (input.length > 0) {
        let nextPerson = input.shift()
            .split(":");
        personInfo[nextPerson[0]] = nextPerson[1];
    }

    let sortedInfo = Object.keys(personInfo);
    sortedInfo = sortedInfo.sort((a, b) => a.localeCompare(b));

    for (let el of sortedInfo) {
        console.log(`${el} -> ${personInfo[el]}`);
    }

}

addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])