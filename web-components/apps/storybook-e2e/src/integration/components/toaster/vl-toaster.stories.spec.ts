const toasterUrl = 'http://localhost:4600/iframe.html?id=components-vl-toaster--default&viewMode=story';
const fadeOutToasterUrl = 'http://localhost:4600/iframe.html?id=components-vl-toaster--fade-out&viewMode=story';

describe('story vl-toaster', () => {
    it('should contain a toaster in the top left corner of the page', () => {
        cy.visit(`${toasterUrl}`);

        cy.getDataCy('button-top-left').click();

        cy.getDataCy('toaster-top-left')
            .find('vl-alert')
            .shadow()
            .find('#alert')
            .should('have.class', 'vl-alert')
            .should('have.class', 'vl-alert--success');
    });

    it('should contain a toaster in the top right corner of the page', () => {
        cy.visit(`${toasterUrl}`);

        cy.getDataCy('button-top-right').click();

        cy.getDataCy('toaster-top-right')
            .find('vl-alert')
            .shadow()
            .find('#alert')
            .should('have.class', 'vl-alert')
            .should('have.class', 'vl-alert--success');
    });

    it('should contain a toaster in the bottom left corner of the page', () => {
        cy.visit(`${toasterUrl}`);

        cy.getDataCy('button-bottom-left').click();

        cy.getDataCy('toaster-bottom-left')
            .find('vl-alert')
            .shadow()
            .find('#alert')
            .should('have.class', 'vl-alert')
            .should('have.class', 'vl-alert--success');
    });

    it('should contain a toaster in the bottom right corner of the page', () => {
        cy.visit(`${toasterUrl}`);

        cy.getDataCy('button-bottom-right').click();

        cy.getDataCy('toaster-bottom-right')
            .find('vl-alert')
            .shadow()
            .find('#alert')
            .should('have.class', 'vl-alert')
            .should('have.class', 'vl-alert--success');
    });

    it('should contain a toaster that fades out after a few seconds', () => {
        cy.visit(`${fadeOutToasterUrl}`);

        cy.getDataCy('button-top-left').click();

        cy.getDataCy('toaster-top-left').children().should('have.length', 1);

        cy.wait(5000);

        cy.getDataCy('toaster-top-left').find('vl-alert').shadow().find('#alert').children().should('have.length', 0);
    });
});
