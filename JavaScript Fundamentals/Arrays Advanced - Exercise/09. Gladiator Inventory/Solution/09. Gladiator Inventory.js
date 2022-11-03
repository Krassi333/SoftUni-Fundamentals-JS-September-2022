function gladiatorInventory(array) {
    let input = array.slice();
    let inventory = input.shift()
        .split(" ");

    while (input.length > 0) {
        let command = input.shift()
            .split(" ");
        switch (command[0]) {
            case "Buy":
                let isItAlredyBuy = false;
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] === command[1]) {
                        isItAlredyBuy = true;
                    }
                }
                if (isItAlredyBuy == false) {
                    inventory.push(command[1]);
                }
                break;
            case "Trash":
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] === command[1]) {
                        inventory.splice(i, 1);
                    }
                }
                break;
            case "Repair":
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] === command[1]) {
                        inventory = inventory.filter(el => el != command[1]);
                        inventory.push(command[1]);
                    }
                }
                break;
            case "Upgrade":
                for (let i = 0; i < inventory.length; i++) {
                    let upgradeItem = command[1].split("-");
                    if (inventory[i] === upgradeItem[0]) {
                        let upgradeEl = inventory[i] + ":" + upgradeItem[1];
                        inventory.splice(i + 1, 0, upgradeEl);
                    }
                }
                break;
        }
    }

    console.log(inventory.join(" "));

}
gladiatorInventory(['SWORD Shield Spear',

    'Trash Bow',

    'Repair Shield',

    'Upgrade Helmet-V'])