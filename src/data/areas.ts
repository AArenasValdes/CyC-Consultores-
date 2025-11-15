export type Area = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  cursosAprox?: number;
};

export const AREAS: Area[] = [
  {
    slug: "mineria",
    title: "Minería, Maquinaria Pesada y Construcción",
    desc: "Gestión financiera, presupuestos y control de costos para decisiones sólidas.",
    image: "/img/mineria/Mineria.jpg",
    cursosAprox: 12
  },
  {
    slug: "negocios",
    title: "Negocios",
    desc: "Normativa, registro contable y cierres con foco en cumplimiento y eficiencia.",
    image: "/img/negocios/Negocios.jpg",
    cursosAprox: 6
  },
  {
    slug: "finanzas",
    title: "Finanzas, Legislación Laboral Y Control De Gestión",
    desc: "Estrategia comercial, negociación y experiencia de cliente.",
    image: "/img/finanzas/Finanzas.jpg",
    cursosAprox: 7
  },
  {
    slug: "educacion",
    title: "Educación",
    desc: "Mejora continua, estandarización de procesos y métricas de desempeño.",
    image: "/img/educacion/Educacion.jpg",
    cursosAprox: 5
  },
  {
    slug: "salud",
    title: "Salud y Bienestar",
    desc: "Protocolos, cultura preventiva y cumplimiento legal en seguridad.",
    image: "/img/salud/Salud.jpg",
    cursosAprox: 6
  },
  {
    slug: "ofimatica",
    title: "Ofimatica",
    desc: "Excel, Word, PowerPoint y herramientas para productividad diaria.",
    image: "/img/ofimatica/Ofimatica.jpg",
    cursosAprox: 4
  },
  {
    slug: "prevencion",
    title: "Prevención De Riesgos",
    desc: "Excel, Word, PowerPoint y herramientas para productividad diaria.",
    image: "/img/prevencion/Prevencion.jpg",
    cursosAprox: 8
  },
   {
    slug: "electricidad",
    title: "Electricidad E Industrias",
    desc: "Excel, Word, PowerPoint y herramientas para productividad diaria.",
    image: "/img/electricidad/Electricidad.jpg",
    cursosAprox: 8
  },
   {
    slug: "calidad",
    title: "Calidad Y Alimentación",
    desc: "Excel, Word, PowerPoint y herramientas para productividad diaria.",
    image: "/img/calidad-alimentacion/Calidad.jpg",
    cursosAprox: 8
  },
   {
    slug: "asesoria",
    title: "Asesoria De Imagen Para Empresas",
    desc: "Excel, Word, PowerPoint y herramientas para productividad diaria.",
    image: "/img/asesoria-empresa/Asesoria-Empresa.jpg",
    cursosAprox: 8
  },
   {
    slug: "gestion",
    title: "Gestión Forestal",
    desc: "Excel, Word, PowerPoint y herramientas para productividad diaria.",
    image: "/img/gestion-forestal/Gestion-Forestal.jpg",
    cursosAprox: 8
  }
];