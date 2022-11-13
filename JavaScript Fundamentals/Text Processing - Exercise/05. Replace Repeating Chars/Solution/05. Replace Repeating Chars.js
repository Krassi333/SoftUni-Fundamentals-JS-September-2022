function replaceRepeatingChars(string) {
    let section = "";
    let res = "";
    for (let i = 0; i < string.length; i++) {
        if (!(i == string.length - 1)) {
            if (string[i] === string[i + 1]) {
                section += string[i];
            } else {
                section = "";
                res += string[i];
            }
        } else {
            res += string[i];
        }

    }

    console.log(res);
}

replaceRepeatingChars('qqqwerqwecccwd')
