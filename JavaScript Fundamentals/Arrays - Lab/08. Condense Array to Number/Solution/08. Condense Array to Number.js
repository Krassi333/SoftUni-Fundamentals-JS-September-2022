function condenseArrayToNumber(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
    }

    //let i=0;
    //let result=[];

    while (result.length > 1) {
        let temp=[];
        for (let i = 0; i < result.length - 1; i++) {

            temp.push(result[i] + result[i + 1]);
            
        }
        result=temp;


    }

    console.log(result[0]);
}
condenseArrayToNumber([2, 10, 3])  //25
condenseArrayToNumber([5, 0, 4, 1, 2])  //35
condenseArrayToNumber([1])  //1
