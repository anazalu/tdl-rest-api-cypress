import { config } from "../../config"

let projectId: string = '';

describe('Colors tests', () => {

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
  //     cy.getProjectId();
  // });

  it('GET should fetch either an empty list or colors from the /projects/{id}/colors endpoint', () => {
    cy.request({
      method: 'GET',
      url: `/projects/${projectId}/colors`,
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    })
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('POST should add colors to the /projects/{id}/colors endpoint; and GET should retrieve newly added color', () => {
    const colorName: string = `Color #${Math.floor(Math.random() * 100)}`;

    cy.request({
      method: 'POST',
      url: `/projects/${projectId}/colors`,
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
    })
      .then((postResponse) => {
        expect(postResponse.status).to.equal(200);
        expect(postResponse.body).to.have.property('id');

        return cy.request({
          method: 'GET',
          url: `/projects/${projectId}/colors`,
          headers: {
            Authorization: `Bearer ${config.token}`
          }
        });

      }).then((getResponse) => {
        expect(getResponse.status).to.equal(200);
        expect(getResponse.body).to.have.length.greaterThan(0);
        expect(getResponse.body[getResponse.body.length - 1]).to.have.property('name', colorName);
      });
  });
});
