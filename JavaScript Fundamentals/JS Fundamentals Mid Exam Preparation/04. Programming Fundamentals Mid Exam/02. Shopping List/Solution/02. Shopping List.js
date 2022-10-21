function shoppingList(array) {
    let groceryList = array.shift()
        .split("!");
    let index = 0;
    let commandAsString = array[index];
    index++;

    while (commandAsString != "Go Shopping!") {
        let command = commandAsString.split(" ");

        switch (command[0]) {
            case "Urgent":
                let isInList = false;
                for (let i = 0; i < groceryList.length; i++) {
                    if (groceryList[i] === command[1]) {
                        isInList = true;
                    }
                }
                if (isInList == false) {
                    groceryList.unshift(command[1]);
                }
                break;
            case "Unnecessary":
                for (let i = 0; i < groceryList.length; i++) {
                    if (groceryList[i] === command[1]) {
                        groceryList.splice(i, 1);
                        break;
                    }
                }
                break;
            case "Correct":
                for (let i = 0; i < groceryList.length; i++) {
                    if (groceryList[i] === command[1]) {
                        groceryList[i] = command[2];
                        break;
                    }
                }
                break;
            case "Rearrange":
                for (let i = 0; i < groceryList.length; i++) {
                    if (groceryList[i] === command[1]) {
                        let grocery = groceryList[i];
                        groceryList.splice(i, 1);
                        groceryList.push(grocery);
                        break;
                    }
                }
                break;

        }
        commandAsString = array[index];
        index++;

    }

    console.log(groceryList.join(", "));
}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Banana",
"Correct Pepper Onion",
"Rearrange Milk",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

)