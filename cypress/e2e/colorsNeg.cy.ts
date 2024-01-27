import { config } from "../../config";
import { consoleLogBody } from "../utils/logUtils";
import { globalProjectId } from "../support/e2e";

describe('Negative scenario colors tests', () => {
    it('POST should fail to add colors to the /projects/{project_id}/colors endpoint because of lacking name', () => {
        const request = {
            method: 'POST',
            url: `/projects/${globalProjectId}/colors`,
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer ${config.token}`
            },
            body: {
                name: "",
                r: Math.floor(Math.random() * 256),
                g: Math.floor(Math.random() * 256),
                b: Math.floor(Math.random() * 256),
                a: Math.random()
            }
        };
        consoleLogBody(request);
        cy.request(request)
            .then((response) => {
                consoleLogBody(response);
                expect(response.status).to.equal(400);
                expect(response.body).to.have.property('message', "\"name\" is not allowed to be empty");
            });
    });

    it('POST should fail to add colors to the /projects/{project_id}/colors endpoint because of a lacking element', () => {
        const request = {
            method: 'POST',
            url: `/projects/${globalProjectId}/colors`,
            failOnStatusCode: false,
            headers: {
                Authorization: `Bearer ${config.token}`
            },
            body: {
                name: `Color #${Math.floor(Math.random() * 100)}`,
                r: Math.floor(Math.random() * 256),
                g: Math.floor(Math.random() * 256),
                b: Math.floor(Math.random() * 256)
            }
        };
        consoleLogBody(request);
        cy.request(request)
            .then((response) => {
                consoleLogBody(response);
                expect(response.status).to.equal(400);
                expect(response.body).to.have.property('message', "\"a\" is required");
            });
    });
});
