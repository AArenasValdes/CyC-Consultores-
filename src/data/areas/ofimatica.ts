import type { Especialidad } from "./types";

export const OFIMATICA_ESPECIALIDADES: Especialidad[] = [
  {
    id: "autocad",
    title: "AutoCAD",
    shortDesc:
      "Dibujo y modelado técnico utilizando AutoCAD en 2D y 3D para arquitectura, ingeniería y diseño.",
    image: "/img/ofimatica/Autocad.jpg",
    target:
      "Técnicos, dibujantes, ingenieros, arquitectos y profesionales que requieran planos y modelación técnica.",
    benefits: [
      "Crear y editar planos técnicos en AutoCAD.",
      "Gestionar capas, cotas y bloques para estandarizar dibujos.",
      "Optimizar tiempos de diseño y documentación técnica."
    ],
    featured: true
  },
  {
    id: "scrum",
    title: "Scrum",
    shortDesc:
      "Aplicación del marco de trabajo ágil Scrum en equipos y proyectos para entregar valor de forma iterativa.",
    image: "/img/ofimatica/Scrum.jpg",
    target:
      "Líderes de equipo, jefaturas de proyecto, Product Owners y equipos que gestionan iniciativas con alta adaptabilidad.",
    benefits: [
      "Comprender roles, eventos y artefactos de Scrum.",
      "Implementar sprints, retrospectivas y tableros de seguimiento.",
      "Mejorar la adaptabilidad y la entrega de valor continuo."
    ],
    featured: true
  },
  {
    id: "excel-basico-intermedio-avanzado",
    title: "Excel Básico, Intermedio y Avanzado",
    shortDesc:
      "Domina Excel desde conceptos básicos hasta funciones avanzadas para análisis de datos y toma de decisiones.",
    image: "/img/ofimatica/Excel-basico-intermedio-y-avanzado.jpg",
    target:
      "Colaboradores administrativos, analistas, jefaturas y profesionales que trabajen con datos en su gestión diaria.",
    benefits: [
      "Manejar fórmulas y funciones esenciales para el trabajo diario.",
      "Construir y formatear tablas, gráficos y reportes ejecutivos.",
      "Optimizar tareas repetitivas y mejorar la calidad del análisis de datos."
    ],
    featured: true
  },
  {
    id: "linux",
    title: "Linux",
    shortDesc:
      "Introducción práctica al sistema operativo Linux para entornos de usuario y servidor.",
    image: "/img/ofimatica/Linux.jpg",
    target:
      "Técnicos, profesionales de TI y usuarios que deban operar o administrar sistemas Linux.",
    benefits: [
      "Comprender la estructura y principales distribuciones de Linux.",
      "Manejar comandos básicos para gestión de archivos y procesos.",
      "Mejorar la autonomía en la administración de entornos Linux."
    ],
    featured: false
  },
  {
    id: "presto-software",
    title: "Presto Software",
    shortDesc:
      "Uso de Presto para presupuestar, controlar costos y gestionar proyectos de construcción.",
    image: "/img/ofimatica/Presto-Software.jpg",
    target:
      "Profesionales de construcción, ingeniería, arquitectura y áreas de presupuesto y costos.",
    benefits: [
      "Configurar proyectos y partidas en Presto.",
      "Controlar costos y desviaciones de presupuesto.",
      "Generar reportes para la toma de decisiones en obras."
    ],
    featured: false
  },
  {
    id: "project",
    title: "Project",
    shortDesc:
      "Planificación y control de proyectos utilizando Microsoft Project.",
    image: "/img/ofimatica/Project.jpg",
    target:
      "Jefes de proyecto, coordinadores, supervisores y profesionales que gestionen plazos y recursos.",
    benefits: [
      "Definir cronogramas, hitos y actividades del proyecto.",
      "Asignar recursos y analizar cargas de trabajo.",
      "Monitorear avances y reajustar la planificación según requerimientos."
    ],
    featured: false
  },
  {
    id: "sharepoint",
    title: "SharePoint",
    shortDesc:
      "Gestión de información y colaboración interna mediante SharePoint.",
    image: "/img/ofimatica/SharePoint.jpg",
    target:
      "Equipos administrativos, de recursos humanos, TI y áreas que gestionan documentación y flujos internos.",
    benefits: [
      "Crear y administrar sitios y bibliotecas de documentos.",
      "Configurar permisos y accesos de forma segura.",
      "Mejorar la colaboración y trazabilidad de la información."
    ],
    featured: false
  },
  {
    id: "power-bi",
    title: "Power BI",
    shortDesc:
      "Construcción de paneles e informes interactivos para la toma de decisiones basada en datos.",
    image: "/img/ofimatica/Power-Bi.jpg",
    target:
      "Analistas, control de gestión, finanzas y cargos que requieran visualizar y analizar grandes volúmenes de datos.",
    benefits: [
      "Conectar Power BI a diversas fuentes de datos.",
      "Diseñar dashboards claros y orientados a indicadores clave.",
      "Publicar y compartir reportes dinámicos con los equipos."
    ],
    featured: false
  },
  {
    id: "prezi",
    title: "Prezi",
    shortDesc:
      "Diseño de presentaciones dinámicas y visualmente atractivas con Prezi.",
    image: "/img/ofimatica/prezi.jpg",
    target:
      "Relatores, docentes, profesionales comerciales y colaboradores que presenten información a audiencias.",
    benefits: [
      "Estructurar presentaciones con enfoque narrativo.",
      "Utilizar plantillas y recursos visuales de forma profesional.",
      "Mejorar el impacto visual y la recordación de los mensajes."
    ],
    featured: false
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    shortDesc:
      "Introducción al hacking ético y a la evaluación de vulnerabilidades en sistemas.",
    image: "/img/ofimatica/Ethical-Hacking.jpg",
    target:
      "Profesionales de TI, soporte, ciberseguridad y personas responsables de resguardar la información de la organización.",
    benefits: [
      "Comprender los principales vectores de ataque en sistemas.",
      "Identificar vulnerabilidades frecuentes en redes y aplicaciones.",
      "Promover buenas prácticas de seguridad en la organización."
    ],
    featured: false
  },
  {
    id: "ccna-200-301",
    title: "CCNA 200-301",
    shortDesc:
      "Formación alineada a los contenidos de la certificación Cisco CCNA 200-301 en redes y telecomunicaciones.",
    image: "/img/ofimatica/CCNA-200-301.jpg",
    target:
      "Profesionales y técnicos del área de redes y telecomunicaciones que busquen certificarse o fortalecer su perfil.",
    benefits: [
      "Comprender fundamentos de redes, modelos OSI y TCP/IP.",
      "Configurar dispositivos Cisco en escenarios básicos de red.",
      "Mejorar la empleabilidad vinculada a la certificación CCNA."
    ],
    featured: false
  }
];