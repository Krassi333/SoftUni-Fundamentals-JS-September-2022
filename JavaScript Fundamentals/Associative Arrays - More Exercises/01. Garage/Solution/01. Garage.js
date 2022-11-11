function garage(array) {
    let input = array.slice();
    let garage = {};

    while (input.length > 0) {
        let line = input.shift()
            .split(" - ");

        if (garage.hasOwnProperty(line[0])) {
            garage[line[0]].push(line[1]);
        } else {
            garage[line[0]] = [line[1]];
        }
    }

    for (let key of Object.keys(garage)) {
        console.log(`Garage № ${key}`);
        for (let el of garage[key]) {
            el=el.split(":");

            console.log(`--- ${el.join(" -")}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])