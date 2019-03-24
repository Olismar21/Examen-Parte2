const {
    Given,
    When,
    Then
} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Estando en el buscador Google', async function () {
    await testController.navigateTo('https://google.com');
});

When('Ingreso la palabra {string} en el buscador Google', async function (text) {
    var input = Selector('.gLFyf').with({
        boundTestRun: testController
    });
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('presiono {string} en Google', async function (text) {
    await testController.pressKey(text);
});

Then('se muestra el resultado {string}', async function (text) {

    var firstLink = Selector('#rso').find('a').with({
        boundTestRun: testController
    });
    await testController.expect(firstLink.innerText).contains(text);
});



Given('Estando en el enlace {string}', async function (text) {
    const Link = Selector('.LC20lb').withText('Falabella.com - Mejor Compra Online').with({
        boundTestRun: testController
    });
    await testController.click(Link)

});


When('ingreso la palabra {string} en el buscador de Falabella', async function (text) {
    var buscar = Selector('[name="Ntt"]').with({
        boundTestRun: testController
    });
    await this.addScreenshotToReport();
    await testController.typeText(buscar, text);

});

Then('presiono {string} en el buscador', async function (text) {
    await testController.pressKey(text);
});

Then('se muestra el listado de resultados {string}', async function (text) {

    var modelo = Selector('.section__pod-top-title').withText('Cámara Semiprofesional SX60').with({
        boundTestRun: testController
    });
    await testController.expect(modelo.innerText).contains(text);
});

Then('selecciono el modelo {string}', async function (text) {
    const modelo = Selector('.section__pod-top-title').withText('Cámara Semiprofesional SX60').with({
        boundTestRun: testController
    });
    await testController.click(modelo)

});

Given('Estando en el detalle del producto {string}', async function (text) {
    var producto = Selector('.fb-product-cta__title').with({
        boundTestRun: testController
    });
    await testController.expect(producto.innerText).contains(text);

});


When('presiono el botón {string} en el detalle', async function (text) {
    const boton = Selector('.full-width-btn').with({
        boundTestRun: testController
    });
    await testController.click(boton);

});


Then('presiono el botón {string}', async function (text) {
    var bolsa = Selector('.fb-added-to-basket__cta--basket').nth(1).with({
        boundTestRun: testController
    });
    await testController.click(bolsa);
});

Then('presiono boton {string} para agregar producto', async function (text) {
    var agreg = Selector('.fb-quantity-input__plus').with({
        boundTestRun: testController
    });
    await testController.click(agreg);
});

Then('selecciono Garantia Extendida {string}', async function (text) {
    const garantia = Selector('.js-inline-dropdown__link').with({
        boundTestRun: testController
    });
    await testController.click(garantia);
    const garantia1 = Selector('a').withAttribute('data-value', '2593045').with({
        boundTestRun: testController
    });
    await testController.click(garantia1);
});