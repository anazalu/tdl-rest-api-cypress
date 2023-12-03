import { config } from "../../config"
import { generateFormattedDate } from '../utils/dateUtils';

const formattedDate: string = generateFormattedDate();
let projectId: string = '';

describe('Single project tests', () => {

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
      expect(response.body.id).to.be.a('string');

      projectId = response.body[response.body.length - 1].id;
    });
  });

  // before(() => {
  //   projectId = cy.getProjectId();    
  // });

  it('PATCH should modify name and description of a project using the /projects/{project_id} endpoint', () => {
    cy.request({
      method: 'PATCH',
      url: `/projects/${projectId}`,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: `New unique updated name Project #${Math.floor(100 * Math.random())}`,
        description: `New description updated on ${formattedDate}`
      }
    })
      .then((response) => {
        expect(response.status).to.equal(204);
      });
  });
})
