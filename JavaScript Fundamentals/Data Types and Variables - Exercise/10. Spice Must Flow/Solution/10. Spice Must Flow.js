function SpiceMustFlow(yield) {
    let days = 0;
    let spices = 0;

    while (yield >= 100) {
        days++;
        spices += yield;
        spices -= 26;
        yield -= 10;
    }

    if (yield < 100) {
        spices -= 26;
    }

    if (spices < 0) {
        spices = 0;
    }

    console.log(days);
    console.log(spices);

}
SpiceMustFlow(450)