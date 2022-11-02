function radioCrystals(array) {
    let target = array.shift();

    while (array.length > 0) {
        let thickness = array.shift();
        console.log(`Processing chunk ${thickness} microns`);
        let countCut = 0;

        while (cut(thickness) >= target) {
            thickness = cut(thickness);
            countCut++;
        }

        if (countCut > 0) {
            console.log(`Cut x${countCut}`);
            thickness = transportingAndWashing(thickness);
        }

        if (thickness === target) {
            console.log(`Finished crystal ${thickness} microns`);
            continue;
        }


        let countLap = 0;

        while (lap(thickness) >= target) {
            thickness = lap(thickness);
            countLap++;
        }
        if (countLap > 0) {
            console.log(`Lap x${countLap}`);
            thickness = transportingAndWashing(thickness);
        }


        if (thickness === target) {
            console.log(`Finished crystal ${thickness} microns`);
            continue;
        }


        let countGrind = 0;

        while (grind(thickness) >= target) {
            thickness = grind(thickness);
            countGrind++;
        }
        if (countGrind > 0) {
            console.log(`Grind x${countGrind}`);
            thickness = transportingAndWashing(thickness);
        }


        if (thickness === target) {
            console.log(`Finished crystal ${thickness} microns`);
            continue;
        }


        let countEtch = 0;

        while (etch(thickness) >= target - 1) {
            thickness = etch(thickness);
            countEtch++;
        }

        if (countEtch > 0) {
            console.log(`Etch x${countEtch}`);
            thickness = transportingAndWashing(thickness);
        }

        if (thickness < target) {
            thickness = xRay(thickness);
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${thickness} microns`);

    }


    //_________________________________________

    function cut(thickness) {
        return (thickness / 4);
    }

    function lap(thickness) {
        return thickness - (thickness * 0.2);
    }

    function grind(thickness) {
        return thickness - 20;
    }

    function etch(thickness) {
        return thickness - 2;
    }

    function xRay(thickness) {
        return thickness + 1;
    }

    function transportingAndWashing(thickness) {
        console.log('Transporting and washing');
        return Math.floor(thickness);
    }

}

radioCrystals([1375, 50000])