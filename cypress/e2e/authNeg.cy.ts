import { consoleLogBody } from "../utils/logUtils";

describe('Negative scenario for authentication test', () => {
  it('GET should fail to fetch any projects from the /projects endpoint due to the lack of auth token', () => {
    const getRequest = {
      method: 'GET',
      url: '/projects',
      failOnStatusCode: false,
      headers: {
        Authorization: ''
      }
    };

    consoleLogBody(getRequest);

    cy.request(getRequest)
      .then((response) => {
        consoleLogBody(response);
        expect(response.status).to.equal(401);
        expect(response.body).to.have.property('message', 'invalid_token');
      });
  });
});
