import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'
import { loginPage } from '../pages/loginPage'
const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const myTest = new loginPage

test('make sure login button is present on the page', async () => {

await myTest.navigate()
await myTest.getElement(myTest.loginButton)
let response = await myTest.getElement(myTest.loginButton)
expect(response).toContain(myTest.loginButton)


})
afterAll(async () => {
    await driver.quit()
})