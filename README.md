# 🎒 Problema de la Mochila - Juego Interactivo

Un juego educativo interactivo que enseña el problema clásico de optimización de la mochila (Knapsack Problem) de una manera divertida y visual.

## 🚀 Cómo Jugar (Inicio Rápido)

1.  **Abre el archivo `index.html`** en tu navegador web.
2.  **Selecciona las opciones** en el menú principal:
    *   **Tipo de problema**: Binaria (un objeto de cada) o Múltiple (varios objetos de cada).
    *   **Dificultad**: Fácil, Medio o Difícil (esto cambia el tiempo límite).
3.  **Haz clic en "Jugar"**.
4.  **Arrastra items** desde el panel izquierdo hacia la mochila en el centro.
5.  **Maximiza el beneficio** total sin exceder el peso máximo de la mochila.
6.  Cuando el tiempo se acabe, podrás **comparar tu solución** con la solución de un algoritmo voraz.

## 🎮 Características Principales

*   **Dos Modos de Juego**:
    *   **Mochila Binaria**: Cada item solo puede ser elegido una vez.
    *   **Mochila Múltiple**: Puedes llevar múltiples unidades del mismo item.
*   **Niveles de Dificultad**: Fácil (50s), Medio (60s), y Difícil (70s) para ajustar el reto.
*   **Problemas Generados Aleatoriamente**: Cada partida es única, con diferentes items, pesos, beneficios y capacidades de mochila.
*   **Interfaz Drag & Drop**: Arrastra y suelta los items de forma intuitiva.
*   **Feedback en Tiempo Real**: Observa cómo el peso y el beneficio se actualizan al instante.
*   **Comparación con Algoritmo Voraz**: Al final de la partida, compara tu puntuación con la obtenida por una heurística clásica y aprende de ella.
*   **Diseño Moderno y Responsivo**: Juega en cualquier dispositivo, ya sea de escritorio, tableta o móvil.

## 🎯 Objetivos Educativos

Este juego está diseñado para enseñar:

*   Qué es un **problema de optimización** y cómo abordar uno.
*   La diferencia fundamental entre las variantes **binaria y múltiple** del problema de la mochila.
*   El concepto de **heurística** a través del **algoritmo voraz**, entendiendo sus ventajas (rapidez) y desventajas (no siempre es óptimo).
*   La importancia de la relación **beneficio/peso** para tomar decisiones eficientes.
*   A pensar estratégicamente bajo restricciones (en este caso, el peso y el tiempo).

## 📊 El Algoritmo Voraz

Para la comparación, el juego implementa un algoritmo voraz. Esta estrategia consiste en:

1.  Calcular el **ratio de eficiencia** (beneficio dividido por peso) para cada item.
2.  Ordenar los items de mayor a menor ratio.
3.  Recorrer la lista ordenada y añadir items a la mochila siempre que no se supere la capacidad máxima.

Este método es rápido y a menudo da buenos resultados, ¡pero no siempre encuentra la solución perfecta! Parte de la diversión es intentar superarlo.

## 💻 Tecnologías Utilizadas

Este proyecto está construido desde cero con tecnologías web estándar, sin necesidad de dependencias externas:

*   **HTML5**: Para la estructura semántica y la API de Drag and Drop.
*   **CSS3**: Para el diseño visual, incluyendo Flexbox, Grid, animaciones y gradientes.
*   **JavaScript (ES6+)**: Para toda la lógica del juego, la generación de problemas y la manipulación del DOM.

---

Creado con ❤️ para la educación en optimización e informática.