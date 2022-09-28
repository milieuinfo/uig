describe('story vl-input-addon', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-input-addon--input-addon-default&viewMode=story')
    );

    it('should contain an input addon element', () => {
        cy.getDataCy('input-addon').should('have.class', 'vl-input-addon');
    });
});
