import { config } from "../../config"
import { generateFormattedDate } from '../utils/dateUtils';
import { consoleLogBody } from "../utils/logUtils";
import { globalProjectId } from "../support/e2e";

describe('Negative scenario for single project tests', () => {
  it('PATCH should fail to modify name of a project using the /projects/{project_id} endpoint', () => {
    const patchRequest = {
      method: 'PATCH',
      url: `/projects/${globalProjectId}`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: '',
        description: `New description created on ${generateFormattedDate()}`
      }
    };
    consoleLogBody(patchRequest);
    cy.request(patchRequest)
      .then((response) => {
        consoleLogBody(response);
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('message', `\"name\" is not allowed to be empty`);
      });
  })

  it('PATCH should fail to modify description of a project using the /projects/{project_id} endpoint', () => {
    const patchRequest = {
      method: 'PATCH',
      url: `/projects/${globalProjectId}`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: `New unique name Project #${Math.floor(100 * Math.random())}`,
        description: true
      }
    };
    consoleLogBody(patchRequest);
    cy.request(patchRequest)
      .then((response) => {
        consoleLogBody(response);
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('message', "\"description\" must be a string");
      });
  })
});
