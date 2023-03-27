# cypressUI

Pruebas automatizadas por medio de cypress para evaluar una interfaz de usuario

Localizar

- Selector por ID: cy.get('#elemento-id').click()
- Selector por clase: cy.get('.elemento-clase').click()
- Selector por atributo: cy.get('[data-cy="elemento-atributo"]').click()
- Selector por tipo de elemento: cy.get('button').click()
- Selector por contenido: cy.contains('Mi botón').click()
- Seleccionar padre: cy.get('button').parent().should('have.class', 'button-container')
- Buscar hijos: cy.get('.mi-clase').find('button').click()

Aserciones

Se utiliza para verificar que un resultado o comportamiento del software sea el esperado

- should
- be
- have
- exist
- include
- eq
- and
- or
- not
- expect

Hooks

Los "hooks" en Cypress son funciones que se ejecutan automáticamente en diferentes momentos del ciclo de vida de las pruebas. Estos hooks proporcionan una manera de realizar tareas comunes antes, durante o después de la ejecución de las pruebas, lo que puede simplificar la escritura y el mantenimiento de los casos de prueba.

- before()
- beforeEach()
- afterEach()
- after()

Interacciones

- Click: cy.get(selector).click(opciones)

- Listas:

  - cy.get(".custom-select").select(10); //obtener la opcion 10 de la lista
  - cy.get(".custom-select").select("3").should("have.value", "3");
  - cy.get(".custom-select").select("Greece").should("have.value", "4");

- Input:
  - cy.get('#my-input').type('Hola, Mundo!')
  - cy.get('#my-input').clear()
  - cy.get('#my-input').should('have.value', 'Hola, Mundo!')

Notas:

Configuración: <https://dev.to/dilpreetjohal/cypress-testing-tutorial-series-for-beginners-3m4b>

Se puede hacer uso del debugger para identificar donde cae la prueba

Uso del time si un elemento se demora mucho en cargar
