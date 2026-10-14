# Spec 001 — Modificar diseño UI

**Estado:** aprobada  
**HU de origen:** No aplica. Esta especificación desarrolla el requisito no funcional `RNF01_Identidad_Visual`; por tanto, no requiere una historia de usuario asociada.

## Contexto y objetivo

Actualizar la presentación de la interfaz existente para que la aplicación tenga una apariencia limpia, moderna y consistente, con la selección y edición de imágenes como foco visual. El rediseño debe aplicar la identidad visual EPN y conservar las pantallas, la navegación y el comportamiento actuales.

## Usuarios

Personas usuarias de la aplicación móvil de selección y edición de imágenes.

## Historias de usuario

No aplica una historia de usuario: el origen de esta especificación es un requisito no funcional. Los criterios de identidad visual se basan en `RNF01_Identidad_Visual` y se complementan con las decisiones aprobadas y la skill `epn-brand`.

## Definiciones

- **Paleta EPN:** colores y usos visuales enumerados en `epn-brand`.
- **Pantallas incluidas:** todas las pantallas existentes de la aplicación, incluidas sus pantallas de navegación y contenido.
- **Imagen de ejemplo:** imagen que se presenta antes de seleccionar una foto propia.

## Requisitos funcionales

- **RF-1:** EL SISTEMA presentará todas las pantallas incluidas con una apariencia visual coherente con la identidad visual EPN. **Origen:** decisiones 2, 3 y 5; skill `epn-brand`.
- **RF-2:** MIENTRAS se muestre la pantalla principal de selección y edición, EL SISTEMA dará prioridad visual a la imagen y mantendrá una presentación limpia y moderna. **Origen:** decisión 6.
- **RF-3:** CUANDO no se haya seleccionado una foto, EL SISTEMA mostrará la imagen de ejemplo junto con una indicación clara para iniciar la selección. **Origen:** decisión 7.
- **RF-4:** MIENTRAS la persona usuaria utilice cualquiera de las pantallas incluidas, EL SISTEMA conservará la navegación, los controles, las acciones y sus funciones existentes. **Origen:** decisiones 2, 3 y 4.
- **RF-5:** CUANDO se muestren los controles para acciones principales, secundarias o destructivas, EL SISTEMA los distinguirá visualmente según su tipo. **Origen:** skill `epn-brand`.
- **RF-6:** CUANDO se muestre un emoji sobre la imagen editada, EL SISTEMA conservará su apariencia como elemento visual y no le aplicará automáticamente los colores de la paleta. **Origen:** skill `epn-brand`.

## Requisitos no funcionales

- **RNF-1 — Paleta:** la interfaz usará encabezados y barras superiores en `#001F3F` con texto blanco; botones principales en `#357CA5` con texto blanco; acciones destructivas y errores en `#D33724` con texto blanco; acciones secundarias y fondos de pantalla en `#E2E4E9` con texto `#111111`; tarjetas, modales y campos en `#FFFFFF` con texto `#111111`; texto secundario sobre blanco en `#5A6E82`; y bordes y separadores en `#B5BBC8`, nunca como color de texto. **Origen:** skill `epn-brand`.
- **RNF-2 — Legibilidad:** textos y controles mantendrán una jerarquía visual clara y contraste adecuado. No se usará texto blanco normal sobre `#3C8DBC`, `#008D4C` ni `#DB8B0B`. **Origen:** skill `epn-brand`.
- **RNF-3 — Consistencia entre superficies:** el criterio visual se aplicará de forma coherente a la navegación, botones, campos, menús, modales, selector y previsualización de imágenes, controles de edición y selector de emojis. **Origen:** skill `epn-brand`; decisiones 2 y 3.
- **RNF-4 — Comunicación de estados:** los estados y mensajes se comunicarán con texto cuando corresponda y no dependerán únicamente del color. **Origen:** skill `epn-brand`.
- **RNF-5 — Simplicidad visual:** no se introducirán colores arbitrarios ni se cambiará la lógica funcional como parte de un cambio exclusivamente visual. **Origen:** skill `epn-brand`; decisión 4.

## Casos límite

- No se ha seleccionado una foto propia: se presenta la imagen de ejemplo y una indicación clara para iniciar la selección.
- Se muestra un emoji sobre la foto: el emoji conserva su apariencia y no recibe automáticamente los colores de la paleta.
- Una pantalla incluye componentes compartidos, como encabezados, pestañas, botones o modales: mantiene el mismo criterio visual sin alterar su comportamiento.

## Fuera de alcance

- Añadir, eliminar o cambiar funciones, navegación, acciones, controles o interacciones.
- Cambiar el flujo de selección, previsualización, edición, guardado o restablecimiento de imágenes.
- Recolorear automáticamente emojis o imágenes del usuario.
- Definir requisitos de estados académicos como aprobado, supletorio o reprobado que no correspondan a la funcionalidad actual de la aplicación.

## Criterios de finalización

- Todas las pantallas incluidas presentan una identidad visual coherente con la paleta EPN de `epn-brand`.
- La pantalla principal mantiene la imagen como foco y presenta claramente cómo iniciar la selección cuando aún no hay una foto seleccionada.
- Las acciones principales, secundarias y destructivas son distinguibles visualmente.
- Los emojis conservan su apariencia sin aplicación automática de los colores de la paleta.
- La navegación y las funciones existentes se conservan.

## Dudas abiertas

Ninguna. La ausencia de una historia de usuario no es una duda porque esta especificación deriva de un requisito no funcional: `RNF01_Identidad_Visual`.
