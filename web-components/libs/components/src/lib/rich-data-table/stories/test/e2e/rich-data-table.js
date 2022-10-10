import { By } from '../../../../utils/test';
import { VlRichData } from '../../../rich-data/test/e2e/rich-data';
import { VlDataTable } from '../../../../components/data-table/test/e2e/data-table';
import { VlRichDataSorter } from './rich-data-sorter';

export class VlRichDataTable extends VlRichData {
    async toggleSortOfColumn(field) {
        const sorter = await this.getSorter(field);
        const parent = await sorter.findElement(By.xpath('..'));
        return parent.click();
    }

    async getSorter(field) {
        const element = await this.shadowRoot.findElement(By.css(`vl-rich-data-sorter[data-vl-for="${field}"]`));
        return new VlRichDataSorter(this.driver, element);
    }

    async isCollapsedMedium() {
        return this.hasAttribute('data-vl-collapsed-m');
    }

    async isCollapsedSmall() {
        return this.hasAttribute('data-vl-collapsed-s');
    }

    async isCollapsedExtraSmall() {
        return this.hasAttribute('data-vl-collapsed-xs');
    }

    async isMultisortingEnabled() {
        return this.hasAttribute('data-vl-multisort');
    }

    async getHeader() {
        const table = await this._getTable();
        return table.getHeader();
    }

    async getHeaderRows() {
        const header = await this.getHeader();
        return header.getRows();
    }

    async getBody() {
        const table = await this._getTable();
        return table.getBody();
    }

    async getBodyRows() {
        const body = await this.getBody();
        return body.getRows();
    }

    async _getTable() {
        const element = await this.shadowRoot.findElement(By.css('[is="vl-data-table"]'));
        return new VlDataTable(this.driver, element);
    }
}
