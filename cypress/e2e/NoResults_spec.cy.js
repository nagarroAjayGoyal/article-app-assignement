describe('Homepage_spec.cy.js', () => {
  const url = 'http://localhost:3000'
  // const apiKey = Cypress.env('api_key')

  beforeEach(() => {
    cy.visit(url)
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixture: 'allArticles.json' }).as('getArticles')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixture: 'noResults.json' }).as('getNoResults')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixture: 'filteredArticles.json' }).as('getFilteredArticles')
  })

  it('should show a message if no results were found based on the filter search', () => {
    cy.get('form > .search-bar')
      .type('NASA').should('have.value', 'NASA')

    cy.get('button.search-btn')
      .should('not.be.disabled')
      .click()

    cy.get('.no-results-msg')
      .contains('No results were found based on your search. Clear and try a new search.')
  })

})