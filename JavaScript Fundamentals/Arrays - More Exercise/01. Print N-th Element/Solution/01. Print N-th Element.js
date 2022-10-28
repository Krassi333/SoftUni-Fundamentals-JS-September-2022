function printNthElement(array) {
    let arrayLength = array.length;    
    let step = Number(array.pop());
    
    let  result=[];
    for(let i=0;i<array.length;i+=step){
        result.push(array[i]);
    }

    console.log(result.join(" "));
}
printNthElement(['1', '2', '3', '4', '5', '6'])