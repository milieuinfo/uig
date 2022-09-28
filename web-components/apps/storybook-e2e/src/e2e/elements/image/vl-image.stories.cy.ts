describe('story vl-image', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-image--image-default&viewMode=story')
    );

    it('should contain an image', () => {
        cy.getDataCy('image').should('have.class', 'vl-image');
    });
});
