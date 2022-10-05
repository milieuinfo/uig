import {Cookie as Cookies} from '../../../../utils/test'

export class CookieManager {
  constructor(driver) {
    this.cookies = new Cookies(driver);
  }

  async getCookieConsentCookie() {
    return this.cookies.get('vl-cookie-consent-cookie-consent');
  }

  async getCookieConsentDateCookie() {
    return this.cookies.get('vl-cookie-consent-cookie-consent-date');
  }

  async getCookieConsentOptedInFunctionalCookie() {
    return this.cookies.get('vl-cookie-consent-functional');
  }

  async getCookieConsentOptedInSocialCookie() {
    return this.cookies.get('vl-cookie-consent-socialmedia');
  }
}