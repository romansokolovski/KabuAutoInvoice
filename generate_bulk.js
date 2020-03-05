var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://punitgr.github.io/QuickBill/dashboard');



driver.findElement(webdriver.By.name('from')).sendKeys('KABU AUTO PARTS');
driver.findElement(webdriver.By.name('addressFrom')).sendKeys('42 Vanguard rd, Concord, Ontario');
driver.findElement(webdriver.By.name('phoneFrom')).sendKeys('6479753405');
driver.findElement(webdriver.By.name('emailFrom')).sendKeys('kabu1@live.ca');

driver.findElement(webdriver.By.name('to')).sendKeys('test');
driver.findElement(webdriver.By.name('addressTo')).sendKeys('123 fake st');
driver.findElement(webdriver.By.name('phoneTo')).sendKeys('1234443322');
driver.findElement(webdriver.By.name('emailTo')).sendKeys('test@gmail.com');

//driver.findElement(webdriver.By.xpath('//*[@id="app"]/div/div/div[2]/div/div[4]/a')).click();

var menu = driver.findElement(webdriver.By.xpath('//*[@id="app"]/div/div/div[2]/div/div[4]/a'));
menu.click();
menu.findElement(webdriver.By.xpath('//*[@id="app"]/div/div/div[2]/div/div[4]/ul/div/li/div/input[1]')).sendKeys('Converter');
menu.findElement(webdriver.By.xpath('//*[@id="app"]/div/div/div[2]/div/div[4]/ul/div/li/div/input[2]')).sendKeys('Auto Parts');
menu.findElement(webdriver.By.xpath('//*[@id="app"]/div/div/div[2]/div/div[4]/ul/div/li/div/input[3]')).sendKeys('25');
menu.findElement(webdriver.By.xpath('//*[@id="app"]/div/div/div[2]/div/div[4]/ul/div/li/div/input[4]')).sendKeys('240');

driver.findElement(webdriver.By.xpath('//*[@id="app"]/div/div/div[1]/div[1]/div[4]/label/div/div[1]/div[2]')).click();
driver.findElement(webdriver.By.xpath('/html/body/div/div/div/div[1]/div[3]/div/div/a[2]')).click();






