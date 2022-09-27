import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'
import {LoginPage} from './loginPage'
const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myTest = new LoginPage(driver,'https://www.saucedemo.com/' )

test('make sure login button is present on the page', async () => {

await myTest.navigate()
await myTest.click(myTest.loginButton)
await myTest.driver.sleep(1000)
let response = await myTest.getText(myTest.errorMessage);
expect(response).toContain("Epic sadface: Username is required")


})
afterAll(async () => {
    await driver.quit()
})