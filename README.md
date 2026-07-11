# Índice de recursos adaptativos bayesianos

Página que reúne, como catálogo, los recursos educativos **adaptativos
bayesianos** publicados: evaluaciones y actividades que se adaptan a cada
alumno mediante inferencia bayesiana, modelo IRT y entropía de Shannon.

🔗 **https://bayes-edu.github.io/**

El sitio es estático (HTML + CSS + JS sin dependencias) y funciona abriendo
`index.html` directamente o publicándolo en GitHub Pages.

## Cómo añadir un recurso nuevo

Todo el catálogo está en **`programs.js`**. Para añadir un recurso, copia un
objeto de la lista `window.PROGRAMS` y edítalo:

```js
{
  id: 'mi-recurso',
  title: 'Título visible',
  subtitle: 'Tema o curso',
  area: 'matematicas',          // metodologia | matematicas | lengua | ciencias | general
  level: '2.º ESO',             // '' si no aplica
  model: 'Nominal (tipo C)',    // etiqueta del tipo de modelo
  description: 'Una o dos frases.',
  url: 'https://jjdeharo.github.io/mi-recurso/',
  repo: 'https://github.com/jjdeharo/mi-recurso',   // '' si no hay
  featured: false,              // true solo para la metodología
},
```

No hay que tocar nada más: el índice construye solo las tarjetas, los filtros
por área y los contadores. Para crear un **área nueva**, añade su clave a
`window.AREAS` (con etiqueta, icono y color) y úsala en el campo `area`.

## Estructura

```
bayes-edu.github.io/
├── index.html     Estructura de la página
├── styles.css     Estilos (tema claro/oscuro)
├── app.js         Renderizado y filtros
├── programs.js    ← EL CATÁLOGO: se edita solo este archivo para crecer
├── favicon.svg
└── .nojekyll      Sirve los archivos tal cual en GitHub Pages
```

## Recursos catalogados

- **[Recursos adaptativos bayesianos](https://jjdeharo.github.io/recursos-adaptativos/)** — metodología y documentación.
- **[Test adaptativo bayesiano](https://jjdeharo.github.io/bayes-test/)** — evaluación diagnóstica.
- **[Itinerario: despejar la x](https://jjdeharo.github.io/bayes-itinerario/)** — ecuaciones de primer grado, 1.º ESO.
- **[Diagnóstico multifactorial de decimales](https://jjdeharo.github.io/bayes-nominal/)** — comparación de decimales.
- **[PotenciaLab](https://jjdeharo.github.io/bayes-potencias/)** — propiedades de las potencias, 1.º Bachillerato.
- **[Laboratorio de combinatoria](https://jjdeharo.github.io/labcom/)** — combinatoria.
- **[¿Frío o caliente?](https://jjdeharo.github.io/bayes-temperatura/)** — modelos mentales sobre calor, ESO.
- **[¿Con tilde o sin tilde?](https://jjdeharo.github.io/bayes-acentuacion/)** — acentuación, Lengua 1.º–2.º ESO.

## Licencias

- Contenido: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- Código: [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)

## Autor

Juan José de Haro · [bilateria.org](https://bilateria.org)
