function catalogue(array) {

    class Product {
        constructor(firstLetter, name, price) {
            this.firstLetter = firstLetter,
                this.name = name,
                this.price = price
        }
    }
    let products = array.slice();
    products = products.sort((a, b) => a.localeCompare(b));
    let sortedProducts = [];

    products.forEach(el => {
        let currentProductInfo = el.split(" : ");
        let firstLetter = currentProductInfo[0].slice(0, 1);
        let product = new Product(firstLetter, currentProductInfo[0], currentProductInfo[1]);
        sortedProducts.push(product);
    });

    let productsGroup = {};

    sortedProducts.forEach(product => {
        let currentLetter = product.firstLetter;
        if (Object.keys(productsGroup).includes(currentLetter)) {
            productsGroup[currentLetter].push(product);
        } else {
            productsGroup[currentLetter] = [];
            productsGroup[currentLetter].push(product);
        }

    })

    for(let letter of Object.keys(productsGroup)){
        console.log(letter);
        for(let product of productsGroup[letter]){
            console.log(`  ${product.name}: ${product.price}`);
        }
        
    }

}

catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])