class CreateAnAccountElements {

	/* PERSONAL INFORMATION */

	titleRadio = () => {return "input[type='radio'][name='id_gender'][id='id_gender2']"}
	firstNameInput = () => {return "input[type='text'][id='customer_firstname'][name='customer_firstname']"}
	lastNameInput = () => {return "input[type='text'][id='customer_lastname'][name='customer_lastname']"}
	passwordInput = () => {return "input[type='password'][id='passwd'][name='passwd']"}
	daySelect = () => {return "select[id='days'][name='days']"}
	monthSelect = () => {return "select[id='months'][name='months']"}
	yearSelect = () => {return "select[id='years'][name='years']"}
	newsletterCheckbox = () => {return "input[type='checkbox'][name='newsletter'][id='newsletter']"}
	
	/* ADDRESS INFORMATION */

	companyInput = () => {return "input[type='text'][id='company'][name='company']"}
	addressInput = () => {return "input[type='text'][id='address1'][name='address1']"}
	alternativeAddressInput = () => {return "input[type='text'][id='address2'][name='address2']"}
	cityInput = () => {return "input[type='text'][id='city'][name='city']"}
	stateSelect = () => {return "select[name='id_state'][id='id_state']"}
	postalCodeInput = () => {return "input[type='text'][name='postcode'][id='postcode']"}
	homePhoneInput = () => {return "input[type='text'][id='phone'][name='phone']"}
	mobilePhoneInput = () => {return "input[type='text'][id='phone_mobile'][name='phone_mobile']"}
    aliasInput = () => {return "input[type='text'][id='alias'][name='alias']"}
	registerBtn = () => {return  "button[type='submit'][id='submitAccount'][name='submitAccount']"}

}

export default CreateAnAccountElements