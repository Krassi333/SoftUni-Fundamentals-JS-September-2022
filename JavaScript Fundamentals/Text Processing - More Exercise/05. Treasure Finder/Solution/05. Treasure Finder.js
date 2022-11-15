function treasureFinder(array) {
    let input = array.slice();

    let key = input.shift()
        .split(" ");
    let message = input.shift();
    let decodedMessage = "";
    let keyPosition = 0;                //"hidden&gold&at<10N70W>"

    while (message != "find") {
        for (let i = 0; i < message.length; i++) {
            let chCode = message.charCodeAt(i);

            if (keyPosition == key.length) {
                keyPosition = 0;
            }
            chCode -= Number(key[keyPosition]);
            decodedMessage += String.fromCharCode(chCode);
            keyPosition++;
        }

        message = input.shift();
        keyPosition = 0;

    }

    console.log(decodedMessage);

    let treasers = [plit("&");

    for (let i = 1; i < materials.length; i += 2) {
        treasers.push(materials[i]);
    }

 let isItCoordinats = false;
 let coordinats=[];
    for (let el of decodedMessage) {
       
        if (el == "<") {
            isItCoordinats = true;
        } else if (el == ">") {
            isItCoordinats = false;
        }

if(isItCoordinats){

}
    }

}

tr00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000easureFinder(["1 2 1 3",

    "ikegfp'jpne)bv=41P83X@", // 105 107 

    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",

    "find"])