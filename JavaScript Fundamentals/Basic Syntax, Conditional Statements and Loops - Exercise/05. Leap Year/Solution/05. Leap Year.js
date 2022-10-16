function LeapYear(year) {
    let isLeap = false;

    if (year % 4 === 0 && !(year % 100 === 0)) {
        isLeap = true;
    }
    if (year % 400 === 0) {
        isLeap = true;
    }

    if (isLeap) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
LeapYear(1984)
LeapYear(2003)
LeapYear(4)
