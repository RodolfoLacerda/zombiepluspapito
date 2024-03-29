

module.exports = {
    '@tags': ['smoke', '404'],

    before: function(browser) {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('farleyrodolfo@gmail.com', 'Dodo940808')
        sidebar.expectLoggedUser('Rodolfo')
    },

    'quando eu busco um titulo não cadastrado': function(browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', 'Não é mais um besterol americano')
            .click('@searchIcon')
    },

    'então devo ver uma mensagem de alerta': function(browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
    }


}