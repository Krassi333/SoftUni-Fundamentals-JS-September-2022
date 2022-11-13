function passwordGenerator(array) {
    let text = array[0].concat(array[1]);
    let word = array[2];

    let password = "";
    let vowelsCount = -1;
    for (let ch of text) {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            vowelsCount++;
            let replacedCh = word[vowelsCount].toUpperCase();
            password += replacedCh;

            if (vowelsCount === word.length - 1) {
                vowelsCount = -1;
            }
        } else {
            password += ch;
        }
    }

    let reversedPass="";
    for(let i=password.length-1;i>=0;i--){
        reversedPass+=password[i];
    }
    console.log(`Your generated password is ${reversedPass}`);
}

passwordGenerator([

    'ilovepizza',

    'ihatevegetables',

    'orange'

])