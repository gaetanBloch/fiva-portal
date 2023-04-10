describe('ngx-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gbbuttoncomponent--primary'));
  it('should render the component', () => {
    cy.get('fiva-portal-gb-button').should('exist');
  });
});
