function buildAWall(array) {
    array = array.map(Number);
    let workers = array.slice();
    let concrete = [];

    while (workers.length > 0) {
        let concretePerDay = 0;

        for (let i = 0; i < workers.length; i++) {
            if (workers[i] === 30) {
                workers.splice(i, 1);
                i--;

            }
        }

        for (let i = 0; i < workers.length; i++) {
            workers[i] += 1;
            concretePerDay += 195;
        }


        if (concretePerDay != 0) concrete.push(concretePerDay);
    }

    console.log(concrete.join(", "));

    let sum = 0;

    for (let i = 0; i < concrete.length; i++) {
        sum += concrete[i];
    }

    let price = sum * 1900;
    console.log(`${price} pesos`);

}

buildAWall([30, 17, 25, 25]) 
