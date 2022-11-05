function movies(array) {
    let movieList = [];

    for (let el of array) {
        let firstCommand = el.split(" ");

        if (firstCommand[0] === "addMovie") {
            let name = "";
            for (let i = 1; i < firstCommand.length; i++) {
                if (i < firstCommand.length - 1) name += firstCommand[i] + " ";
                else name += firstCommand[i];
            }
            let movieName = {
                name
            };
            movieList.push(movieName);
        }

        if (firstCommand.includes("directedBy")) {
            for (let movie of movieList) {
                movie = addDirector(movie, firstCommand);
            }

        }

        if (firstCommand.includes("onDate")) {
            for (let movie of movieList) {
                movie = addDate(movie, firstCommand);
            }
        }
    }

    for (let el of movieList) {

        if (el.name && el.director && el.date) {

            console.log(JSON.stringify(el));
        }

    }

    function addDirector(movieInfo, command) {   //'Inception directedBy Christopher Nolan'

        let commandAsString=command.join(" ");
        command=commandAsString.split(" directedBy ");
        let movieName = command[0];
        let directorName = command[1];

        for (let value of Object.values(movieInfo)) {
            if (value === movieName) {
                movieInfo.director = directorName;
            }
        }
        return movieInfo;
    }

    function addDate(movieInfo, command) {
        let commandAsString=command.join(" ");
        command=commandAsString.split(" onDate ");
        let name =command[0];        
        let date = command[1];

        for (let value of Object.values(movieInfo)) {
            if (value === name) {
                movieInfo.date = date;
            }
        }
        return movieInfo;

    }
}

movies([

    'addMovie The Avengers',

    'addMovie Superman',

    'The Avengers directedBy Anthony Russo',

    'The Avengers onDate 30.07.2010',

    'Captain America onDate 30.07.2010',

    'Captain America directedBy Joe Russo'

])
