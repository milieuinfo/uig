import { assert, getDriver, By } from '../../../../utils/test';
import { VlRichDataTablePage } from './rich-data-table.page';
import { VlInputField } from '../../../../components/input-field/test/e2e/input-field';

describe('vl-rich-data-table', async () => {
    let driver;
    let vlRichDataTablePage;
    let originalWindowWidth;

    before(() => {
        driver = getDriver();
        vlRichDataTablePage = new VlRichDataTablePage(driver);
        return vlRichDataTablePage.load();
    });

    afterEach(async () => {
        if (originalWindowWidth != null) {
            const rect = await driver.manage().window().getRect();
            await driver.manage().window().setRect({ height: rect.height, width: originalWindowWidth });
            originalWindowWidth = null;
        }
    });

    it('als gebruiker kan ik de hoofdingen van een rich data table zien', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTable();
        const headerRows = await richDataTable.getHeaderRows();
        await headerRows[0].assertValues([
            'ID',
            'Naam',
            'Naam manager',
            'Eerste medewerker',
            'Tweede medewerker',
            'Project o.l.v. manager',
        ]);
    });

    it('als gebruiker kan ik allerlei soorten selectoren gebruiken voor velden van een rich data table', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTable();
        const bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 2);
        await bodyRows[0].assertValues([
            0,
            'Project #1',
            'Riquier',
            'Kleykens',
            'Tom Coemans',
            'Project #1 o.l.v. Pascal Riquier',
        ]);
        await bodyRows[1].assertValues([
            1,
            'Project #2',
            'Coemans',
            'Wauters',
            'Tom Coemans',
            'Project #2 o.l.v. Tom Coemans',
        ]);
    });

    it('als gebruiker kan ik pagineren door de verschillende paginas van een rich data table', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTablePaging();
        let bodyRows = await richDataTable.getBodyRows();
        const pager = await richDataTable.getPager();

        assert.lengthOf(bodyRows, 5);
        await bodyRows[0].assertValues([1, 'Project #1']);
        await pager.goToNextPage();
        bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 5);
        await bodyRows[0].assertValues([6, 'Project #6']);
        await pager.goToPreviousPage();
        bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 5);
        await bodyRows[0].assertValues([1, 'Project #1']);
    });

    it('als gebruiker kan ik sorteren op de kolommen van een single sort rich data table', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableSorting();
        await assert.eventually.isFalse(richDataTable.isMultisortingEnabled());

        let bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 2);
        await bodyRows[0].assertValues([0, 'Project #1', 'Jan Jansens']);
        await bodyRows[1].assertValues([1, 'Project #2', 'Jan Jansens']);

        const idSorter = await richDataTable.getSorter('id');
        const nameSorter = await richDataTable.getSorter('name');
        const ownerSorter = await richDataTable.getSorter('owner');

        await assert.eventually.isTrue(idSorter.isAscending());
        await assert.eventually.isTrue(nameSorter.isUnsorted());
        await assert.eventually.isTrue(ownerSorter.isUnsorted());

        // Sorteer op naam, ascending.
        await richDataTable.toggleSortOfColumn('name');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([0, 'Project #1', 'Jan Jansens']);
        await bodyRows[1].assertValues([1, 'Project #2', 'Jan Jansens']);
        await assert.eventually.isTrue(nameSorter.isAscending());
        await assert.eventually.isTrue(idSorter.isUnsorted());

        // Sorteer op naam, descending.
        await richDataTable.toggleSortOfColumn('name');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);
        await assert.eventually.isTrue(nameSorter.isDescending());
    });

    it('als gebruiker kan ik sorteren op de kolommen van een multisort rich data table', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableMultiSorting();
        await assert.eventually.isTrue(richDataTable.isMultisortingEnabled());

        let bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 2);
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);

        const idSorter = await richDataTable.getSorter('id');
        const nameSorter = await richDataTable.getSorter('name');
        const ownerSorter = await richDataTable.getSorter('owner');

        await assert.eventually.isTrue(idSorter.isDescending());
        await assert.eventually.isFalse(idSorter.isAscending());
        await assert.eventually.isFalse(idSorter.isUnsorted());
        await assert.eventually.equal(idSorter.getPriority(), '3');

        await assert.eventually.isTrue(nameSorter.isDescending());
        await assert.eventually.isFalse(nameSorter.isAscending());
        await assert.eventually.isFalse(nameSorter.isUnsorted());
        await assert.eventually.equal(nameSorter.getPriority(), '2');

        await assert.eventually.isFalse(ownerSorter.isDescending());
        await assert.eventually.isTrue(ownerSorter.isAscending());
        await assert.eventually.isFalse(ownerSorter.isUnsorted());
        await assert.eventually.equal(ownerSorter.getPriority(), '1');

        // Zet alle sortering af.
        await richDataTable.toggleSortOfColumn('owner');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);

        await richDataTable.toggleSortOfColumn('owner');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);

        await richDataTable.toggleSortOfColumn('name');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);

        await richDataTable.toggleSortOfColumn('id');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);

        await assert.eventually.isTrue(idSorter.isUnsorted());
        await assert.eventually.isTrue(nameSorter.isUnsorted());
        await assert.eventually.isTrue(ownerSorter.isUnsorted());
        await assert.eventually.equal(idSorter.getPriority(), '');
        await assert.eventually.equal(nameSorter.getPriority(), '');
        await assert.eventually.equal(ownerSorter.getPriority(), '');

        // Sorteer op owner, ascending. Het resultaat blijft hetzelfde aangezien owner gelijk is voor alle rijen.
        await richDataTable.toggleSortOfColumn('owner');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);
        await assert.eventually.isTrue(ownerSorter.isAscending());
        await assert.eventually.equal(ownerSorter.getPriority(), '1');

        // Sorteer op owner, ascending. Het resultaat blijft hetzelfde aangezien owner gelijk is voor alle rijen.
        await richDataTable.toggleSortOfColumn('owner');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);
        await assert.eventually.isTrue(ownerSorter.isDescending());
        await assert.eventually.equal(ownerSorter.getPriority(), '1');

        // Sorteer op naam, ascending.
        await richDataTable.toggleSortOfColumn('name');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([0, 'Project #1', 'Jan Jansens']);
        await bodyRows[1].assertValues([1, 'Project #2', 'Jan Jansens']);
        await assert.eventually.isTrue(nameSorter.isAscending());
        await assert.eventually.equal(nameSorter.getPriority(), '2');

        // Sorteer op naam, descending.
        await richDataTable.toggleSortOfColumn('name');
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([1, 'Project #2', 'Jan Jansens']);
        await bodyRows[1].assertValues([0, 'Project #1', 'Jan Jansens']);
        await assert.eventually.isTrue(nameSorter.isDescending());
        await assert.eventually.equal(nameSorter.getPriority(), '2');
    });

    it('als gebruiker zie ik het onderscheid tussen een collapsed-medium rich-data-table en een zonder', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableCollapsedMedium();
        await assert.eventually.isTrue(richDataTable.isCollapsedMedium());
        const richDatatableWithoutCollapsedMedium = await vlRichDataTablePage.getRichDataTablePaging();
        await assert.eventually.isFalse(richDatatableWithoutCollapsedMedium.isCollapsedMedium());
    });

    it('als gebruiker zie ik het onderscheid tussen een collapsed-small rich-data-table en een zonder', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableCollapsedSmall();
        await assert.eventually.isTrue(richDataTable.isCollapsedSmall());
        const richDatatableWithoutCollapsedSmall = await vlRichDataTablePage.getRichDataTablePaging();
        await assert.eventually.isFalse(richDatatableWithoutCollapsedSmall.isCollapsedSmall());
    });

    it('als gebruiker zie ik het onderscheid tussen een collapsed-extra-small rich-data-table en een zonder', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableCollapsedExtraSmall();
        await assert.eventually.isTrue(richDataTable.isCollapsedExtraSmall());
        const richDatatableWithoutCollapsedExtraSmall = await vlRichDataTablePage.getRichDataTablePaging();
        await assert.eventually.isFalse(richDatatableWithoutCollapsedExtraSmall.isCollapsedExtraSmall());
    });

    it('als gebruiker kan ik op verschillende velden filteren', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableFilter();
        const searchFilter = await richDataTable.getSearchFilter();
        const filterManagerLastNameVeld = await new VlInputField(
            driver,
            await searchFilter.findElement(By.css('[name="manager.lastName"]'))
        );
        await filterManagerLastNameVeld.setValue('Riq');

        let bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 2);
        await bodyRows[0].assertValues([0, 'Project #1', 'Riquier', 'Kleykens', 'Project #1 o.l.v. Pascal Riquier']);
        await bodyRows[1].assertValues([2, 'Project #3', 'Riquier', 'Beckers', 'Project #3 o.l.v. Pascal Riquier']);

        const filterIdVeld = await new VlInputField(driver, await searchFilter.findElement(By.css('[name="id"]')));
        await filterIdVeld.setValue('0');
        bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 1);
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([0, 'Project #1', 'Riquier', 'Kleykens', 'Project #1 o.l.v. Pascal Riquier']);

        await filterIdVeld.clear();
        bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 2);
        await bodyRows[0].assertValues([0, 'Project #1', 'Riquier', 'Kleykens', 'Project #1 o.l.v. Pascal Riquier']);
        await bodyRows[1].assertValues([2, 'Project #3', 'Riquier', 'Beckers', 'Project #3 o.l.v. Pascal Riquier']);

        await filterManagerLastNameVeld.clear();
        bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 3);
        await bodyRows[0].assertValues([0, 'Project #1', 'Riquier', 'Kleykens', 'Project #1 o.l.v. Pascal Riquier']);
        await bodyRows[1].assertValues([1, 'Project #2', 'Coemans', 'Wauters', 'Project #2 o.l.v. Tom Coemans']);
        await bodyRows[2].assertValues([2, 'Project #3', 'Riquier', 'Beckers', 'Project #3 o.l.v. Pascal Riquier']);
    });

    it('als gebruiker zal ik altijd naar de eerste pagina doorverwezen worden bij het filteren en kan ik indien mogelijk pagineren binnen de zoekresultaten', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableFilterSortingPaging();
        const searchFilter = await richDataTable.getSearchFilter();
        const filterManagerLastNameVeld = await new VlInputField(
            driver,
            await searchFilter.findElement(By.css('[name="manager.lastName"]'))
        );
        const pager = await richDataTable.getPager();

        await pager.goToNextPage();
        let range = await pager.getRange();
        await assert.equal(range.minimum, 11);
        await assert.equal(range.maximum, 20);
        await assert.eventually.equal(pager.getCurrentPage(), 2);
        await assert.eventually.equal(pager.getItemsPerPage(), 10);
        await assert.eventually.equal(pager.getTotalItems(), 25);

        await filterManagerLastNameVeld.setValue('Coe');
        const bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 2);
        range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 2);
        await assert.eventually.equal(pager.getItemsPerPage(), 2);
        await assert.eventually.equal(pager.getTotalItems(), 2);
        await bodyRows[0].assertValues([1, 'Project #2', 'Coemans', 'Wauters', 'Project #2 o.l.v. Tom Coemans']);
        await bodyRows[1].assertValues([2, 'Project #3', 'Coemans', 'Wauters', 'Project #3 o.l.v. Tom Coemans']);

        await filterManagerLastNameVeld.clear();
    });

    it('als gebruiker zal ik de originele lijst te zien krijgen wanneer ik een filter verwijder', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableFilterSortingPaging();
        const searchFilter = await richDataTable.getSearchFilter();
        const filterManagerLastNameVeld = await new VlInputField(
            driver,
            await searchFilter.findElement(By.css('[name="manager.lastName"]'))
        );
        const pager = await richDataTable.getPager();

        let range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 10);
        await assert.eventually.equal(pager.getCurrentPage(), 1);
        await assert.eventually.equal(pager.getItemsPerPage(), 10);
        await assert.eventually.equal(pager.getTotalItems(), 25);

        await filterManagerLastNameVeld.setValue('Coe');
        const bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 2);
        range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 2);
        await assert.eventually.equal(pager.getItemsPerPage(), 2);
        await assert.eventually.equal(pager.getTotalItems(), 2);
        await bodyRows[0].assertValues([1, 'Project #2', 'Coemans', 'Wauters', 'Project #2 o.l.v. Tom Coemans']);
        await bodyRows[1].assertValues([2, 'Project #3', 'Coemans', 'Wauters', 'Project #3 o.l.v. Tom Coemans']);

        await filterManagerLastNameVeld.clear();
        range = await pager.getRange();
        await assert.equal(range.minimum, 1);
        await assert.equal(range.maximum, 10);
        await assert.eventually.equal(pager.getCurrentPage(), 1);
        await assert.eventually.equal(pager.getItemsPerPage(), 10);
        await assert.eventually.equal(pager.getTotalItems(), 25);
    });

    it('als gebruiker zal ik de originele lijst te zien krijgen wanneer ik de volledige zoekopdracht verwijder', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableFilterSortingPaging();
        const searchFilter = await richDataTable.getSearchFilter();
        const filterIdVeld = await new VlInputField(driver, await searchFilter.findElement(By.css('[name="id"]')));
        await filterIdVeld.setValue('1');
        const filterNameVeld = await new VlInputField(driver, await searchFilter.findElement(By.css('[name="name"]')));
        await filterNameVeld.setValue('20');
        const bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 1);
        await bodyRows[0].assertValues([19, 'Project #20', 'Riquier', 'Beckers', 'Project #20 o.l.v. Pascal Riquier']);

        const zoekOpdrachtenVerwijderen = await searchFilter.findElement(By.css('button[type="reset"]'));
        zoekOpdrachtenVerwijderen.click();

        await assert.eventually.lengthOf(richDataTable.getBodyRows(), 10);
    });

    it('als gebruiker zal ik altijd naar de eerste pagina doorverwezen worden bij het sorteren', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableFilterSortingPaging();
        const pager = await richDataTable.getPager();

        await richDataTable.toggleSortOfColumn('id');
        let bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([0, 'Project #1', 'Riquier', 'Kleykens', 'Project #1 o.l.v. Pascal Riquier']);
        await pager.goToPage(3);
        await richDataTable.toggleSortOfColumn('id');
        await assert.eventually.equal(pager.getCurrentPage(), 1);
        bodyRows = await richDataTable.getBodyRows();
        await bodyRows[0].assertValues([24, 'Project #25', 'Riquier', 'Beckers', 'Project #25 o.l.v. Pascal Riquier']);
    });

    it('als gebruiker kan ik de filter sluiten en terug openen met de filter knop', async () => {
        const richDataTable = await vlRichDataTablePage.getRichDataTableFilterSortingPaging();
        const filter = await richDataTable.getSearchFilter();
        await assert.eventually.isTrue(filter.isDisplayed());

        await richDataTable.toggleSearchFilter();
        await assert.eventually.isFalse(filter.isDisplayed());

        await richDataTable.toggleSearchFilter();
        await assert.eventually.isTrue(filter.isDisplayed());
    });

    it('als gebruiker met een klein scherm, kan ik de filter openen, gebruiken en terug sluiten', async () => {
        await changeWindowWidth(750);
        const richDataTable = await vlRichDataTablePage.getRichDataTableFilterSortingPaging();
        const filter = await richDataTable.getSearchFilter();

        await richDataTable.openModalSearchFilter();
        const filterIdVeld = await new VlInputField(driver, await filter.findElement(By.css('[name="id"]')));
        await filterIdVeld.setValue('1');
        const filterNameVeld = await new VlInputField(driver, await filter.findElement(By.css('[name="name"]')));
        await filterNameVeld.setValue('20');
        await vlRichDataTablePage.submitSearchFilter(filter);

        const bodyRows = await richDataTable.getBodyRows();
        assert.lengthOf(bodyRows, 1);
        await bodyRows[0].assertValues([19, 'Project #20', 'Riquier', 'Beckers', 'Project #20 o.l.v. Pascal Riquier']);
    });

    const changeWindowWidth = async (size) => {
        const rect = await driver.manage().window().getRect();
        originalWindowWidth = rect.width;
        await driver.manage().window().setRect({ height: rect.height, width: size });
    };
});
