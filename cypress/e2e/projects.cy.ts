import { config } from "../../config"

describe('All projects tests', () => {
  it('GET should fetch at least 1 project from the /projects endpoint', () => {
    cy.request({
      method: 'GET',
      url: '/projects',
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    })
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.length.greaterThan(0);
      });
  });
});