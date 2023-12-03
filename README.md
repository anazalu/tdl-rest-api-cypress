# tdl-rest-api

### Install
npm init -y 
npm install cypress --save-dev
npm install typescript --save-dev
npm install --save-dev cypress cypress-real-events cypress-wait-until
npm install mochawesome --save-dev
npm install mochawesome-merge --save-dev
npm install cypress-multi-reporters --save-dev
npm install mochawesome-report-generator --save-dev

https://www.codemotion.com/magazine/frontend/web-developer/how-to-set-up-a-cypress-typescript-project/

#### Useful commands
npx tsc --init
npx cypress run
npx cypress run -s "cypress/e2e/neg-auth.cy.ts"
npx cypress open

## Requirements:
## 1. Setup:
- The base URL for the API is: `https://api.zeplin.dev/v1/`.
- The API documentation is available at: `https://docs.zeplin.dev/docs`.
## 2. Endpoints:
- The API has the following endpoints:
- `/projects/{project_id}`: Get a list of all projects and update a project.
- `/projects/{project_id}/colors`: Get a list of all colors; add color; update color
## 3. Tasks:
### Task 1: Authentication
The API requires authentication using an API key. Create an API key in your zeplin
profile.
Start by verifying that the authentication process is working as expected.
### Task 2: Test Cases
1. Write positive test cases for the following scenarios:
- Update project with a unique name and description which includes current date
and time.
- Add a new color to the project. After the color is created verify that it was
successfully added to the project by sending a request to obtain all colors.
2. Write negative test cases for the following endpoint:
- Update project: /projects/{project_id}
- Create color: /projects/{project_id}/colors
### Task 3: Automation Script
Implement an automation script using your preferred programming language and testing
framework to automate the test cases written in Task 2.
Make sure to handle authentication in the script.
### Task 4: Data Validation
Perform data validation for the responses received from the API. Check if the data is in
the expected format and includes the necessary information.
### Task 5: Reporting
Implement a simple reporting mechanism to log the results of the automated tests.
Include details such as test case name, status, and any relevant information. If the test
fails then requests and response information should be included in the test report.
## 4. Submission:
- Provide the source code of your automation script by pushing all code changes to
http://code.tdlbox.com/ and add aleksejs.levenciks@testdevlab.com and
inita.miglane@testdevlab.com as maintainer to the repository. Make sure this repo contains all
the files you have been working on.
- Include a brief document explaining the structure of your automation framework, any design
patterns used, and how to run the tests.
