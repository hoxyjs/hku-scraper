const puppeteer = require("puppeteer");
const { USERNAME, PASSWORD, LOGIN_BUTTON } = require("./constants");

require("dotenv").config();

const scraper = async () => {
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage"
    ]
  });

  const page = await browser.newPage();
  await page.goto("https://hkuportal.hku.hk");
  await page.screenshot({ path: "./one.png" });

  await page.evaluate(
    ({ username, password, usernameSelector, passwordSelector }) => {
      document.querySelector(usernameSelector).value = username;
      document.querySelector(passwordSelector).value = password;
    },
    {
      username: process.env.ID,
      password: process.env.PW,
      usernameSelector: USERNAME,
      passwordSelector: PASSWORD
    }
  );

  await Promise.all([
    page.click(LOGIN_BUTTON),
    page.waitForNavigation({ waitUntil: "domcontentloaded" })
  ]);

  await page.screenshot({ path: "./two.png" });

  await browser.close();
};

const start = async () => {
  try {
    await scraper();
  } catch (e) {
    console.log(e);
    process.abort();
  }
};

start();
