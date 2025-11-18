import type { Especialidad } from "./types";

export const MINERIA_ESPECIALIDADES: Especialidad[] = [
  // ===== CURSOS DESTACADOS =====
  {
    id: "trabajo-en-altura-y-rescate-ecf2",
    title: "Trabajo En Altura Y Rescate (Estándar Norma ECF2)",
    shortDesc: "Desarrolla competencias para realizar trabajos en altura y ejecutar maniobras de rescate bajo el estándar ECF2.",
    image: "/img/mineria/Trabajo-en-altura.jpg",
    target: "Trabajadores en mantención, montaje, construcción minera y supervisores de operaciones en altura.",
    benefits: [
      "Refuerza el uso correcto de sistemas de protección contra caídas.",
      "Prepara para responder ante emergencias y realizar rescates seguros.",
      "Disminuye la probabilidad de accidentes graves o fatales.",
      "Cumple con normativa de trabajo en altura en minería."
    ],
    featured: true
  },
  {
    id: "formacion-operadores-puente-grua",
    title: "Formación De Operadores De Puente Grúa",
    shortDesc: "Desarrollo de competencias para operar puentes grúa de manera segura y eficiente en entornos industriales y mineros.",
    image: "/img/mineria/Formacion-de-operadores-de-puente-grua.jpg",
    target: "Operadores de equipos de izaje, personal de mantención y trabajadores industriales.",
    benefits: [
      "Mejora la seguridad en operaciones de levantamiento de cargas.",
      "Optimiza tiempos en maniobras de carga y descarga.",
      "Previene daños a equipos e instalaciones.",
      "Desarrolla habilidades técnicas para operar grúas según normativa."
    ],
    featured: true
  },
  {
    id: "basedet",
    title: "Basedet",
    shortDesc: "Programa de capacitación para operar y prestar servicios en la división El Teniente, actualiza conocimientos en prevención de riesgos laborales.",
    image: "/img/mineria/Basedet.jpg",
    target: "Personal que operará en división El Teniente de Codelco.",
    benefits: [
      "Seguridad del personal en la operación.",
      "Cumplimiento normativo y legal.",
      "Mejora de la eficiencia y productividad en el trabajo.",
      "Reducción de costos y daños.",
      "Mejora de la reputación corporativa."
    ],
    featured: true
  },

  // ===== CURSOS REGULARES =====
  {
    id: "hipobaria-intermitente-cronica",
    title: "Hipobaria Intermitente Crónica A Gran Altitud",
    shortDesc: "Capacitación sobre efectos fisiológicos del trabajo en altura, aclimatación y prevención de riesgos asociados a operaciones sobre 3000 msnm.",
    image: "/img/mineria/Hipobaria-intermitente.jpg",
    target: "Personal que trabaja en faenas mineras de altura, supervisores y personal médico.",
    benefits: [
      "Previene enfermedades relacionadas con la exposición a gran altitud.",
      "Mejora el desempeño laboral en condiciones de hipobaria.",
      "Cumple con normativas de salud ocupacional en altura.",
      "Reduce ausentismo por problemas de adaptación a la altura."
    ],
    featured: false
  },
  {
    id: "manejo-defensivo-vehiculos",
    title: "Manejo A La Defensiva De Vehículos Livianos Y Pesados",
    shortDesc: "Técnicas de conducción preventiva para reducir accidentes viales en operaciones con vehículos livianos y pesados.",
    image: "/img/mineria/Manejo-a-la-defensiva-de-vehiculos-livianos-y-pesa.jpg",
    target: "Conductores de vehículos livianos y pesados, personal de transporte en faena.",
    benefits: [
      "Disminuye la tasa de accidentabilidad vial en faena.",
      "Aumenta la vida útil de los vehículos mediante conducción adecuada.",
      "Mejora los tiempos de respuesta ante situaciones de riesgo.",
      "Cumple con estándares de seguridad vial minera."
    ],
    featured: false
  },
  {
    id: "planificacion-control-obras",
    title: "Planificación, Control Y Ejecución De Obras",
    shortDesc: "Herramientas para gestionar proyectos de construcción e infraestructura en entornos mineros.",
    image: "/img/mineria/Planificacion-control-y-ejecucion-de-obras__.jpg",
    target: "Jefes de proyecto, supervisores de construcción e ingenieros de obras.",
    benefits: [
      "Optimiza plazos y costos en proyectos de construcción.",
      "Mejora la coordinación entre equipos y contratistas.",
      "Facilita el control de calidad en obras mineras.",
      "Aumenta la eficiencia en la ejecución de proyectos."
    ],
    featured: false
  },
  {
    id: "montaje-seguridad-andamios",
    title: "Montaje Y Seguridad De Andamios",
    shortDesc: "Formación en montaje, desmontaje y uso seguro de andamios en trabajos de altura.",
    image: "/img/mineria/Montaje-y-seguridad-de-andamios.jpg",
    target: "Armadores de andamios, trabajadores en altura y supervisores de obra.",
    benefits: [
      "Previene caídas y accidentes en trabajos sobre andamios.",
      "Asegura el montaje correcto según normativa vigente.",
      "Aumenta la productividad mediante estructuras seguras.",
      "Reduce tiempos de detención por problemas de seguridad."
    ],
    featured: false
  },
  {
    id: "manejo-mantencion-puente-grua",
    title: "Manejo Y Mantención Puente Grúa",
    shortDesc: "Operación y mantención preventiva de puentes grúa para asegurar funcionamiento óptimo y seguro.",
    image: "/img/mineria/Manejo-y-mantencion-puente-grua-scaled.jpg",
    target: "Operadores de grúas y personal de mantención de equipos de izaje.",
    benefits: [
      "Reduce tiempos de inactividad por fallas mecánicas.",
      "Extiende la vida útil del equipo mediante mantención adecuada.",
      "Previene accidentes por mal funcionamiento.",
      "Optimiza costos operacionales de mantención."
    ],
    featured: false
  },
  {
    id: "manejo-mantencion-grua-horquilla",
    title: "Manejo Y Mantención Grúa Horquilla",
    shortDesc: "Operación segura y mantención de grúas horquilla en operaciones de carga y transporte de materiales.",
    image: "/img/mineria/Manejo-y-mantencion-grua-horquilla.jpg",
    target: "Operadores de grúas horquilla y personal de bodega.",
    benefits: [
      "Aumenta la seguridad en operaciones de bodega y carga.",
      "Optimiza tiempos de carga y descarga de materiales.",
      "Previene daños a productos y equipamiento.",
      "Reduce costos de reparaciones mediante operación correcta."
    ],
    featured: false
  },
  {
    id: "operacion-grua-alza-hombre",
    title: "Operación De Grúa Alza Hombre",
    shortDesc: "Capacitación en operación segura de plataformas elevadoras de personal para trabajos en altura.",
    image: "/img/mineria/Operacion-de-grua-alza-hombre__.jpg",
    target: "Operadores de plataformas elevadoras y personal de mantención en altura.",
    benefits: [
      "Mejora la seguridad en trabajos de mantención en altura.",
      "Aumenta la productividad en tareas elevadas.",
      "Previene accidentes por uso inadecuado de equipos.",
      "Cumple con normativas de equipos de elevación de personal."
    ],
    featured: false
  },
  {
    id: "manejo-4x4-alta-montana",
    title: "Manejo 4×4 Alta Montaña",
    shortDesc: "Técnicas de conducción en terrenos de alta montaña y condiciones climáticas adversas.",
    image: "/img/mineria/Manejo-4x4-alta-montana__.jpg",
    target: "Conductores de vehículos 4x4 en faenas de altura y personal de emergencias.",
    benefits: [
      "Reduce accidentes en caminos de montaña y alta complejidad.",
      "Mejora el control del vehículo en condiciones adversas.",
      "Aumenta la seguridad del personal en traslados.",
      "Optimiza tiempos de desplazamiento en terreno difícil."
    ],
    featured: false
  },
  {
    id: "rigger",
    title: "Rigger (Aparejador)",
    shortDesc: "Formación en técnicas de aparejamiento, amarre y señalización para maniobras de izaje de cargas.",
    image: "/img/mineria/Rigger.jpg",
    target: "Aparejadores, señaleros y personal de apoyo en operaciones de izaje.",
    benefits: [
      "Previene accidentes en maniobras de izaje complejas.",
      "Mejora la eficiencia en operaciones de levantamiento.",
      "Asegura el uso correcto de equipos de aparejamiento.",
      "Cumple con estándares de seguridad en izaje de cargas."
    ],
    featured: false
  },
  {
    id: "responsabilidad-civil-penal",
    title: "Responsabilidad Civil Y Penal En La Minería",
    shortDesc: "Bases legales sobre responsabilidad civil y penal en accidentes laborales y enfermedades profesionales en minería.",
    image: "/img/mineria/Responsabilidad-civil-y-penal-en-la-mineria.jpg",
    target: "Jefaturas, supervisores, personal de prevención de riesgos y asesores legales.",
    benefits: [
      "Promueve la seguridad en el trabajo.",
      "Aumenta la eficiencia y productividad.",
      "Reduce los costos asociados a accidentes.",
      "Mejora el conocimiento legal del personal directivo."
    ],
    featured: false
  },
  {
    id: "manejo-defensivo-y-prevencion-de-accidentes",
    title: "Manejo Defensivo Y Prevención De Accidentes",
    shortDesc: "Capacitación en manejo seguro de excavadoras, cargadores frontales, retroexcavadoras y equipos pesados mineros.",
    image: "/img/mineria/Manejo-defensivo-y-prevencion-de-accidentes.jpg",
    target: "Conductores de vehiculos",
    benefits: [
      "Reducción de la frecuencia y gravedad de los accidentes de tráfico.",
      "Ahorro en costos de seguros y reclamos relacionadas con accidentes.",
      "Mayor retención de conductores calificados y experimentados.",
      "Mejora de la cultura de seguridad en la empresa.",
      "Cumplimiento de requisitos legales y normativos en materia de seguridad vial."
    ],
    featured: false
  },
  {
    id: "sistemas-gestion-mineria",
    title: "Manipulación, transporte y manejo de sustancias peligrosas",
    shortDesc: "Implementación y mantenimiento de sistemas de gestión ISO aplicados a operaciones mineras.",
    image: "/img/mineria/Manejo-y-manipulacion-de-sustancias-peligrosas-2.jpg",
    target: "Supervisores, jefes de turno y encargados de gestión de calidad.",
    benefits: [
      "Fortalece la gestión operacional de faenas.",
      "Mejora el control de procesos y toma de decisiones.",
      "Facilita el cumplimiento de normas ISO.",
      "Aumenta la productividad mediante gestión efectiva."
    ],
    featured: false
  }
];