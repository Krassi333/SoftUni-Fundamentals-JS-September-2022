function muOnline(string) {
    let input = string.split("|");
    let health = 100;
    let bitcoins = 0;
    let roomCount = 0;

    for (let i = 0; i < input.length; i++) {
        let [command, number] = input[i].split(' ');
        number = Number(number);
        roomCount++;
        switch (command) {
            case 'potion':
                health += number;
                if (health <= 100) {
                    console.log(`You healed for ${number} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else {
                    console.log(`You healed for ${100 - (health - number)} hp.`);
                    health=100;
                    console.log(`Current health: ${health} hp.`);
                    
                }
                //roomCount++;
                break;
            case 'chest':
                bitcoins += number;
                console.log(`You found ${number} bitcoins.`);
                //roomCount++;
                break;
            default:
                health -= number;
                //roomCount++;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);

                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")