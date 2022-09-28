describe('story vl-form', () => {
    beforeEach(() => cy.visit('http://localhost:4600/iframe.html?args=&id=elements-form--form-default&viewMode=story'));

    it('should contain a form', () => {
        cy.getDataCy('form-default').should('have.class', 'vl-form');
    });
});
