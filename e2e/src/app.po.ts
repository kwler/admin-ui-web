import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFooterMessage() {
    return element(by.css('footer span:first-of-type')).getText();
  }
}
