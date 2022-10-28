function addAndRemove(array) {
    let number = 1;
    let result = [];
    while (array.length > 0) {
        let command = array.shift();
        if (command == "add") {
            result.push(number);
            number++;
        } else {
            result.pop();
            number++;
        }
    }

    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join(" "));
    }
}
addAndRemove(['remove', 'remove', 'remove'])