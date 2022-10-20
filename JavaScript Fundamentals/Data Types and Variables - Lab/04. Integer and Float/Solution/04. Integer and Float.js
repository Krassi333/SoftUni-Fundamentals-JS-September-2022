function IntegerAndFloat(n1, n2, n3) {
    let sum = n1 + n2 + n3;
    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum);
}
IntegerAndFloat(9, 100, 1.1)