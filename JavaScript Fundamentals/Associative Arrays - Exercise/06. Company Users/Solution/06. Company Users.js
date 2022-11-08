function companyUsers(array) {
    let input = array.slice();
    let companyInfo = {};

    while (input.length > 0) {
        let nextINfo = input.shift()
            .split(" -> ");
        let name = nextINfo[0];

        let employeeID = nextINfo[1];
        let allEmployee = companyInfo[name];

        if (allEmployee == undefined) {
            allEmployee = [employeeID];
        } else {
            if (!allEmployee.includes(employeeID)) {
                allEmployee.push(employeeID);
            }
        }


        companyInfo[name] = allEmployee;
    }


    let keys = Object.keys(companyInfo).sort((a,b) => a.localeCompare(b));

    keys.forEach(key => {
        let employees = companyInfo[key];
        console.log(key);
        employees.forEach(id => {
            console.log(`-- ${id}`);
        })
    })




}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])