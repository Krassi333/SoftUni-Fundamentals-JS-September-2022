function pointsValidation(array) {
let x1=Number(array[0]);
let y1=Number(array[1]);
let x2=Number(array[2]);
let y2=Number(array[3]);

distanceBetweenPoints(x1,y1,0,0);
distanceBetweenPoints(x2,y2,0,0);
distanceBetweenPoints(x1,y1,x2,y2);





    function distanceBetweenPoints(x1, y1, x2, y2) {
        let distance = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
        distance = Math.sqrt(distance);

        let distanceAsString = String(distance);
        let isInteger = true;

        for (let i = 0; i < distanceAsString.length; i++) {
            if (distanceAsString[i] == ".") isInteger = false;
        }

        if (isInteger) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

pointsValidation([2, 1, 1, 1]);