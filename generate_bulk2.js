var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://localhost:8080/');


var totalAmount=50000;

var max=500;
var min=50;



for(var i = 0;i<3;i++){
    driver.findElement(webdriver.By.xpath('//*[@id="company-name"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="company-name"]')).sendKeys('KABU AUTO PARTS');
    driver.findElement(webdriver.By.xpath('//*[@id="company-address"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="company-address"]')).sendKeys('123 fake st');
    driver.findElement(webdriver.By.xpath('//*[@id="company-tin"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="company-tin"]')).sendKeys('22341');
    driver.findElement(webdriver.By.xpath('//*[@id="company-service-tax-no"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="company-service-tax-no"]')).sendKeys('12344444');
    driver.findElement(webdriver.By.xpath('//*[@id="company-contact"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="company-contact"]')).sendKeys('9054993993');

    driver.findElement(webdriver.By.xpath('//*[@id="billDate"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="billDate"]')).sendKeys('2019-03-23');
    driver.findElement(webdriver.By.xpath('//*[@id="billNo"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="billNo"]')).sendKeys('123');
    driver.findElement(webdriver.By.xpath('//*[@id="purchaser"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="purchaser"]')).sendKeys('jimbo');
    driver.findElement(webdriver.By.xpath('//*[@id="purchaser-address"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="purchaser-address"]')).sendKeys('99 mk rd');
    driver.findElement(webdriver.By.xpath('//*[@id="purchaser-tin"]')).clear();
    driver.findElement(webdriver.By.xpath('//*[@id="purchaser-tin"]')).sendKeys('993939');


    driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/form/div[9]/div/div[2]/input')).clear();
    driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/form/div[9]/div/div[2]/input')).sendKeys('Converter');
    driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/form/div[9]/div/div[3]/div/input')).clear();
    driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/form/div[9]/div/div[3]/div/input')).sendKeys(Math.floor(Math.random() * (max - min + 1)) + min);
        driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/form/div[9]/div/div[4]/input')).clear();
    driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/form/div[9]/div/div[4]/input')).sendKeys(Math.floor(Math.random() * (max - min + 1)) + min);

    driver.findElement(webdriver.By.xpath('/html/body/div[2]/div/div/div/div/button[1]')).click();


}

