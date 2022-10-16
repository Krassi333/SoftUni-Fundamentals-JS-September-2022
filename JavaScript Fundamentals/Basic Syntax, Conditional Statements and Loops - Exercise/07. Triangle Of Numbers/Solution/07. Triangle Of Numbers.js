function TriangleOfNumbers(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row);
        row = "";
    }
}
//TriangleOfNumbers(3)
TriangleOfNumbers(5)
//TriangleOfNumbers(6)
