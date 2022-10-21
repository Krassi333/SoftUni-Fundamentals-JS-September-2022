function counterStrike(array) {
    let energy = Number(array.shift());
    let distance = array.slice();
    let winBattles = 0;
    let index = 0;
    let distanceToNextEnemy = distance[index];
    index++;

    while (distanceToNextEnemy != "End of battle" ) {
        distanceToNextEnemy = Number(distanceToNextEnemy);
        if (energy >= distanceToNextEnemy) {
            energy -= distanceToNextEnemy;
            winBattles++;
            if (winBattles % 3 === 0) {
                energy += winBattles;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${winBattles} won battles and ${energy} energy`);
            return;
        }
        distanceToNextEnemy = distance[index];
        index++;
    }
    if (distanceToNextEnemy == "End of battle") {
        console.log(`Won battles: ${winBattles}. Energy left: ${energy}`);
    }

}

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])


