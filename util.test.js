const puppeteer = require('puppeteer')
const { generateText, checkAndGenerate } = require('./util.js');

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

test('should generate a valid text output', () => {
    const text = checkAndGenerate('conner', 24);

    expect(text).toBe('conner (24 years old)')
})

test('should create element with text and correct class', async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // slowMo: 80,
        // args: ['--window-size=1920,1080']
    });

    const page = await browser.newPage();

    await page.goto(
        'http://127.0.0.1:5500/js-testing-introduction/index.html'
    )

    await page.click('input#name')
    await page.type('input#name', 'timmy')
    await page.click('input#age')
    await page.type('input#age', '32')
    await page.click('#btnAddUser')

    const finalText = await page.$eval('.user-item', el => el.textContent)

    expect(finalText).toBe('timmy (32 years old)')
}, 10000)