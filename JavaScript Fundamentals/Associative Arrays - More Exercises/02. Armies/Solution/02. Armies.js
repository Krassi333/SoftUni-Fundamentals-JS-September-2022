function armies(array) {
    let input = array.slice();
    let armies = {};

    while (input.length > 0) {
        let command = input.shift();

        if (command.includes('arrives')) {
            command = command.split(' ');
            command.pop();
            let name = command.join(' ');

            // if (!armies.hasOwnProperty(name)) {
            armies[name] = {};
            // }
        } else if (command.includes('defeated')) {
            command = command.split(' ');
            command.pop();
            let name = command.join(' ');

            if (armies.hasOwnProperty(name)) {
                delete armies[name];
            }
        } else if (command.includes(':')) {
            command = command.split(': ');
            let name = command[0];
            let [armyName, armyCount] = command[1].split(', ');

            if (armies.hasOwnProperty(name)) {
                armies[name][armyName] = Number(armyCount);

            }

        } else if (command.includes('+')) {
            let [armyName, armyCount] = command.split(' + ');

            for (let key of Object.keys(armies)) {
                if (armies[key].hasOwnProperty(armyName)) {
                    let newCount = armies[key][armyName] + Number(armyCount);
                    armies[key][armyName] = newCount;
                }
            }
        }
    }


    let obj = {};
    for (let el of Object.keys(armies)) {
        let sum = 0;
        let soldiersCount = Object.values(armies[el]);
        for (let count of soldiersCount) {
            sum += count;
        }
        obj[el] = sum;
    }
    let sortedObj = Object.entries(obj).sort(([keyA, valA], [keyB, valB]) => valB - valA || keyA.localeCompare(keyB));

    for (let el of sortedObj) {
        let name = el[0];
        let army = armies[name];
        let allSoldiers = 0;
        for (let armySoldiers of Object.values(army)) {
            allSoldiers += armySoldiers;
        }
        console.log(`${name}: ${allSoldiers}`);

        army = Object.entries(army).sort(([keyA, valA], [keyB, valB]) => valB - valA);
        for (let [key, val] of army) {
            console.log(`>>> ${key} - ${val}`);
        }
    }


}

armies(['Rick Burr arrives',
    // 'Rick Burr defeated',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',

    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'])