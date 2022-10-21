function softUniReception(array) {
    array = array.map(Number);
    let studentsPerHour = array[0] + array[1] + array[2];
    let waitingStudents = array[3];
    let countHours = 0;

    while (waitingStudents > 0) {
        countHours++;
        if (countHours % 4 == 0 && countHours != 0) {
            
            continue;
        } else {
            waitingStudents -= studentsPerHour;
        }
    }

    console.log(`Time needed: ${countHours}h.`);
}

softUniReception(['5','6','4','20'])