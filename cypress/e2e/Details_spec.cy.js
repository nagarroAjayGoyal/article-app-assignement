describe('Homepage_spec.cy.js', () => {
  const url = 'http://localhost:3000'

  beforeEach(() => {
    cy.visit(`${url}/article/3ma5gBJ`)
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixture: 'selectedArticle.json' }).as('getSelectedArticle')
  })

  it.skip('should visit the details page', () => {
    cy.url('http://localhost:3000/article/3ma5gBJ')
  })

  it.skip('should display a header, Back button and footer', () => {
    cy.get('header > h1')
      .should('be.visible').and('contain', 'The New York Times')

    cy.get('footer > h3')
      .should('be.visible').and('contain', 'Copyright (c) 2022 The New York Times Company')

    cy.get('button')
      .should('be.visible').should('contain', 'Go Back').and('not.be.disabled')
  })

  it.skip('should show details for the selected article', () => {
    cy.get('.details-container')
      .children('p').should('have.length', 4)
      .children('h1').should('have.length', 1)
      .children('a.article-link').should('have.length', 1)
    
    // add assertions >>>>>
    cy.get('.details-container > h1')
    
    cy.get('.details-container > a.article-link')
      .should('contain', 'Read More...')
      .should('have.attr', 'href').and('contain', 'https://nyti.ms/3ma5gBJ')
    
    cy.get('.details-container > p').first()

    cy.get('.details-container > p').last()
    
    cy.get('.details-container > img')
  })

  it.skip('should be able to click on a link that opens in a new tab to read the full article on New York Times website', () => {
    cy.get('.details-container > a.article-link')
      .should('have.attr', 'target').and('contain', '_blank')
      .click()

    cy.request('https://nyti.ms/3ma5gBJ')
  })
})