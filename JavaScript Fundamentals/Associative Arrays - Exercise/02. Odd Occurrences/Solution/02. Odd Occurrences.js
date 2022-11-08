function oddOccurrences(string) {
    let input = string.split(" ");

    for (let i = 0; i < input.length; i++) {
        let res = input[i].toLowerCase();
        input[i] = res;
    }

    let result = {};
    for (let el of input) {
        if (result.hasOwnProperty(el)) {
            let oldNumber = result[el];
            result[el] = oldNumber + 1;
        } else {
            result[el] = 1;
        }

    }

    let forPrint = [];
    for (let key of Object.keys(result)) {
        if (result[key] % 2 != 0) {
            forPrint.push(key);
        }
    }

    console.log(forPrint.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')