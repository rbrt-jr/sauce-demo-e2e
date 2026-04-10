describe('Hooks Test', () => {
    before(() => {
        cy.log('Run before all tests')
    })

    beforeEach(() => {
        cy.log('Run before each test')
    })

    afterEach(() => {
        cy.log('Run after each test')
    })

    after(() => {
        cy.log('Run after all tests')
    })

    it('Test 1', () => {
        cy.log('******Runing First Test******')
    })

    it('Test 2', () => {
        cy.log('******Runing Second Test******')
    })

    it('Test 3', () => {
        cy.log('******Runing Third Test******')
    })




})