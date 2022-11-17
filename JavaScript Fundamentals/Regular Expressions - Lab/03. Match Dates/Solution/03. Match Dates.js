function matchDates(dates) {

    let res = [];
    let pattern = /\b[0-9]{2}([\/|.|-])[A-Z]{1}[a-z]{2}\1[0-9]{4}\b/g;
    let match = pattern.exec(dates);

    while (match != null) {
        res.push(match[0]);
        match = pattern.exec(dates);
    }
    for (let el of res) {
        if (el.includes("/")) {
            let info = el.split("/");
            console.log(`Day: ${info[0]}, Month: ${info[1]}, Year: ${info[2]}`);
        } else if (el.includes(".")) {
            let info = el.split(".");
            console.log(`Day: ${info[0]}, Month: ${info[1]}, Year: ${info[2]}`);
        } else {
            let info = el.split("-");
            console.log(`Day: ${info[0]}, Month: ${info[1]}, Year: ${info[2]}`);
        }
    }

}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])