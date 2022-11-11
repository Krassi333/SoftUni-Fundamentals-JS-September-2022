function bookShelf(array) {
    let input = array.slice();
    let shelfsRegister = {};
    let line;

    while ((line = input.shift()) != null) {
        if (line.includes('->')) {
            let [shelfNumber, shelfGenre] = line.split(' -> ');
            if (!shelfsRegister.hasOwnProperty(shelfNumber)) {
                shelfsRegister[shelfNumber] = {
                    genre: shelfGenre,
                    books: []
                }
            }
        } else {
            let [bookTitle, bookInfo] = line.split(': ');
            let [bookAuthor, bookGenre] = bookInfo.split(', ');

            for (let shelf of Object.keys(shelfsRegister)) {
                if (shelfsRegister[shelf].genre === bookGenre) {
                    let bookObj = {
                        [bookTitle]: bookAuthor
                    }
                    shelfsRegister[shelf].books.push(bookObj);
                }
            }
        }
    }

    let sortedByBooksCount = {};
    for (let key of Object.keys(shelfsRegister)) {
        sortedByBooksCount[key] = shelfsRegister[key].books.length;
    }

    sortedByBooksCount = Object.entries(sortedByBooksCount).sort(([keaA, valA], [keyB, valB]) => valB - valA);

    for (let shelf of sortedByBooksCount) {
        console.log(`${shelf[0]} ${shelfsRegister[shelf[0]].genre}: ${shelf[1]}`);

        let booksInThisShelf = {};
        for (let el of shelfsRegister[shelf[0]].books) {
            booksInThisShelf = {
                ...booksInThisShelf,
                ...el
            }
        }
        let sortedByTitle = Object.entries(booksInThisShelf).sort(([keyA, valA], [keyB, valB]) => keyA.localeCompare(keyB));
        for (let el of sortedByTitle) {
            console.log(`--> ${el[0]}: ${el[1]}`);
        }
    }


}

bookShelf(['1 -> mystery', '2 -> sci-fi',

'Child of Silver: Bruce Rich, mystery',

'Lions and Rats: Gabe Roads, history',

'Effect of the Void: Shay B, romance',

'Losing Dreams: Gail Starr, sci-fi',

'Name of Earth: Jo Bell, sci-fi'])