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
            console.error('The provided path does not exist.');
            process.exit(1);
        }

        const ext = path.extname(filePath);
        if (ext !== '.js') {
            console.error('Only JavaScript files are supported.');
            process.exit(1);
        }

        analyzeCode(filePath);
    } catch (error) {
        console.error('An unexpected error occurred:', error.message);
        process.exit(1);
    }
};

main();