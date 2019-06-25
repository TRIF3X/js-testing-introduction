const { generateText } = require('./util.js');

test('should output name and age', () => {
    const text = generateText('conner', 24);

    expect(text).toBe('conner (24 years old)');
})

test('should output data-less text', () => {
    const text = generateText('', null);

    expect(text).toBe(' (null years old)')

    const text2 = generateText()

    expect(text2).toBe('undefined (undefined years old)')
})