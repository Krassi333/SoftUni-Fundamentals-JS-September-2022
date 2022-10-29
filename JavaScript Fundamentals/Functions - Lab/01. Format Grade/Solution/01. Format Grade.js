function formatGrade(grade) {

    let description;
    if (grade < 3.00) description = "Fail";
    else if (grade >= 3.00 && grade < 3.50) description = "Poor";
    else if (grade >= 3.50 && grade < 4.50) description = "Good";
    else if (grade >= 4.50 && grade < 5.50) description = "Very good";
    else  description = "Excellent"; 

    print(description, grade);

    function print(description, grade) {
        if (description == "Fail") console.log(`${description} (${Math.floor(grade)})`);
        else console.log(`${description} (${grade.toFixed(2)})`);

    }
}
formatGrade(2.99)