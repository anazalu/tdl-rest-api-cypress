import { config } from "../../config"

const dateObject = new Date(Date.now());

const year = dateObject.getFullYear();
const month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
const day = ('0' + dateObject.getDate()).slice(-2);
const hours = ('0' + dateObject.getHours()).slice(-2);
const minutes = ('0' + dateObject.getMinutes()).slice(-2);
const seconds = ('0' + dateObject.getSeconds()).slice(-2);

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

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
        name: `New unique name Project #${Math.floor(100 * Math.random())}`,
        description: `New description created on ${formattedDate}`
      }
    })
      .then((response) => {
        expect(response.status).to.equal(204);

      });
  })
});
