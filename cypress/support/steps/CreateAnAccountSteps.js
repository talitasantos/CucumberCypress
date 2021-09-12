/* global Given, Then, When */

import LoginPage from '../pageObjects/LoginPage'
import IndexPage from '../pageObjects/IndexPage'
import CreateAnAccountPage from '../pageObjects/CreateAnAccountPage'

const loginPage = new LoginPage
const indexPage = new IndexPage
const createAnAccountPage = new CreateAnAccountPage

Given("I clicked sign in", () => {
    indexPage.clickSignInBtn()  
})

And("I click create an account", () => {
    loginPage.enterEmailAddressLeft()
    loginPage.accessCreateAnAccountPage()
})

And("fill personal informations", () => {
    createAnAccountPage.selectTitle()
    createAnAccountPage.fillFirstName()
    createAnAccountPage.fillLastName()
    createAnAccountPage.fillPassword()
    createAnAccountPage.selectDateOfBirth()
    createAnAccountPage.selectToReceiveNewsletter()
})

And("fill address informations", () => {
    createAnAccountPage.fillCompany()
    createAnAccountPage.fillAddress()
    createAnAccountPage.fillCity()
    createAnAccountPage.fillState()
    createAnAccountPage.fillPostalCode()
    createAnAccountPage.fillHomePhone()
    createAnAccountPage.fillMobilePhone()  
})

When("I click register", () => {
    createAnAccountPage.submitAccount()
})

Then("system returns my account page", () => {
    createAnAccountPage.verifyMyAccountPage()
})