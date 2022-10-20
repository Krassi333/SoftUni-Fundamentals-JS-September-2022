function computerStore(array) {
    let input = array.slice();
    let nextPrice = input.shift();
    let totalPrice = 0;
    let taxes = 0;
    let priceWhithoutTaxes = 0;

    while (nextPrice != "special" && nextPrice != "regular") {
        nextPrice=Number(nextPrice);
        if (nextPrice < 0) {
            console.log("Invalid price!");
        } else {
            priceWhithoutTaxes += nextPrice;
            taxes += nextPrice * 0.2;
            totalPrice += nextPrice + nextPrice * 0.2;


        }

        nextPrice = input.shift();
    }

    if (nextPrice === "special") {
        totalPrice -= totalPrice * 0.1;
    }

    if (totalPrice == 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWhithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);

    }
}

computerStore(([

    'regular'
    
    ]))