/*
 * Catálogo de recursos adaptativos bayesianos.
 *
 * PARA AÑADIR UN RECURSO NUEVO:
 *   Copia un objeto de la lista y edítalo. Campos:
 *     id          Identificador único (kebab-case). Solo para uso interno.
 *     title       Título visible.
 *     subtitle    Línea corta bajo el título (tema, curso…).
 *     area        Clave de área: 'metodologia' | 'matematicas' | 'lengua' | 'ciencias' | 'general'
 *     stages      Array de etapas educativas a las que pertenece el recurso,
 *                 con las claves de STAGES (p. ej. ['bachillerato']). Un curso
 *                 concreto como «1.º Bachillerato» va dentro de 'bachillerato'.
 *                 Puede tener varias: ['eso','bachillerato'].
 *     level       Curso o nivel concretos, para la etiqueta. '' si no aplica.
 *     model       Tipo de modelo bayesiano (texto libre para la etiqueta).
 *     description Descripción de una o dos frases.
 *     url         Enlace al recurso publicado.
 *     repo        Enlace al repositorio (o '' si no hay).
 *     featured    true solo para la metodología (aparece en el bloque destacado).
 *
 * Las áreas se definen más abajo, en AREAS. Para crear un área nueva basta
 * con añadir su clave aquí y su etiqueta/color en AREAS.
 */

window.AREAS = {
  metodologia: { label: 'Metodología', icon: '📊', color: '#4f46e5' },
  matematicas: { label: 'Matemáticas', icon: '📐', color: '#2563eb' },
  lengua:      { label: 'Lengua',      icon: '✍️', color: '#db2777' },
  ciencias:    { label: 'Física y Química', icon: '🌡️', color: '#ea580c' },
  general:     { label: 'General',     icon: '🎯', color: '#16a34a' },
};

// Etapas educativas (de menor a mayor). Un curso concreto (p. ej. «1.º
// Bachillerato») queda englobado en su etapa mediante el campo `stages`.
// Para añadir una etapa nueva basta con incluirla aquí y usar su clave.
window.STAGES = {
  primaria:     { label: 'Primaria' },
  eso:          { label: 'ESO' },
  bachillerato: { label: 'Bachillerato' },
};

window.PROGRAMS = [
  {
    id: 'recursos-adaptativos',
    title: 'Recursos adaptativos bayesianos',
    subtitle: 'Metodología y documentación',
    area: 'metodologia',
    stages: [],
    level: '',
    model: 'Protocolo',
    description: 'El fundamento del método: inferencia bayesiana, modelo IRT 3PL y entropía de Shannon para crear recursos que se adaptan a cada alumno. Incluye la especificación operativa para generar recursos con IA, la documentación técnica y los fundamentos matemáticos.',
    url: 'https://jjdeharo.github.io/recursos-adaptativos/',
    repo: 'https://github.com/jjdeharo/recursos-adaptativos',
    featured: true,
  },
  {
    id: 'bayes-test',
    title: 'Test adaptativo bayesiano',
    subtitle: 'Evaluación diagnóstica',
    area: 'general',
    stages: ['eso', 'bachillerato'],
    level: 'Cualquier materia',
    model: 'Ordinal · IRT 3PL',
    description: 'Evaluación que selecciona cada pregunta según la ganancia esperada de información y estima el nivel del alumno (básico, medio o avanzado). Demostración del núcleo del método: Bayes actualiza y Shannon decide cuándo parar.',
    url: 'https://jjdeharo.github.io/bayes-test/',
    repo: 'https://github.com/jjdeharo/bayes-test',
    featured: false,
  },
  {
    id: 'bayes-itinerario',
    title: 'Itinerario: despejar la x',
    subtitle: 'Ecuaciones de primer grado · 1.º ESO',
    area: 'matematicas',
    stages: ['eso'],
    level: '1.º ESO',
    model: 'Itinerario + ordinal · IRT 3PL',
    description: 'Recorrido de aprendizaje progresivo en tres etapas (una operación, dos pasos, x en ambos lados) con un motor de evaluación adaptativa que ajusta la práctica y ofrece refuerzo puntual. Al terminar genera un informe personalizado.',
    url: 'https://jjdeharo.github.io/bayes-itinerario/',
    repo: 'https://github.com/jjdeharo/bayes-itinerario',
    featured: false,
  },
  {
    id: 'bayes-nominal',
    title: 'Diagnóstico multifactorial de decimales',
    subtitle: 'Comparación de números decimales',
    area: 'matematicas',
    stages: ['eso'],
    level: 'ESO',
    model: 'Multifactorial (tipo D)',
    description: 'Estima por separado la presencia de varios errores conceptuales al comparar decimales (regla del número entero, de la fracción, cero invisible…), de modo que un alumno puede mostrar más de un fallo a la vez. Usa el distractor elegido, no solo acierto/fallo.',
    url: 'https://jjdeharo.github.io/bayes-nominal/',
    repo: 'https://github.com/jjdeharo/bayes-nominal',
    featured: false,
  },
  {
    id: 'bayes-potencias',
    title: 'PotenciaLab',
    subtitle: 'Propiedades de las potencias · 1.º Bachillerato',
    area: 'matematicas',
    stages: ['bachillerato'],
    level: '1.º Bachillerato',
    model: 'Combinado A+C',
    description: 'Diagnostica y hace practicar las propiedades de las potencias sobre seis familias de contenido. Modo diagnóstico con cierre por evidencia y modo práctica abierto con olvido exponencial que hereda el diagnóstico previo. Banco de 51 plantillas parametrizadas.',
    url: 'https://jjdeharo.github.io/bayes-potencias/',
    repo: 'https://github.com/jjdeharo/bayes-potencias',
    featured: false,
  },
  {
    id: 'bayeslab',
    title: 'BayesLab',
    subtitle: 'Teorema de Bayes · 2.º Bachillerato',
    area: 'matematicas',
    stages: ['bachillerato'],
    level: '2.º Bachillerato',
    model: 'Combinado A+C',
    description: 'Explica y hace practicar el teorema de Bayes con cuatro partes interconectadas: teoría desde la probabilidad básica, diagnóstico multifactorial de conocimientos previos, diagnóstico del nivel de Bayes y práctica guiada con pistas y olvido. Bancos de plantillas parametrizadas verificadas; interfaz en español y catalán (preparada para gallego, euskera e inglés).',
    url: 'https://jjdeharo.github.io/bayeslab/',
    repo: 'https://github.com/jjdeharo/bayeslab',
    featured: false,
  },
  {
    id: 'labcom',
    title: 'Laboratorio de combinatoria',
    subtitle: 'Combinatoria sin memorizar fórmulas',
    area: 'matematicas',
    stages: ['eso', 'bachillerato'],
    level: 'ESO · Bachillerato',
    model: 'Multi-habilidad',
    description: 'Lecciones guiadas, árbol de decisión y práctica con más de 230 enunciados sobre los seis tipos de problemas. El sistema inteligente mantiene una distribución bayesiana por habilidad (lectura del enunciado y pasos de resolución) e indica en qué falla el alumno.',
    url: 'https://jjdeharo.github.io/labcom/',
    repo: 'https://github.com/jjdeharo/labcom',
    featured: false,
  },
  {
    id: 'bayes-temperatura',
    title: '¿Frío o caliente?',
    subtitle: 'Modelos mentales sobre calor y temperatura · ESO',
    area: 'ciencias',
    stages: ['eso'],
    level: 'ESO',
    model: 'Nominal (tipo C)',
    description: 'Diagnostica qué concepción errónea sobre el calor usa el alumnado (el tacto mide la temperatura, la ropa produce calor o el modelo correcto). Hipótesis mutuamente excluyentes con matriz de verosimilitudes explícita por pregunta.',
    url: 'https://jjdeharo.github.io/bayes-temperatura/',
    repo: 'https://github.com/jjdeharo/bayes-temperatura',
    featured: false,
  },
  {
    id: 'bayes-acentuacion',
    title: '¿Con tilde o sin tilde?',
    subtitle: 'Acentuación · Lengua Castellana · 1.º–2.º ESO',
    area: 'lengua',
    stages: ['eso'],
    level: '1.º–2.º ESO',
    model: 'Combinado A+D',
    description: 'Estima a la vez el nivel global de acentuación del alumno y si comete tres errores concretos que pueden coexistir (reglas generales, hiatos y tilde diacrítica). Ejemplo del modelo combinado: distribución ordinal global más factores diagnósticos nominales.',
    url: 'https://jjdeharo.github.io/bayes-acentuacion/',
    repo: 'https://github.com/jjdeharo/bayes-acentuacion',
    featured: false,
  },
];
