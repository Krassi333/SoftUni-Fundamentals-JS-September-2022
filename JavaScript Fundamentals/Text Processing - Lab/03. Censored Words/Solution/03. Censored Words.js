function censoredWords(str, word) {
    let text = str.split(word);    
    console.log(text.join("*".repeat(word.length)));
}

censoredWords('Find the hidden word', 'hidden')