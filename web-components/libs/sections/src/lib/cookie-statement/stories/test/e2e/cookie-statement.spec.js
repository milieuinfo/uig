import { assert, getDriver } from '../../../../utils/test';
import { VlCookieStatementPage } from './cookie-statement.page';

describe('vl-cookie-statement', async () => {
  let vlCookieStatementPage;

  before(() => {
    vlCookieStatementPage = new VlCookieStatementPage(getDriver());
    return vlCookieStatementPage.load();
  });

  it('als gebruiker kan in de cookie pagina zien', async () => {
    const page = await vlCookieStatementPage.getCookieStatementElement();
    await assert.eventually.isTrue(page.isDisplayed());
  });
});

