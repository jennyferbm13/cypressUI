describe("Tabla", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Interactuar con lista", () => {
    cy.visit("https://www.w3schools.com/html/html_tables.asp");

    cy.get("#customers")
      .find("th")
      .each(($element) => {}); //visito la primera fila y escribir los nombres en la consola de cypress

    //aquí empieza el incide desde 0
    cy.get("#customers")
      .find("th")
      .first()
      .invoke("text")
      .should("equal", "Company");

    cy.get("#customers")
      .find("th")
      .eq(2)
      .invoke("text")
      .should("equals", "Country");
    //validar numero de ileras
    cy.get("#customers").find("tr"); //dicen que son 7
    cy.get("#customers").find("tr").should("have.length", 7);

    //validar un campo en expecifico
    cy.get("#customers")
      .find("tr")
      .eq(1)
      .find("td")
      .eq(1)
      .invoke("text")
      .should("equals", "Maria Anders");

    cy.get("#customers")
      .find("tr")
      .eq(1)
      .find("td")
      .eq(1)
      .then(($el) => {
        const text = $el.text();
        expect(text).to.equal("Maria Anders");
      });
  });
});
