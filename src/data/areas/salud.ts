import type { Especialidad } from "./types";

export const SALUD_ESPECIALIDADES: Especialidad[] = [
  // --- cursos destacados ---
  {
    id: "primeros-auxilios-y-rcp",
    title: "Primeros Auxilios Y RCP",
    shortDesc: "Curso orientado a reconocer emergencias, aplicar técnicas de primeros auxilios y resucitación cardiopulmonar (RCP).",
    image: "/img/salud/Primeros-auxilios-y-RCP.jpg",
    target: "Personal de empresas, trabajadores/as que realizan supervisión, responsables de seguridad, público general que desea certificarse.",
    benefits: [
      "Adquirir competencias para responder ante accidentes y emergencias.",
      "Saber aplicar RCP y uso de desfibrilador en entorno laboral y comunitario.",
      "Reducir tiempos de respuesta y aumentar la seguridad del entorno."
    ],
    featured: true
  },
  {
    id: "asistente-en-enfermeria",
    title: "Asistente En Enfermería",
    shortDesc: "Formación para desempeñarse en el campo de la salud: conocimientos de anatomía, fisiología y atención básica de enfermería. :contentReference[oaicite:1]{index=1}",
    image: "/img/salud/Asistente-en-enfermeria__.jpg",
    target: "Personas que desean integrarse al área de salud como asistentes, técnicos de apoyo o auxiliares de enfermería.",
    benefits: [
      "Desarrollar competencias para apoyo en procedimientos de enfermería.",
      "Comprender principios básicos de anatomía, fisiología y atención al paciente.",
      "Incrementar posibilidades de empleo en instituciones de salud y residencias."
    ],
    featured: true
  },
  {
    id: "cuidado-de-enfermos",
    title: "Cuidado De Enfermos",
    shortDesc: "Capacitación para el cuidado básico de personas enfermas o con dependencia, en instituciones o en el hogar.",
    image: "/img/salud/Cuidado-de-enfermos.jpg",
    target: "Cuidadores/as domiciliarios, auxiliares de salud, familiares con responsabilidad de cuidado, instituciones de atención.",
    benefits: [
      "Planificar y ejecutar cuidados higiénico-asistenciales básicos.",
      "Entender necesidades de personas con dependencia y estilos de vida saludable.",
      "Promover calidad de vida y seguridad para paciente y cuidador/a."
    ],
    featured: true
  },
  // --- otros cursos (featured: false) ---
   {
    id: "plasma-rico-en-plaquetas",
    title: "Plasma Rico En Plaquetas",
    shortDesc: "Programa de formación en técnicas de extracción y aplicación de plasma rico en plaquetas para salud y estética. :contentReference[oaicite:2]{index=2}",
    image: "/img/salud/Plasma-rico-en-plaquetas__.jpg",
    target: "Profesionales de salud, esteticistas, clínicas de medicina regenerativa, dermatólogos/as y personal técnico afín.",
    benefits: [
      "Actualizar conocimientos en terapias con plasma rico en plaquetas.",
      "Aplicar técnicas seguras de extracción, preparación y administración.",
      "Ofrecer tratamientos diferenciados en clínicas de estética y regeneración."
    ],
    featured: false
  },
  {
    id: "soporte-vital-basico",
    title: "Soporte Vital Básico",
    shortDesc: "Curso que enseña los protocolos de soporte vital básico en situaciones de emergencia médica.",
    image: "/img/salud/Soporte-vital-basico.jpg",
    target: "Personal de salud, paramédicos/as, equipos de atención prehospitalaria, personal de emergencias laborales.",
    benefits: [
      "Dominar los procedimientos básicos de soporte vital en adultos y niños.",
      "Coordinación rápida con equipos de emergencia y protocolos adecuados.",
      "Mejorar la preparación reciente para atención de incidentes críticos."
    ],
    featured: false
  }
];
