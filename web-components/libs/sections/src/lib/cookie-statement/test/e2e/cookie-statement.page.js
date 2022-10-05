import { VlCookieStatement } from './cookie-statement';
import { config, Page } from '../../../../utils/test';


export class VlCookieStatementPage extends Page {
  async getCookieStatementElement() {
    return this._getCookieStatement('vl-cookie-statement');
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/cookie-statement/test/e2e/index.html`);
  }

  async _getCookieStatement(selector) {
    return new VlCookieStatement(this.driver, selector);
  }
}