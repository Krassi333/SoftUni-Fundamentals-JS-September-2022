function cutAndReverse(string) {
    let halfIndex = string.length / 2;
    let res = [];
    res[0] = string.substring(0, halfIndex);
    res[1] = string.substring(halfIndex);
    for (let el of res) {
        let reversedString = '';
        for (let i = el.length-1; i >= 0; i--) {
            reversedString += el[i];
        }
        console.log(reversedString);
    }
   
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')