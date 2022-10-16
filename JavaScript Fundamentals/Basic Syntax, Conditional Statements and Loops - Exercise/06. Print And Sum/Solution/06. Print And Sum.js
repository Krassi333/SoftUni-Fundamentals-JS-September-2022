function PrintAndSum(n1, n2) {

    let sum = 0;
    let sequence = "";

    for (let i = n1; i <= n2; i++) {
        sequence += i + " ";
        sum += i;
    }

    console.log(sequence);
    console.log(`Sum: ${sum}`);
}
PrintAndSum(5, 10)
PrintAndSum(0, 26)
PrintAndSum(50, 60)
