# Tareas — Spec 001: Modificar diseño UI

- [x] **T1. Aplicar identidad visual a la navegación compartida.** RF-1, RF-4
  - Hecho cuando: `src/app/_layout.tsx` y `src/app/(tabs)/_layout.tsx` mantienen las rutas actuales y aplican de forma coherente la paleta EPN a encabezados, barra de estado y pestañas, con textos e iconos legibles.

- [x] **T2. Rediseñar la pantalla principal del editor y su estado inicial.** RF-1, RF-2, RF-3, RF-4, RF-5
  - Hecho cuando: `src/app/(tabs)/index.tsx` conserva todos los handlers y estados, mantiene la imagen de ejemplo y presenta una indicación en español para elegir foto, con la imagen como foco visual y acciones claramente jerarquizadas.

- [x] **T3. Actualizar visualmente botones, acciones e imagen previa.** RF-2, RF-4, RF-5
  - Hecho cuando: `components/Button.tsx`, `components/circle-button.tsx`, `components/icon-button.tsx` y `components/ImageViewer.tsx` usan estilos compatibles con `epn-brand`, preservan callbacks y no alteran ni tintan la foto.

- [x] **T4. Alinear el modal y la lista de emojis con la identidad visual.** RF-4, RF-6
  - Hecho cuando: `components/emoji-picker.tsx` y `components/emoji-list.tsx` se integran visualmente con la paleta y legibilidad definidas, y seleccionar/cerrar emojis funciona igual que antes; el sticker mantiene su arte y gestos originales.

- [x] **T5. Alinear visualmente las demás rutas de la aplicación.** RF-1, RF-4, RF-5
  - Hecho cuando: `src/app/(tabs)/about.tsx`, `src/app/mensajes.tsx` y `src/app/+not-found.tsx` aplican el mismo criterio visual, conservando textos, enlaces y navegación existentes.

- [x] **T6. Verificar estáticamente el alcance del rediseño.** RF-1, RF-2, RF-3, RF-4, RF-5, RF-6
  - Hecho cuando: `npx expo lint` y `npx tsc --noEmit` terminan sin errores nuevos atribuibles a los cambios, y una revisión confirma que no se alteraron handlers, estado, navegación ni gestos.

- [x] **T7. Completar la revisión manual de interfaz en Expo Go.** RF-1, RF-2, RF-3, RF-4, RF-5, RF-6
  - Hecho cuando: se completa la lista pertinente de rn-conventions: revisar pantallas y áreas seguras; legibilidad y contraste; adaptación vertical/horizontal si ambas orientaciones están admitidas; selección y previsualización de imagen; botones; modal, selección y cierre de emoji; guardado/restablecimiento; navegación y ausencia de superposiciones. Se informa qué se verificó manualmente y qué queda pendiente.
