function schoolRegister(array) {
    let input = array.slice();
    let register = [];

    for (let currentStudent of input) {
        let studentInfo = currentStudent.split(",");
        let nameInfo = studentInfo[0].split(": ");
        let name = nameInfo[1];
        let gradeInfo = studentInfo[1].split(": ");
        let grade = Number(gradeInfo[1]) + 1;
        let scoreInfo = studentInfo[2].split(": ");
        let score = Number(scoreInfo[1]);
        if (score >= 3 && grade <= 12) {
            let currentStudentInfo = {
                name,
                grade,
                score
            }
            register.push(currentStudentInfo);
        }

    }

    let sortedRegister = {};

    register.forEach(student => {
        let currentGrade = student.grade;
        if (sortedRegister.hasOwnProperty(currentGrade)) {
            sortedRegister[currentGrade].push(student);
        } else {
            sortedRegister[currentGrade] = [];
            sortedRegister[currentGrade].push(student);

        }


    })

    for (let grade of Object.keys(sortedRegister)) {
        console.log(`${grade} Grade`);
        let studentsAtThisGrade = [];
        let allScore = 0;
        for (let students of sortedRegister[grade]) {
            studentsAtThisGrade.push(students.name);
            allScore += students.score;
        }
        console.log(`List of students: ${studentsAtThisGrade.join(", ")}`);
        let averageScore = allScore / sortedRegister[grade].length;

        console.log(`Average annual score from last year: ${averageScore.toFixed(2) }`);
        console.log();
    }
}
schoolRegister([

    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])