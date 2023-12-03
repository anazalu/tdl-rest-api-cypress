# tdl-rest-api

## Tech Stack

**Libraries:** cypress, cypress-multi-reporters, cypress-real-events, cypress-wait-until, mocha, mochawesome, mochawesome-merge, mochawesome-report-generator, typescript

**Requirements:** Node (min version 14)


## Installation

Install with npm

```bash
npm install
```
    
## Running Tests in console

To run all tests, run the following command

```bash
npx cypress run
```

To run a specific test set, use
```bash
npx cypress run -s "cypress/e2e/$testSetName"    
```
`$testSetName` - available test sets:

- auth.cy.ts
- authNeg.cy.ts
- colors.cy.ts
- colorsNeg.cy.ts
- project.cy.ts
- projectNeg.cy.ts

## Running Tests in Cypress App

```bash  
npx cypress open
```
Then, select E2E Testing, choose a browser and press Start E2E Testing, click a spec name.
Console logs (F12) appear here, but somehow cannot be seen in Mochawesome browser report.

#### Execution report can be found at /results/mochawesome.json
