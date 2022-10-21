function manOWar(array) {
    let pirateShip = array.shift().split('>').map(Number);
    let warship = array.shift().split('>').map(Number);
    let maxHealth = Number(array.shift());

    let ind = 0;
    let command = array[ind];
    ind++;

    let index;
    let damage;

    while (!command.includes('Retire')) {
        command = command.split(' ');
        switch (command[0]) {
            case 'Fire':
                index = Number(command[1]);
                damage = Number(command[2]);
                if (index >= 0 && index < warship.length) {
                    warship[index] -= damage;
                    if (warship[index] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);
                damage = Number(command[3]);
                if (startIndex >= 0 && endIndex >= 0 && startIndex < pirateShip.length && endIndex < pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                index = Number(command[1]);
                let health = Number(command[2]);
                if (index >= 0 && index < pirateShip.length) {
                    pirateShip[index] += health;
                    if (pirateShip[index] > maxHealth) {
                        pirateShip[index] = maxHealth;
                    }
                }
                break;
            case 'Status':
                let repairPoint = 0.2 * maxHealth;
                let count = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < repairPoint) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }

        command = array[ind];
        ind++;
    }

    let pirateShipSum = 0;
    let warshipSum = 0;

    for (let i = 0; i < pirateShip.length; i++) {
        pirateShipSum += pirateShip[i];
    }

    for (let i = 0; i < warship.length; i++) {
        warshipSum += warship[i];
    }

    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warshipSum}`);
}

manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

