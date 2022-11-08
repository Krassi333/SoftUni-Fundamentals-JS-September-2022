function legendaryFarming(array) {
    let input = array.slice()
        .split(" ");

    let index = 0;
    let quantity = Number(input[index]);
    index++;
    let material = input[index].toLowerCase();
    index++;

    let shards = 0;
    let fragments = 0;
    let motes = 0;
    let junks = {};

    while (index < input.length) {
        switch (material) {
            case "shards":
                shards += quantity;
                if (shards >= 250) {
                    let item = "Shadowmourne";
                    shards -= 250;
                    print(item, shards, fragments, motes, junks);
                    return;
                }
                break;
            case "fragments":
                fragments += quantity;
                if (fragments >= 250) {
                    let item = "Valanyr";
                    fragments -= 250;
                    print(item, shards, fragments, motes, junks);
                    return;
                }
                break;
            case "motes":
                motes += quantity;
                if (motes >= 250) {
                    let item = "Dragonwrath";
                    motes -= 250;
                    print(item, shards, fragments, motes, junks);
                    return;
                }
                break;
            default:
                junks[material] = quantity;
                break;
        }
        if (index + 2 < input.length) {
            quantity = Number(input[index]);
            index++;
            material = input[index].toLowerCase();
            index++;
        } else {
            print(item, shards, fragments, motes, junks);
            break;
        }


    }


    function print(item, shards, fragments, motes, junks) {
        console.log(`${item} obtained!`);
        let result = {
            "shards": shards,
            "fragments": fragments,
            "motes": motes
        }

        let sortedResult = Object.entries(result).sort(([keyA, valA], [keyB, valB]) => valB - valA || keyA.localeCompare(keyB));

        for (let el of sortedResult) {
            console.log(`${el[0]}: ${el[1]}`);
        }

        let sortedJunks = Object.keys(junks).sort((a, b) => a.localeCompare(b));

        for (let el of sortedJunks) {
            console.log(`${el}: ${junks[el]}`);
        }
    }
}


legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')