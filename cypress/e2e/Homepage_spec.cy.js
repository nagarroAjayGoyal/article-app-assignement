describe('Homepage_spec.cy.js', () => {
  const url = 'http://localhost:3000'
  // const apiKey = Cypress.env('api_key')

  beforeEach(() => {
    cy.visit(url)
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`, 
      { fixture: 'allArticles.json' }).as('getArticles')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixture: 'selectedArticle.json' }).as('getSelectedArticle')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixture: 'noResults.json' }).as('getNoResults')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixture: 'filteredArticles.json' }).as('getFilteredArticles')
  })

  it('should visit the homepage', () => {
    cy.url('http://localhost:3000')
  })

  it('should display a header, form, list of articles, and footer', () => {
    cy.get('header > h1')
      .should('be.visible').and('contain', 'The New York Times')

    cy.get('footer > h3')
      .should('be.visible').and('contain', '2022 The New York Times Company')

    cy.get('form')
      .should('be.visible')
      .children('.search-bar').should('be.visible').should('have.attr', 'placeholder').and('include', 'America')
      
    cy.get('button.search-btn')
      .should('be.visible').should('contain', 'Search').and('be.disabled')
  })

  it('should display a list of articles on page load that each have a title and abstract', () => {
    cy.get('.article-list')
      .should('not.be.empty')

    cy.get('.article-list a')
      .should('have.length', 15)
      .children().should('have.class', 'stories-card')
      .within(card => {
        // cy.get('img').should('be.visible').should('have.attr', 'alt').should('not.be.empty')
        cy.get('h2').should('be.visible').should('not.be.empty')
        cy.get('p').should('be.visible')
      })  
  })

  it('should allow users to type in the form and filter through the list of articles', () => {
    cy.get('form > .search-bar')
      .type('Acquitted').should('have.value', 'Acquitted')

    cy.get('button.search-btn')
      .should('not.be.disabled')
      .click()

    // cy.wait('@getFilteredArticles')

    // cy.get('article-list')
    //   .should('have.length', 1)

    // cy.get('stories-card')
    //   .should('be.visible')
    //   .within(card => {
    //     cy.get('img')
    //       .should('be.visible')
    //       .should('have.attr', 'alt').should('contain', '')
    //       .should('have.attr', 'src').should('contain', '')
        
    //     cy.get('h2')
    //       .should('be.visible')
    //       .should('contain', '')

    //     cy.get('p')
    //       .should('be.visible')
    //       .should('contain', '')
    //   }) 
  })

  it('should allow users to start the search over and view the original list of articles', () => {
    cy.get('form > .search-bar')
      .type('Acquitted').should('have.value', 'Acquitted')

    cy.get('button.search-btn')
      .should('not.be.disabled')
      .click()

    cy.get('button.clear-btn')
      .should('not.be.disabled').and('contain', 'Clear')
      .click()

    cy.get('article-list')
      .should('not.be.empty')
  })
  it('should be able to click on an article card to view more details on a details viewpage and return to homepage', () => {
    cy.get('.article-list a')
      .first()
      .click()

    // cy.url(url + `/article/3me6taZ`)

    cy.get('button')
      .contains('Go Back')
      .click()

    cy.url(url)
  })

  // it('should display an error message to the user when there is a network request error', () => {
  //   cy.get('.error')
  //     .contains('Something went wrong and our team is working on the issue')
  // })
})

