function passwordValidator(password) {

    let lengthCheckResult = lengthCheck(password);
    let contentCheckResult = contentCheck(password);
    let digitsCheckResult = digitsCheck(password);

    if (lengthCheckResult == false) console.log("Password must be between 6 and 10 characters");

    if (contentCheckResult == false) console.log("Password must consist only of letters and digits");

    if (digitsCheckResult == false) console.log("Password must have at least 2 digits");

    if (lengthCheckResult && contentCheckResult && digitsCheckResult) console.log("Password is valid");

    function lengthCheck(string) {
        if (string.length >= 6 && string.length <= 10) return true;
        else return false;
    }

    function contentCheck(string) {
        let isCorrect = true;

        for (let i = 0; i < string.length; i++) {
            let charCode = string.charCodeAt(i);

            if ((charCode >= 65 && charCode <= 90)
                || (charCode >= 97 && charCode <= 122)
                || (charCode >= 48 && charCode <= 57)) isCorrect = true;
            else {
                isCorrect = false; 
                break;
            }

        }

        if (isCorrect) return true;
        else return false;
    }

    function digitsCheck(string) {
        let countDigits = 0;

        for (let i = 0; i < string.length; i++) {
            let charCode = string.charCodeAt(i);

            if (charCode >= 48 && charCode <= 57) countDigits++;
        }

        if (countDigits >= 2) return true;
        else return false;
    }
}

passwordValidator('logIn')