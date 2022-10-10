import { assert, getDriver, config } from '../../../../utils/test';
import VlHttpErrorMessage from './http-error-message.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-http-error-message--default`;
const selector = 'vl-http-error-message';

describe('vl-http-error-message', async () => {
    let driver;

    beforeEach(() => {
        driver = getDriver();
        driver.manage().window().maximize();
    });

    it('as a user I can read the title of the error message', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessage(driver, selector);

        await assert.eventually.equal(message.getTitle(), 'Niets gevonden hiervoor.');
    });

    it('as a user I can read the content of the error message', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessage(driver, selector);
        const content = await message.getContent();

        await assert.eventually.equal(content.getText(), 'Sorry, er liep iets onverwachts mis.');
    });

    it('as a user I can see the error message link', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessage(driver, selector);
        const link = await message._getAction();

        await assert.eventually.equal(link.getText(), 'Opnieuw opstarten');
    });

    it('as a user I can see the error message image', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessage(driver, selector);
        const image = await message.getImage();

        assert.isTrue((await image.getAttribute('src')).endsWith('unexpected-error.svg'));
        await assert.eventually.equal(image.getAttribute('alt'), 'Niets gevonden');
    });

    it('as a user I can click on the action button of an error message', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessage(driver, selector);
        await message.clickOnAction();
        const urlAfterClick = await driver.getCurrentUrl();

        assert.isTrue(urlAfterClick.endsWith('#'));
    });
});
