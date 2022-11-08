function arenaTier(array) {
    let input = array.slice();
    let gladiators = {};

    let nextLine = input.shift();
    while (nextLine != "Ave Cesar") {
        if (!nextLine.includes(" vs ")) {
            nextLine = nextLine.split(" -> ");
            let name = nextLine[0];
            let technique = nextLine[1];
            let skill = Number(nextLine[2]);

            if (gladiators.hasOwnProperty(name)) {
                if (gladiators[name].hasOwnProperty(technique)) {
                    if (gladiators[name][technique] < skill) {
                        gladiators[name][technique] = skill;
                    }
                } else {
                    gladiators[name][technique] = skill;
                }
            } else {
                gladiators[name] = {
                    [technique]: skill
                }
            }

        } else {
            let isValidDuel = false;

            nextLine = nextLine.split(" vs ");
            let firstGladiator = nextLine[0];
            let secondGladiator = nextLine[1];

            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                isValidDuel = true;
            }

            if (isValidDuel) {

                let isThereCommonTechnique = false;
                let commonTechnique;

                for (let technique1 of Object.keys(gladiators[firstGladiator])) {
                    for (let technique2 of Object.keys(gladiators[secondGladiator])) {
                        if (technique1 === technique2) {
                            isThereCommonTechnique = true;
                            commonTechnique = technique1;
                            break;
                        }
                    }
                }

                if (isThereCommonTechnique) {
                    let winner;
                    let looser;
                    if (gladiators[firstGladiator][commonTechnique] > gladiators[secondGladiator][commonTechnique]) {
                        winner = firstGladiator;
                        looser = secondGladiator;
                    } else {
                        winner = secondGladiator;
                        looser = firstGladiator;
                    }

                    delete gladiators[looser];
                }
            }
        }



        nextLine = input.shift();
    }

    let sortedByPoints = {};

    for (let gladiatorName of Object.keys(gladiators)) {
        let totalPoints = 0
        for (let points of Object.values(gladiators[gladiatorName])) {
            totalPoints += points;
        }
        //console.log(`${gladiatorName}: ${totalPoints} skill`);
        sortedByPoints = {
            ...sortedByPoints,
            [gladiatorName]: totalPoints
        }
    }

    sortedByPoints = Object.entries(sortedByPoints).sort(([keyA, valA], [kayB, valB]) => valB - valA);

    for (let el of sortedByPoints) {

        let gladiatorName = el[0];
        let gladiatorPoints = el[1];

        console.log(`${gladiatorName}: ${gladiatorPoints} skill`);

        let gladiatorTechniques = gladiators[gladiatorName];
        let sortedTechniquesByPoints = Object.entries(gladiatorTechniques).sort(([keyA, valA], [keyB, valB]) => valB - valA || keyA.localeCompare(keyB));

        for (let el of sortedTechniquesByPoints) {
            console.log(`- ${el[0]} <!> ${el[1]}`);
        }

    }


}

arenaTier(['Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'])