function sortAnArrayBy2Criteria(array) {
    let result = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(result.join('\n'));
}

sortAnArrayBy2Criteria(['alpha',

    'beta',

    'gamma'])