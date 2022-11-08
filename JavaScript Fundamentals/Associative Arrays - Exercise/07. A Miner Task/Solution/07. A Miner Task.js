function aMinerTask(array) {
    let input = array.slice();

    let resources = {};

    let index = 0;   

    while (index < input.length) {

        let metal = input[index];
        index++;
        let quantity = Number(input[index]);
        index++;

        if (resources.hasOwnProperty(metal)) {
            let oldQuantity = resources[metal];
            quantity += oldQuantity;
            resources[metal] = quantity;

        } else {
            resources[metal] = quantity;
        }
        
    }

    Object.keys(resources).forEach(key =>{
        console.log(`${key} -> ${resources[key]}`);
    })
}

aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])