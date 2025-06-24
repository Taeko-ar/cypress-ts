# Cypress TypeScript E2E Testing Framework

This repository has the basic Cypress setup required and the introduction of Page object model.

### Table of Contents

Cypress Configuration (cypress.config.ts)

Custom Cypress Command (cy.verify)

Page Object Model (POM) Structure

Test File Structure

1. Cypress Configuration

A `.env.shadow` file with the env variables used is available.

2. Custom Cypress Command

```TS
Cypress.Commands.add('verify', <T>(chainable: Cypress.Chainable<T>, ...assertion: any[]) => {
  const [assertionName, ...restOfAssertions] = assertion;
  return chainable.should(assertionName as string, ...restOfAssertions);
});

cy.verify(loginPage.emailField(), 'be.visible')
```

3. Page Object Model (POM) Structure

```TS
// cypress/pages/actionsPage.ts
class LoginPage {
  // Element getters
  emailField() {
    return cy.get('#username');
  }

  typeUsername(username: string) {
    this.emailField().type(username);
  }
}
```

6. Test File Structure

Write your tests using the POM and custom commands in cypress/e2e/.

```TS
// cypress/e2e/actions.ts
describe('Cypress actions commands page - ', () => {
  it('should interact with an element', () => {
    actionsPage.visit('/commands/actions');
    actionsPage.typeUsername('fake@email.com');
    cy.verify(actionsPage.elements.emailField(), 'have.value', 'fake@email.com')
  });
});
```
