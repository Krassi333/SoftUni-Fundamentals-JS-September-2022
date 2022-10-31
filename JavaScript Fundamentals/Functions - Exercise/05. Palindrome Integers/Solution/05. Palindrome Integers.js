function palindromeIntegers(arrayOfNumners) {

    for (let i = 0; i < arrayOfNumners.length; i++) {
        let result = isPalindrome(arrayOfNumners[i]);
        console.log(result);
    }


    function isPalindrome(num) {
        let numForward = String(num);
        let numBackward = "";

        for (let i = numForward.length - 1; i >= 0; i--) numBackward += numForward[i];

        if (numForward == numBackward) return true;
        else return false;
    }
}

palindromeIntegers([32,2,232,1010])