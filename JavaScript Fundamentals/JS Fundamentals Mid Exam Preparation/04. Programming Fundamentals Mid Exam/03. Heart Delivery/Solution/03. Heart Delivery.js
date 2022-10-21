function heartDelivery(array) {
    let houses = array.shift()
        .split("@")
        .map(Number);
    let index = 0;
    let command = array[index];
    index++;
    let currentPosition = 0;

    while (command != "Love!") {
        command = command.split(" ");
        currentPosition += Number(command[1]);
        if (currentPosition > houses.length-1) {
            currentPosition = 0;
        }

        if (houses[currentPosition] != 0) {
            houses[currentPosition] -= 2;
            if (houses[currentPosition] === 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        }else {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        }



        command = array[index];
        index++;
    }

    console.log(`Cupid's last position was ${currentPosition}.`);
    let isAllHaveValantine=true;
    let count=0;

    for(let i=0;i<houses.length;i++){
        if(houses[i] != 0){
            isAllHaveValantine=false;
            count++;
        }
    }

    if(isAllHaveValantine){
        console.log("Mission was successful.");
    }else {
        console.log(`Cupid has failed ${count} places.`);
    }
}

heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
