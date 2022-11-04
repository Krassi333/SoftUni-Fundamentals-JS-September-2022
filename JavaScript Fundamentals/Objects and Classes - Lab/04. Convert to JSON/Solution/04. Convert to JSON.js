function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let personAsString = JSON.stringify(person);
    console.log(personAsString);
}

convertToJSON('George', 'Jones',

    'Brown')