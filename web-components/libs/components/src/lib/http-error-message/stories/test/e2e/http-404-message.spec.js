import { assert, getDriver, config } from '../../../../../../utils/test';
import VlHttpErrorMessageComponent from './http-error-message-component';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-http-error-message-vl-http-404-message--default`;
const selector = 'vl-http-404-message';

describe('vl-http-404-message', async () => {
    let driver;

    beforeEach(() => {
        driver = getDriver();
        driver.manage().window().maximize();
    });

    it('as a user I can read the title of the error message', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessageComponent(driver, selector);
        const child = await message.getChild();

        await assert.eventually.equal(child.getTitle(), 'Pagina niet gevonden');
    });

    it('as a user I can read the content of the erorr message', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessageComponent(driver, selector);
        const child = await message.getChild();
        const content = await child.getContent();

        await assert.eventually.equal(
            content.getText(),
            'We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link of website op deze pagina gekomen. Mail dan de helpdesk en vermeld daarbij de URL hierboven en de foutcode 404.'
        );
    });

    it('as a user I can see the error message link', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessageComponent(driver, selector);
        const child = await message.getChild();
        const link = await child._getAction();

        await assert.eventually.equal(link.getText(), 'Terug naar de startpagina');
    });

    it('as a user I can see the error message image', async () => {
        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessageComponent(driver, selector);
        const child = await message.getChild();
        const image = await child.getImage();

        await assert.eventually.equal(
            image.getAttribute('src'),
            'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg'
        );
        await assert.eventually.equal(image.getAttribute('alt'), 'Pagina niet gevonden');
    });

    it('as a user I can click on the action button of an error message', async () => {
        const originalUrl = await driver.getCurrentUrl();
        assert.isFalse(originalUrl.endsWith('/'));

        await driver.get(defaultUrl);
        const message = await new VlHttpErrorMessageComponent(driver, selector);
        const child = await message.getChild();
        await child.clickOnAction();
        const urlAfterClick = await driver.getCurrentUrl();

        assert.isTrue(urlAfterClick.endsWith('/'));
    });
});
