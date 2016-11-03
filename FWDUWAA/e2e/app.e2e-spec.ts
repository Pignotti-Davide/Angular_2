import { FWDUWAAPage } from './app.po';

describe('fwduwaa App', function() {
  let page: FWDUWAAPage;

  beforeEach(() => {
    page = new FWDUWAAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
