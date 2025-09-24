const fs = require('fs');
const { analyzeCode } = require('./src/analyzer');

const main = () => {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide the path to the code file or directory.');
        process.exit(1);
    }

    analyzeCode(filePath);
};

main();