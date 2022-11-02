function SumFirstAndLast(array) {
    let sum = Number(array.shift()) + Number(array.pop());
    console.log(sum)

}

SumFirstAndLast(['20', '30', '40'])