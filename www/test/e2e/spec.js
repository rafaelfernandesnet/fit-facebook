var fs = require('fs');

describe('FitFacebook', function() {
    
    beforeEach(function() {
    });

    it('Should have an angular app setup', function() {
      browser.get('http://localhost:8888/');
      var html = $('html[ng-app="FitFacebook"]');
      expect(html.isPresent()).toBe(true);
    });

    it('Should have a login container', function() {
      expect(element(by.css('.login-container')).isPresent()).toBe(true);
    });

    it('Should have a button', function() {
      expect(element(by.css('.btn-primary')).isPresent()).toBe(true);
      screenShot('login-page');
    });

    it('Should be able to login', function() {
      var loginButton = element(by.css('.btn-primary'));
      var loginURL = browser.getCurrentUrl();

      loginButton.click();
      expect(browser.getCurrentUrl()).not.toEqual(loginURL);
    });
});

function screenShot(screenShotName){
  browser.takeScreenshot().then(function(png) {
    var stream = fs.createWriteStream('./tmp/' + screenShotName + '.png');
    stream.write(new Buffer(png, 'base64'));
    stream.end();
  });
}
