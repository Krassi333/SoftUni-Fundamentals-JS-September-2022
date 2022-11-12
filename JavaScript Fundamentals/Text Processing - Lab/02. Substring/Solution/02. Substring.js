function substring(str, startIndex, count) {
    let endIndex = startIndex + count;
    let result = str.substring(startIndex, endIndex);
    console.log(result);
}

substring('SkipWord', 4, 7)