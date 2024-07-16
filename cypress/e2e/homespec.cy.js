describe("Run App ", () => {
  it("Render Most Popular Articles", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=article-title]")
      .should("exist")
      .should("have.text", "The New York Times");
  });

  it("Render Articles", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    cy.wait(3000);

    cy.get('[data-testid^="articleCard-"]').should("exist");
  });

  it("Click on Select", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept({
      method: "GET",
      url: "https://api.nytimes.com/svc/mostpopular/**",
    }).as("getArticles");
    //cy.wait("@getArticles");
    cy.wait(3000);
    cy.get('[data-testid^="articleCard-"]').should("exist").first().click();
    cy.location("http://localhost:3000").should(
      "eq",
      "/stories/100000009571927"
    );
  });
});
