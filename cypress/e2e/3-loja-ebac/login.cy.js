/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

it('Deve fazer login com Sucesso' , ( ) => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username'). type('valdir01@teste.com.br')
    cy.get('#password'). type('123#123')
    cy.get('.woocommerce-form > .button'). click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir01 (não é valdir01? Sair)')

})

})