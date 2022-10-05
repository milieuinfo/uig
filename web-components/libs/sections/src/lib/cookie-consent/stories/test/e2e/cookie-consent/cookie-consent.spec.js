import { assert, getDriver } from '../../../../../utils/test';
import { VlCookieConsentPage } from './cookie-consent.page';
import { CookieManager } from '../cookie-manager';

describe('vl-cookie-consent', async () => {
  let vlCookieConsentPage;
  let cookies;

  beforeEach(async () => {
    const driver = getDriver();
    vlCookieConsentPage = new VlCookieConsentPage(driver);
    cookies = new CookieManager(driver);
    await driver.manage().deleteAllCookies();
    return vlCookieConsentPage.load();
  });

  it('als gebruiker kan ik de auto-open-disabled modal bevestigen en worden de juiste cookies gezet', async () => {
    await vlCookieConsentPage.openConsent();
    const consentModal = await vlCookieConsentPage.getConsent();

    await assert.eventually.isTrue(consentModal.isDisplayed());
    await consentModal.save();
    await assert.eventually.isFalse(consentModal.isDisplayed());

    assert.isTrue((await cookies.getCookieConsentCookie()).value);
    assert.isNotNull((await cookies.getCookieConsentDateCookie()).value);
    assert.isTrue((await cookies.getCookieConsentOptedInFunctionalCookie()).value);
  });

  it('als gebruiker kan ik nogmaals toestemming geven en wordt de consent-date geupdate', async () => {
    await vlCookieConsentPage.openConsent();
    await (await vlCookieConsentPage.getConsent()).save();

    const date1 = (await cookies.getCookieConsentDateCookie()).value;

    await vlCookieConsentPage.openConsent();
    await (await vlCookieConsentPage.getConsent()).save();

    const date2 = (await cookies.getCookieConsentDateCookie()).value;

    assert.isAbove(date2, date1);
  });

  it('als gebruiker kan ik een cookie-consent zonder functionele opt-in aanvaarden en wordt er enkel een consent en geen functional cookie gezet', async () => {
    await vlCookieConsentPage.openConsentWithoutFunctionalOptIn();
    const consentModal = await vlCookieConsentPage.getConsentWithoutFunctionalOptIn();

    await consentModal.save();

    await assert.isTrue((await cookies.getCookieConsentCookie()).value);
    await assert.isNotNull((await cookies.getCookieConsentDateCookie()).value);
    await assert.isUndefined((await cookies.getCookieConsentOptedInFunctionalCookie().value));
  });

  it('als gebruiker kan ik een cookie-consent met sociale media opt-in aanvaarden en zal er voor sociale media een cookie gezet worden', async () => {
    await vlCookieConsentPage.openConsentWithExtraOptIn();
    const consentModal = await vlCookieConsentPage.getConsentWithExtraOptIn();
    const optIn = await consentModal.getOptIn('Sociale media');
    await optIn.optIn();
    await assert.eventually.isTrue(optIn.isOptedIn());
    await consentModal.save();
    await assert.isTrue((await cookies.getCookieConsentOptedInSocialCookie()).value);
  });

  it('als gebruiker kan ik een cookie consent met een default aangevinkte opt-in aanvaarden, en zal deze opt-in als cookie bewaard worden', async () => {
    await vlCookieConsentPage.openConsentWithExtraCheckedOptIn();
    const consentModal = await vlCookieConsentPage.getConsentWithExtraCheckedOptIn();
    await consentModal.save();
    await assert.isTrue((await cookies.getCookieConsentOptedInSocialCookie()).value);
  });

  it('als gebruiker kan ik een cookie consent met een verplichte opt-in aanvaarden, en zal deze opt-in als cookie bewaard worden', async () => {
    await vlCookieConsentPage.openConsentWithExtraMandatoryOptIn();
    const consentModal = await vlCookieConsentPage.getConsentWithExtraMandatoryOptIn();
    await consentModal.save();
    await assert.isTrue((await cookies.getCookieConsentOptedInSocialCookie()).value);
    await assert.isTrue((await cookies.getCookieConsentOptedInFunctionalCookie()).value);
  });

  it('als gebruiker kan ik dynamisch een sociale media opt-in toevoegen', async () => {
    await vlCookieConsentPage.openConsentWithExtraDynamicOptIn();
    const preConsentModal = await vlCookieConsentPage.getConsentWithExtraDynamicOptIn();
    const preOptIns = await preConsentModal.getOptIns();

    await preConsentModal.save();
    await vlCookieConsentPage.voegSocialeMediaOptInToe();
    await vlCookieConsentPage.openConsentWithExtraDynamicOptIn();
    const postConsentModal = await vlCookieConsentPage.getConsentWithExtraDynamicOptIn();
    const postOptIns = await postConsentModal.getOptIns();

    assert.isAbove(postOptIns.length, preOptIns.length);
    await assert.eventually.isDefined(postConsentModal.getOptIn('Sociale media'));
    await postConsentModal.save();
  });

  it('als gebruiker kan ik een opt-in intrekken en zullen de debestreffende cookies geupdate worden', async () => {
    await vlCookieConsentPage.openConsentWithExtraOptIn();
    let consentModal = await vlCookieConsentPage.getConsentWithExtraOptIn();

    let optIn = await consentModal.getOptIn('Sociale media');
    await optIn.optIn();
    await consentModal.save();
    assert.isTrue((await cookies.getCookieConsentOptedInSocialCookie()).value);

    await vlCookieConsentPage.openConsentWithExtraOptIn();
    consentModal = await vlCookieConsentPage.getConsentWithExtraOptIn();
    optIn = await consentModal.getOptIn('Sociale media');
    await optIn.optOut();
    await consentModal.save();
    assert.isFalse((await cookies.getCookieConsentOptedInSocialCookie()).value);
  });

  it('als gebruiker kan ik de gepersonaliseerde eigenaar en link zien', async () => {
    await vlCookieConsentPage.openConsentWithDynamicText();
    const consentModal = await vlCookieConsentPage.getConsentWithDynamicText();
    await assert.eventually.equal(consentModal.getOwner(), 'UIG');
    await assert.eventually.equal(consentModal.getLink(), 'https://webcomponenten.omgeving.vlaanderen.be');
  });
});
