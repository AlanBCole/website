import { AlanbcoleCodeWebsitePage } from './app.po';

describe('alanbcole-code-website App', () => {
  let page: AlanbcoleCodeWebsitePage;

  beforeEach(() => {
    page = new AlanbcoleCodeWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
