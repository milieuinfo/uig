import {VlCookieConsentOptIn} from './vl-cookie-consent-opt-in';
import {Page, config} from '../../../../../utils/test'

export class VlCookieConsentOptInPage extends Page {
  async _getCookieConsentOptIn(selector) {
    return new VlCookieConsentOptIn(this.driver, selector);
  }

  async getConsentWithLabelAndDescription() {
    return this._getCookieConsentOptIn('#cookie-consent-opt-in-with-label-and-description');
  }

  async getConsentChecked() {
    return this._getCookieConsentOptIn('#cookie-consent-opt-in-checked');
  }

  async getConsentRequired() {
    return this._getCookieConsentOptIn('#cookie-consent-opt-in-required');
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/cookie-consent/test/e2e/cookie-consent-opt-in/index.html`);
  }
}

