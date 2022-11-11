function comments(array) {
    let input = array.slice();
    let usersList = [];
    let arcticleList = [];

    let comments = {};

    while (input.length > 0) {
        let line = input.shift();

        if (line.includes("user") || line.includes("article")) {
            line = line.split(" ");
            let command = line.shift();
            let name = line.join(" ");

            switch (command) {
                case "user":
                    if (!usersList.includes(name)) {
                        usersList.push(name);
                    }
                    break;
                case "article":
                    if (!arcticleList.includes(name)) {
                        arcticleList.push(name);
                    }

            }                  //"{username} posts on {article name}: {comment title}, {comment content}"
        } else {
            line = line.split(": ");
            let [username, articleName] = line[0].split(" posts on ");
            let [commentTitle, commentContent] = line[1].split(", ");

            if (usersList.includes(username) && arcticleList.includes(articleName)) {

                if (!comments.hasOwnProperty(articleName)) {
                    comments[articleName] = {
                        counter: 1,
                        [username]: {
                            [commentTitle]: commentContent
                        }

                    }
                } else {
                    comments[articleName].counter++;
                    comments[articleName][username] = {
                        ...comments[articleName][username],
                        [commentTitle]: commentContent
                    }
                }
            }

        }
    }
    let sortCount = (a, b) => b[1]['counter'] - a[1]['counter'];
    let sortUsers = (a, b) => a[0].localeCompare(b[0]);

    for (let [firstKey, firstValue] of Object.entries(comments).sort(sortCount)) {
        console.log(`Comments on ${firstKey}`)
        for (let [secondKey, secondValue] of Object.entries(firstValue).sort(sortUsers)) {
            if (typeof secondValue !== 'number') {
                for (let [thirdKey, thirdValue] of Object.entries(secondValue)) {
                    console.log(`--- From user ${secondKey}: ${thirdKey} - ${thirdValue}`)
                }
            }
        }
    }

}

comments(['user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Bobby: Is2, I do really like them222222',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'])