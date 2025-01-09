/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta' , () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
          cy.login('valdir13@teste.com.br' , '2727#2727')  
        })
        
    });

    it('Deve completar detalhes da conta com sucesso', () => {
         cy.detalhesConta('Valdir01' , 'Felix' , 'Valdir.qa')
         cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
    
    

});