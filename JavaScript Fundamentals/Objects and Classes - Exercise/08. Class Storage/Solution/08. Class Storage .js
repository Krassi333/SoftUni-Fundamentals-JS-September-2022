function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity
            this.storage = [];
            this.totalCost=0
        }

        addProduct(obj) {
            this.storage.push(obj);
            this.capacity -= obj.quantity;
            this.totalCost+= obj.quantity * obj.price;
        }

        getProducts() {
            let products = [];
            for (let el of this.storage) {
                products.push(JSON.stringify(el));
            }
            let result = '';
            for (let i = 0; i < products.length - 1; i++) {
                result += products[i]+"\n";
            }
            result += products[products.length - 1];

            return result;
        }

        
    }
    let productOne = {name: 'Tomato',

    price: 0.90, quantity: 19};
    
    let productTwo = {name: 'Potato',
    
    price: 1.10, quantity: 10};
    
    let storage = new Storage(30);
    
    storage.addProduct(productOne);
    
    storage.addProduct(productTwo);
    
    console.log(storage.totalCost);
}

classStorage()