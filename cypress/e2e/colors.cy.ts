import { config } from "../../config";
import { consoleLogBody } from "../utils/logUtils";
import { globalProjectId } from "../support/e2e";

describe('Colors tests', () => {
  it('GET should fetch either an empty list or colors from the /projects/{project_id}/colors endpoint', () => {
    const getRequest = {
      method: 'GET',
      url: `/projects/${globalProjectId}/colors`,
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    };
    consoleLogBody(getRequest);
    cy.request(getRequest)
      .then((response) => {
        consoleLogBody(response);
        expect(response.status).to.equal(200);
      });
  });

  it('POST should add colors to the /projects/{project_id}/colors endpoint; and GET should retrieve newly added color', () => {
    const colorName: string = `Color #${Math.floor(Math.random() * 1000)}`;
    let colorId: string = '';
    const postRequest = {
      method: 'POST',
      url: `/projects/${globalProjectId}/colors`,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: colorName,
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        a: Math.random()
      }
    };
    consoleLogBody(postRequest);
    cy.request(postRequest)
      .then((postResponse) => {
        consoleLogBody(postResponse);
        expect(postResponse.status).to.equal(200);
        expect(postResponse.body).to.have.property('id');
        expect(postResponse.body.id).to.be.a('string');
        colorId = postResponse.body.id;
        const getRequest = {
          method: 'GET',
          url: `/projects/${globalProjectId}/colors`,
          headers: {
            Authorization: `Bearer ${config.token}`
          }
        };
        consoleLogBody(getRequest);
        return cy.request(getRequest);
      }).then((getResponse) => {
        consoleLogBody(getResponse);
        expect(getResponse.status).to.equal(200);
        expect(getResponse.body).to.have.length.greaterThan(0);
        expect(getResponse.body[getResponse.body.length - 1]).to.have.property("name");
        expect(getResponse.body[getResponse.body.length - 1].name).to.be.a('string');
        expect(getResponse.body[getResponse.body.length - 1]).to.have.property("name", colorName);
        expect(getResponse.body[getResponse.body.length - 1]).to.have.property("id");
        expect(getResponse.body[getResponse.body.length - 1].id).to.be.a('string');
        expect(getResponse.body[getResponse.body.length - 1]).to.have.property("id", colorId);
      });
  });
});

// unable to clean up after the test as the endpoint https://api.zeplin.dev/v1/styleguides/{styleguide_id}/colors/{color_id} does not have DELETE method 
// (see https://docs.zeplin.dev/reference/updatestyleguidecolor)
