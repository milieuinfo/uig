import { VlElement, By } from '../../../../../utils/test';
import { VlModal } from '../../../../modal/test/e2e/modal';
import { VlCookieConsentOptIn } from '../cookie-consent-opt-in/vl-cookie-consent-opt-in';

export class VlCookieConsent extends VlElement {
  async _getModal() {
    return new VlModal(this.driver, this.shadowRoot);
  }

  async isDisplayed() {
    const modal = await this._getModal();
    return modal.isDisplayed();
  }

  async getOwner() {
    const element = await this.shadowRoot.findElement(By.css('[data-vl-owner]'));
    return element.getText();
  }

  async getLink() {
    const element = await this.shadowRoot.findElement(By.css('#link'));
    return element.getText();
  }

  async getOptIn(label) {
    const optIns = await this.getOptIns();
    for (let i = 0; i < optIns.length; i++) {
      const optIn = optIns[i];
      if (await optIn.getLabel() === label) {
        return optIn;
      }
    }
  }

  async getOptIns() {
    const modal = await this._getModal();
    const optIns = await modal.findElements(By.css('vl-cookie-consent-opt-in'));
    return Promise.all(optIns.map((optIn) => new VlCookieConsentOptIn(this.driver, optIn)));
  }

  async save() {
    const modal = await this._getModal();
    await modal.submit();
  }
}