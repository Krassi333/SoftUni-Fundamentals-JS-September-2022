function schoolGrades(array) {
    let input = array.slice();

    let studentsList = {};

    while (input.length > 0) {
        let nextStudent = input.shift()
            .split(" ");
        let name = nextStudent.shift();
        let grades = nextStudent;

        if (!studentsList.hasOwnProperty(name)) {
            studentsList[name] = grades;
        } else {

            studentsList[name] = [
                ...studentsList[name],
                ...grades
            ];
        }

    }

    let sortedList = Object.keys(studentsList);
    sortedList = sortedList.sort((a, b) => a.localeCompare(b));
    for (let el of sortedList) {
        let sum = 0;
        for (let i = 0; i < studentsList[el].length; i++) {
            sum += Number(studentsList[el][i]);

        }
        let averageGrade = sum / studentsList[el].length;
        console.log(`${el}: ${averageGrade.toFixed(2)}`);
    }

}

schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])