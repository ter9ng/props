export class PropsNoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('props-no-app h1')).getText();
  }
}
