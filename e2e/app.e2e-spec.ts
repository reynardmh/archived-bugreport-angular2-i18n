import { TestI18nPage } from './app.po';

describe('test-i18n App', function() {
  let page: TestI18nPage;

  beforeEach(() => {
    page = new TestI18nPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
