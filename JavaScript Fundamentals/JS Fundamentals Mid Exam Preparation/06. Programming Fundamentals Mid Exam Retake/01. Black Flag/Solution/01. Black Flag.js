function blackFlag(array) {
    array = array.map(Number);
    let days = array[0];
    let dayPlunder = array[1];
    let expectedPlunder = array[2];

    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        totalPlunder += dayPlunder;

        if (i % 3 == 0) {
            totalPlunder += 0.5 * dayPlunder;
        }

        if (i % 5 == 0) {
            totalPlunder -= 0.3 * totalPlunder;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((100 * totalPlunder) / expectedPlunder).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
"20",
"380"]
)