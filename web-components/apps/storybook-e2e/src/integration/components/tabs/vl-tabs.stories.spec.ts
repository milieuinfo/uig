const tabsUrl = 'http://localhost:4600/iframe.html?id=components-vl-tabs--legacy-docs&viewMode=story';

describe('story vl-tabs', () => {
    it('should contain three tabs with titles', () => {
        cy.visit(`${tabsUrl}`)
        cy.getDataCy('tabs')
        .shadow()
        .find('ul.vl-tabs')
        .children()
        .each((tab, index) => {
            if(index === 0) {
            cy.wrap(tab)
            .find('slot')
                .contains('Trein')
            }
            if(index === 1) {
            cy.wrap(tab)
            .find('slot')
                .contains('Metro, tram en bus')
            }
            if(index === 2) {
            cy.wrap(tab)
            .find('slot')
                .contains('Fiets')
            }
        })
    });
});
