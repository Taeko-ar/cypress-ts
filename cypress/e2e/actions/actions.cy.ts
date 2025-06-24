import { actionsPage } from '../../pages/actionsPage';

describe('Cypress actions commands page - ', () => {
  it('should visit the given URL and check the title', { tags: '@smoke'}, () => {
    actionsPage.visit();
    cy.verify(cy.title(), 'include', 'Cypress.io');
  });

  it('should interact with an element', { tags: '@regression'}, () => {
    actionsPage.visit('/commands/actions');
    actionsPage.typeUsername('fake@email.com');
    cy.verify(actionsPage.elements.emailField(), 'have.value', 'fake@email.com')
  });
});