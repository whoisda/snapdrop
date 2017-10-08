
const browsers = {
  android: [
    {
      "browserName": "Browser",
      "deviceName": "Samsung Galaxy S4 Emulator",
      "deviceOrientation": "portrait",
      "platformVersion": "4.4",
      "platformName": "Android"
    },
    {
      "browserName": "Browser",
      "deviceName": "Android GoogleAPI Emulator",
      "deviceOrientation": "portrait",
      "platformVersion": "5.1",
      "platformName": "Android"
    },
    {
      "browserName": "Chrome",
      "deviceName": "Android Emulator",
      "deviceOrientation": "portrait",
      "platformVersion": "6.0",
      "platformName": "Android"
    }
  ],
  chrome: [
    {
      "browserName": "chrome",
      "platform": "OS X 10.12",
      "version": "49"
    },
    {
      "browserName": "chrome",
      "platform": "OS X 10.12",
      "version": "58"
    },
    {
      "browserName": "chrome",
      "platform": "OS X 10.12",
      "version": "59"
    }
  ],
  firefox:[
    {
      "browserName": "firefox",
      "platform": "OS X 10.12",
      "version": "53"
    },
    {
      "browserName": "firefox",
      "platform": "OS X 10.12",
      "version": "54"
    },
    {
      "browserName": "firefox",
      "platform": "OS X 10.12",
      "version": "55"
    }
  ],
  ie: [
    {
      "browserName": "internet explorer",
      "platform": "Windows 8.1",
      "version": "11"
    },
    {
      "browserName": "microsoftedge",
      "platform": "Windows 10",
      "version": "14"
    },
    {
      "browserName": "microsoftedge",
      "platform": "Windows 10",
      "version": "15"
    }
  ],
  iphone: [
    {
      "browserName": "safari",
      "deviceName": "iPhone 4s Simulator",
      "deviceOrientation": "portrait",
      "platformVersion": "9.3",
      "platformName": "iOs"
    },
    {
      "browserName": "safari",
      "deviceName": "iPhone 5s Simulator",
      "deviceOrientation": "portrait",
      "platformVersion": "10.3",
      "platformName": "iOs"
    },
    {
      "browserName": "safari",
      "deviceName": "iPhone 6s Simulator",
      "deviceOrientation": "portrait",
      "platformVersion": "10.3",
      "platformName": "iOs"
    }
  ],
  safari: [
    {
      "browserName": "safari",
      "platform": "OS X 10.10",
      "version": "8.0"
    },
    {
      "browserName": "safari",
      "platform": "OS X 10.11",
      "version": "9.0"
    },
    {
      "browserName": "safari",
      "platform": "OS X 10.12",
      "version": "10.0"
    }
  ]
}

module.exports = {
  "root": "app",
  "plugins": {
    "sauce": {
      "disabled": true,
      "browsers": browsers[process.env.BROWSER] || []
    }
  }
};
