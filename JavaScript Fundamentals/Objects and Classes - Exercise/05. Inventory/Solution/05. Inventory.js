function inventory(array) {
    let heroes = [];
    array.forEach(element => {
        let heroesInfo = element.split(" / ");

        let currentHeroe = {
            name: heroesInfo[0],
            level: Number(heroesInfo[1]),
            items: heroesInfo[2]
        };

        heroes.push(currentHeroe);

    });

    heroes = heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(element => {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    })
}

inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])