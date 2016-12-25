import { KodotestPage } from './app.po';

describe('kodotest App', function() {
  let page: KodotestPage;

  beforeEach(() => {
    page = new KodotestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
