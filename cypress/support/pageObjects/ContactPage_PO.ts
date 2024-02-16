// <reference types="cypress"/>

import { urls, formData } from "../../support/config"


class ContactPage {
  verifyContactFormPageURL(){
    cy.url().should('eq', urls.contactForm)
  }

  verifyIncorrectEmailFormatValidationMessage(){
    cy.get('#hs-form-iframe-0').then($iframe => {
      
      const body = $iframe.contents().find('body');
      cy.wrap(body).should('be.visible').within(() => {

        cy.get('input[name="email"]').type(formData.incorrectWorkEmail)
        cy.contains("Email must be formatted correctly.").should('be.visible')
      });
    });
  }
}
 

export default new ContactPage();
