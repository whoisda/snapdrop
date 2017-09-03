module.exports = {
  "root": "app",
  "plugins": {
    "sauce": {
      "disabled": true,
      "browsers": [
        {
          "browserName": "internet explorer",
          "platform": "Windows 8.1",
          "version": "11"
        },
        {
          "browserName": "chrome",
          "platform": "macOS 10.12",
          "version": "49"
        }
      ]
    }
  }
};
