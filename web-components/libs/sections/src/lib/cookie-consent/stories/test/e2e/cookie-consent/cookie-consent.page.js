import {By, until} from 'selenium-webdriver';
import { VlCookieConsent } from './vl-cookie-consent';
import { config, Page} from '../../../../../utils/test';

export class VlCookieConsentPage extends Page {
  async load() {
    await super.load(`${config.baseUrl}legacy/cookie-consent/test/e2e/cookie-consent/index.html`);
  }

  async _getConsent(selector) {
    const element = await this.driver.findElement(By.css(selector));
    return new VlCookieConsent(this.driver, element);
  }

  async _openConsent(selector) {
    const consent = await this.driver.findElement(By.css(selector));
    await this.driver.wait(until.elementIsVisible(consent), 3000);
    await this.driver.wait(until.elementIsEnabled(consent), 3000);
    await consent.click();
  }

  async getConsent() {
    return this._getConsent('#cookie-consent');
  }

  async getConsentWithoutFunctionalOptIn() {
    return this._getConsent('#cookie-consent-without-functional-opt-in');
  }

  async getConsentWithExtraOptIn() {
    return this._getConsent('#cookie-consent-with-extra-opt-in');
  }

  async getConsentWithExtraCheckedOptIn() {
    return this._getConsent('#cookie-consent-with-extra-checked-opt-in');
  }

  async getConsentWithExtraMandatoryOptIn() {
    return this._getConsent('#cookie-consent-with-extra-mandatory-opt-in');
  }

  async getConsentWithExtraDynamicOptIn() {
    return this._getConsent('#cookie-consent-with-extra-dynamic-opt-in');
  }

  async getConsentWithDynamicText() {
    return this._getConsent('#cookie-consent-with-custom-text');
  }

  async openConsent() {
    await this._openConsent('#button-open-cookie-consent');
  }

  async openConsentWithoutFunctionalOptIn() {
    await this._openConsent('#button-open-cookie-consent-without-functional-opt-in');
  }

  async openConsentWithExtraOptIn() {
    await this._openConsent('#button-open-cookie-consent-with-extra-opt-in');
  }

  async openConsentWithExtraCheckedOptIn() {
    await this._openConsent('#button-open-cookie-consent-with-extra-checked-opt-in');
  }

  async openConsentWithExtraMandatoryOptIn() {
    await this._openConsent('#button-open-cookie-consent-with-extra-mandatory-opt-in');
  }

  async openConsentWithExtraDynamicOptIn() {
    await this._openConsent('#button-open-cookie-consent-with-extra-dynamic-opt-in');
  }

  async openConsentWithDynamicText() {
    await this._openConsent('#button-open-cookie-consent-with-custom-text');
  }

  async voegSocialeMediaOptInToe() {
    await (await this.driver.findElement(By.css('#button-add-cookie-consent-opt-in'))).click();
  }
}

