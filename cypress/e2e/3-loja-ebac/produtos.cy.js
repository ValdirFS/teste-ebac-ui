/// <reference types="cypress"/>

describe('Funcionalidade: produtos' , () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block ')
            //.first()
            //.last()
            //.eq(2)
            .contains('Aero Daily Fitness Tee')
            .click()

            cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        
    });
})

