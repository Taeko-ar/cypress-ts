// dummy import
import {} from 'cypress';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to verify any Cypress Chainable with assertions.
       * @example cy.verify(cy.title(), 'equal', 'Title')
       * @example cy.verify(cy.url(), 'include', '/dashboard')
       * @example cy.verify(elements.emailField(), 'be.visible')
       * @param chainable A Cypress Chainable to assert on.
       * @param assertion The Cypress assertion arguments (e.g., 'equal', 'include', 'be.visible').
       */
      verify<T>(chainable: Chainable<T>, ...assertion: any[]): Chainable<T>;
    }
  }
}

Cypress.Commands.add('verify', <T>(chainable: Cypress.Chainable<T>, ...assertion: any[]) => {
  const [assertionName, ...restOfAssertions] = assertion;
  // The 'chainable' is already the result of a Cypress command (e.g., cy.title() or cy.get()...)
  return chainable.should(assertionName as string, ...restOfAssertions);
});