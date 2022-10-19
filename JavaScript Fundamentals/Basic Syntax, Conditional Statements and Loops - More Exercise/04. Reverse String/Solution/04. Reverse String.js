function ReverseString(word) {
    let result = "";
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }
    console.log(result);
}
ReverseString("Hello")
ReverseString("SoftUni")

ReverseString("12345")
