import { assert, getDriver, config, By } from '../../../../utils/test';
import { VlTemplate } from './template';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-template--default`;

describe('vl-template', async () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
    driver.manage().window().maximize();
  });

  // TODO kspeltin: terug activeren
  it.skip('as a user, I can see the content', async () => {
    await driver.get(defaultUrl);
    const template = await new VlTemplate(driver, 'vl-template');
    const contentSlotElements = await template.getContentSlotElements();
    assert.lengthOf(contentSlotElements, 1);
    assert.isNotNull(contentSlotElements);
    const h1 = await contentSlotElements[0].findElement(By.css('h1'));
    await assert.eventually.equal(h1.getText(), 'vl-template');
  });
});
