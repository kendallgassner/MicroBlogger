context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('cy.go() - go back or forward in the browser\'s history', () => {
    cy.get('button').click();

    cy.location('pathname').should('include', 'Post');

    cy.go('back')
    cy.location('pathname').should('not.include', 'Post');

    cy.go('forward')
    cy.location('pathname').should('include', 'Post');

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'Post');

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'Post');
  });
});
