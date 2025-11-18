import type { Especialidad } from "./types";

export const GESTION_FORESTAL_ESPECIALIDADES: Especialidad[] = [
  // ===== CURSOS DESTACADOS =====
  
  {
    id: "prevencion-de-incendios-forestales",
    title: "Prevención de Incendios Forestales",
    shortDesc:
      "Curso especializado en prevención, detección temprana y respuesta inicial frente a incendios forestales.",
    image: "/img/gestion-forestal/Prevencion-De-Incendios-Forestales.jpg",
    target:
      "Brigadistas, encargados de predios, comunidades, equipos de emergencia y personal vinculado a zonas de interfaz urbano-forestal.",
    benefits: [
      "Identificar factores de riesgo asociados a incendios forestales.",
      "Implementar medidas preventivas en predios y comunidades.",
      "Actuar adecuadamente en la fase inicial de un incendio.",
      "Coordinarse con organismos competentes para una respuesta efectiva."
    ],
    featured: true
  },
  
  {
    id: "manejo-forestal-sostenible",
    title: "Manejo Forestal Sostenible",
    shortDesc:
      "Programa orientado a planificar y ejecutar el manejo del bosque considerando criterios económicos, sociales y ambientales de sostenibilidad.",
    image: "/img/gestion-forestal/Manejo-forestal-sostenible.jpg",
    target:
      "Profesionales, técnicos y encargados de áreas forestales que deban diseñar, implementar o supervisar planes de manejo.",
    benefits: [
      "Diseñar planes de manejo forestal con enfoque sostenible.",
      "Integrar variables ambientales, económicas y sociales en la gestión del bosque.",
      "Conocer las principales normativas y estándares asociados a la actividad forestal.",
      "Optimizar el uso del recurso forestal reduciendo impactos negativos."
    ],
    featured: true
  },
  {
    id: "manejo-de-herramientas-y-maquinaria-forestal",
    title: "Manejo de Herramientas y Maquinaria Forestal",
    shortDesc:
      "Programa práctico sobre uso seguro y eficiente de herramientas manuales y maquinaria empleada en faenas forestales.",
    image: "/img/gestion-forestal/Manejo-de-herramientas-y-maquinaria-forestal__.jpg",
    target:
      "Operadores, mantenedores, encargados de faena y trabajadores que utilizan herramientas y equipos en terreno.",
    benefits: [
      "Operar herramientas y maquinaria de acuerdo con protocolos de seguridad.",
      "Realizar mantenciones básicas que prolonguen la vida útil de los equipos.",
      "Reducir accidentes asociados a un uso inadecuado de la maquinaria.",
      "Mejorar el rendimiento operativo en las distintas labores en terreno."
    ],
    featured: true
},
 
  // ===== RESTO DE CURSOS ÁREA GESTIÓN FORESTAL =====
  {
    id: "silvicultura",
    title: "Silvicultura",
    shortDesc:
      "Curso orientado a la gestión y cuidado de bosques, desde la plantación hasta el aprovechamiento, con foco en sostenibilidad y productividad.",
    image: "/img/gestion-forestal/Silvicultura.jpg",
    target:
      "Trabajadores forestales, encargados de predios, técnicos, supervisores y profesionales que participan en la planificación y manejo de bosques.",
    benefits: [
      "Comprender los principios básicos de la silvicultura y el ciclo de vida del bosque.",
      "Aplicar técnicas de manejo que favorezcan la regeneración y el crecimiento sostenible.",
      "Tomar decisiones informadas sobre raleos, podas y cosechas.",
      "Contribuir a la protección del recurso forestal y su entorno."
    ],
    featured: false
  },
  {
    id: "tecnicas-de-tala-y-aprovechamiento",
    title: "Técnicas de Tala y Aprovechamiento",
    shortDesc:
      "Curso técnico enfocado en las mejores prácticas de corte, volteo y aprovechamiento de madera en terreno.",
    image: "/img/gestion-forestal/Tecnicas-de-tala-y-aprovechamiento.jpg",
    target:
      "Operadores de motosierra, cuadrillas de tala, supervisores de faena y personal de producción forestal.",
    benefits: [
      "Aplicar técnicas de tala seguras y eficientes.",
      "Disminuir riesgos de accidentes durante las maniobras de volteo.",
      "Optimizar el aprovechamiento de la madera reduciendo pérdidas.",
      "Cumplir con procedimientos y normas de seguridad en faena."
    ],
    featured: false
  },
  {
    id: "tecnicas-de-procesamiento-de-la-madera",
    title: "Técnicas de Procesamiento de la Madera",
    shortDesc:
      "Curso que revisa procesos de aserrado, clasificación y tratamiento de la madera para distintos usos industriales.",
    image: "/img/gestion-forestal/Tecnicas-de-procesamiento-de-la-madera__.jpg",
    target:
      "Personal de aserraderos, plantas de procesamiento, encargados de calidad y operarios de líneas de producción.",
    benefits: [
      "Conocer las etapas del procesamiento industrial de la madera.",
      "Mejorar la calidad del producto final mediante un correcto tratamiento.",
      "Reducir mermas y reprocesos en la línea de producción.",
      "Alinear procesos con estándares de calidad definidos por la empresa."
    ],
    featured: false
  },
   {
    id: "gestion-de-bosques",
    title: "Gestión de Bosques",
    shortDesc:
      "Curso que aborda la planificación integral del recurso forestal, incluyendo inventario, proyección, uso y conservación de masas boscosas.",
    image: "/img/gestion-forestal/Gestion-de-bosques.jpg",
    target:
      "Jefes de área, supervisores, ingenieros forestales, técnicos y personal a cargo de la administración de bosques públicos o privados.",
    benefits: [
      "Realizar una gestión ordenada y planificada del recurso forestal.",
      "Interpretar información de inventarios y monitoreos para la toma de decisiones.",
      "Definir objetivos productivos y de conservación para cada predio.",
      "Coordinar equipos y recursos en función de un plan de gestión forestal."
    ],
    featured: false
  },
  {
    id: "gestion-de-calidad-en-la-fabricacion-de-madera",
    title: "Gestión de Calidad en la Fabricación de Madera",
    shortDesc:
      "Programa enfocado en controles, registros y criterios de calidad aplicados a productos derivados de la madera.",
    image: "/img/gestion-forestal/Gestion-de-calidad-en-la-fabricacion-de-madera__.jpg",
    target:
      "Supervisores de planta, encargados de calidad, mandos medios y responsables de procesos en la industria maderera.",
    benefits: [
      "Implementar controles de calidad en la fabricación de productos de madera.",
      "Detectar y corregir desviaciones en procesos productivos.",
      "Diseñar planes de mejora continua para líneas de fabricación.",
      "Mejorar la satisfacción del cliente mediante productos consistentes."
    ],
    featured: false
  },
  {
    id: "control-de-inventario-forestal",
    title: "Control de Inventario Forestal",
    shortDesc:
      "Curso sobre métodos y herramientas para gestionar inventarios de madera en pie, en tránsito y en planta.",
    image: "/img/gestion-forestal/Control-de-inventario__.jpg",
    target:
      "Encargados de bodegas, logística, planificación y personal que administra existencias de madera y productos derivados.",
    benefits: [
      "Registrar y controlar correctamente los volúmenes forestales.",
      "Reducir pérdidas por registros incompletos o inexactos.",
      "Integrar el inventario forestal con la planificación de producción.",
      "Apoyar la toma de decisiones comerciales con datos confiables."
    ],
    featured: false
  },
  {
    id: "desarrollo-de-habilidades-artesanales-en-madera",
    title: "Desarrollo de Habilidades Artesanales en Madera",
    shortDesc:
      "Curso práctico que fomenta habilidades manuales para el trabajo fino con madera y la elaboración de productos artesanales.",
    image: "/img/gestion-forestal/Desarrollo-de-habilidades-artesanales-en-madera__.jpg",
    target:
      "Trabajadores, emprendedores y artesanos que deseen perfeccionar técnicas manuales y de diseño en madera.",
    benefits: [
      "Desarrollar destrezas manuales para trabajos detallados en madera.",
      "Aplicar técnicas básicas de diseño y terminación.",
      "Mejorar la calidad y presentación de productos artesanales.",
      "Potenciar oportunidades de emprendimiento en el rubro maderero."
    ],
    featured: false
  },
  {
    id: "diseno-sostenible",
    title: "Diseño Sostenible",
    shortDesc:
      "Programa que integra criterios de sostenibilidad en el diseño de productos y proyectos basados en recursos forestales.",
    image: "/img/gestion-forestal/Diseno-sostenible-__.jpg",
    target:
      "Profesionales y técnicos vinculados a diseño de productos, proyectos forestales y áreas de innovación.",
    benefits: [
      "Incorporar principios de sostenibilidad en el diseño de productos.",
      "Evaluar impactos ambientales asociados al ciclo de vida del producto.",
      "Alinear propuestas con políticas de responsabilidad social y ambiental.",
      "Agregar valor a la oferta mediante diseño responsable."
    ],
    featured: false
  },
  {
    id: "tecnicas-de-transporte-y-logistica-forestal",
    title: "Técnicas de Transporte y Logística Forestal",
    shortDesc:
      "Curso orientado a la planificación y operación del transporte de madera desde el bosque hasta los centros de acopio o plantas.",
    image: "/img/gestion-forestal/Tecnicas-de-transporte-y-logistica-forestal.jpg",
    target:
      "Encargados de logística, choferes, coordinadores de faena y personal de empresas de transporte forestal.",
    benefits: [
      "Planificar rutas y cargas de manera eficiente y segura.",
      "Optimizar costos logísticos asociados al transporte de madera.",
      "Cumplir con normativas de peso, señalización y seguridad.",
      "Reducir tiempos muertos y mejorar la continuidad operacional."
    ],
    featured: false
  },
  {
    id: "tecnicas-de-reforestacion-y-restauracion-ecologica",
    title: "Técnicas de Reforestación y Restauración Ecológica",
    shortDesc:
      "Programa centrado en métodos de reforestación y acciones de restauración de ecosistemas degradados.",
    image: "/img/gestion-forestal/Tecnicas-de-reforestacion-y-restauracion-ecologica.jpg",
    target:
      "Técnicos, profesionales y equipos que participan en proyectos de reforestación y recuperación de áreas intervenidas.",
    benefits: [
      "Seleccionar especies y técnicas adecuadas para reforestación.",
      "Planificar acciones de restauración de suelos y cobertura vegetal.",
      "Monitorear la evolución de proyectos de restauración.",
      "Contribuir a la compensación y mitigación de impactos ambientales."
    ],
    featured: false
  },
  {
    id: "gestion-de-proyectos-forestales",
    title: "Gestión de Proyectos Forestales",
    shortDesc:
      "Curso que integra la formulación, planificación y seguimiento de proyectos en el ámbito forestal.",
    image: "/img/gestion-forestal/Gestion-de-proyectos-forestales__.jpg",
    target:
      "Jefes de proyecto, coordinadores, ingenieros y profesionales responsables de iniciativas forestales.",
    benefits: [
      "Formular proyectos forestales con objetivos claros y medibles.",
      "Definir cronogramas, responsables y recursos necesarios.",
      "Realizar seguimiento y control de avances en terreno.",
      "Reportar resultados a la dirección y a los organismos involucrados."
    ],
    featured: false
  },
  {
    id: "tecnicas-de-muestreo-y-analisis-forestal",
    title: "Técnicas de Muestreo y Análisis Forestal",
    shortDesc:
      "Curso técnico sobre métodos de muestreo y análisis de información para caracterizar bosques y recursos forestales.",
    image: "/img/gestion-forestal/Tecnicas-De-Muestreo-Y-Analisis-Forestal.jpg",
    target:
      "Técnicos, analistas, encuestadores de terreno y profesionales que requieran datos para decisiones de manejo.",
    benefits: [
      "Aplicar técnicas de muestreo representativas en terreno.",
      "Procesar datos para estimar existencias y variables forestales.",
      "Interpretar resultados para la planificación de manejo.",
      "Mejorar la calidad de la información disponible para la gestión."
    ],
    featured: false
  },
  {
    id: "manejo-de-herramientas-y-maquinaria-forestal",
    title: "Manejo de Herramientas y Maquinaria Forestal",
    shortDesc:
      "Programa práctico sobre uso seguro y eficiente de herramientas manuales y maquinaria empleada en faenas forestales.",
    image: "/img/gestion-forestal/Manejo-de-herramientas-y-maquinaria-forestal__.jpg",
    target:
      "Operadores, mantenedores, encargados de faena y trabajadores que utilizan herramientas y equipos en terreno.",
    benefits: [
      "Operar herramientas y maquinaria de acuerdo con protocolos de seguridad.",
      "Realizar mantenciones básicas que prolonguen la vida útil de los equipos.",
      "Reducir accidentes asociados a un uso inadecuado de la maquinaria.",
      "Mejorar el rendimiento operativo en las distintas labores en terreno."
    ],
    featured: false
  },
  {
    id: "seguridad-en-el-trabajo-forestal",
    title: "Seguridad en el Trabajo Forestal",
    shortDesc:
      "Curso orientado a la identificación de riesgos y a la aplicación de medidas preventivas en labores forestales.",
    image: "/img/gestion-forestal/Seguridad-en-el-trabajo-forestal__.jpg",
    target:
      "Trabajadores forestales, supervisores, comités paritarios y responsables de prevención en empresas del rubro.",
    benefits: [
      "Reconocer los principales riesgos presentes en faenas forestales.",
      "Aplicar medidas de control y uso correcto de EPP.",
      "Investigar incidentes y proponer acciones correctivas.",
      "Fortalecer la cultura de seguridad en el equipo de trabajo."
    ],
    featured: false
  },
  
  {
    id: "conocimiento-de-flora-y-fauna",
    title: "Conocimiento de Flora y Fauna",
    shortDesc:
      "Curso que introduce a la identificación y características principales de especies vegetales y animales asociadas a ecosistemas forestales.",
    image: "/img/gestion-forestal/Conocimiento-de-flora-y-fauna.jpg",
    target:
      "Trabajadores de terreno, guías, técnicos y profesionales que requieran comprender mejor el entorno natural donde operan.",
    benefits: [
      "Reconocer especies de flora y fauna relevantes en el entorno forestal.",
      "Valorar la biodiversidad como activo del territorio.",
      "Identificar especies sensibles o protegidas para ajustar las labores.",
      "Aportar a una gestión forestal más respetuosa con el ecosistema."
    ],
    featured: false
  }
];