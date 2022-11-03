function distinctArray(array) {
    let result = [];

    for (let el of array) {
        if (!result.includes(el)) result.push(el);
    }
    console.log(result.join(" "));
}

distinctArray([1, 2, 3, 2, 4, 5, 3, 6, 7, 4, 8, 9])