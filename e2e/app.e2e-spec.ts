import { AuthorsRetreatPage } from './app.po';

describe('authors-retreat App', function() {
  let page: AuthorsRetreatPage;

  beforeEach(() => {
    page = new AuthorsRetreatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
