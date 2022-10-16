function Login(input) {
    let index = 0;
    let user = input[index];
    index++;
    let countPassword = 0;
    let password = "";

    let correctPassword = "";
    for (let i = user.length - 1; i >= 0; i--) {
        correctPassword += user[i];
    }

    while (password !== correctPassword) {
        password = input[index];
        index++;
        countPassword++;
        if (password !== correctPassword) {
             if (countPassword === 4) {
                console.log(`User ${user} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
           
        }
        else {
            console.log(`User ${user} logged in.`);
            break;
        }
    }

}
//Login(['Acer', 'login', 'go', 'let me in', 'recA'])
//Login(['momo', 'omom'])
Login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
