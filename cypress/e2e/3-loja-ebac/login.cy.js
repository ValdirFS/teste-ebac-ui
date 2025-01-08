/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(()  => {
    cy.screenshot()
    })
    
    it('Deve fazer login com Sucesso' , ( ) => {
        cy.get('#username'). type('valdir13@teste.com.br')
        cy.get('#password'). type('2727#2727')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir13 (não é valdir13? Sair)')

    })

    it('Deve exibir uma mesagem de erro ao inserir usuário inválido', () => {
        cy.get('#username'). type('valdir13@teste.com.br')
        cy.get('#password'). type('123#000')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve exibir uma mesagem de erro ao inserir senha inválida', () => {
        cy.get('#username'). type('valdir13@teste.com.br')
        cy.get('#password'). type('123#000')
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail valdir13@teste.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
        
    });

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username'). type(perfil.usuário)
        cy.get('#password'). type(perfil.senha)
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, valdir13 (não é valdir13? Sair)')
        
    });

    it.only('Deve fazer login com sucesso - usando fixture', () => {
        cy.fixture('perfil').then(dados => {
        cy.get('#username'). type(dados.usuário , {log: false})
        cy.get('#password'). type(dados.senha , {log: false})
        cy.get('.woocommerce-form > .button'). click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, valdir13 (não é valdir13? Sair)')

        })
        
    });

})