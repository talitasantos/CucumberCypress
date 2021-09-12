import { url } from 'inspector'
import CreateAnAccountElements from '../elements/CreateAnAccountElements'
const createAnAccountElements = new CreateAnAccountElements

class CreateAnAccountPage {

    selectTitle() {
        cy.get(createAnAccountElements.titleRadio()).click()
		
	}

	fillFirstName() {
        cy.get(createAnAccountElements.firstNameInput()).type('Ahsoka')

	}

	fillLastName() {
		cy.get(createAnAccountElements.lastNameInput()).type('Tano')
	}

	fillPassword() {
        cy.get(createAnAccountElements.passwordInput()).type('ahsok@tano123')
	}

	selectDateOfBirth() {
        cy.selectByVisibleText(createAnAccountElements.daySelect()).type('23')
        cy.selectByVisibleText(createAnAccountElements.monthSelect()).type('10')
        cy.selectByVisibleText(createAnAccountElements.yearSelect()).type('1991')
	}
	
	selectToReceiveNewsletter() {
        cy.get(createAnAccountElements.newsletterCheckbox()).click()		
	}

	fillCompany() {
		cy.get(createAnAccountElements.companyInput()).type('Tribeiros Candy')
	}

	fillAddress() {
        cy.get(createAnAccountElements.addressInput()).type('2310, Brigadeiro Avenue')
	}

	fillCity() {
		cy.get(createAnAccountElements.cityInput()).type('Jacksonville')
	}

	fillState() {
		cy.selectByVisibleText(createAnAccountElements.stateSelect()).type('Florida')
	}

	fillPostalCode() {
		cy.get(createAnAccountElements.postalCodeInput()).type('07036')
	}

	fillHomePhone() {
		cy.get(createAnAccountElements.homePhoneInput()).type('11 2222-2222')
	}

	fillMobilePhone() {
		cy.get(createAnAccountElements.mobilePhoneInput()).type('55 5555-5555')
	}
	
	submitAccount() {
		cy.get(createAnAccountElements.registerBtn()).click()
	}
	
	verifyMyAccountPage() {
		cy.url().should('eq','http://automationpractice.com/index.php?controller=my-account')
	}
}

export default CreateAnAccountPage