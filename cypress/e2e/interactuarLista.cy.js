describe("Input", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  it("Dropdown", function () {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    cy.get(".custom-select").select(10); //obtener la opcion 10 de la lista
    cy.get(".custom-select").select("3").should("have.value", "3");
    cy.get(".custom-select").select("Greece").should("have.value", "4");
  });
  //recorro elementos hasta encontrar red y le doy click
  it("Lista dinamica", function () {
    cy.visit("https://react-select.com/home");
    cy.get("#react-select-6-input").type(" "); //abrir para poder encontrar el otro id
    cy.get("#react-select-6-listbox")
      .children()
      .children()
      .each(($elemento, $list) => {
        if ($elemento.text() === "Red") {
          //cualquiera de los dos:
          // $elemento.on('click')
          $elemento.click();
        }
      });

    cy.get("#react-select-6-listbox")
      .children()
      .children()
      .contains("Red")
      .click();
  });
});
