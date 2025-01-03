/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(()  => {
    cy.screenshot()
    })
    
    it('Deve fazer login com Sucesso' , ( ) => {
        cy.get('#username'). type('valdir01@teste.com.br')
        cy.get('#password'). type('123#123')
        cy.get('.woocommerce-form > .button'). click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir01 (não é valdir01? Sair)')

    })

    it('Deve exibir uma mesagem de erro ao inserir usuário inválido', () => {
        cy.get('#username'). type('valdir01@teste.com.br')
        cy.get('#password'). type('123#000')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir uma mesagem de erro ao inserir senha inválida', () => {
        cy.get('#username'). type('valdir01@teste.com.br')
        cy.get('#password'). type('123#000')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail valdir01@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
        
    });

})