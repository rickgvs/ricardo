import { RicardoPage } from './app.po';

describe('ricardo App', () => {
  let page: RicardoPage;

  beforeEach(() => {
    page = new RicardoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
