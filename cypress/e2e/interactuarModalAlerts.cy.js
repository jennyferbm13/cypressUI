describe("Modal y alerts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
  //modal es propio de la pagina
  it("Interactuar con modal", () => {
    cy.visit("/modal-dialogs");
    cy.get("#showSmallModal").click();
    cy.get("#closeSmallModal").click();
  });

  it("Interactuar con alert 1", () => {
    cy.visit("/alert");

    const stub = cy.stub();
    cy.on("window:confirm", stub); //escuchando cuando haya un window confirm
    cy.get("#confirmButtom")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Do you confirm action?");
      });

    cy.constains("You select Ok").should("exist");
  });

  it("Interactuar con alert click OK", () => {
    cy.visit("/alert");
    cy.get("#confirmButton").click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("Do you confirm action?");
    });
    cy.constains("Ypu selected ok").should("exist");
  });

  it("Interactuar con alert click cancel", () => {
    cy.visit("/alert");
    cy.get("#confirmButton").click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("Do you confirm action?");
      return false;
    });
    cy.constains("Ypu selected ok").should("exist");
  });
});