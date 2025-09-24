const fs = require('fs');
const path = require('path');
const { analyzeCode } = require('./src/analyzer');

const main = () => {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide the path to the code file or directory.');
        process.exit(1);
    }

    try {
        if (!fs.existsSync(filePath)) {
            throw new Error('The provided path does not exist.');
        }

        const ext = path.extname(filePath);
        if (ext !== '.js') {
            throw new Error('Only JavaScript files are supported.');
        }

        analyzeCode(filePath);
    } catch (error) {
        console.error('An error occurred:', error.message);
        process.exit(1);
    }
};

main();