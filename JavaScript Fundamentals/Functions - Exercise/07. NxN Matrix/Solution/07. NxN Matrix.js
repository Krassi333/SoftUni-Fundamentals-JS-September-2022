function NxNMatrix(n) {

    for (let i = 0; i < n; i++) {
        printLine(n);
    }

    function printLine(n) {
        let result = n;
        for (let i = 1; i < n; i++) {
            result += " " + n;
        }
        console.log(result);
    }
}

NxNMatrix(5)