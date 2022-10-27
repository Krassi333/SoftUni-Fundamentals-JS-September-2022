function equalSums(array) {
    let isNoEqualSum = true;
    for (let i = 0; i < array.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (j = 0; j < i; j++) {
            leftSum += array[j];
        }

        for (let j = i + 1; j < array.length; j++) {
            rightSum += array[j];
        }

        if (leftSum == rightSum) {
            console.log(i);
            isNoEqualSum = false;
        }
    }

    if (isNoEqualSum) {
        console.log("no");
    }


}
equalSums([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])