const fs = require('fs');

function cleanFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File has been cleaned successfully');
        });
    });
}

