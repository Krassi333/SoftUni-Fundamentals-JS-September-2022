function SumOfOddNumbers(n) {
    let sum = 0;
    let count = 0;
    let i = 1;

    while (count < n) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            count++;
        }
        i++;

    }

    console.log(`Sum: ${sum}`);
}
SumOfOddNumbers(5)
SumOfOddNumbers(3)
