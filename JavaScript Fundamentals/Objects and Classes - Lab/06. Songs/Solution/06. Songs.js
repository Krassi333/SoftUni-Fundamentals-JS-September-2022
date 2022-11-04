function songs(array) {
    class Song {
        constructor(playlist, name, time) {
            this.name = name,
                this.playlist = playlist,
                this.time = time
        }
    }

    let songsNumber = array.shift();
    let allSongs = [];
    for (let i = 0; i < songsNumber; i++) {
        let songInfo = array[i].split("_");
        let playlist = songInfo[0];
        let name = songInfo[1];
        let time = songInfo[2];

        let song = new Song(playlist, name, time);
        allSongs.push(song);
    }

    let chosenPlaylist = array.pop();
    if (chosenPlaylist == "all") {
        for (let el of allSongs) {
            console.log(`${el.name}`);
        }
    } else {
        for (let el of allSongs) {
            if (el.playlist === chosenPlaylist) {
                console.log(`${el.name}`);
            }
        }

    }
}

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])