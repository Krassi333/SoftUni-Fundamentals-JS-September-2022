function NextDay(year, month, day) {
    
    let newDate = new Date(year, month-1, day + 1);
    console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`);

}
NextDay(2016, 9, 30)
