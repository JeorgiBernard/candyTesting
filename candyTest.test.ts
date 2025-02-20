import { By } from "selenium-webdriver";
import { candyClass } from "./candy";

const candy = new candyClass();
const fs= require('fs');

test("testing closing the popup window", async () => {

    await candy.navigate();
    await candy.driver.manage().window().maximize();
    await candy.closePopUp();
    await candy.driver.sleep(1000);


    await candy.scroll();
    
    await candy.driver.sleep(1000);
     await candy.driver.quit();

});