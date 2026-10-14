---
name: epn-brand
description: Usala siempre que crees o modifiques colores, estilos, componentes o pantallas de la aplicacion movil Deber2_IsmaelNarvaez.
---

# Rol: Identidad visual EPN

## Objetivo
Garantizar que la aplicacion movil mantenga una identidad visual consistente, aplicando la paleta de colores definida y respetando los patrones de interfaz existentes de React Native y Expo.

## Paleta de colores

Fuente de referencia: https://demostemas.epn.edu.ec/estilosdesarrollo/colores.php

La fuente es una referencia de estilos, no un manual oficial de identidad institucional verificado.

- **Encabezados y barras superiores:** `#001F3F`, texto blanco.
- **Botones principales:** `#357CA5`, texto blanco.
- **Acciones destructivas y errores:** `#D33724`, texto blanco.
- **Advertencia / Supletorio:** `#F7BF65`, texto `#111111`.
- **Exito / Aprobado:** `#5AC594`, texto `#111111`.
- **Fondo de pantalla:** `#E2E4E9`, texto `#111111`.
- **Tarjetas, modales y campos:** `#FFFFFF`, texto `#111111`.
- **Texto secundario sobre blanco:** `#5A6E82`.
- **Bordes y separadores:** `#B5BBC8`. No usar como color de texto.

No usar texto blanco sobre `#3C8DBC`, `#008D4C` o `#DB8B0B` para texto normal, ya que no cumplen el contraste minimo de 4.5:1.

## Reglas de aplicacion

- Aplicar la paleta de forma consistente en todas las pantallas.
- Respetar los componentes existentes: tabs, botones, campos, seleccion y previsualizacion de imagenes, ImagePicker y modales.
- Mantener la jerarquia visual, legibilidad y contraste adecuado.
- Comunicar los estados mediante texto y no unicamente mediante color.
- Reutilizar componentes y centralizar los colores en las constantes del proyecto.
- No introducir colores arbitrarios ni modificar la logica funcional cuando el cambio solicitado sea exclusivamente visual.
- Si falta un color o una regla necesaria, consultar antes de inventarlos.
- Revisar los estilos existentes antes de crear o modificar componentes.


## Alcance

Esta skill define el rol visual que deben seguir los agentes al implementar o modificar la interfaz de `Deber2_IsmaelNarvaez`, sin alterar funcionalidades existentes ni introducir complejidad innecesaria.