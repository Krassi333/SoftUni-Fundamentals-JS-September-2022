function CenturiesToMinutes(centuries){
let year=100*centuries;
let days=Math.floor(year*365.2422);
let hours=days*24;
let minutes=hours*60;

console.log(`${centuries} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
CenturiesToMinutes(5)