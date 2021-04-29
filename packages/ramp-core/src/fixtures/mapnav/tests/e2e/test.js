describe('Mapnav', () => {
    beforeEach(() => {
        cy.visit('/index-e2e.html?script=mapnav');
        cy.get('.ramp-app');
        cy.get('.mapnav');
    });

    it('has zoom buttons', () => {
        cy.get('.mapnav .zoom-in');
    });

    it('has other buttons', () => {
        cy.get('.mapnav .mapnav-section');
    });

    it('zoom-in button works', () => {
        cy.window().then(window => {
            cy.get('.mapnav .zoom-in').click();
            /* cy.wrap(window.rInstance.map.esriView)
                .its('zoom')
                .should('change'); */
        });
    });

    it('zoom-out button works', () => {
        cy.window().then(window => {
            cy.get('.mapnav .zoom-out').click();
            cy.wrap(window.rInstance.map.esriView)
                .its('zoom')
                .should('eq', 0);
        });
    });
});
