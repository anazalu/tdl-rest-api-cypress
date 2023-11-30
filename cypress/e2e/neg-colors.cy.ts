import { config } from "../../config"

describe('Negative scenario colors tests', () => {
  let projectId: string;

  before(() => {
    // retrieve a project ID
    cy.request({
      method: 'GET',
      url: '/projects',
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.length.greaterThan(0);
      expect(response.body[0]).to.have.property('id');
      projectId = response.body[response.body.length - 1].id;
    });
  });

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

  it('POST should add colors to the /projects/{id}/colors endpoint', () => {
    cy.request({
      method: 'POST',
      url: `/projects/${projectId}/colors`,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: `Color #${Math.floor(Math.random() * 100)}`,
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
        a: Math.random()
      }
    })
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id');
      });
  });
});
