import type { Especialidad } from "./types";

// Lista completa de cursos (16 en total)
export const FINANZAS_ESPECIALIDADES: Especialidad[] = [
  // --- 3 CURSOS DESTACADOS ---
  {
    id: "nch-2728-2015",
    title: "NCH 2728 – 2015",
    shortDesc: "Norma chilena de calidad para OTEC. Requisitos y buenas prácticas para implementar, mantener y auditar un SGC orientado a capacitación.",
    image: "/img/finanzas/NCH-2015.png",
    target: "Directores y encargados de calidad de OTEC, coordinadores/as de capacitación, jefaturas administrativas que preparan certificación.",
    benefits: [
      "Comprender requisitos clave de la NCh 2728:2015 y su relación con ISO 9001.",
      "Diseñar y documentar procesos, controles y evidencias para auditorías.",
      "Plan de implementación y mejora continua aplicado al contexto OTEC."
    ],
    featured: true
  },
  {
    id: "operacion-renta",
    title: "Operación Renta",
    shortDesc: "Actualización tributaria y práctica guiada para preparar y revisar declaraciones (empresa y persona), con énfasis en cambios vigentes.",
    image: "/img/finanzas/Operacion-Renta.jpg",
    target: "Contadores/as, asistentes contables, encargados/as de finanzas de pymes, dueños/as de negocio que declaran renta.",
    benefits: [
      "Actualizar criterios, formularios y cambios normativos recientes.",
      "Aplicar casos prácticos de determinación de base imponible y créditos.",
      "Reducir errores y observaciones mediante checklists y buenas prácticas."
    ],
    featured: true
  },
  {
    id: "calculo-de-remuneraciones",
    title: "Calculo De Remuneraciones",
    shortDesc: "Tipos de remuneración, obligaciones legales y cálculos de impuestos/cotizaciones con criterios actualizados.",
    image: "/img/finanzas/Calculo-de-remuneraciones.jpg",
    target: "Encargados/as de RR. HH., payroll, administración y contabilidad que procesan sueldos.",
    benefits: [
      "Aplicar correctamente leyes, topes y porcentajes vigentes.",
      "Dominar liquidaciones, licencias, horas extras y finiquitos básicos.",
      "Estandarizar planillas para reducir reprocesos y errores."
    ],
    featured: true
  },

  // --- 13 CURSOS ADICIONALES (featured: false) ---
  {
    id: "norma-iso-45000-2018",
    title: "Norma ISO 45.000 – 2018",
    shortDesc: "Marco de gestión de seguridad y salud ocupacional: política, riesgos, controles y mejora.",
    image: "/img/finanzas/Norma-ISO-45.000-2018.jpg",
    target: "Jefaturas SSOMA, RR. HH., comités paritarios, líderes de operación.",
    benefits: [
      "Interpretar los requisitos de ISO 45001 y su trazabilidad.",
      "Diseñar controles y KPIs de SSO atados al negocio.",
      "Preparación para auditorías internas y de certificación."
    ],
    featured: false
  },
  {
    id: "contabilidad-basica",
    title: "Contabilidad Básica",
    shortDesc: "Introducción a principios, registro, clasificación y presentación de información financiera.",
    image: "/img/finanzas/Contabilidad-basica.jpg",
    target: "Trabajadores/as de contabilidad y administración; emprendedores que gestionan su propia contabilidad.",
    benefits: [
      "Entender activos, pasivos, patrimonio, ingresos y gastos.",
      "Elaborar estados básicos y asientos frecuentes.",
      "Mejorar la lectura e interpretación de reportes financieros."
    ],
    featured: false
  },
  {
    id: "norma-iso-9000-2015",
    title: "Norma ISO 9000-2015",
    shortDesc: "Fundamentos y requisitos para implementar y mantener un Sistema de Gestión de Calidad.",
    image: "/img/finanzas/Norma-ISO-9000-2015__.jpg",
    target: "Responsables de calidad, procesos, operaciones y cumplimiento.",
    benefits: [
      "Mapear procesos y riesgos, y documentar procedimientos clave.",
      "Definir indicadores, no conformidades y acciones correctivas.",
      "Preparación para auditorías y mejora continua."
    ],
    featured: false
  },
  {
    id: "gestion-de-procesos",
    title: "Gestión De Procesos",
    shortDesc: "Diseño, estandarización, control y mejora de procesos con foco en eficiencia y experiencia.",
    image: "/img/finanzas/Gestion-de-procesos__.jpg",
    target: "Líderes de operaciones, analistas de procesos, jefaturas de calidad y TI.",
    benefits: [
      "Levantar SIPOC/flow y detectar cuellos de botella.",
      "Definir KPIs y tableros para control operativo.",
      "Aplicar mejora continua sobre evidencia y datos."
    ],
    featured: false
  },
  {
    id: "control-de-gestion",
    title: "Control De Gestión",
    shortDesc: "Técnicas de análisis de indicadores e informes de gestión para decisiones estratégicas.",
    image: "/img/finanzas/Control-de-Gestion.jpg",
    target: "Analistas y jefaturas de control de gestión, finanzas y planeamiento.",
    benefits: [
      "Construir KPIs relevantes y evitar métricas vanidosas.",
      "Armar informes ejecutivos accionables con trazabilidad a la data.",
      "Alinear presupuesto, forecast y performance operativo."
    ],
    featured: false
  },
  {
    id: "cobranza-efectiva",
    title: "Cobranza Efectiva",
    shortDesc: "Estrategias y herramientas para mejorar recuperación de cuentas por cobrar.",
    image: "/img/finanzas/Cobranza-Efectiva.jpg",
    target: "Equipos de cobranza, finanzas y atención a clientes B2B/B2C.",
    benefits: [
      "Segmentar deudores y definir tácticas por riesgo.",
      "Protocolos de contacto multicanal y objeciones típicas.",
      "KPIs de mora, promesas de pago y recuperación."
    ],
    featured: false
  },
  {
    id: "administracion-edificios-condominios",
    title: "Administración De Edificios Y Condominios",
    shortDesc: "Gestión administrativa, legal y financiera para comunidades.",
    image: "/img/finanzas/Administracion-de-edificios-y-condominios.jpg",
    target: "Administradores/as, comités, mayordomía y apoyo contable de comunidades.",
    benefits: [
      "Planificación presupuestaria y control de gastos comunes.",
      "Cumplimiento legal y manejo de proveedores.",
      "Gestión de reclamos y comunicación con copropietarios."
    ],
    featured: false
  },
  {
    id: "evaluacion-de-proyectos",
    title: "Evaluación De Proyectos",
    shortDesc: "Herramientas para evaluar viabilidad financiera (VAN, TIR, payback) y riesgos.",
    image: "/img/finanzas/Evaluacion-de-Proyectos__.jpg",
    target: "Jefes/as de proyecto, finanzas corporativas, emprendedores/as.",
    benefits: [
      "Construir flujos de caja y escenarios.",
      "Calcular VAN/TIR y sensibilidad de supuestos clave.",
      "Comunicar casos de negocio a directorio/gerencia."
    ],
    featured: false
  },
  {
    id: "legislacion-laboral-tributaria",
    title: "Legislación Laboral Y Tributaria",
    shortDesc: "Marco legal esencial para relaciones laborales y obligaciones tributarias asociadas.",
    image: "/img/finanzas/Legislacion-Laboral-y-Tributaria.jpg",
    target: "RR. HH., contabilidad, asesores y jefaturas administrativas.",
    benefits: [
      "Actualizar normativa laboral y sus impactos de costo.",
      "Gestionar contratos, jornadas, licencias y terminaciones.",
      "Integrar criterios laborales en la planificación tributaria."
    ],
    featured: false
  },
  {
    id: "gestion-de-talentos",
    title: "Gestión De Talentos",
    shortDesc: "Atracción, desarrollo, desempeño y sucesión con métricas de impacto.",
    image: "/img/finanzas/Gestion-de-talentos__.jpg",
    target: "RR. HH., líderes de área y business partners.",
    benefits: [
      "Diseñar perfiles, rutas de desarrollo y planes de sucesión.",
      "Implementar feedback y evaluación de desempeño.",
      "Conectar talento con objetivos de negocio."
    ],
    featured: false
  },
  {
    id: "norma-ifrs-niif",
    title: "Norma IFRS/NIIF",
    shortDesc: "Principios para elaborar estados financieros bajo NIIF e impactos de adopción.",
    image: "/img/finanzas/Norma-IFRS.jpg",
    target: "Contabilidad y finanzas, auditores internos, controllers.",
    benefits: [
      "Entender políticas contables y revelaciones clave.",
      "Tratar rubros frecuentes: ingresos, activos, provisiones y arrendamientos.",
      "Preparar cierres y conciliaciones bajo NIIF."
    ],
    featured: false
  },
  {
    id: "administracion-bodegas-inventario",
    title: "Administración Y Control De Bodegas E Inventario",
    shortDesc: "Buenas prácticas de almacenamiento, rotación, control y toma de inventarios.",
    image: "/img/finanzas/Administracion-y-control-de-bodegas-e-inventario.jpg",
    target: "Jefes/as de bodega, logística, compras y control interno.",
    benefits: [
      "Optimizar layout, rotación y reposición.",
      "Diseñar conteos cíclicos y control de mermas.",
      "Integrar inventario con finanzas y costos."
    ],
    featured: false
  },
  {
    id: "accidentes-laborales-responsabilidad",
    title: "Accidentes Laborales Y Responsabilidad Civil Y Penal",
    shortDesc: "Implicancias legales, prevención y gestión posterior a incidentes.",
    image: "/img/finanzas/accidentes-laborales-y-responsabilidad-civil.jpg",
    target: "Gerencias, jefaturas operativas, RR. HH., comités paritarios.",
    benefits: [
      "Conocer responsabilidades y riesgos legales del empleador.",
      "Protocolos de investigación y reporte de accidentes.",
      "Medidas correctivas y preventivas con foco en continuidad."
    ],
    featured: false
  }
];
