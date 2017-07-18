import { CmsAdminPage } from './app.po';

describe('cms-admin App', () => {
  let page: CmsAdminPage;

  beforeEach(() => {
    page = new CmsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
