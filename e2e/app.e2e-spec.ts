import { AutoMaDeExamPage } from './app.po';

describe('auto-ma-de-exam App', function() {
  let page: AutoMaDeExamPage;

  beforeEach(() => {
    page = new AutoMaDeExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
