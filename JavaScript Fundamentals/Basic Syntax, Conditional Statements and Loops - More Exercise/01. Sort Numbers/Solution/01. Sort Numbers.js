function SortNumbers(n1, n2, n3) {
    let bigger = Number.MIN_SAFE_INTEGER;
    let smaller = Number.MAX_SAFE_INTEGER;
    let middle = 0;

    if (n1 > bigger) {
        bigger = n1;
    }

    if (n2 > bigger) {
        bigger = n2;
    }

    if (n3 > bigger) {
        bigger = n3;
    }

    if (n1 < smaller) {
        smaller = n1;
    }

    if (n2 < smaller) {
        smaller = n2;
    }

    if (n3 < smaller) {
        smaller = n3;
    }

    if (smaller == n1) {
        n1 = null;
    } else if (smaller == n2) {
        n2 = null;
    } else {
        n3 = null;
    }

    if (bigger == n1) {
        n1 = null;
    } else if (bigger == n2) {
        n2 = null;
    } else {
        n3 = null;
    }

    if (n1 != null) {
        middle = n1;
    } else if (n2 != null) {
        middle = n2;
    } else {
        middle = n3;
    }

    console.log(bigger);
    console.log(middle);
    console.log(smaller);

}
//SortNumbers(2, 1, 3)
//SortNumbers(-2,1,3)
SortNumbers(0,0,2)
