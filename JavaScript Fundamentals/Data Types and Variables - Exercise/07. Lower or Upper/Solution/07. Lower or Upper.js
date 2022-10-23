function LowerOrUpper(num) {
    let symbol = num.charCodeAt(0);

    if (symbol >= 97 && symbol <= 122) {
        console.log("lower-case");
    } else {
        console.log("upper-case");
    }
}
LowerOrUpper("Lpl")