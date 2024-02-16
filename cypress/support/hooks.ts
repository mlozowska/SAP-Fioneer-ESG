import { urls } from "../support/config";

export function hideXhr() {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
}

export function handleUncaughtException() {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // Return false prevents the test from failing due to this error
    return false;
  });
}

export function visitHomePage() {
  cy.visit(urls.mainPage);
}
