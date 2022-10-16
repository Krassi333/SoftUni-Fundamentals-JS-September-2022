function Vacation(groupPeople, groupType, day) {
    let price = 0;
    let discount = 0;

    if (groupType === "Students") {
        switch (day) {
            case "Friday":
                price = groupPeople * 8.45;
                break;
            case "Saturday":
                price = groupPeople * 9.8;
                break;
            case "Sunday":
                price = groupPeople * 10.46;
                break;
        }

        if (groupPeople >= 30) {
            discount = price * 0.15;
            price -= discount;
        }

    } else if (groupType === "Business") {

        if (groupPeople >= 100) {
            groupPeople -= 10;
        }

        switch (day) {
            case "Friday":
                price = groupPeople * 10.9;
                break;
            case "Saturday":
                price = groupPeople * 15.6;
                break;
            case "Sunday":
                price = groupPeople * 16;
                break;
        }


    } else if (groupType === "Regular") {

        switch (day) {
            case "Friday":
                price = groupPeople * 15;
                break;
            case "Saturday":
                price = groupPeople * 20
                break;
            case "Sunday":
                price = groupPeople * 22.50;
                break;
        }

        if (groupPeople >= 10 && groupPeople <= 20) {
            discount = price * 0.05;
            price -= discount;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)

}
Vacation(30,

    "Students",

    "Sunday")
Vacation(40,

    "Regular",

    "Saturday")
