function softUniStudents(array) {
    let input = array.slice();
    let studentsRegister = {};
    let line;

    while ((line = input.shift()) != null) {
        if (line.includes(':')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!studentsRegister.hasOwnProperty(course)) {
                studentsRegister[course] = {
                    capacity: capacity,
                    count: 0,
                    students: []
                }
            } else {
                studentsRegister[course].capacity += capacity;
            }
        } else {                           //{username}[{credits count}] with email {email} joins {course name}
            let pattern = /(?<username>\w+)\[(?<credits>\d+)\] with email (?<email>\w+@\w+\.\w+) joins (?<course>\w+#?\w+)/gm;
            let studentInfo = pattern.exec(line);
            let username = studentInfo.groups.username;
            let credits = studentInfo.groups.credits;
            let email = studentInfo.groups.email;
            let course = studentInfo.groups.course;

            if (studentsRegister.hasOwnProperty(course)) {
                let newStudent = {
                    username: username,
                    email: email,
                    credits: Number(credits)
                }

                if (studentsRegister[course].capacity >= (studentsRegister[course].count + 1)) {
                    studentsRegister[course].students.push(newStudent);
                    studentsRegister[course].count++;
                }
            }
        }
    }

    let sortedByCount = {};
    for (let course of Object.keys(studentsRegister)) {
        sortedByCount = {
            ...sortedByCount,
            [course]: studentsRegister[course].count
        }
    }
    sortedByCount = Object.entries(sortedByCount).sort(([keyA, valA], [keyB, valB]) => valB - valA);

    for (let el of sortedByCount) {
        console.log(`${el[0]}: ${studentsRegister[el[0]].capacity - el[1]} places left`);
        //--- {credits}: {username one}, {email one}
        let studentsInThisCourse = studentsRegister[el[0]].students;
        let creditsSort = (a, b) => b['credits'] - a['credits'];
        studentsInThisCourse = studentsInThisCourse.sort(creditsSort);

        for (let student of studentsInThisCourse) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
}

softUniStudents(['JavaBasics: 15',

    'user1[26] with email user1@user.com joins JavaBasics',

    'user2[36] with email user11@user.com joins JavaBasics',

    'JavaBasics: 5',

    'C#Advanced: 5',

    'user1[26] with email user1@user.com joins C#Advanced',

    'user2[36] with email user11@user.com joins C#Advanced',

    'user3[6] with email user3@user.com joins C#Advanced',

    'C#Advanced: 1',

    'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore'])