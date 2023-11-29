describe('Authentication test', () => {
  it('GET should fail to fetch any projects from the /projects endpoint due to the lack of auth token', () => {
    cy.request({
      method: 'GET',
      url: '/projects',
      failOnStatusCode: false,
      headers: {
        Authorization: ''
      }
    })
      .then((response) => {
        expect(response.status).to.equal(401);
        expect(response.body).to.have.property('message', 'invalid_token');
      });
  });
});
