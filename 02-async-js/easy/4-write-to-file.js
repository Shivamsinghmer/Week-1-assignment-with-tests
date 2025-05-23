const fs = require('fs');

function writeToFile(fileName, content) {
    try {
        fs.writeFileSync(fileName, content);
        return 'File written successfully';
    } catch (err) {
        return 'Error writing to file';
    }
}

// Usage
const content = 'Hello! This is some content.';
const fileName = 'test.txt';
console.log(writeToFile(fileName, content));
