function deserializeString(array) {
    let input = array.slice();
    let text = [];
    let letterInfo = input.shift();

    while (letterInfo != "end") {
        letterInfo = letterInfo.split(":");
        let letter = letterInfo[0];
        let positions = letterInfo[1].split("/");

        for (let el of positions) {
            text[el] = letter;
        }
        letterInfo = input.shift();
    }

    console.log(text.join(""));
}

deserializeString(['a:0/3/5/11',

'v:1/4',

'j:2',

'm:6/9/15',

's:7/13',

'd:8/14',

'c:10',

'l:12',

'end'])