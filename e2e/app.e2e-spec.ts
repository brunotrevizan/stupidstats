import { StupidstatsPage } from './app.po';

describe('stupidstats App', function() {
  let page: StupidstatsPage;

  beforeEach(() => {
    page = new StupidstatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
