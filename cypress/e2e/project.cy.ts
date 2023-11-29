import { config } from "../../config"

describe('Single project tests', () => {
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

  it('PATCH should modify name and description of a project using the /projects{id} endpoint', () => {

    cy.request({
      method: 'PATCH',
      url: `/projects/${projectId}`,
      headers: {
        Authorization: `Bearer ${config.token}`
      },
      body: {
        name: `New unique name ${Math.random} `,
        description: `New description created on ${Date.now}`
      }
    })
      .then((postResponse) => {
        expect(postResponse.status).to.equal(204);

      });
  })
});
