const { analyzeCode } = require('../src/analyzer');

describe('Code Analyzer', () => {
    test('should analyze code', () => {
        console.log = jest.fn();  // Mock console.log
        analyzeCode('test.js');
        expect(console.log).toHaveBeenCalledWith('Analyzing code in: test.js');
    });
});