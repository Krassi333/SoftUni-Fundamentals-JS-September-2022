function GladiatorExpenses(lostFigths, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let isHelmetBroken = false;
    let isSwordBroken = false;
    let isShieldBroken = false;
    let isArmorBroken = false;
    let shieldBrakesCount = 0;

    let totalPrice = 0;

    for (let lostCount = 1; lostCount <= lostFigths; lostCount++) {

        if (lostCount % 2 == 0) {
            isHelmetBroken = true;
        }

        if (lostCount % 3 == 0) {
            isSwordBroken = true;
        }

        if (isHelmetBroken && isSwordBroken) {
            isShieldBroken = true;
            shieldBrakesCount++;
        }

        if (shieldBrakesCount == 2) {
            isArmorBroken = true;
            shieldBrakesCount = 0;
        }

        if (isHelmetBroken) {
            totalPrice += helmetPrice;
            isHelmetBroken = false;
        }

        if (isSwordBroken) {
            totalPrice += swordPrice;
            isSwordBroken = false;
        }

        if (isShieldBroken) {
            totalPrice += shieldPrice;
            isShieldBroken = false;
        }

        if (isArmorBroken) {
            totalPrice += armorPrice;
            isArmorBroken = false;
        }

    }

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
GladiatorExpenses(23, 12.50, 21.50, 40, 200)