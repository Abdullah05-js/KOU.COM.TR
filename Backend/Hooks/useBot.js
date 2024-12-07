const puppeteer = require("puppeteer");
const useSendMail = require("./useSendMail")
const useBot = async (no) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.goto("http://edestek.kocaeli.edu.tr/index.php");
  await page.waitForNavigation({ waitUntil: "networkidle2" });
  await page.focus('input[id="ogrno"]');
  await page.keyboard.type(`${no}`);
  await page.keyboard.press("Enter");
  await page.waitForNavigation({ waitUntil: "networkidle2" });
  const data = await page.$$eval('a', (elements) => elements.map(e => e.textContent))
  await browser.close();
};


console.log(data)
module.exports = useBot;