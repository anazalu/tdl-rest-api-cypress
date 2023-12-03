// import 'cypress-real-events/support';
// import 'cypress-wait-until';

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             logRequestAndResponse: () => void;
//         }
//     }
// }

// Cypress.Commands.add('logRequestAndResponse', () => {
//     cy.intercept({ url: '/v1/projects' }, (req) => {
//         cy.log('Request Body:', req.body);
        
//         req.reply((res) => {
//           cy.log('Response Body:', res.body);
//           return res;
//         });
//       });
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
