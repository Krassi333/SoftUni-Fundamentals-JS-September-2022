function pascalCaseSplitter(string) {
    let res = [];
    let word = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
            if (i == 0) {
                word = string[i];
                if( i== string.length-1){
                    res.push(word);
                }
            } else {
                res.push(word);
                word = string[i];
            }

        } else {
            if (i == string.length - 1) {
                word += string[i];
                res.push(word);
            } else {
                word += string[i];
            }

        }
    }

    console.log(res.join(", "));

}

pascalCaseSplitter('A')