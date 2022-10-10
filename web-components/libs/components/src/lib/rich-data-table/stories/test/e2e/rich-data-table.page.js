import { config, Page, By } from '../../../../utils/test';
import { VlRichDataTable } from './rich-data-table';

export class VlRichDataTablePage extends Page {
    async _getRichDataTable(selector) {
        return new VlRichDataTable(this.driver, selector);
    }

    async getRichDataTablePaging() {
        return this._getRichDataTable('#rich-data-table-paging');
    }

    async getRichDataTable() {
        return this._getRichDataTable('#rich-data-table');
    }

    async getRichDataTableSorting() {
        return this._getRichDataTable('#rich-data-table-sorting');
    }

    async getRichDataTableMultiSorting() {
        return this._getRichDataTable('#rich-data-table-multi-sorting');
    }

    async getRichDataTableCollapsedMedium() {
        return this._getRichDataTable('#rich-data-table-collapsed-medium');
    }

    async getRichDataTableCollapsedSmall() {
        return this._getRichDataTable('#rich-data-table-collapsed-small');
    }

    async getRichDataTableCollapsedExtraSmall() {
        return this._getRichDataTable('#rich-data-table-collapsed-extra-small');
    }

    async getRichDataTableFilter() {
        return this._getRichDataTable('#rich-data-table-filter');
    }

    async getRichDataTableFilterSortingPaging() {
        return this._getRichDataTable('#rich-data-table-filter-sorting-paging');
    }

    async submitSearchFilter(searchFilter) {
        const button = await searchFilter.findElement(By.css('button[type="submit"]'));
        await button.click();
    }

    async load() {
        await super.load(`${config.baseUrl}legacy/rich-data-table/test/e2e/index.html`);
    }
}
