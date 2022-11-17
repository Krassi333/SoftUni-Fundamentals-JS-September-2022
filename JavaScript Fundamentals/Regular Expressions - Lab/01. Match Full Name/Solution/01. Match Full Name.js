function matchFullName(names) {
    let regExprecion =/\b[A-Z]{1}[a-z]{1,}[ ][A-Z]{1}[a-z]{1,}/g;
    let matches = regExprecion.exec(names);
    let res = [];
    while (matches != null) {
        res.push(matches[0]);
        matches = regExprecion.exec(names);
    }
    console.log(res.join(" "));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")