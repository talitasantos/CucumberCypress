import IndexElements from '../elements/IndexElements'
const indexElements = new IndexElements

class IndexPage {

    clickSignInBtn() {
        cy.get(indexElements.signInButton()).click()
    }

}

export default IndexPage