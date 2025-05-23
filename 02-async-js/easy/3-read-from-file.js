const fs = require('fs');

console.log('Starting to read file...');

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

function doExpensiveTask(iterations) {
    console.log('Starting expensive operation...');
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i);
    }
    console.log('Expensive operation completed');
    return result;
}

const result = doExpensiveTask(10000);

console.log('This will run before file contents are printed');