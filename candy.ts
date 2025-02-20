import {  By,  until,} from "selenium-webdriver";
import { basePage } from "./basePage";

const fs= require('fs');

export class candyClass extends basePage {
    
 popUp: By = By.id('popup-widget50273-close-icon')
//  county: By = By.id('tCounty')
 


    constructor() {
        super({url:'https://candymapper.com/'})
    };

    async closePopUp() {
        try {
            // Locate the pop-up close button
            const closeButton = await this.driver.findElement(this.popUp);
      
            // Wait for the pop-up close button to be visible
            await this.driver.wait(until.elementIsVisible(closeButton), 5000);
      
            // Click the pop-up close button (the "X")
            await closeButton.click();
            console.log('Pop-up closed successfully.');
          } catch (error) {
            console.log('Error closing pop-up:', error);
          }
          await fs.writeFile(`${__dirname}/closePopUp.png`,
    await this.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('picture worked')
    });
      }


    async scroll() {
      const frame = await this.driver.findElement(By.xpath('//span[text()="Slider Challenge: Select Worcestershire"]'));
  
      await this.driver.actions()
          .move({ origin: frame })
          .perform();

          fs.writeFile(`${__dirname}/downPage.png`,
      await this.driver.takeScreenshot(), "base64",
      (e) =>{
          if (e) console.log;
          else console.log("This worked!");
      });
  };

  

    }


