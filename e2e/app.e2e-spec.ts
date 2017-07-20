import { MiracleWebScssPage } from './app.po';

describe('miracle-web-scss App', () => {
  let page: MiracleWebScssPage;

  beforeEach(() => {
    page = new MiracleWebScssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
