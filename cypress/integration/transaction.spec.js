/// <reference types="cypress"/>

describe('Transactions', () => {

    before(() => {
      cy.visit('https://devfinance-agilizei.netlify.app/#');
      });
      
    it('Do a deposit', () => {
        cy.get('.new').click();
        cy.get('#description').type('Deposit 1');
        cy.get('#amount').type('1000');
        cy.get('#date').type('2021-06-27');
        cy.get('button').contains('Salvar').click();
        cy.get('#totalDisplay').should('contain.text', '1.000,00');
    });

    it('Do an withdraw', () => {
        cy.get('.new').click();
        cy.get('#description').type('Withdraw 1');
        cy.get('#amount').type('-500');
        cy.get('#date').type('2021-06-27');
        cy.get('button').contains('Salvar').click();
        cy.get('#totalDisplay').should('contain.text', '500,00');
    });
  })