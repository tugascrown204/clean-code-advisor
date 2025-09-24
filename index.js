const fs = require('fs');
const { analyzeCode } = require('./src/analyzer');

const main = () => {
    const filePath = process.argv[2];
    if (!filePath) {
        console.error('Please provide the path to the code file or directory.');
        process.exit(1);
    }

    if (!fs.existsSync(filePath)) {
        console.error('The provided path does not exist.');
        process.exit(1);
    }

    try {
        analyzeCode(filePath);
    } catch (error) {
        console.error('An error occurred while analyzing the code:', error.message);
        process.exit(1);
    }
};

main();