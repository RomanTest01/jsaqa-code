const { timeout } = require("puppeteer");

module.exports = {
    launch: {
        headless: false,
        defaultViewport: null,
        devtools:false,
        slowMo: 50,
        args: ['--start-maximized'] //— используем максимальный размер окна браузера
      },
    
  };
  