function storage(array) {
    let input = array.slice();

    let storage = new Map();

    while (input.length > 0) {
        let newProduct = input.shift()
            .split(" ");

        if (storage.has(newProduct[0])) {
            let oldQuantity = Number(storage.get(newProduct[0]));
            storage.set(newProduct[0], oldQuantity + Number(newProduct[1]));
        } else {
            storage.set(newProduct[0], newProduct[1]);
        }
    }

    for (let key of Array.from(storage.keys())) {
        console.log(`${key} -> ${storage.get(key)}`);
    }
}

storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40'])