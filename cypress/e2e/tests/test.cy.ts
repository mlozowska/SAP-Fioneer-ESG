/// <reference types="cypress"/>
import {
  hideXhr,
  handleUncaughtException,
  visitHomePage,
} from "../../support/hooks";
import HomePage from "../../support/pageObjects/HomePage_PO";
import ContactPage from "../../support/pageObjects/ContactPage_PO";

describe("SAP Fioneer Tests", () => {
  beforeEach(() => {
    hideXhr();
    handleUncaughtException();
    visitHomePage();
  });

  describe("Button color verification", () => {
    it("should verify the color of the Get in Touch button", () => {
      HomePage.verifyButtonColor();
    });
  });

  describe("Navigation and redirection to Esg Kpi Engine", () => {
    it("should redirect to Esg Kpi Engine page", () => {
      HomePage.selectEsgKpiEngineMenu();
      HomePage.verifyRedirectionToEsgKpiEngine();
    });
  });

  describe("Contact Form validation - incorrect email", () => {
    it("should redirect to contact form and verify email validation", () => {
      HomePage.clickGetInTouchBtn();
      ContactPage.verifyContactFormPageURL();
      ContactPage.verifyIncorrectEmailFormatValidationMessage();
    });
  });
});
