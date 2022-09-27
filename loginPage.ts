

import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class loginPage {
    driver: WebDriver; 
    url: string = 'https://www.saucedemo.com/'
    loginButton: By = By.xpath('//input[@class="submit-button btn_action"]')
    username: By = By.name('user-name')
    password: By = By.id('password')
    constructor(driver: WebDriver, url: string) {
        this.driver = driver 
        this.url = url 
    }
    async navigate(url?: string): Promise<void> {
      if (url) return await this.driver.get(url)
      else if (this.url) return await this.driver.get(this.url)
      else 
      return Promise.reject(
          'Basepage.navigate() needs a url defined on the page objects or one passed in'
      )
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async click(elementBy:By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
    async getElementsByText(str, tag = 'a') {
        return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
    }
    async sendKeys(elementBy: By, keys){
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    
}