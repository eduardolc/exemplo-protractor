//OP da Pagina de login
var adminLogin = browser.params.adminLogin;

class Login {
    constructor() {
        this.user = adminLogin.user;
        this.password = adminLogin.password;
        this.usuario = element(by.id('usuario'));
        this.senha = element(by.id('senha'));
        this.btNentrar = element(by.buttonText('Entrar'));
        this.logoIndex = $('.logo');
        this.logoInicial = element.all(by.id('dropdownMenu1')).first();
    }

    logar() {
        this.usuario.sendKeys(this.user);
        this.senha.sendKeys(this.password);
        this.btNentrar.click();
    }

    GetLogoIndex() {
        return this.logoIndex.getWebElement();
    }

    GetLogoInicial() {
        return this.logoInicial.getWebElement();
    }
}

module.exports = Login;