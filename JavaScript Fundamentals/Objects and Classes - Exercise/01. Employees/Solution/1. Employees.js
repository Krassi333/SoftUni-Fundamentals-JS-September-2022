function employees(array) {
    class Employee {
        constructor(name, number) {
            this.name = name,
                this.number = number
        };
    }
    let listOfEmployees = [];
    for (let el of array) {
        let number = el.length;       
        let newEmployee = new Employee(el, number);
        listOfEmployees.push(newEmployee);
    }

    for (el of listOfEmployees) {
        console.log(`Name: ${el.name} -- Personal Number: ${el.number}`);
    }
}

employees([

    'Samuel Jackson',
    
    'Will Smith',
    
    'Bruce Willis',
    
    'Tom Holland'
    
    ])