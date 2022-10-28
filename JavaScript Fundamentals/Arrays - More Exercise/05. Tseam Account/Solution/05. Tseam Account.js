function tseamAccount(array) {
    let accountAsString = array.shift();
    let account = accountAsString.split(" ");

    let index = 0;
    let commandExpresion = array[index];
    index++;
    let command = "";

    while (command != "Play!") {
        let commandArray = commandExpresion.split(" ");
        command = commandArray[0];
        let gameName = commandArray[1];

        if (command == "Install") {
            let isInstalled = false;

            for (let i = 0; i < account.length; i++) {
                if (account[i] == gameName) {
                    isInstalled = true;
                }
            }

            if (isInstalled == false) {
                account.push(gameName);
            }
        } else if (command == "Uninstall") {

            for (let i = 0; i < account.length; i++) {
                if (account[i] == gameName) {
                    account.splice(i, 1);
                }
            }
        } else if (command == "Update") {
            for (let i = 0; i < account.length; i++) {
                if (account[i] == gameName) {
                    let temp = account[i];
                    account.splice(i, 1);
                    account.push(temp);
                }
            }
        } else if (command == "Expansion") {
            let gameArray = gameName.split("-");
            let game = gameArray[0];
            let expansion = gameArray[1];
            for (let i = 0; i < account.length; i++) {
                if (account[i] == game) {
                    let newGameWhitExpansion = account[i] + ":" + expansion;
                    account.splice(i + 1, 0, newGameWhitExpansion);
                }
            }
        }

        commandExpresion = array[index];
        index++;
        command = commandArray[0];
    }

    console.log(account.join(" "));
}
tseamAccount(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!'])