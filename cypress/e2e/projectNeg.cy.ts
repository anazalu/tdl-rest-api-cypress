import { config } from "../../config"
import { generateFormattedDate } from '../utils/dateUtils';

const formattedDate: string = generateFormattedDate();
let projectId: string = '';

describe('Negative scenario for single project tests', () => {

  before(() => {
    // retrieve the last project's ID
    cy.request({
      method: 'GET',
      url: '/projects',
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.length.greaterThan(0);
      projectId = response.body[response.body.length - 1].id;
    });
  });

  // before(() => {
  //   projectId = cy.getProjectId();    
  // });

  it('PATCH should fail to modify name of a project using the /projects/{project_id} endpoint', () => {

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
        // expect(response.status).to.equal(400);
        // expect(response.body).to.have.property('message', `\"name\" is not allowed to be empty`);
        cy.log('projectId: ', projectId);
        cy.log('Response Body:', JSON.stringify(response.body, null, 2));
      });
  })

  it('PATCH should fail to modify description of a project using the /projects/{project_id} endpoint', () => {

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
