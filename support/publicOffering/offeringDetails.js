import { registerApiCall } from '../common';

export const goToCFOfferingDetailScreen = () => {
  cy.get('div.public-pages').find('.campaign-list-wrapper').find('.container').get('svg')
    .should('not.exist');
  cy.get('.campaign-list-wrapper').find('.container').find('.stackable').children()
    .eq(7)
    .click();
  cy.wait('@getOfferingDetailsBySlug');
};

export const goTo506COfferingDetailScreen = () => {
  cy.get('div.public-pages').find('.campaign-list-wrapper').find('.container').get('svg')
    .should('not.exist');
  cy.get('.campaign-list-wrapper').find('.container').find('.stackable').children()
    .eq(5)
    .click();
  cy.wait('@getOfferingDetailsBySlug');
};

export const OfferingDetailFlow = () => {
  registerApiCall('getOfferingDetailsBySlug');
  goToCFOfferingDetailScreen();
};

export const Offering506CDetailFlow = () => {
  registerApiCall('getOfferingDetailsBySlug');
  goTo506COfferingDetailScreen();
}
