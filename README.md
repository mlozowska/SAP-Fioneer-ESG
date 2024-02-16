# SAP Fioneer Cypress Test Documentation

This document outlines the test cases designed for the SAP Fioneer website and provides instructions on how to set up and run the Cypress tests with TypeScript.

## Test Cases

### Test 1: Button color verification

**Objective**: Verify if the "Get in Touch" button has a yellow color.

**Steps**:
1. Go to the SAP Fioneer homepage.
2. Verify if the "Get in Touch" button has a yellow color.

### Test 2: Navigation and redirection to ESG KPI Engine

**Objective**: Ensure the user is redirected to the correct page upon clicking the ESG KPI Engine link under the Finance & ESG bookmark.

**Steps**:
1. Go to the SAP Fioneer homepage.
2. Under the Finance & ESG bookmark, click on "ESG KPI Engine".
3. Verify if the user has been redirected to "ESG KPI Engine" page

### Test 3: Contact form validation - incorrect email

**Objective**: Check the validation message for incorrect email input in the contact form.

**Steps**:
1. Go to the SAP Fioneer homepage.
2. Click on the "Get in Touch" button.
3. Verify if the user has been redirected to the "Contact" page.
4. In the contact form, for the Work email field, type an incorrect email value (e.g., "342323").
5. Verify the validation message that appears.

## Running the Cypress Project with TypeScript

To run the Cypress tests with TypeScript, follow the steps below:

### Prerequisites

- Node.js installed on your machine.
- A clone of the project repository on your local machine.

### Setup

1. Navigate to the root directory of your project.
2. Install the required dependencies by running:

```bash
npm install
```

### Running tests
**Headless mode**

```bash
npx cypress run
```
![Screenshot 2024-02-16 at 09 58 37](https://github.com/mlozowska/sapfioneer/assets/60215258/5d6c136b-aad0-40cf-8094-d3a9d26403ce)

**Interactive mode with Cypress Test Runner**

```bash
npx cypress open
```
<img width="1085" alt="Screenshot 2024-02-16 at 10 08 30" src="https://github.com/mlozowska/sapfioneer/assets/60215258/ea7e353f-93a6-48a4-bca0-5cc17f98e659">

