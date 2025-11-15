import type { Especialidad } from "./types";

export const NEGOCIOS_ESPECIALIDADES: Especialidad[] = [
  // ===== CURSOS DESTACADOS =====
  {
    id: "ventas-consultivas-modelo-harvard",
    title: "Ventas Consultivas (Modelo Harvard)",
    shortDesc: "Desarrolla habilidades y estrategias de negociación avanzada para realizar ventas efectivas centradas en las necesidades del cliente bajo el modelo Harvard.",
    image: "/img/negocios/Ventas-consultivas-modelo-harvard.jpg",
    target: "Ejecutivos de ventas, gerentes comerciales, emprendedores y profesionales que buscan mejorar sus habilidades de negociación.",
    benefits: [
      "Aumenta la tasa de cierre de ventas mediante técnicas consultivas.",
      "Mejora la relación con clientes a largo plazo.",
      "Desarrolla habilidades de negociación estratégica.",
      "Aplica el modelo Harvard para resolver objeciones de manera efectiva."
    ],
    featured: true
  },
  {
    id: "oratoria-manejo-voz",
    title: "Oratoria y Manejo de la Voz para una Comunicación Efectiva",
    shortDesc: "Técnicas de expresión oral, manejo de voz y presencia escénica para comunicar con impacto y seguridad.",
    image: "/img/negocios/Oratoria.jpg",
    target: "Ejecutivos, profesionales que realizan presentaciones, docentes y oradores públicos.",
    benefits: [
      "Mejora la claridad y proyección de la voz.",
      "Aumenta la confianza al hablar en público.",
      "Desarrolla técnicas de persuasión y retórica.",
      "Mejora la presencia escénica y lenguaje corporal."
    ],
    featured: true
  },
  {
    id: "gestion-direccion-proyectos",
    title: "Gestión y Dirección de Proyectos",
    shortDesc: "Herramientas y metodologías para planificar, ejecutar y controlar proyectos empresariales de manera efectiva.",
    image: "/img/negocios/Gestion-y-direccion-de-proyectos.jpg",
    target: "Jefes de proyecto, gerentes de área, coordinadores y profesionales que lideran iniciativas empresariales.",
    benefits: [
      "Optimiza tiempos y costos en la ejecución de proyectos.",
      "Mejora la coordinación entre equipos y stakeholders.",
      "Implementa metodologías ágiles y tradicionales.",
      "Reduce riesgos mediante planificación estratégica."
    ],
    featured: true
  },

  // ===== CURSOS REGULARES =====
  {
    id: "administracion-control-inventario-basico",
    title: "Administración y Control de Inventario Básico",
    shortDesc: "Gestión eficiente de inventarios para optimizar recursos, reducir costos y mejorar la rotación de productos en bodega.",
    image: "/img/negocios/Administracion-y-control-de-inventario-basico.jpg",
    target: "Jefes de bodega, supervisores de inventario, personal de logística y encargados de abastecimiento.",
    benefits: [
      "Optimiza el control de stock y reduce pérdidas por desabastecimiento.",
      "Mejora la rotación de productos y reduce costos de almacenamiento.",
      "Facilita la toma de decisiones basada en datos de inventario.",
      "Implementa sistemas de gestión eficientes y controles internos."
    ],
    featured: false
  },
  {
    id: "administracion-tiempo-metodologia-gtd",
    title: "Administración del Tiempo (Metodología GTD)",
    shortDesc: "Técnicas de productividad personal basadas en Getting Things Done para organizar tareas, priorizar y aumentar la eficiencia laboral.",
    image: "/img/negocios/Administracion-del-tiempo-metodologia.jpg",
    target: "Profesionales, ejecutivos, emprendedores y cualquier persona que busque optimizar su gestión del tiempo.",
    benefits: [
      "Aumenta la productividad mediante organización efectiva.",
      "Reduce el estrés laboral por sobrecarga de tareas.",
      "Mejora el enfoque en actividades prioritarias.",
      "Implementa sistemas de seguimiento y revisión de objetivos."
    ],
    featured: false
  },
  {
    id: "comercio-exterior-transporte-internacional",
    title: "Comercio Exterior y Transporte Internacional",
    shortDesc: "Conocimientos sobre normativas de comercio internacional, incoterms, logística y gestión de importaciones y exportaciones.",
    image: "/img/negocios/Comercio-exterior-y-transporte-internacional.jpg",
    target: "Profesionales de comercio exterior, jefes de logística, coordinadores de importación/exportación.",
    benefits: [
      "Comprende la normativa de comercio internacional vigente.",
      "Optimiza costos de transporte y logística internacional.",
      "Gestiona correctamente documentación aduanera.",
      "Reduce riesgos en operaciones de importación y exportación."
    ],
    featured: false
  },
  {
    id: "trabajo-equipo-comunicacion-efectiva",
    title: "Trabajo en Equipo y Comunicación Efectiva",
    shortDesc: "Fortalecimiento de competencias para trabajar colaborativamente y comunicarse de manera efectiva en equipos multidisciplinarios.",
    image: "/img/negocios/Comunicacion-Efectiva.jpg",
    target: "Equipos de trabajo, supervisores, líderes de proyecto y personal administrativo.",
    benefits: [
      "Mejora la colaboración y sinergia entre equipos.",
      "Fortalece la comunicación horizontal y vertical.",
      "Aumenta la productividad mediante trabajo colaborativo.",
      "Desarrolla habilidades de liderazgo y coordinación."
    ],
    featured: false
  },
  {
    id: "tecnica-venta-consultiva",
    title: "Técnica de Venta Consultiva",
    shortDesc: "Estrategias de venta centradas en entender las necesidades del cliente y ofrecer soluciones personalizadas de alto valor.",
    image: "/img/negocios/Tecnica-de-venta-consultiva.jpg",
    target: "Vendedores, ejecutivos comerciales, gerentes de ventas y emprendedores.",
    benefits: [
      "Aumenta el ticket promedio mediante ventas consultivas.",
      "Mejora la satisfacción y fidelización de clientes.",
      "Desarrolla habilidades de diagnóstico de necesidades.",
      "Aplica técnicas de cierre efectivas y personalizadas."
    ],
    featured: false
  },
  {
    id: "neuroventas",
    title: "Neuroventas",
    shortDesc: "Aplicación de neurociencia y psicología del consumidor para influir en las decisiones de compra de manera ética y efectiva.",
    image: "/img/negocios/Neuroventas.jpg",
    target: "Profesionales de ventas, marketing, publicidad y emprendedores.",
    benefits: [
      "Comprende los procesos mentales de toma de decisiones.",
      "Aplica gatillos emocionales para aumentar conversiones.",
      "Mejora la presentación de productos y servicios.",
      "Aumenta la efectividad de estrategias comerciales."
    ],
    featured: false
  },
  {
    id: "marketing",
    title: "Marketing",
    shortDesc: "Fundamentos de marketing estratégico, análisis de mercado, branding y estrategias de promoción para posicionar productos y servicios.",
    image: "/img/negocios/Marketing.jpg",
    target: "Profesionales de marketing, emprendedores, gerentes comerciales y dueños de negocios.",
    benefits: [
      "Desarrolla estrategias de posicionamiento de marca.",
      "Optimiza campañas publicitarias y promocionales.",
      "Analiza el comportamiento del consumidor y mercado.",
      "Aumenta la visibilidad y ventas de productos/servicios."
    ],
    featured: false
  },
  {
  id: "comunicacion-efectiva-manejo-conflictos",
    title: "Comunicación Efectiva y Manejo de Conflictos para Empresas",
    shortDesc: "Desarrollo de habilidades comunicacionales y técnicas para gestionar y resolver conflictos en entornos laborales.",
    image: "/img/negocios/Comunicacion-Efectiva.jpg",
    target: "Líderes de equipo, supervisores, jefaturas y personal que interactúa con clientes internos y externos.",
    benefits: [
      "Mejora el clima laboral mediante comunicación asertiva.",
      "Reduce conflictos interpersonales en equipos de trabajo.",
      "Fortalece la escucha activa y empatía organizacional.",
      "Aumenta la productividad a través de mejores relaciones laborales."
    ],
    featured: false
  },
  {
    id: "indicador-gestion-kpi",
    title: "Indicador de Gestión KPI",
    shortDesc: "Diseño, implementación y seguimiento de indicadores clave de desempeño para medir y mejorar la gestión empresarial.",
    image: "/img/negocios/Indicador-de-gestion-KPI.jpg",
    target: "Gerentes, jefes de área, analistas de negocio y controladores de gestión.",
    benefits: [
      "Implementa sistemas de medición efectivos.",
      "Facilita la toma de decisiones basada en datos.",
      "Identifica áreas de mejora y oportunidades.",
      "Alinea objetivos estratégicos con resultados operacionales."
    ],
    featured: false
  },
  {
    id: "servicio-cliente-atencion-call-center",
    title: "Servicio al Cliente y Atención Call Center",
    shortDesc: "Técnicas de atención al cliente, manejo de objeciones y protocolos de servicio para call centers y atención telefónica.",
    image: "/img/negocios/Servicio-al-cliente-atencion-call-center.jpg",
    target: "Operadores de call center, ejecutivos de servicio al cliente, supervisores de atención.",
    benefits: [
      "Mejora la satisfacción del cliente mediante atención de calidad.",
      "Reduce tiempos de resolución de consultas y reclamos.",
      "Desarrolla habilidades de escucha activa y empatía.",
      "Aplica protocolos de atención efectivos y profesionales."
    ],
    featured: false
  }
];