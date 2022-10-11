import { assert, getDriver, config } from '../../../../utils/test';
import { VlTestSpotlight } from './spotlight.js';

const { sbUrl } = config;
const defaultUrl = `${sbUrl}?id=custom-elements-vl-spotlight--default`;
const selector = 'vl-spotlight';

describe('vl-spotlight', async () => {
    let driver;

    function delay(interval) {
        return it('should delay', (done) => {
            setTimeout(() => done(), interval);
        }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
    }

    beforeEach(() => {
        driver = getDriver();
        driver.manage().window().maximize();
    });

    it('as a user, I can see the spotlight with only the title', async () => {
        await driver.get(`${defaultUrl}&args=title:Titel van de spotlight;alt:true`);
        const spotlight = await new VlTestSpotlight(driver, selector);

        await assert.eventually.isTrue(spotlight.hasAltClassName());
        await assert.eventually.isTrue(spotlight.hasTitle());
        await assert.eventually.equal(spotlight.getTitle(), 'Titel van de spotlight');
        await assert.eventually.isFalse(spotlight.hasSubTitle());
        await assert.eventually.isFalse(spotlight.hasContent());
        await assert.eventually.isFalse(spotlight.hasText());
    });

    it('as a user, I can see the spotlight with only the title and subtitle', async () => {
        await driver.get(
            `${defaultUrl}&args=title:Titel van de spotlight;subtitle:Dit is de subtitel van de spotlight`
        );
        const spotlight = await new VlTestSpotlight(driver, selector);

        await assert.eventually.isFalse(spotlight.hasAltClassName());
        await assert.eventually.isTrue(spotlight.hasTitle());
        await assert.eventually.equal(spotlight.getTitle(), 'Titel van de spotlight');
        await assert.eventually.isTrue(spotlight.hasSubTitle());
        await assert.eventually.equal(spotlight.getSubTitle(), 'DIT IS DE SUBTITEL VAN DE SPOTLIGHT');
        await assert.eventually.isFalse(spotlight.hasContent());
        await assert.eventually.isFalse(spotlight.hasText());
    });

    it('as a user, I can see the spotlight with only the title, subtitle and content', async () => {
        await driver.get(
            `${defaultUrl}&args=title:Titel van de spotlight;subtitle:Dit is de subtitel van de spotlight;content:Dit is de inhoud van de spotlight`
        );
        const spotlight = await new VlTestSpotlight(driver, selector);

        await assert.eventually.isFalse(spotlight.hasAltClassName());
        await assert.eventually.isTrue(spotlight.hasTitle());
        await assert.eventually.equal(spotlight.getTitle(), 'Titel van de spotlight');
        await assert.eventually.isTrue(spotlight.hasSubTitle());
        await assert.eventually.equal(spotlight.getSubTitle(), 'DIT IS DE SUBTITEL VAN DE SPOTLIGHT');
        await assert.eventually.isTrue(spotlight.hasContent());
        await assert.eventually.equal(spotlight.getContent(), 'Dit is de inhoud van de spotlight');
        await assert.eventually.isFalse(spotlight.hasText());
    });

    it('as a user, I can see the spotlight with only the title, subtitle, content and text', async () => {
        await driver.get(
            `${defaultUrl}&args=title:Titel van de spotlight;subtitle:Dit is de subtitel van de spotlight;content:Dit is de inhoud van de spotlight;text:Dit is de Text van de spotlight`
        );
        const spotlight = await new VlTestSpotlight(driver, selector);

        await assert.eventually.isFalse(spotlight.hasAltClassName());
        await assert.eventually.isTrue(spotlight.hasTitle());
        await assert.eventually.equal(spotlight.getTitle(), 'Titel van de spotlight');
        await assert.eventually.isTrue(spotlight.hasSubTitle());
        await assert.eventually.equal(spotlight.getSubTitle(), 'DIT IS DE SUBTITEL VAN DE SPOTLIGHT');
        await assert.eventually.isTrue(spotlight.hasContent());
        await assert.eventually.equal(spotlight.getContent(), 'Dit is de inhoud van de spotlight');
        await assert.eventually.isTrue(spotlight.hasText());
        await assert.eventually.equal(spotlight.getText(), 'Dit is de Text van de spotlight');
    });

    it('as a user, I can see the spotlight with only the title and the component has the x-small style', async () => {
        await driver.get(`${defaultUrl}&args=title:Titel van de spotlight;size:xs`);
        const spotlight = await new VlTestSpotlight(driver, selector);

        await assert.eventually.isFalse(spotlight.hasAltClassName());
        await assert.eventually.isTrue(spotlight.hasTitle());
        await assert.eventually.equal(spotlight.getTitle(), 'Titel van de spotlight');
        await assert.eventually.isFalse(spotlight.hasSubTitle());
        await assert.eventually.isFalse(spotlight.hasContent());
        await assert.eventually.isFalse(spotlight.hasText());
        await assert.eventually.isTrue(spotlight.hasXSmallClassName());
        await assert.eventually.isFalse(spotlight.hasSmallClassName());
        await assert.eventually.isFalse(spotlight.hasLargeClassName());
    });
});
