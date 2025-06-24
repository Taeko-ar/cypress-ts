class ActionsPage {
    public elements = {
        emailField: () => cy.get('.action-email'),
    }

    public typeUsername(username: string) {
        this.elements.emailField().type(username);
    }

    public visit(page?: string) {
        if (page) {
            cy.visit(`${page}`)
        } else {
            cy.visit('/');
        }
    }
}

export const actionsPage = new ActionsPage();