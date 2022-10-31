function loadingBar(number) {
    if (number < 100) procents(number);
    else console.log("100% Complete!");


    function procents(number) {
        let result = number + "% [";
        for (let i = 1; i <= (number/10); i++) {
            result += "%";
        }

        for (let i = 0; i < (10 - (number / 10)); i++) {
            result += ".";
        }

        result += "]";
        console.log(result);
        console.log("Still loading...");
    }
}

loadingBar(50)