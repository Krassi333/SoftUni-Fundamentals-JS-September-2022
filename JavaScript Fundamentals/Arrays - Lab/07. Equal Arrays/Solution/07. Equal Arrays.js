function equalArrays(array1, array2) {
    let sum = 0;
    let isEqual = true;
    let firstDiferentIndex=0;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            isEqual = false;
            firstDiferentIndex=i;
            break;
        }

        sum+=Number(array1[i]);
    }

    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else {
        console.log(`Arrays are not identical. Found difference at ${firstDiferentIndex} index`);
    }
}
equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','6'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])
