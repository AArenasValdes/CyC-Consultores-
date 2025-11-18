import type { Especialidad } from "./types";

export const EDUCACION_ESPECIALIDADES: Especialidad[] = [
  // --- 3 CURSOS DESTACADOS ---
  {
    id: "inspector-educacional",
    title: "Inspector Educacional",
    shortDesc: "Funciones y responsabilidades del inspector/a; herramientas para evaluar y mejorar la calidad educativa.",
    image: "/img/educacion/Inspector-educacional.jpg",
    target: "Inspectores/as, equipos directivos, coordinaciones de convivencia escolar y UTP.",
    benefits: [
      "Mejorar procesos de supervisión y convivencia escolar.",
      "Alinear prácticas con marcos normativos vigentes.",
      "Instalar seguimiento y reportabilidad con indicadores simples."
    ],
    featured: true
  },
  {
    id: "neurociencia-desarrollo-aprendizaje",
    title: "Neurociencia Para El Desarrollo Del Aprendizaje",
    shortDesc: "Cómo funciona el cerebro en relación con el aprendizaje y cómo aplicar ese conocimiento en el aula.",
    image: "/img/educacion/Neurociencia-para-el-aprendizaje.jpg",
    target: "Docentes, educadoras/es diferenciales, UTP, orientadores/as.",
    benefits: [
      "Diseñar estrategias didácticas basadas en evidencia.",
      "Mejorar retención y transferencia de conocimientos.",
      "Aumentar la motivación y autorregulación del estudiante."
    ],
    featured: true
  },

  // --- CURSOS ADICIONALES (featured: false) ---
  {
    id: "matematica-en-el-aula",
    title: "Matemática En El Aula",
    shortDesc: "Estrategias didácticas, recursos y metodologías para enseñanza de matemática con foco en aprendizaje significativo.",
    image: "/img/educacion/Matematica-en-el-aula.jpg",
    target: "Profesores/as de Educación Básica y Media, UTP y mentores/as de matemática.",
    benefits: [
      "Aplicar metodologías activas y evaluación formativa.",
      "Elevar el rendimiento y la participación del estudiante.",
      "Secuenciar objetivos y tareas desafiantes con andamiaje."
    ],
    featured: false
  },
  {
    id: "mediacion-familiar",
    title: "Mediación Familiar",
    shortDesc: "Herramientas de mediación, comunicación efectiva y resolución colaborativa de conflictos en contexto escolar y comunitario.",
    image: "/img/educacion/Mediacion-familiar.jpg",
    target: "Equipos de convivencia escolar, orientadores/as, duplas psicosociales.",
    benefits: [
      "Estructurar procesos de mediación imparciales y confiables.",
      "Manejar técnicas de escucha, reformulación y acuerdos.",
      "Bajar la conflictividad y fortalecer vínculos escuela–familia."
    ],
    featured: false
  },
  {
    id: "elaboracion-instrumentos-evaluacion",
    title: "Elaboración De Instrumentos De Evaluación",
    shortDesc: "Diseño de rúbricas, pautas y pruebas alineadas a objetivos, con criterios de validez y confiabilidad.",
    image: "/img/educacion/Elaboracion-de-instrumentos-de-evaluacion.jpg",
    target: "Docentes, UTP, coordinaciones académicas.",
    benefits: [
      "Alinear evaluación con OA/OT y perfiles de egreso.",
      "Construir rúbricas claras y escalas de logro consistentes.",
      "Usar resultados para retroalimentación y mejora del curso."
    ],
    featured: false
  },
  {
    id: "chino-mandarin-ingles",
    title: "Educación En Chino Mandarín E Inglés",
    shortDesc: "Fundamentos para la enseñanza de idiomas extranjeros con foco en comunicación y progresión CEFR.",
    image: "/img/educacion/Educacion-Chino-Mandarin-Ingles.jpg",
    target: "Docentes de idiomas, monitores/as bilingües, programas de inmersión.",
    benefits: [
      "Planificar unidades CLT y tareas comunicativas.",
      "Integrar comprensión auditiva, oralidad, lectura y escritura.",
      "Evaluar desempeño con criterios CEFR."
    ],
    featured: false
  },
  {
    id: "espanol-extranjeros-basico",
    title: "Español Para Extranjeros Nivel Básico",
    shortDesc: "Competencias comunicativas iniciales para contextos cotidianos y laborales.",
    image: "/img/educacion/Espanol-para-extranjeros-nivel-basico.jpg",
    target: "Personas extranjeras recién llegadas, colaboradores migrantes.",
    benefits: [
      "Desarrollar vocabulario funcional y estructuras básicas.",
      "Mejorar comprensión auditiva y producción oral.",
      "Incorporar elementos socioculturales del español de Chile."
    ],
    featured: false
  },
  {
    id: "estimulacion-temprana",
    title: "Estimulación Temprana",
    shortDesc: "Bases del desarrollo psicomotor, cognitivo y socioemocional en primera infancia.",
    image: "/img/educacion/Estimulacion-temprana.jpg",
    target: "Asistentes y educadoras de párvulos, equipos de integración.",
    benefits: [
      "Diseñar experiencias de aprendizaje seguras y pertinentes.",
      "Detectar alertas y derivar oportunamente.",
      "Potenciar juego, lenguaje y función ejecutiva."
    ],
    featured: false
  },
  {
    id: "tea-trastorno-espectro-autista",
    title: "Trastorno Del Espectro Autista (TEA)",
    shortDesc: "Estrategias inclusivas para comprensión sensorial, comunicación y apoyos en TEA.",
    image: "/img/educacion/Trastorno-de-espectro-autista.jpg",
    target: "Docentes PIE, asistentes de aula, equipos psicoeducativos.",
    benefits: [
      "Aplicar apoyos visuales y estructuración del entorno.",
      "Favorecer comunicación aumentativa/alternativa.",
      "Co-diseñar PIAs y planes de apoyo con familia/PIE."
    ],
    featured: false
  },
  {
    id: "resolucion-conflictos-mediacion-escolar",
    title: "Resolución De Conflictos Y Mediación Escolar",
    shortDesc: "Protocolos y técnicas para abordar conflictos entre estudiantes y actores escolares.",
    image: "/img/educacion/Resolucion-de-conflictos-y-mediacion-escolar.jpg",
    target: "Equipos de convivencia, profesores jefes, orientadores/as.",
    benefits: [
      "Implementar enfoques restaurativos y acuerdos monitoreables.",
      "Desescalar situaciones complejas con comunicación no violenta.",
      "Generar cultura de respeto y corresponsabilidad."
    ],
    featured: false
  }
];
