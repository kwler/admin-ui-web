import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the correct footer', () => {
    page.navigateTo();
    expect(page.getFooterMessage()).toEqual('Kwler.NET © 2018 The Startup Builder.');
  });
});
