const puppeteer = require("puppeteer");
const useSendMail = require("./useSendMail");

const useBot = async (email) => {
  const no = email.slice(0, 9);

  try {

    //  not burda const data = page.evalute(() => {
    //   burda bildin js yazıyorsun 
    //   const a = document.querySelector("a").textContent

    //   retrun {a};
    //   })
    //   callback fonskisonun içindeki kodu browserda yazdıryor sonra returnluyor  

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.goto("http://edestek.kocaeli.edu.tr/index.php");
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    await page.focus('input[id="ogrno"]');
    await page.keyboard.type(`${no}`);
    await page.keyboard.press("Enter");
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    const data = await page.$$eval("a", (elements) =>
      elements.map((e) => e.textContent)
    );
    await browser.close();
    return data.length === 0 ? "error" : data[0];
  } catch (error) {
    console.log(error);
  }
};

module.exports = useBot;
