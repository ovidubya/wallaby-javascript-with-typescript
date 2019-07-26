module.exports = function (w) {

  return {
    files: [
      'src/*Browser.ts',
      'src/*Browser.js'
    ],

    tests: [
      'test/*BrowserSpec.ts',
      'test/*BrowserSpec.js'
    ]
  };
};
