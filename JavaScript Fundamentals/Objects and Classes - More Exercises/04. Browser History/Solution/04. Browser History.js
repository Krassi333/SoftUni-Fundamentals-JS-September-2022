function browserHistory(object, array) {
    let browserHistory = object;
    let commands = array.slice();
    while (commands.length > 0) {
        let nextCommand = commands.shift()
            .split(" ");
        let action = nextCommand.shift();
        let countClosedTAbs = 0;
        switch (action) {
            case "Open":
                browserHistory["Open Tabs"].push(nextCommand.join(" "));
                action = action = action + " " + nextCommand.join(" ");;
                browserHistory["Browser Logs"].push(action);
                break;
            case "Close":
                if (countClosedTAbs < 3) {
                    let openTabs = browserHistory["Open Tabs"];
                    for (let i = 0; i < openTabs.length; i++) {
                        if (openTabs[i] == nextCommand.join(" ")) {
                            browserHistory["Recently Closed"].push(openTabs[i]);
                            openTabs.splice(i, 1);
                            countClosedTAbs++;
                            action = action + " " + nextCommand.join(" ");
                            browserHistory["Browser Logs"].push(action);
                            break;
                        }
                    }
                }
                //browserHistory["Open Tabs"] = openTabs;

                break;

            case "Clear":
               browserHistory["Open Tabs"]=[];
               browserHistory["Recently Closed"]=[];
               browserHistory["Browser Logs"]=[];
                break;

        }
    }

    console.log(`${browserHistory["Browser Name"]}`);
    console.log(`Open Tabs: ${browserHistory["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browserHistory["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browserHistory["Browser Logs"].join(", ")}`);

}

browserHistory({"Browser Name":"Mozilla Firefox",

"Open Tabs":["YouTube"],

"Recently Closed":["Gmail",

"Dropbox"],

"Browser Logs":["Open Gmail",

"Close Gmail", "Open Dropbox",

"Open YouTube", "Close Dropbox"]},

["Open Wikipedia", "Clear History and Cache", "Open Twitter"])