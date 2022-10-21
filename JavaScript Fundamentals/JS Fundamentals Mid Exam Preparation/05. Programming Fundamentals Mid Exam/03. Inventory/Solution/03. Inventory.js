function inventory(array) {
    let inventory = array.shift().split(', ');
    let [command, item] = array.shift().split(' - ');

    while (command != 'Craft!') {
        switch (command) {
            case 'Collect':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Drop':
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] == item) {
                        inventory.splice(i,1);
                    }
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] == oldItem) {
                        inventory.splice(i+1, 0, newItem);
                        break;
                    }
                }
                break;
            case 'Renew':
                for (let i = 0; i < inventory.length; i++) {
                    if (inventory[i] == item) {
                        let element = inventory[i];
                        inventory.splice(i,1);
                        inventory.push(element);
                    }
                }
                break;
        }
        [command, item] = array.shift().split(' - ');
    }

    console.log(inventory.join(', '));

}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
)