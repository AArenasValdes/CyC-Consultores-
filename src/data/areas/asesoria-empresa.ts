import type { Especialidad } from "./types";

export const ASESORIA_EMPRESA_ESPECIALIDADES: Especialidad[] = [
  // ===== CURSOS DESTACADOS =====
  {
    id: "curso-colorimetria",
    title: "Curso Colorimetría",
    shortDesc:
      "Aprende a identificar armonías personales de color y a crear paletas que proyecten de forma coherente la imagen corporativa de la empresa.",
    image: "/img/asesoria-empresa/La-Importancia-del-Color-en-la-Imagen-Personal-1-1024x683-transformed.jpg",
    target:
      "Colaboradores que representan la imagen de la empresa: atención de público, ventas, recepción, ejecutivos comerciales y equipos de front office.",
    benefits: [
      "Comprender las armonías personales de color para aplicarlas en vestuario, maquillaje y accesorios.",
      "Elegir colores que favorezcan la imagen personal y transmitan el mensaje corporativo correcto.",
      "Usar el color como herramienta para reforzar presencia, seguridad y estado de ánimo en el entorno laboral."
    ],
    featured: false
  },
  {
    id: "asesoria-uniformes-empresas",
    title: "Curso Asesoría en Uniformes de Empresa",
    shortDesc:
      "Entrega criterios de colorido, diseño y elección de uniformes que favorezcan a cada colaborador y estén alineados con la imagen corporativa.",
    image: "/img/asesoria-empresa/mujer-adulta-bonita-comprobacion-de-camara-profesional.jpg",
    target:
      "Gerentes de Personal, Compras, Adquisiciones, Marketing, empresas proveedoras de uniformes y responsables de definir el vestuario corporativo.",
    benefits: [
      "Contar con asesoría experta para definir lineamientos de uniformes alineados a la marca.",
      "Tomar decisiones informadas sobre color, diseño y calidad de las prendas.",
      "Favorecer la imagen de los colaboradores y proyectar coherencia visual en todos los puntos de contacto."
    ],
    featured: false
  },
  {
    id: "imagen-personal-empresas",
    title: "Curso Imagen Personal para Empresas",
    shortDesc:
      "Programa enfocado en mejorar la imagen personal y corporativa de quienes se desempeñan en el entorno laboral, alineando vestuario y presencia con el rol profesional.",
    image: "/img/asesoria-empresa/las-personas-que-trabajan-en-la-oficina.jpg",
    target:
      "Profesionales y colaboradores de cualquier área que deseen optimizar su imagen personal y corporativa, acorde a su rol y contexto laboral.",
    benefits: [
      "Conocer la morfología de cada persona para aplicar criterios de imagen que favorezcan su presencia profesional.",
      "Lograr coherencia entre lo que la empresa quiere transmitir y la imagen de sus trabajadores.",
      "Fortalecer confianza, presentación personal y percepción externa frente a clientes y aliados."
    ],
    featured: false
  }
];