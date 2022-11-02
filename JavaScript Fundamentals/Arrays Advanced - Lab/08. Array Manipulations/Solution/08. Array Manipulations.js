function arrayManipulations(input) {
    let arrayAsString = input.shift();
   // let array = 
    let result =arrayAsString.split(" ");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        switch (command[0]) {
            case "Add":
                result = add(result, command[1]);              
                break;
            case "Remove":
                result = remove(result, command[1]);              
                break;
            case "RemoveAt":
                result = removeAt(result, command[1]);               
                break;
            case "Insert":
                result = insert(result, command[1], command[2]);
                break;
        }
    }

    console.log(result.join(" "));

    function add(array, number) {
        let result = array.slice();
        result.push(number);
        return result;
    }

    function remove(array, number) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] != number) {
                result.push(array[i]);
            }
        }

        return result;
    }

    function removeAt(array, index) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (i != index) {
                result.push(array[i]);
            }
        }

        return result;
    }

    function insert(array, number, index) {
        let result = array.slice();
        result.splice(index, 0, number);
        return result;

    }
}

arrayManipulations(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])