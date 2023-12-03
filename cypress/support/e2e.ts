// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { config } from '../../config';

export let globalProjectId: string = '';

before(() => {
  // retrieve the last project's ID
  cy.request({
    method: 'GET',
    url: '/projects',
    headers: {
      Authorization: `Bearer ${config.token}`
    }
  }).then((response) => {
    globalProjectId = response.body[response.body.length - 1].id;
  });
});

// Alternatively you can use CommonJS syntax:
// require('./commands')