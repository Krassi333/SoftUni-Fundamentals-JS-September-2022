function meetings(array) {
    let input = array.slice();

    let schedule = {};
    while (input.length > 0) {
        let newMeeting = input.shift()
            .split(" ");

        if (schedule.hasOwnProperty(newMeeting[0])) {
            console.log(`Conflict on ${newMeeting[0]}!`);
        } else {
            schedule[newMeeting[0]] = newMeeting[1];
            console.log(`Scheduled for ${newMeeting[0]}`);
        }


    }

    for (let key of Object.keys(schedule)) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim'])