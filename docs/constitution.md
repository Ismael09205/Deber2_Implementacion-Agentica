# Constitucion del Proyecto — Deber2_IsmaelNarvaez

Estas reglas son obligatorias para todos los agentes durante el analisis, la planificacion y la implementacion. Su objetivo es mantener un codigo sencillo, consistente y funcional, siguiendo la documentacion de React Native y Expo.

## 1. Simplicidad primero
- No agregar dependencias nuevas sin aprobacion previa.
- Priorizar las soluciones mas sencillas que cumplan el requisito.
- Reutilizar componentes y funciones existentes antes de crear otros nuevos.
- Evitar codigo duplicado, abstracciones innecesarias y modificaciones fuera del alcance de la tarea.

## 2. Los requisitos son la fuente de verdad
- Implementar unicamente las funcionalidades definidas en los requisitos aprobados.
- No inventar comportamientos ni agregar funcionalidades por iniciativa propia.
- Si falta informacion o existe una decision pendiente, detener la implementacion y consultar antes de continuar.
- Respetar los criterios de aceptacion de cada historia de usuario y en cada requisito no funcional.

## 3. React Native, TypeScript y Expo
- Utilizar componentes de React Native, como `View`, `Text`, `Pressable` y `TextInput`, en lugar de etiquetas HTML como `div`, `span` o `p`.
- Utilizar TypeScript con tipos claros y evitar `any` cuando sea posible.
- Utilizar componentes funcionales y hooks de React cuando corresponda.
- Mantener la compatibilidad con Expo y sus herramientas existentes.

## 4. Organizacion y mantenimiento del codigo
- Mantener separadas la interfaz, la logica y los estilos cuando corresponda.
- Reutilizar componentes y estilos compartidos.
- Evitar archivos, funciones y componentes innecesarios.
- Centralizar los colores y respetar las reglas de diseño definidas en la skill `epn-brand`.
- No cambiar la estructura del proyecto sin una necesidad justificada y preguntarme siempre antes de realizar cambios estructurales al proyecto.

## 5. Conservacion de funcionalidades y datos
- No eliminar ni modificar funcionalidades existentes que no formen parte de la tarea solicitada, sin antes preguntar y mostrar el cambio que se quiere realizar
- No eliminar ni sobrescribir datos del usuario sin autorizacion.
- Las acciones de eliminacion deben solicitar confirmacion cuando corresponda.

## 6. Pruebas y verificacion
- Comprobar que los cambios cumplen los requisitos y sus criterios de aceptacion.
- Ejecutar las comprobaciones disponibles y pertinentes para la tarea, como TypeScript, pruebas automatizadas y herramientas de Expo.
- Verificar manualmente las pantallas y las interacciones afectadas cuando sea necesario.
- No afirmar que una comprobacion fue exitosa si no se ejecuto.
- No dar por terminada una tarea con errores conocidos sin informar y justificar la situacion.

## Regla final
Si una tarea contradice estos principios, requiere decisiones no documentadas o puede afectar funcionalidades existentes, detenerse y explicar el problema antes de continuar.