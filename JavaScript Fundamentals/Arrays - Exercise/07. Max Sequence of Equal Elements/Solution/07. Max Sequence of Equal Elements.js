function maxSequenceOfEqualElements(array) {

    let maxCount = 0;
    let maxRepeatedElement = 0;

    for (let i = 0; i < array.length; i++) {

        let count = 0;
        let index=i;
        let element = array[index];
        let nextEl = array[index + 1];

        while (element == nextEl) {
            if (element == nextEl) {
                count++;
                index++;
                element = array[index ];
                nextEl = array[index + 1];
            }
        }

        if (count > maxCount) {
            maxCount = count;
            maxRepeatedElement = array[i];
        }

    }

    let result=[];
    for (let i = 0; i <= maxCount; i++) {
        result.push(maxRepeatedElement);
    }

    console.log(result.join(" "));
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])