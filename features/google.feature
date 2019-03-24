Feature: Compra de un producto con Garantía Extendida 

  Realizar la compra de un producto con garantía extendida

  Scenario: Buscar página de Falabella en Google
    Given Estando en el buscador Google
    When Ingreso la palabra "Falabella" en el buscador Google
    Then presiono "enter" en Google
    Then se muestra el resultado "Falabella.com - Mejor Compra Online"
    
    
    Given Estando en el enlace "Falabella.com - Mejor Compra Online"
    When ingreso la palabra "Cámara" en el buscador de Falabella
    Then presiono "enter" en el buscador
    Then se muestra el listado de resultados "Cámara Semiprofesional SX60"
    Then selecciono el modelo "Cámara Semiprofesional SX60"
    
    Given Estando en el detalle del producto "Cámara Semiprofesional SX60"
    When presiono el botón "Agregar a la Bolsa" en el detalle
    When presiono el botón "Ver Bolsa de Compras"
    Then presiono boton "+" para agregar producto
    Then selecciono la Garantía Extendida

   



