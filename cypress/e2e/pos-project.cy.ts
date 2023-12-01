import { config } from "../../config"
import { generateFormattedDate } from '../utils/dateUtils';

const formattedDate = generateFormattedDate();

describe('Single project tests', () => {
  
    before(() => {
        cy.getProjectId();
    });

  it('PATCH should modify name and description of a project using the /projects{id} endpoint', () => {

    cy.request({
      method: 'PATCH',
      url: `/projects/${projectId}`,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: `New unique name Project #${Math.floor(100 * Math.random())}`,
        description: `New description created on ${formattedDate}`
      }
    })
      .then((response) => {
        expect(response.status).to.equal(204);
      });
  })
});
