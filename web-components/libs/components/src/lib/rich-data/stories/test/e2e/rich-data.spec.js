import { assert, getDriver } from '../../../../utils/test';
import { VlRichDataPage } from './rich-data.page';

describe('vl-rich-data', async () => {
    let driver;
    let vlRichDataPage;
    let originalWindowWidth;

    before(() => {
        driver = getDriver();
        vlRichDataPage = new VlRichDataPage(driver);
        return vlRichDataPage.load();
    });

    afterEach(async () => {
        if (originalWindowWidth != null) {
            const rect = await driver.manage().window().getRect();
            await driver.manage().window().setRect({ height: rect.height, width: originalWindowWidth });
            originalWindowWidth = null;
        }
    });

    it('als gebruiker kan ik de content filteren', async () => {
        const richData = await vlRichDataPage.getRichData();
        const searchFilter = await richData.getSearchFilter();
        const searchFilterId = await vlRichDataPage.getSearchFilterInputFieldByName(searchFilter, 'id');
        const searchFilterManagerLastName = await vlRichDataPage.getSearchFilterInputFieldByName(
            searchFilter,
            'manager.lastName'
        );

        let searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 10);

        await searchFilterManagerLastName.setValue('Coe');
        searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 2);

        await searchFilterId.setValue(1);
        searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 1);

        await searchFilterId.clear();
        searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 2);

        await searchFilterManagerLastName.clear();
        searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 10);
    });

    it('als gebruiker zal ik altijd naar de eerste pagina doorverwezen worden bij het filteren en kan ik indien mogelijk pagineren binnen de zoekresultaten', async () => {
        const richData = await vlRichDataPage.getRichData();
        const searchFilter = await richData.getSearchFilter();
        const searchFilterManagerLastName = await vlRichDataPage.getSearchFilterInputFieldByName(
            searchFilter,
            'manager.lastName'
        );
        const pager = await richData.getPager();

        await pager.goToNextPage();
        let range = await pager.getRange();
        await assert.equal(range.minimum, 11);
        await assert.equal(range.maximum, 20);
        await assert.eventually.equal(pager.getCurrentPage(), 2);
        await assert.eventually.equal(pager.getItemsPerPage(), 10);
        await assert.eventually.equal(pager.getTotalItems(), 25);

        await searchFilterManagerLastName.setValue('Coe');
        const searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 2);
        range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 2);
        await assert.eventually.equal(pager.getItemsPerPage(), 2);
        await assert.eventually.equal(pager.getTotalItems(), 2);

        await searchFilterManagerLastName.clear();
    });

    it('als gebruiker zal ik de originele lijst te zien krijgen wanneer ik een filter verwijder', async () => {
        const richData = await vlRichDataPage.getRichData();
        const searchFilter = await richData.getSearchFilter();
        const searchFilterManagerLastName = await vlRichDataPage.getSearchFilterInputFieldByName(
            searchFilter,
            'manager.lastName'
        );
        const pager = await richData.getPager();

        let range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 10);
        await assert.eventually.equal(pager.getCurrentPage(), 1);
        await assert.eventually.equal(pager.getItemsPerPage(), 10);
        await assert.eventually.equal(pager.getTotalItems(), 25);

        await searchFilterManagerLastName.setValue('Coe');
        const searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 2);
        range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 2);
        await assert.eventually.equal(pager.getItemsPerPage(), 2);
        await assert.eventually.equal(pager.getTotalItems(), 2);

        await searchFilterManagerLastName.clear();
        range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 10);
        await assert.eventually.equal(pager.getCurrentPage(), 1);
        await assert.eventually.equal(pager.getItemsPerPage(), 10);
        await assert.eventually.equal(pager.getTotalItems(), 25);
    });

    it('als gebruiker zal ik de originele lijst te zien krijgen wanneer ik de volledige zoekopdracht verwijder', async () => {
        const richData = await vlRichDataPage.getRichData();
        const searchFilter = await richData.getSearchFilter();
        const searchFilterId = await vlRichDataPage.getSearchFilterInputFieldByName(searchFilter, 'id');
        const searchFilterName = await vlRichDataPage.getSearchFilterInputFieldByName(searchFilter, 'name');

        await searchFilterId.setValue('1');
        await searchFilterName.setValue('20');
        let searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 1);

        vlRichDataPage.resetSearchFilter(searchFilter);
        searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 10);

        await searchFilterId.clear();
        await searchFilterName.clear();
    });

    it('als gebruiker kan ik de filter sluiten en terug openen met de filter knop', async () => {
        const richData = await vlRichDataPage.getRichData();
        const filter = await richData.getSearchFilter();
        await assert.eventually.isTrue(filter.isDisplayed());

        await richData.toggleSearchFilter();
        await assert.eventually.isFalse(filter.isDisplayed());

        await richData.toggleSearchFilter();
        await assert.eventually.isTrue(filter.isDisplayed());
    });

    it('als gebruiker kan ik de resultaten sorteren', async () => {
        const richData = await vlRichDataPage.getRichData();
        const sorter = await richData.getSorter();

        let searchResults = await vlRichDataPage.getSearchResults(richData);
        let searchResult = await searchResults.getSearchResult(1);
        await assert.eventually.equal(searchResult.getTitle(), 'Project #1');

        await sorter.selectByText('Naam manager');
        searchResults = await vlRichDataPage.getSearchResults(richData);
        searchResult = await searchResults.getSearchResult(1);
        await assert.eventually.equal(searchResult.getTitle(), 'Project #2');

        await sorter.selectByText('ID');
    });

    it('als gebruiker kan ik zien hoeveel zoekresultaten er zijn', async () => {
        const richData = await vlRichDataPage.getRichData();
        const searchFilter = await richData.getSearchFilter();
        const searchFilterName = await vlRichDataPage.getSearchFilterInputFieldByName(searchFilter, 'name');

        await assert.eventually.equal(richData.getNumberOfSearchResults(), 25);
        await searchFilterName.setValue('20');
        await assert.eventually.equal(richData.getNumberOfSearchResults(), 1);

        await searchFilterName.clear();
    });

    it('als gebruiker wordt ik op de hoogte gebracht wanneer er geen resultaten zijn', async () => {
        const richData = await vlRichDataPage.getRichData();
        const searchFilter = await richData.getSearchFilter();
        const searchFilterName = await vlRichDataPage.getSearchFilterInputFieldByName(searchFilter, 'name');

        await assert.eventually.isFalse(richData.noContentIsVisible());
        await assert.eventually.isTrue(richData.contentIsVisible());

        await assert.eventually.equal(richData.getNumberOfSearchResults(), 25);
        await searchFilterName.setValue('geen resultaten');
        await assert.eventually.equal(richData.getNumberOfSearchResults(), 0);

        await assert.eventually.isTrue(richData.noContentIsVisible());
        await assert.eventually.isFalse(richData.contentIsVisible());

        await searchFilterName.clear();
        await assert.eventually.equal(richData.getNumberOfSearchResults(), 25);

        await assert.eventually.isFalse(richData.noContentIsVisible());
        await assert.eventually.isTrue(richData.contentIsVisible());
    });

    it('als gebruiker met een klein scherm, kan ik de filter openen als modal, gebruiken en terug sluiten', async () => {
        await changeWindowWidth(750);
        const richData = await vlRichDataPage.getRichData();
        const searchFilter = await richData.getSearchFilter();
        const searchFilterId = await vlRichDataPage.getSearchFilterInputFieldByName(searchFilter, 'id');
        const searchFilterName = await vlRichDataPage.getSearchFilterInputFieldByName(searchFilter, 'name');

        await richData.openModalSearchFilter();
        await searchFilterId.setValue('1');
        await searchFilterName.setValue('20');
        await vlRichDataPage.submitSearchFilter(searchFilter);

        const searchResults = await vlRichDataPage.getSearchResults(richData);
        await assert.eventually.lengthOf(searchResults.getSearchResults(), 1);

        await richData.openModalSearchFilter();
        await searchFilterId.clear();
        await searchFilterName.clear();
    });

    const changeWindowWidth = async (size) => {
        const rect = await driver.manage().window().getRect();
        originalWindowWidth = rect.width;
        await driver.manage().window().setRect({ height: rect.height, width: size });
    };
});
