// <reference types="cypress"/>

import { urls } from "../../support/config";

class HomePage {
  verifyButtonColor() {
    const buttons = [
      ".header-nav > .html > .header-button > .button",
      "a.button.primary.lowercase",
    ];

    buttons.forEach((selector) => {
      cy.get(selector)
        .should("have.css", "background-color", "rgb(255, 212, 60)")
        .and("contain", "Get in touch");
    });
  }

  selectEsgKpiEngineMenu() {
    cy.contains("Finance & ESG").trigger("mouseover");
    cy.contains("ESG KPI Engine").click({ force: true });
  }

  verifyRedirectionToEsgKpiEngine() {
    cy.url().should("eq", urls.financeEsgKpiEngine);
  }

  clickGetInTouchBtn() {
    cy.contains("Get in touch").click();
  }

  verifyContactFormPageURL() {
    cy.url().should("eq", urls.contactForm);
  }
}

export default new HomePage();
