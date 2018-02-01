import { OrderFoodyDATNPage } from './app.po';

describe('order-foody-datn App', () => {
  let page: OrderFoodyDATNPage;

  beforeEach(() => {
    page = new OrderFoodyDATNPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
