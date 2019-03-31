context('addPost', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('button').click();
    })

    it('Closing addPost navigates back to home', () => {
        cy.get('button:nth-of-type(2)').click();

        cy.location('pathname').should('not.include', 'Post');

    });

    it('alert is called when there is incorrect data', () => {
        const stub = cy.stub();
        cy.on ('window:alert', stub);
        cy.location('pathname').should('include', 'Post');

        cy.get('button:first').click();

        cy.get('button:first').click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith("Error character count must be >= 10 and <= 140");
            cy.location('pathname').should('include', 'Post');
        });
    });

    it('successfully saves post', () => {
        cy.get('input:first').type("1");
        cy.get('input:nth-of-type(2)').type('title');
        cy.get('textarea').type('this is enough text to pass requirements');
        cy.get('button:first').click();
        cy.location('pathname').should('not.include', 'Post');
        cy.get(".Banner-success").should("exist");
    });
});
