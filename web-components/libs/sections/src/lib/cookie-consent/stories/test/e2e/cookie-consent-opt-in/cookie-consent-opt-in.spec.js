import {assert, getDriver} from '../../../../../utils/test'
import {VlCookieConsentOptInPage} from './vl-cookie-consent-opt-in.page'

describe('vl-cookie-consent-opt-in', async () => {
  let vlCookieConsentOptInPage;

  before(() => {
    vlCookieConsentOptInPage = new VlCookieConsentOptInPage(getDriver());
    return vlCookieConsentOptInPage.load();
  });

  it('als gebruiker krijg ik een label en beschrijving te zien', async () => {
    const optIn = await vlCookieConsentOptInPage.getConsentWithLabelAndDescription();
    await assert.eventually.equal(optIn.getLabel(), 'Sociale media');
    await assert.eventually.equal(optIn.getDescription(), 'Sociale media beschrijving.');
  });

  it('als gebruiker kan ik een opt-in aanvinken', async () => {
    const optIn = await vlCookieConsentOptInPage.getConsentWithLabelAndDescription();
    await assert.eventually.isFalse(optIn.isOptedIn());
    await optIn.optIn();
    await assert.eventually.isTrue(optIn.isOptedIn());
  });

  it('als gebruiker kan ik een aangevinkte opt-in, uitvinken', async () => {
    const optIn = await vlCookieConsentOptInPage.getConsentChecked();
    await assert.eventually.isTrue(optIn.isOptedIn());
    await optIn.optOut();
    await assert.eventually.isFalse(optIn.isOptedIn());
  });

  it('als gebruiker kan ik een verplichte opt-in niet uitvinken', async () => {
    const optIn = await vlCookieConsentOptInPage.getConsentRequired();
    await assert.eventually.isTrue(optIn.isOptedIn());
    await optIn.optOut();
    await assert.eventually.isTrue(optIn.isOptedIn());
  });
});
