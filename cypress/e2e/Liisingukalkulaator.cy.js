/// <reference types="cypress" />

context('Kalkulatsioonide korrektsus', () => {
    beforeEach(() => {
        cy.visit('https://www.cooppank.ee/autoliising')
    })


    it('Kapitalirent', () => {
        //Ostuhind
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(1) > .c-slider-input > .c-slider-input__input > .c-slider-input__mask > .value')
            .type('50 000')

        //Periood
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(2) > .c-slider-input > .c-slider-input__input')
            .type('17')

        //Esmane sissemakse
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(3) > .c-form-field__wrap > :nth-child(3) > .form-control')
            .clear().type('5000')

        //Jääkväärtus
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(4) > .c-form-field__wrap > :nth-child(3) > .form-control')
            .clear().type('8000')

        //Kuumakse
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(6) > .c-calculator--col-right > .c-form-field__summary > .value')
            .should('have.text', '2 380')
    })

    it('Kasutusrent', () => {

        //Ostuhind
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(1) > .c-slider-input > .c-slider-input__input > .c-slider-input__mask > .value')
            .type('14 000')

        //Periood
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(2) > .c-slider-input > .c-slider-input__input')
            .type('36')

        //Esmane sissemakse
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(3) > .c-form-field__wrap > :nth-child(3) > .form-control')
            .clear().type('1400')

        //Jääkväärtus
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(4) > .c-form-field__wrap > :nth-child(3) > .form-control')
            .clear().type('2800')

        //Vali kasutusrent
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > .c-form-group--radios > .c-form-field > :nth-child(2) > .c-form-field__label--radio > .text')
            .click('right')

        //Kuumakse
        cy.get('.c-new-calculator-wrapper > .c-hero--calculator > .c-calculator > form > .c-calculator__wrap > :nth-child(6) > .c-calculator--col-right > .c-form-field__summary > .value')
            .should('have.text', '288.12')
    })
})

