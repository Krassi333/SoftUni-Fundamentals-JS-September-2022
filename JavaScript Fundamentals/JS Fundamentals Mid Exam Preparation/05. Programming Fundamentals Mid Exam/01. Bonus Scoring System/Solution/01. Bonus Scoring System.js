function bonusScoringSystem(array) {
    array=array.map(Number);
    let studentsCount = array.shift();
    let lectureCount = array.shift();
    let additionalBonus = array.shift();
    let maxBonus = 0;
    let attendances = 0;

    for (let i = 0; i < array.length; i++) {
        let currentStudentAttendances = array[i];
        //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
        let totalBonus = currentStudentAttendances / lectureCount * (5 + additionalBonus);
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            attendances = array[i];
        }
    }

    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${attendances} lectures.`);

}

bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
)