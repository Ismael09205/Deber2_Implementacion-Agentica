# Plan — Spec 001: Modificar diseño UI

## Alcance de implementación

Aplicar el rediseño a todas las rutas actuales de `src/app` y `src/app/(tabs)`. También se podrán ajustar visualmente componentes reutilizados ubicados en `components/` cuando formen parte de esas pantallas. Los cambios se limitan a presentación, estilos y textos orientativos aprobados; no se modifican navegación, callbacks, estado, gestos ni flujos funcionales.

## Archivos y responsabilidades

| Archivo | Responsabilidad | Requisitos |
|---|---|---|
| `src/app/_layout.tsx` | Mantener coherentes los elementos compartidos de la navegación raíz y la barra de estado. | RF-1, RF-4; RNF-1, RNF-3 |
| `src/app/(tabs)/_layout.tsx` | Aplicar la identidad visual EPN al encabezado, barra de pestañas, iconos y estados activo/inactivo. | RF-1, RF-4; RNF-1, RNF-2, RNF-3 |
| `src/app/(tabs)/index.tsx` | Dar prioridad visual a la previsualización, orientar la selección inicial y presentar los controles de acciones con jerarquía visual. | RF-2, RF-3, RF-4, RF-5; RNF-1, RNF-2, RNF-3, RNF-4, RNF-5 |
| `src/app/(tabs)/about.tsx` | Alinear fondo y texto de la pantalla con el sistema visual. | RF-1, RF-4; RNF-1, RNF-2, RNF-3 |
| `src/app/mensajes.tsx` | Alinear fondo, texto y botón de retorno con el sistema visual sin alterar su navegación. | RF-1, RF-4, RF-5; RNF-1, RNF-2, RNF-3 |
| `src/app/+not-found.tsx` | Alinear el estado de ruta no encontrada y su enlace de retorno con el sistema visual. | RF-1, RF-4, RF-5; RNF-1, RNF-2, RNF-3, RNF-4 |
| `components/Button.tsx` | Aplicar paleta, jerarquía y estados visuales a los botones existentes de selección y uso de foto. | RF-4, RF-5; RNF-1, RNF-2, RNF-3 |
| `components/circle-button.tsx` | Aplicar estilo de acción secundaria al botón existente de agregar emoji. | RF-4, RF-5; RNF-1, RNF-2, RNF-3 |
| `components/icon-button.tsx` | Aplicar estilos legibles a las acciones existentes de restablecer y guardar. | RF-4, RF-5; RNF-1, RNF-2, RNF-3 |
| `components/ImageViewer.tsx` | Adecuar visualmente el marco de previsualización sin cambiar la fuente, dimensiones funcionales ni el contenido de la imagen. | RF-2, RF-4; RNF-1, RNF-2, RNF-3 |
| `components/emoji-picker.tsx` | Aplicar paleta, jerarquía y presentación coherente al modal y su control de cierre. | RF-4; RNF-1, RNF-2, RNF-3, RNF-4 |
| `components/emoji-list.tsx` | Mantener la lista integrada visualmente en el modal, conservando selección y cierre existentes. | RF-4, RF-6; RNF-2, RNF-3 |

`components/emoji-sticker.tsx` no requiere modificación: el sticker conserva su imagen original, gestos y apariencia, tal como especifica RF-6. Se verificará manualmente durante la revisión del editor.

No existe un archivo de tema centralizado en la estructura actual. Para evitar cambiar la estructura del proyecto, los estilos se actualizarán en los archivos existentes con `StyleSheet` y se reutilizarán sus componentes; no se añadirá una capa de tema ni dependencias.

## Funciones puras, persistencia y algoritmo

No se requieren funciones puras, persistencia ni cambios de algoritmo. La spec es exclusivamente visual y excluye cambios de comportamiento; los handlers, estado, selección/guardado de imágenes y gestos de emojis permanecen sin cambios.

## Presentación de la interfaz

- Usar `epn-brand` como regla de color y contraste en las superficies y controles existentes.
- Mantener la imagen de ejemplo e incorporar una indicación visible en español para comenzar a elegir una foto.
- Mantener la imagen como foco visual del editor y distinguir controles de acuerdo con su función actual, sin alterar sus acciones.
- Aplicar un criterio uniforme a encabezados, pestañas, fondos, botones, previsualización y modal de emojis.
- No tintar la imagen de ejemplo, las fotos seleccionadas ni el arte de los emojis para ajustarlos a la paleta.
- No introducir nuevos colores o componentes de interfaz innecesarios.

## Decisiones técnicas

1. **Ajustar componentes reutilizados además de las pantallas.** Los componentes en `components/` son la implementación visual de controles citados en RF-5 y superficies incluidas en RNF-3; no ajustarles el estilo dejaría requisitos sin cubrir. Los cambios se limitan a su presentación y no amplían el conjunto de pantallas.
   - **Alternativa descartada:** modificar solo archivos de rutas. No cubre los botones, el modal y la previsualización reutilizados por las rutas.
2. **Mantener los estilos junto a cada componente/pantalla existente.** La estructura actual no dispone de un tema común aplicable a estas pantallas y la constitución prioriza la solución sencilla.
   - **Alternativa descartada:** crear un sistema de tema o reestructurar carpetas, innecesario para una actualización visual puntual y no autorizado como cambio estructural.
3. **Conservar íntegros los comportamientos existentes.** Se mantienen las funciones de selección, transición a opciones, selección/cierre de emoji, guardado, navegación y gestos.
   - **Alternativa descartada:** aprovechar el rediseño para cambiar flujos o corregir lógica no solicitada; excede la spec.

## Estrategia de verificación

- Revisar cada cambio contra los criterios de `epn-brand`, todos los RF/RNF y la lista manual de `.github/skills/rn-conventions/SKILL.md`.
- Ejecutar `npx expo lint` y `npx tsc --noEmit` después de los cambios.
- El alcance no agrega lógica pura y el proyecto no configura Jest en `package.json`; no se agregan dependencias ni se crea infraestructura Jest solo para comprobar estilos.
- Validar manualmente en Expo Go la navegación, selección de imagen, previsualización, controles de edición, modal y selección de emoji, cierre del modal y guardado/restablecimiento; comprobar legibilidad, áreas seguras, adaptación de pantalla y ausencia de superposiciones.
- Diferenciar los resultados de lint/typecheck de las comprobaciones realizadas en Expo Go. La inspección del código no sustituye la verificación visual manual.
