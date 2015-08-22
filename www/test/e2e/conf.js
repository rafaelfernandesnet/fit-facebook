exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl: 'http://localhost:8888/',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
  rootElement: 'html'
};
