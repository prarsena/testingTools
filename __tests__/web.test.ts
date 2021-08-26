require('chromedriver')
const { Builder, By, Key, until } = require('selenium-webdriver');

test('selenium test', async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Progress', Key.ENTER);
    let firstResult = await driver.wait(until.elementLocated(By.css('h3')), 10000);
    console.log(await firstResult.getAttribute('textContent'));
    await driver.quit();
});