import { config } from "../../config";
import { consoleLogBody } from "../utils/logUtils";

describe('Authentication test', () => {
  it('GET should fetch at least 1 project from the /projects endpoint', () => {
    const getRequest = {
      method: 'GET',
      url: '/projects',
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    };
    consoleLogBody(getRequest);
    cy.request(getRequest)
      .then((response) => {
        consoleLogBody(response);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.length.greaterThan(0);
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0].id).to.be.a('string');
      });
  });
});
