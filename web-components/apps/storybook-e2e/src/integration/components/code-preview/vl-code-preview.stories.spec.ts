const codePreviewUrl = 'http://localhost:4600/iframe.html?id=components-vl-code-preview--default&viewMode=story';

describe('story vl-code-preview', () => {
    it('should contain a code section', () => {
        cy.visit(`${codePreviewUrl}`);
        cy.getDataCy('code-preview')
            .shadow()
            .find('code')
            .should('have.class', 'auto-indent')
            .should('have.class', 'language-markup');
    });
});
