import { config } from "../../config"
import { generateFormattedDate } from '../utils/dateUtils';
import { globalProjectId } from "../support/e2e";
import { consoleLogBody } from "../utils/logUtils";

describe('Single project tests', () => {
  it('PATCH should modify name and description of a project using the /projects/{project_id} endpoint', () => {
    const projectName: string = `New unique updated name Project #${Math.floor(100 * Math.random())}`;
    const projectDescription: string = `New description updated on ${generateFormattedDate()}`;
    const patchRequest = {
      method: 'PATCH',
      url: `/projects/${globalProjectId}`,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: projectName,
        description: projectDescription
      }
    };
    consoleLogBody(patchRequest);
    cy.request(patchRequest)
      .then((patchResponse) => {
        consoleLogBody(patchResponse);
        expect(patchResponse.status).to.equal(204);
        const getRequest = {
          method: 'GET',
          url: `/projects/${globalProjectId}`,
          headers: {
            Authorization: `Bearer ${config.token}`
          }
        };
        consoleLogBody(getRequest);
        return cy.request(getRequest);
      }).then((getResponse) => {
        consoleLogBody(getResponse);
        expect(getResponse.status).to.equal(200);
        expect(getResponse.body).to.have.property("name");
        expect(getResponse.body.name).to.be.a('string');
        expect(getResponse.body).to.have.property("name", projectName);
        expect(getResponse.body).to.have.property("description");
        expect(getResponse.body.description).to.be.a('string');
        expect(getResponse.body).to.have.property("description", projectDescription);
        expect(getResponse.body).to.have.property("id");
        expect(getResponse.body.id).to.be.a('string');
      });
  });
});
