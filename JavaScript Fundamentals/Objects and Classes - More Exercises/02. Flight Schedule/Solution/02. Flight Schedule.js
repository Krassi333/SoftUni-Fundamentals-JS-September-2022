function flightSchedule(array) {
    let input = array.slice();
    let scheduleInfo = input[0];
    let changed = input[1];
    let checkStatus = input[2];

    let schedule = {};

    for (let el of scheduleInfo) {   //'WN498 Las Vegas'
        let info = el.split(" ");
        let name = info.shift();
        schedule[name] = {
            destination: info.join(" "),
            status: "default"
        }
    }

    for (let el of changed) {
        let info = el.split(" ");
        for (let fligth of Object.keys(schedule)) {
            if (fligth == info[0]) {
                schedule[fligth].status = info[1];
            }
        }

    }

    if (checkStatus == 'Ready to fly') {
        for (let el of Object.keys(schedule)) {
            if (schedule[el].status != "Cancelled") {
                schedule[el].status = "Ready to fly";
                console.log(`{ Destination: '${schedule[el].destination}', Status: '${schedule[el].status}' }`);

            }
        }
    } else {
        for (let el of Object.keys(schedule)) {
            if (schedule[el].status == "Cancelled") {

                console.log(`{ Destination: '${schedule[el].destination}', Status: '${schedule[el].status}' }`);

            }
        }
    }
}

flightSchedule([['WN269 Delaware', 'FL2269 Oregon test test', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'],
['Ready to fly']])