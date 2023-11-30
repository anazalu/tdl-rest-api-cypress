// Cypress.Commands.add('logRequestAndResponse', (alias: string) => {
//   cy.wait(`@${alias}`).then((interception) => {
//     const request = interception.request;
//     const response = interception.response;

//     cy.log('Request Body:', JSON.stringify(request.body, null, 2));
//     cy.log('Response Body:', JSON.stringify(response.body, null, 2));
//   });
// });