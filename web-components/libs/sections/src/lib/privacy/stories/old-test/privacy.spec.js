import { assert, getDriver, config } from '../../../../utils/test';
import { VlPrivacy } from './privacy';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-privacy--default`;

describe('vl-privacy', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  it('as a user, I can see the privacy page', async () => {
    await driver.get(defaultUrl);
    const privacy = await new VlPrivacy(driver, 'vl-privacy');
    await assert.eventually.isTrue(privacy.isDisplayed());
  });
});
