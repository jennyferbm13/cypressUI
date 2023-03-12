describe("First test", { testIsolation: false }, () => {
  it("Navegar a nuestra primer página", () => {
    cy.visit("https://jennyferbm13.github.io/react-shop/#");
  });

  it("Visit Platzi landing page", () => {
    cy.reload();
  });
});
