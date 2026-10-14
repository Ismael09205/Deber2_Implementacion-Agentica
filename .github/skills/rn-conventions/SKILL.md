# Convenciones y revision de interfaz en React Native

## Convenciones de desarrollo

-   Utilizar StyleSheet para los estilos, sin incorporar librerias de interfaz adicionales.
-   Evitar disenos genéricos y mantener la coherencia visual entre las pantallas existentes.
-   Respetar las areas seguras del dispositivo, incluidas la muesca y las barras del sistema.
-   Evitar que el teclado cubra los campos, los mensajes o los botones utilizados en un formulario.
-   Utilizar FlatList para listas y una clave estable por elemento, preferiblemente su identificador.
-   Mantener objetivos tactiles de al menos 44 x 44 puntos y etiquetas de accesibilidad en botones e iconos interactivos.
-   Solicitar confirmacion mediante un dialogo del sistema antes de ejecutar acciones de eliminacion.
-   Mantener todos los textos visibles en espanol.
-   Reutilizar los componentes y estilos existentes cuando corresponda.

## Revision de los cambios

Despues de crear o modificar una interfaz:

-   Comprobar que los elementos esten alineados y que los textos sean legibles.
-   Verificar que los botones, formularios, selectores de imagenes, previsualizaciones y modales respondan correctamente cuando corresponda.
-   Comprobar que los elementos no se superpongan ni queden fuera de la pantalla.
-   Revisar que los estados y mensajes sean comprensibles sin depender exclusivamente del color.
-   Verificar que los cambios visuales no alteren funcionalidades ajenas a la modificacion solicitada.
-   Contrastar el comportamiento con los requisitos de la spec correspondiente, cuando exista.

## Lista manual de verificacion en Expo Go

Aplicar los puntos pertinentes a los cambios realizados.

-   La pantalla se visualiza correctamente en orientacion vertical y horizontal, cuando ambas esten admitidas.
-   Los elementos se adaptan al tamano de la pantalla y respetan las areas seguras.
-   El teclado no oculta el campo ni los botones necesarios durante la interaccion.
-   Los botones, formularios, selectores de imagenes y modales funcionan segun lo esperado, cuando corresponda.
-   Los textos, mensajes y estados son legibles y estan en espanol.
-   Las acciones de eliminacion solicitan confirmacion, cuando corresponda.
-   Los datos se conservan al cerrar y abrir la aplicacion, cuando la funcionalidad requiera persistencia.
-   El comportamiento observado coincide con los requisitos de la spec, cuando exista.

## Cierre de la revision

-   Informar que aspectos se comprobaron y cuales quedan pendientes.
-   Diferenciar las verificaciones realizadas mediante revision del codigo de las comprobadas manualmente en Expo Go.
-   No marcar como verificada una interaccion que no se haya probado.