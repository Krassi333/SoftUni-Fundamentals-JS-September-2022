function travelTime(array){
let input=array.slice();
let destinations={};

while(input.length>0){
    let nextDestination=input.shift().split(" > ");
    let country=nextDestination[0];
    let town=nextDestination[1];
    let price=Number(nextDestination[2]);

    if(destinations.hasOwnProperty(country)){
        if(destinations[country].hasOwnProperty(town)){
            let oldPrice=destinations[country][town];
            if(oldPrice>price){
                destinations[country][town]=price;
            }
        }else {
            destinations[country][town]=price;
        }
    } else {
        destinations[country]={
            [town]:price
        };
    }
}

for(let country of Object.keys(destinations).sort((a,b) => a.localeCompare(b))){
    let forPrint=country+" -> ";
    let sortedEntries= Object.entries(destinations[country]).sort(([keyA,valA], [keyB,valB]) => valA-valB);
    for (let [key, value] of sortedEntries) {
        //console.log(`${key} -> ${value} times`);    
        forPrint+=key +" -> "+ value +" " ;
    }
    console.log(forPrint);
}



}

travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
    
    ])