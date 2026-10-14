---
name: sdd
description: Usala siempre que trabajes con Spec-Driven Development en el proyecto Deber2_IsmaelNarvaez: redactar, revisar o cambiar especificaciones, planes y tareas, o implementar y validar tareas de una especificacion.
---

# Spec-Driven Development (SDD)

## Flujo y responsabilidades

Constitucion → grill-me → Spec → Plan y tareas → Implementacion → Cambio.

| Fase | Responsable | Entregables |
|---|---|---|
| Decisiones | Skill grill-me | `specs/NNN-nombre/decisiones.md` |
| Especificacion | Agente sdd-spec | `specs/NNN-nombre/spec.md` |
| Plan y tareas | Agente sdd-plan | `specs/NNN-nombre/plan.md` y `tasks.md` |
| Implementacion | Agente sdd-implement | Codigo, pruebas y estado de la tarea |

- No pasar a la siguiente fase sin la aprobacion explicita del usuario.
- La especificacion aprobada define el alcance: si un comportamiento no esta incluido, no se implementa sin actualizar primero la spec.
- Si falta una decision, el agente sdd-spec la marca como `[NECESITA ACLARACION]`. Durante la planificacion o implementacion, si la duda afecta el trabajo, se detiene y pregunta.
- Los cambios de requisitos se reflejan primero en `spec.md`, despues en `plan.md` y `tasks.md`, y finalmente en el codigo.
- Cada especificacion vive en `specs/NNN-nombre/`.
- El archivo `decisiones.md` lo crea grill-me. Las nuevas decisiones del usuario se agregan al final, numeradas, para resolver dudas abiertas. No se reescriben decisiones anteriores.
- Al terminar una fase o tarea, actualizar en `MEMORY.md` solamente las secciones `Estado actual` y `Proximos pasos`, indicando el siguiente agente. No copiar decisiones ni contenido completo de la spec.

## Plantilla de especificacion (`spec.md`)

# Spec NNN — Nombre de la funcionalidad

**Estado:** borrador | aprobada | implementada  
**HU de origen:** `docs/historias/HU-00N.md`

## Contexto y objetivo
## Usuarios
## Historias de usuario
## Definiciones
## Requisitos funcionales
## Requisitos no funcionales
## Casos limite
## Fuera de alcance
## Criterios de finalizacion
## Dudas abiertas

- `[NECESITA ACLARACION]` Descripcion de la duda.

La spec describe el **que** y el **por que** de la funcionalidad, no su implementacion tecnica. No debe definir el stack, la arquitectura, los formatos de almacenamiento ni los nombres de archivos.

Cada requisito funcional debe describir un comportamiento verificable del sistema. Evitar agrupar varios comportamientos independientes en un mismo requisito.

## Requisitos en EARS

Redactar los requisitos en español usando estas estructuras cuando correspondan:

- `RF-x: CUANDO <evento>, EL SISTEMA <respuesta>.`
- `RF-x: SI <condicion no deseada>, ENTONCES EL SISTEMA <respuesta>.`
- `RF-x: MIENTRAS <estado>, EL SISTEMA <respuesta>.`
- `RF-x: EL SISTEMA <comportamiento permanente>.`

Cada requisito funcional debe terminar con `Origen:`, indicando el escenario de la historia de usuario o la decision de `decisiones.md` que lo justifica.

Todos los escenarios de las historias de usuario deben estar cubiertos por al menos un requisito funcional. Si un escenario no tiene cobertura, señalarlo durante la revision.

Los requisitos no funcionales describen condiciones de calidad o restricciones que debe cumplir la funcionalidad, como usabilidad, accesibilidad, rendimiento o consistencia visual, cuando correspondan al alcance de la spec. Deben poder comprobarse y no deben duplicar requisitos funcionales.

## Revision de la especificacion

Al terminar `spec.md`, revisar y enumerar, sin proponer soluciones:

- Contradicciones entre requisitos.
- Escenarios de las historias de usuario sin cobertura.
- Conflictos con `docs/constitution.md`.
- Dudas abiertas que impidan entender o verificar un comportamiento.

Presentar un maximo de 10 puntos. Si no se encuentran problemas, indicarlo expresamente. Esperar la aprobacion del usuario antes de planificar.

## Plan (`plan.md`)

El plan describe como se implementara la spec aprobada. Debe incluir, cuando corresponda:

- Archivos y responsabilidades.
- Funciones puras.
- Persistencia.
- Algoritmo en pseudocodigo.
- Interfaz.
- Decisiones justificadas y alternativa descartada.
- Estrategia de pruebas con Jest.

Indicar que requisitos funcionales cubre cada parte del plan. Incluir solo los apartados que sean pertinentes para la funcionalidad, sin agregar complejidad innecesaria.

## Tareas (`tasks.md`)

Usar el siguiente formato:

- [ ] **Tn. Descripcion de la tarea.** RF-x, RF-y
  - Hecho cuando: comprobacion verificable.

- Dividir el trabajo en tareas de aproximadamente 20 a 30 minutos.
- Ordenar las tareas segun sus dependencias.
- Cada tarea debe tener un resultado verificable y relacionarse con uno o mas requisitos funcionales.
- Si la spec requiere mas de 10 tareas, proponer dividirla en especificaciones mas pequenas antes de continuar.
- Esperar la aprobacion del usuario antes de comenzar la implementacion.

## Implementacion

Trabajar en una sola tarea a la vez:

1. Revisar la tarea y los requisitos relacionados.
2. Escribir primero las pruebas correspondientes y comprobar que fallen cuando sea posible.
3. Implementar el codigo necesario.
4. Ejecutar `npx jest` y comprobar el resultado.
5. Marcar la tarea como terminada solamente cuando se cumpla su criterio de finalizacion.
6. Si la tarea modifica la interfaz, entregar una lista de verificaciones manuales y esperar a que el usuario confirme que la probo en Expo Go antes de marcarla como terminada.
7. Detenerse al terminar la tarea y esperar instrucciones para continuar.

Al cerrar cada tarea, informar:

- Que se implemento.
- Que pruebas se ejecutaron y cual fue su resultado.
- Que escenarios de las historias de usuario estan cubiertos por pruebas.
- Que escenarios aun no estan cubiertos o requieren validacion manual.

Informar los resultados sin afirmar que todo es correcto si no existe evidencia suficiente.