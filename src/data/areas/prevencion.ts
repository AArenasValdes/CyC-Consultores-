import type { Especialidad } from "./types";


export const PREVENCION_ESPECIALIDADES: Especialidad[] = [
  // ===== CURSOS DESTACADOS =====
  {
    id: "planificacion-control-ejecucion-obras",
    title: "Planificación, Control y Ejecución de Obras",
    shortDesc:
      "Programa orientado a planificar, controlar y ejecutar obras de forma ordenada, segura y alineada a estándares técnicos.",
    image: "/img/prevencion/Planificacion-y-ejecucion-de-obras-1.jpg",
    target:
    "Jefes de obra, administradores de contrato, encargados de terreno, supervisores y prevencionistas vinculados a proyectos de construcción y montaje.",
  benefits: [
    "Estructurar la planificación de una obra con hitos, responsables y recursos claramente definidos.",
    "Controlar avances, desviaciones de plazos y sobrecostos con herramientas simples y aplicables.",
    "Integrar criterios de seguridad y prevención de riesgos en la toma de decisiones diarias en la obra.",
    "Mejorar la coordinación entre mandantes, contratistas y subcontratos para reducir conflictos en terreno."
  ],
  featured: true
  },
  {
    id: "responsabilidad-civil-penal",
    title: "Responsabilidad Civil y Penal en la Minería",
    shortDesc:
      "Aborda las bases legales de la responsabilidad civil y penal asociada a la gestión de riesgos y accidentes en minería.",
    image: "/img/prevencion/legislacion.jpg",
   target:
    "Gerencias, jefaturas de área, supervisores, comités paritarios, asesores HSEC y profesionales que toman decisiones en operaciones mineras.",
  benefits: [
    "Comprender los conceptos básicos de responsabilidad civil y penal aplicados a la minería.",
    "Identificar las responsabilidades de la empresa, de los representantes legales y de los cargos críticos.",
    "Reconocer situaciones de riesgo jurídico derivadas de incidentes, accidentes graves o fatales.",
    "Tomar decisiones preventivas que reduzcan la exposición a juicios, multas y sanciones de la autoridad."
  ],
  featured: true
},
  {
    id: "intensivo-prevencion-riesgos",
    title: "Intensivo en Prevención de Riesgos",
    shortDesc:
      "Curso intensivo que entrega una visión global de la prevención de riesgos, seguridad en el trabajo e higiene industrial.",
    image: "/img/prevencion/Intensivo-en-prevencion-de-riesgos-1.jpg",
   target:
    "Gerencias, jefaturas de área, supervisores, comités paritarios, asesores HSEC y profesionales que toman decisiones en operaciones mineras.",
  benefits: [
    "Comprender los conceptos básicos de responsabilidad civil y penal aplicados a la minería.",
    "Identificar las responsabilidades de la empresa, de los representantes legales y de los cargos críticos.",
    "Reconocer situaciones de riesgo jurídico derivadas de incidentes, accidentes graves o fatales.",
    "Tomar decisiones preventivas que reduzcan la exposición a juicios, multas y sanciones de la autoridad."
  ],
  featured: true
  },

  // ===== RESTO DE CURSOS ÁREA PREVENCIÓN DE RIESGOS =====
  {
    id: "trabajo-en-altura",
    title: "Trabajo en Altura",
    shortDesc:
      "Desarrolla competencias para ejecutar trabajos en altura física de forma segura y controlada.",
    image: "/img/prevencion/trabajo-en-altura-2.jpg",
    target:
      "Trabajadores, técnicos y supervisores que realizan labores en andamios, estructuras, techumbres o plataformas elevadas.",
    benefits: [
      "Identificar riesgos asociados al trabajo en altura y sus consecuencias.",
      "Aplicar el uso correcto de arnés, líneas de vida y sistemas anticaídas.",
      "Implementar procedimientos seguros antes, durante y después de la tarea."
    ],
    featured: false
  },
  {
    id: "tecnica-de-estiba-y-desestiba",
    title: "Técnica de Estiba y Desestiba",
    shortDesc:
      "Capacita en técnicas seguras para estibar y desestibar cargas, minimizando daños personales y materiales.",
    image: "/img/prevencion/Tecnica-de-estiba-y-desestiba.jpg",
    target:
      "Operadores de bodega, logística, transporte, encargados de carga y descarga y personal de centros de distribución.",
    benefits: [
      "Reconocer riesgos habituales asociados a la carga y descarga de materiales.",
      "Aplicar técnicas adecuadas de estiba, trincado y distribución de peso.",
      "Reducir accidentes, daños a la carga y pérdidas económicas."
    ],
    featured: false
  },
  {
    id: "manejo-y-manipulacion-de-sustancias-peligrosas",
    title: "Manejo y Manipulación de Sustancias Peligrosas",
    shortDesc:
      "Entrega herramientas para manipular, almacenar y transportar sustancias peligrosas de forma segura.",
    image: "/img/prevencion/Manejo-y-manipulacion-de-sustancias.jpg",
    target:
      "Personal de bodegas, laboratorios, plantas industriales, minería y logística que interactúa con productos químicos.",
    benefits: [
      "Interpretar fichas de seguridad (FDS) y rotulación de sustancias peligrosas.",
      "Aplicar medidas de prevención y control ante derrames y emergencias.",
      "Utilizar correctamente elementos de protección personal asociados al riesgo químico."
    ],
    featured: false
  },
  {
    id: "trabajo-seguro-en-espacios-confinados",
    title: "Trabajo Seguro en Espacios Confinados",
    shortDesc:
      "Aborda procedimientos y medidas de seguridad para intervenir espacios confinados de forma controlada.",
    image: "/img/prevencion/Trabajo-seguro-en-espacios-confinados-1.jpg",
    target:
      "Trabajadores y supervisores que ingresan o autorizan trabajos en estanques, pozos, cámaras, ductos y otros espacios confinados.",
    benefits: [
      "Reconocer características y riesgos críticos de los espacios confinados.",
      "Aplicar permisos de trabajo, medición de gases y ventilación adecuada.",
      "Organizar equipos de rescate y respuesta ante emergencias en espacios confinados."
    ],
    featured: false
  },
  {
    id: "soldadura-al-arco",
    title: "Soldadura al Arco",
    shortDesc:
      "Enfocado en la ejecución segura de trabajos de soldadura al arco, controlando riesgos eléctricos, térmicos y de proyección.",
    image: "/img/prevencion/Soldadura-al-arco-1.jpg",
    target:
      "Soldadores, ayudantes, maestros, mantenedores y supervisores de áreas de fabricación o reparación metálica.",
    benefits: [
      "Identificar riesgos de quemaduras, radiación, incendios y proyecciones propias de la soldadura.",
      "Aplicar medidas de control y resguardos físicos en el área de trabajo.",
      "Seleccionar y usar el EPP adecuado para cada tipo de trabajo de soldadura."
    ],
    featured: false
  },
  {
    id: "rigger",
    title: "Rigger",
    shortDesc:
      "Formación para personal que guía maniobras de izaje, señalización y comunicación con operadores de grúas.",
    image: "/img/prevencion/Rigger-2.jpg",
    target:
      "Riggers, operadores de grúas, supervisores de izaje y personal que participa en maniobras de carga suspendida.",
    benefits: [
      "Comprender el rol del rigger y su responsabilidad en las maniobras.",
      "Aplicar normas de señalización y comunicación efectiva con el operador.",
      "Evaluar capacidades de eslingas, accesorios y puntos de anclaje antes del izaje."
    ],
    featured: false
  },
  {
    id: "puente-grua",
    title: "Puente Grúa",
    shortDesc:
      "Capacitación para operar puente grúa bajo criterios de seguridad, eficiencia y cuidado de las cargas.",
    image: "/img/prevencion/Puente-Grua-1.jpg",
    target:
      "Operadores de puente grúa, personal de bodegas, talleres y plantas industriales con equipos de izaje.",
    benefits: [
      "Conocer controles, comandos y dispositivos de seguridad del puente grúa.",
      "Realizar chequeos previos y maniobras básicas y avanzadas en forma segura.",
      "Aplicar procedimientos para evitar golpes, caídas de carga y daños estructurales."
    ],
    featured: false
  },
  {
    id: "manejo-defensivo-4x4",
    title: "Manejo Defensivo 4x4",
    shortDesc:
      "Entrenamiento en conducción defensiva de vehículos 4x4, especialmente en rutas complejas y de faena.",
    image: "/img/prevencion/Manejo-defensivo-4x4-1.jpg",
    target:
      "Conductores de empresa, operadores de faena, supervisores y personal que conduce en caminos no urbanos o de alto riesgo.",
    benefits: [
      "Aplicar técnicas de manejo defensivo en distintas condiciones de terreno.",
      "Reconocer factores de riesgo asociados a clima, terreno y fatiga del conductor.",
      "Reducir la probabilidad de incidentes y daños a personas, equipos y vehículos."
    ],
    featured: false
  },
  {
    id: "grua-horquilla",
    title: "Grúa Horquilla",
    shortDesc:
      "Curso centrado en la operación segura de grúas horquilla en bodegas, centros de distribución y plantas.",
    image: "/img/prevencion/Grua-Horquilla-2.jpg",
    target:
      "Operadores de grúa horquilla, personal de logística, bodegas y patios de carga.",
    benefits: [
      "Conocer los controles, capacidades y limitaciones de la grúa horquilla.",
      "Ejecutar maniobras de carga, traslado y apilado de forma segura.",
      "Prevenir vuelcos, atropellos y daños a infraestructura y materiales."
    ],
    featured: false
  },
  {
    id: "manipulacion-explosivos",
    title: "Manipulación de Explosivos",
    shortDesc:
      "Formación para el manejo responsable de explosivos en contextos industriales y de faena, bajo estrictas normas de seguridad.",
    image: "/img/prevencion/Manipulacion-de-explosivos-2-scaled.jpg",
    target:
      "Personal autorizado que participa en almacenamiento, transporte o uso de explosivos en minería, construcción u otras industrias reguladas.",
    benefits: [
      "Comprender la normativa y requisitos legales asociados al uso de explosivos.",
      "Aplicar protocolos de seguridad en almacenamiento, traslado y utilización.",
      "Actuar correctamente ante situaciones de emergencia o desviaciones del procedimiento."
    ],
    featured: false
  }
];
