import { AngularNgrxArchitecturePage } from './app.po';

describe('angular-ngrx-architecture App', () => {
  let page: AngularNgrxArchitecturePage;

  beforeEach(() => {
    page = new AngularNgrxArchitecturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
