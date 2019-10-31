module.exports = {
    '@tags': ['smoke'],

    'login com sucesso': function (browser) {
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('farleyrodolfo@gmail.com', 'Dodo940808')
        sidebar.expectLoggedUser('Rodolfo')
    }
}