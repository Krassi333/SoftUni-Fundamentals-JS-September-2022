function carWash(commands) {
    let procents = 0;
    for (let i = 0; i < commands.length; i++) {
        procents= execution(commands[i], procents);
    }

    console.log(`The car is ${procents.toFixed(2)}% clean.`);


    function execution(string, number) {
        switch (string) {
            case "soap": number += 10; break;
            case "water": number += (number * 0.2); break;
            case "vacuum cleaner": number += (number * 0.25); break;
            case "mud": number -= (number * 0.1); break;
        }
        return number;
    }
}

carWash(["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"])