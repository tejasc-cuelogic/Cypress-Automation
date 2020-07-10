import { registerApiCall } from '../../../../common.utility';

export const goToSignUpScreen = () => {
  cy.contains('Sign Up');
  cy.get('.header-wrap').get('.menu-button').contains('Sign Up').click();
  cy.get('.user-type').find('h4').contains('Investor').click();
  cy.get('.center-align').find('a').click();
};

export const FillSignUpForm = () => {
  cy.fixture('investor/signUp.json').then((SignUpMeta) => {
    cy.get('form').within(() => {
      cy.get('input[name="givenName"]').type(SignUpMeta.givenName);
      cy.get('input[name="familyName"]').type(SignUpMeta.familyName);
      const investorEmail = `test${Math.floor(((Math.random() + Math.random()) * 1000000) + 1)}@nextseed.com`;
      window.localStorage.setItem('investorEmail', investorEmail);
      cy.get('input[name="email"]').type(investorEmail);
      cy.get('input[name="password"]').type(SignUpMeta.password);
      cy.get('input[name="verify"]').type(SignUpMeta.verify);
    });
  });
};

export const fillSignUpFormAndProceed = () => {
  registerApiCall('signUpForm', '**/graphql');
  goToSignUpScreen();
  FillSignUpForm();
  cy.get('button.button').contains('Register').click();
  cy.wait('@signUpForm');
};

export const confirmEmailAddressScreen = () => {
  cy.contains('Continue').click();
}

export const confirmPhoneNumberScreen = () => {
  cy.get('div.content > .center-align > button').contains('Continue').click({ force: true });
  cy.wait(200);
}
