const infoblockUrl= 'http://localhost:4600/iframe.html?id=components-vl-infoblock--contact&viewMode=story';

describe('story vl-infoblock', () => {
    it('should contain a title', () => {
        cy.visit(`${infoblockUrl}`)
        cy.getDataCy('infoblock')
        .find('h2[slot="title"]')
            .contains('Contactenlijst')
    });

    it('should contain content', () => {
        cy.visit(`${infoblockUrl}`)
        cy.getDataCy('infoblock')
            .contains('Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.')
    });

    it('should contain contact type infoblock', () => {
        cy.visit('http://localhost:4600/iframe.html?id=components-vl-infoblock--contact&viewMode=story')
        cy.getDataCy('infoblock')
        .shadow()
        .find('#infoblock-element')
            .should('have.class', 'vl-infoblock')
            .should('have.class', 'vl-infoblock--contact')
    });

    it('should contain publications type infoblock', () => {
        cy.visit('http://localhost:4600/iframe.html?id=components-vl-infoblock--publications&viewMode=story')
        cy.getDataCy('infoblock')
        .shadow()
        .find('#infoblock-element')
            .should('have.class', 'vl-infoblock')
            .should('have.class', 'vl-infoblock--publications')
    });

    it('should contain FAQ type infoblock', () => {
        cy.visit('http://localhost:4600/iframe.html?id=components-vl-infoblock--faq&viewMode=story')
        cy.getDataCy('infoblock')
        .shadow()
        .find('#infoblock-element')
            .should('have.class', 'vl-infoblock')
            .should('have.class', 'vl-infoblock--faq')
    });

    it('should contain news type infoblock', () => {
        cy.visit('http://localhost:4600/iframe.html?id=components-vl-infoblock--news&viewMode=story')
        cy.getDataCy('infoblock')
        .shadow()
        .find('#infoblock-element')
            .should('have.class', 'vl-infoblock')
            .should('have.class', 'vl-infoblock--news')
    });

    it('should contain timeline type infoblock', () => {
        cy.visit('http://localhost:4600/iframe.html?id=components-vl-infoblock--timeline&viewMode=story')
        cy.getDataCy('infoblock')
        .shadow()
        .find('#infoblock-element')
            .should('have.class', 'vl-infoblock')
            .should('have.class', 'vl-infoblock--timeline')
    });

    it('should contain FAQ type infoblock', () => {
        cy.visit('http://localhost:4600/iframe.html?id=components-vl-infoblock--faq&viewMode=story')
        cy.getDataCy('infoblock')
        .shadow()
        .find('#infoblock-element')
            .should('have.class', 'vl-infoblock')
            .should('have.class', 'vl-infoblock--faq')
    });

    it('should contain an infoblock with a custom icon', () => {
        cy.visit('http://localhost:4600/iframe.html?args=&id=components-vl-infoblock--custom-icon&viewMode=story')
        cy.getDataCy('infoblock')
        .shadow()
        .find('#infoblock_icon')
            .should('have.class', 'vl-infoblock__header__icon')
            .should('have.attr', 'data-vl-icon', 'calendar')
    });

    it('should contain an infoblock with a title set through a slot', () => {
        cy.visit('http://localhost:4600/iframe.html?args=&id=components-vl-infoblock--with-slot-elements&viewMode=story')
        cy.getDataCy('infoblock-with-slot-elements')
        .shadow()
        .find('.vl-infoblock__title')
    });

});
