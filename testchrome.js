const chromeLauncher = require('chrome-launcher');
const { CLOSING } = require('ws');

chromeLauncher
  .launch({
    port: 9222,
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'],
  })
  .then((chrome) => {
    console.log(chrome);
  })
  .catch((err) => {
    console.log(err);
  });
