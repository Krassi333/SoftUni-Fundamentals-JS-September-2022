function storeProvision(products, ordered) {
    class Product {
        constructor(name, quality) {
            this.name = name,
                this.quality = Number(quality)
        };
    }

    let productsList = [];
    for (let i = 0; i < products.length; i += 2) {
        let currentProduct = new Product(products[i], products[i + 1]);
        productsList.push(currentProduct);
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let orderedProduct = new Product(ordered[i], ordered[i + 1]);
        let isProductInList = false;

        for (let k = 0; k < productsList.length; k++) {

            if (productsList[k].name == orderedProduct.name) {
                productsList[k].quality += orderedProduct.quality;
                isProductInList = true;
            }
        }
        if (isProductInList == false) {
            productsList.push(orderedProduct);
        }

    }

    for (let el of productsList) {
        console.log(`${el.name} -> ${el.quality}`);
    }
}

storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], 
[ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])

