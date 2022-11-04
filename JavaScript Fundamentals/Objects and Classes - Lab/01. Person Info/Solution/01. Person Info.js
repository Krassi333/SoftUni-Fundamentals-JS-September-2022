function personInfo(firstName, lastName, age) {
    age = Number(age);

    let person = {
        firstName,
        lastName,
        age
    }

    return person;
}

personInfo("Peter",

    "Pan",

    "20")