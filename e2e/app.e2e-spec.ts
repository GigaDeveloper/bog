import { AppNamePage } from './app.po';

describe('app-name App', () => {
  let page: AppNamePage;

  beforeEach(() => {
    page = new AppNamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
