import type { Especialidad } from "./types";

export const CALIDAD_ESPECIALIDADES: Especialidad[] = [
  // ===== CURSOS DESTACADOS =====
  {
    id: "calidad-y-seguridad-en-la-elaboracion-de-alimentos",
    title: "Calidad y Seguridad en la Elaboración de Alimentos",
    shortDesc:
      "Programa que enseña la relevancia, técnicas y controles necesarios para asegurar que un alimento sea apto para consumo humano en condiciones óptimas.",
    image: "/img/calidad-alimentacion/Calidad-y-seguridad-en-la-elaboracion-de-alimentos.jpg",
    target:
      "Gerentes de producción, jefes de planta, supervisores de calidad, técnicos de inocuidad y personal vinculado a la industria alimentaria.",
    benefits: [
      "Conocer los requisitos y controles clave para garantizar la inocuidad alimentaria.",
      "Aplicar buenas prácticas de manufactura y sistemas de gestión de calidad en la cadena de producción.",
      "Integrar mecanismos de verificación y monitoreo que aseguren la aptitud del producto para consumo."
    ],
    featured: true
  },
  {
    id: "hacccp",
    title: "HACCP – Análisis de Peligros y Puntos Críticos de Control",
    shortDesc:
      "Curso centrado en el sistema HACCP, destinado a identificar peligros alimentarios y establecer puntos críticos de control para garantizar la seguridad del consumidor.",
    image: "/img/calidad-alimentacion/HACCP.jpg",
    target:
      "Responsables de inocuidad alimentaria, supervisores de producción, analistas de calidad, empresas del rubro alimentario que buscan certificar sus procesos.",
    benefits: [
      "Definir y aplicar el sistema HACCP en procesos alimentarios.",
      "Identificar peligros biológicos, químicos y físicos en la cadena alimentaria.",
      "Establecer y monitorear puntos críticos de control para asegurar la integridad del producto."
    ],
    featured: true
  },
  {
    id: "manipulacion-de-alimentos-general",
    title: "Manipulación de Alimentos – General",
    shortDesc:
      "Curso sobre normativa de higiene alimentaria y las prácticas correctas de manipulación de alimentos en entornos productivos y de servicio.",
    image: "/img/calidad-alimentacion/Manipulacion-de-alimentos-e-higiene-alimentaria.jpg",
    target:
      "Operarios, ayudantes de cocina, personal de servicio alimentario, supervisores de higiene y empresas que prestan servicios vinculados a alimentos.",
    benefits: [
      "Conocer la normativa de higiene alimentaria y el marco legal vigente.",
      "Aplicar correctamente medidas preventivas de manipulación segura y almacenamiento adecuado.",
      "Reducir el riesgo de contaminación, deterioro o incidentes sanitarios."
    ],
    featured: true
  },

  // ===== RESTO DE CURSOS ÁREA CALIDAD Y ALIMENTACIÓN =====
  {
    id: "brcgs",
    title: "BRCGS – Certificación Global de Seguridad Alimentaria",
    shortDesc:
      "Curso sobre el estándar BRCGS para la industria alimentaria y su aplicación en sistemas de gestión de inocuidad.",
    image: "/img/calidad-alimentacion/BRCGS.jpg",
    target:
      "Profesionales de calidad, empresas alimentarias que buscan certificación BRCGS, auditores internos, jefes de línea y supervisores.",
    benefits: [
      "Comprender los requisitos del estándar BRCGS y su estructura.",
      "Aplicar controles de calidad y seguridad alimentaria para cumplir con la certificación.",
      "Mejorar la credibilidad del proceso ante clientes y mercados exigentes."
    ],
    featured: false
  },
  {
    id: "manipulacion-de-alimentos-e-higiene-alimentaria",
    title: "Manipulación de Alimentos e Higiene Alimentaria",
    shortDesc:
      "Capacitación especializada en higiene alimentaria, manipuladores y buenas prácticas aplicadas al sector de alimentos.",
    image: "/img/calidad-alimentacion/Manipulacion-de-alimentos-e-higiene-alimentaria.jpg",
    target:
      "Manipuladores de alimentos, auxiliares de cocina, personal de catering, supervisores de servicios de alimentación y empresas de catering.",
    benefits: [
      "Aplicar buenas prácticas de higiene y manipulación en el entorno alimentario.",
      "Conocer los riesgos de contaminación cruzada, almacenamiento inadecuado y exposición a patógenos.",
      "Garantizar que los manipulares y procesos estén alineados con normativa sanitaria."
    ],
    featured: false
  },
  {
    id: "prerrequisitos-y-aseguramiento-de-la-calidad",
    title: "Prerrequisitos y Aseguramiento de la Calidad",
    shortDesc:
      "Curso sobre los prerrequisitos para sistemas de gestión de calidad e inocuidad, enfocados en la industria de alimentos.",
    image: "/img/calidad-alimentacion/Prerrequisitos-y-aseguramiento-de-la-calidad__.jpg",
    target:
      "Profesionales de calidad, responsables de planta, implementadores de sistemas, supervisores y técnicos en alimentos.",
    benefits: [
      "Entender los prerrequisitos (BPM, limpieza, mantenimiento) previos al sistema HACCP u otros estándares.",
      "Establecer un sistema de aseguramiento de calidad alineado a buenas prácticas y normas.",
      "Reducir la vulnerabilidad del proceso antes de la implementación de controles críticos."
    ],
    featured: false
  }
];