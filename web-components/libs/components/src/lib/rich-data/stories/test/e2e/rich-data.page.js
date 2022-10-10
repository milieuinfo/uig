import { config, Page, By } from '../../../../utils/test';
import { VlInputField } from '../../../../components/input-field/test/e2e/input-field';
import { VLSearchResults } from '../../../../components/search-results/test/e2e/search-results';
import { VlRichData } from './rich-data';

export class VlRichDataPage extends Page {
    async getRichData() {
        return new VlRichData(this.driver, '#rich-data');
    }

    async getSearchFilterInputFieldByName(searchFilter, name) {
        return new VlInputField(this.driver, await searchFilter.findElement(By.css(`[name="${name}"]`)));
    }

    async resetSearchFilter(searchFilter) {
        const button = await searchFilter.findElement(By.css('button[type="reset"]'));
        await button.click();
    }

    async submitSearchFilter(searchFilter) {
        const button = await searchFilter.findElement(By.css('button[type="submit"]'));
        await button.click();
    }

    async getSearchResults(richData) {
        const slotElements = await richData.getContentSlotElements();
        return new VLSearchResults(this.driver, slotElements[0]);
    }

    async load() {
        await super.load(`${config.baseUrl}legacy/rich-data/test/e2e/index.html`);
    }
}
