// import 'cypress-real-events/support';
// import 'cypress-wait-until';

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             logRequestAndResponse: () => void;
//         }
//     }
// }

// Cypress.Commands.add('logRequestAndResponse', (alias: string) => {
//     cy.wait(`@${alias}`).then((interception) => {
//         const request = interception.request;
//         const response = interception.response;

//         cy.log('Request Body:', JSON.stringify(request.body, null, 2));
//         cy.log('Response Body:', JSON.stringify(response.body, null, 2));
//     });
// });


// import { config } from '../../config';

// let projectId = '';

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             getProjectId: () => string;
//         }
//     }
// }

// Cypress.Commands.add('getProjectId', () => {

//     cy.request({
//         method: 'GET',
//         url: '/projects',
//         headers: {
//             Authorization: `Bearer ${config.token}`
//         }
//     }).then((response) => {
//         expect(response.status).to.equal(200);
//         expect(response.body).to.have.length.greaterThan(0);
//         expect(response.body[0]).to.have.property('id');
//         projectId = response.body[response.body.length - 1].id;
//         cy.log('getProjectId() returns', projectId);

//         return projectId;
//     });
// });
