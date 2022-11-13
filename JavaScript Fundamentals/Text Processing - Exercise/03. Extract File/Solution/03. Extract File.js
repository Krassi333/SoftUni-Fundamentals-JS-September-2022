function extractFile(string) {
    let stringAsArr = string.split("\\");
    let fileInfo = stringAsArr[stringAsArr.length - 1].split(".");
    let extension = fileInfo.pop();
    let name = fileInfo.join(".");
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')