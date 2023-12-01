import { config } from "../../config"
import formattedDate from "../fixtures/date-generator"


describe('Negative scenario for single project tests', () => {
  
    before(() => {
        cy.getProjectId();
    });

  it('PATCH should fail to modify name of a project using the /projects{id} endpoint', () => {

    cy.request({
      method: 'PATCH',
      url: `/projects/${projectId}`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: '',
        description: `New description created on ${formattedDate}`
      }
    })
      .then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('message', `\"name\" is not allowed to be empty`);
      });
  })

  it('PATCH should fail to modify description of a project using the /projects{id} endpoint', () => {

    cy.request({
      method: 'PATCH',
      url: `/projects/${projectId}`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: `New unique name Project #${Math.floor(100 * Math.random())}`,
        description: true
      }
    })
      .then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('message', "\"description\" must be a string");
      });
  })
});
