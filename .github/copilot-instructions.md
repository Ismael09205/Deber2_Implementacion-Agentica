# Aplicación móvil de selección y edición de imágenes

Aplicación móvil didáctica desarrollada con React Native y Expo para demostrar funcionalidades del ecosistema Expo. Permite seleccionar imágenes desde el celular, visualizarlas en la aplicación y utilizar la opción «Usar esta foto» para acceder a las herramientas de edición. El usuario puede agregar emojis desde un modal de selección, moverlos libremente sobre la imagen, guardar la imagen editada y restablecer la edición.

Proyecto didáctico construido con Spec-Driven Development (SDD).

## Stack y estructura

- React Native y Expo, utilizando la estructura existente del proyecto.
- TypeScript y los componentes de interfaz ya utilizados en la aplicación.
- Expo ImagePicker para seleccionar imágenes del dispositivo, según la implementación existente.
- Expo Router, si forma parte de la estructura actual del proyecto.
- Persistencia y almacenamiento según el comportamiento definido para cada funcionalidad.
- La aplicación no requiere backend ni cuentas de usuario, salvo que los requisitos existentes indiquen lo contrario.
- Las pruebas se organizan según la estructura actual del proyecto.

## Funcionalidades principales

- Seleccionar imágenes desde el dispositivo móvil.
- Mostrar una previsualización de la imagen seleccionada.
- Acceder a las herramientas de edición mediante la opción «Usar esta foto».
- Abrir un menú de acciones que permita agregar emojis, guardar la imagen editada y restablecer los cambios.
- Mostrar la lista de emojis disponibles dentro de un modal de selección.
- Seleccionar emojis y colocarlos sobre la imagen.
- Mover los emojis a distintas posiciones dentro del área de la imagen.
- Guardar la imagen editada según el comportamiento implementado y los permisos necesarios.
- Restablecer la edición para recuperar el estado inicial correspondiente.

## Comandos

- Ejecutar las pruebas: utilizar el comando configurado en el proyecto.
- Verificar los tipos: utilizar el comando de TypeScript si está configurado.
- Ejecutar la aplicación: `npx expo start`, solo cuando yo lo pida.

## Dónde está cada cosa

- `AGENTS.md`: instrucciones generales para los agentes que trabajan en el proyecto, si existe.
- `docs/constitution.md`: principios y restricciones del proyecto, si existe.
- `docs/historias/`: historias de usuario y escenarios que describen las funcionalidades.
- `specs/NNN-nombre/`: decisiones, especificación, plan y tareas de cada funcionalidad, según la organización SDD adoptada.
- `MEMORY.md`: estado actual del trabajo y próximos pasos, si se utiliza en el proyecto.
- `.github/skills/`: skills del proyecto, según la configuración existente.
- Código de la aplicación: pantallas, componentes, estilos y lógica organizados según la estructura actual.

## Cómo trabajar

1. Al comenzar, revisa las instrucciones del proyecto, su estado actual y los principios documentados.
2. Mantén los nombres del código en inglés y los textos visibles de la interfaz en español, respetando las convenciones existentes.
3. Respeta las historias de usuario, las specs aprobadas y las decisiones registradas. No inventes comportamientos ni decisiones de producto o diseño.
4. Si falta una decisión necesaria, indícala como `[NECESITA ACLARACIÓN]` y consulta antes de continuar.
5. Trabaja únicamente en la fase o tarea que te solicite. No avances a la siguiente sin mi aprobación explícita.
6. Al trabajar en lógica que pueda probarse, escribe primero las pruebas y después la implementación.
7. Antes de instalar dependencias, crear archivos fuera del plan o cambiar formatos de datos existentes, solicita mi autorización.
8. No reemplaces archivos existentes si la tarea no lo requiere expresamente.
9. No guardes datos sensibles ni realices commits.
10. Cuando se modifique la interfaz, distingue entre las comprobaciones realizadas mediante código y las verificadas manualmente en Expo Go.
11. Comprueba que el modal de emojis, el movimiento de los emojis, el menú de acciones y la edición de imágenes se comporten según la spec correspondiente.
12. No afirmes que una funcionalidad se verificó visualmente si no se ha probado en la aplicación.

## MEMORY.md

Si existe, conserva únicamente las secciones `Estado actual` y `Próximos pasos`. Al finalizar una fase o tarea, actualiza solo esas dos secciones, indicando el siguiente paso y el agente que corresponda. No copies decisiones ni el contenido de las specs. Mantén el archivo en aproximadamente 50 líneas.