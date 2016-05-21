import { PropsNoPage } from './app.po';

describe('props-no App', function() {
  let page: PropsNoPage;

  beforeEach(() => {
    page = new PropsNoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('props-no works!');
  });
});
