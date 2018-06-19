// spec.js
var os = require('os'); 
os.tmpDir = os.tmpdir;
const Login = require('../pages/login.po');

describe ('Teste de login no App', function() {
    const login = new Login();

    it ('Validar logo Index', function() {
        browser.get('/');
        browser.driver.sleep(4000);
        expect(login.GetLogoIndex().isDisplayed()).toBeTruthy();
    })

    it ('Efetuar o login no App', function() {
        browser.driver.sleep(4000);
        login.logar();
        expect(login.GetLogoInicial().isDisplayed()).toBeTruthy();
    })
});