export type ProjectResult = { label: string; value: string };
export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  num: string;
  name: { es: string; en: string };
  client: string;
  tags: string[];
  year: string;
  color: string;
  services: { es: string[]; en: string[] };
  duration: { es: string; en: string };
  challenge: { es: string; en: string };
  solution: { es: string; en: string };
  results: { label: { es: string; en: string }; value: string }[];
  nextSlug: string;
  imageFolder?: string;
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sh-000-es",
    num: "01",
    name: { es: "SH-000-ES", en: "SH-000-ES" },
    client: "SH-000-ES",
    tags: ["Branding", "eCommerce", "Apps Ad-hoc", "Estrategia"],
    year: "2026",
    color: "#C8B99A",
    services: {
      es: [
        "Creación de marca desde cero",
        "Branding completo",
        "Web con tienda online",
        "Sistema de drops",
        "Aplicaciones ad-hoc a medida",
      ],
      en: [
        "Brand creation from scratch",
        "Full branding",
        "Web with online store",
        "Drops system",
        "Custom ad-hoc applications",
      ],
    },
    duration: { es: "En desarrollo", en: "In development" },
    challenge: {
      es: "SH-000-ES es una empresa de fabricación de zapatos 3D para el segmento de lujo que llegó sin marca, sin presencia digital y con un producto altamente innovador difícil de comunicar. El reto era construir una identidad premium desde cero, lanzar la web y desarrollar herramientas digitales específicas que respondieran a las necesidades únicas del negocio.",
      en: "SH-000-ES is a 3D shoe manufacturing company for the luxury segment that arrived with no brand, no digital presence and a highly innovative product that was difficult to communicate. The challenge was to build a premium identity from scratch, launch the website and develop specific digital tools to meet the business's unique needs.",
    },
    solution: {
      es: "Construimos la marca desde la base: nombre, concepto, identidad visual completa y sistema de comunicación. Diseñamos y desarrollamos la web con tienda online y el sistema de drops para colecciones limitadas. Desarrollamos aplicaciones ad-hoc adaptadas al modelo de negocio, incluyendo un generador de contenido y herramientas de gestión de producto. Todo orientado a la fase de inversores y lanzamiento al mercado.",
      en: "We built the brand from the ground up: name, concept, full visual identity and communication system. We designed and developed the website with an online store and drops system for limited collections. We developed bespoke ad-hoc applications adapted to the business model, including a content generator and product management tools. Everything geared towards the investor phase and market launch.",
    },
    results: [
      {
        label: { es: "Ahorro vs. producción tradicional", en: "Savings vs. traditional production" },
        value: "-90%",
      },
      {
        label: { es: "Ahorro estimado en primer drop", en: "Estimated savings on first drop" },
        value: "20K€",
      },
      {
        label: { es: "Preparado para ronda de inversión", en: "Investment round ready" },
        value: "Series A",
      },
    ],
    nextSlug: "fcc-fresh-car",
    imageFolder: "SH000ES",
  },
  {
    slug: "fcc-fresh-car",
    num: "02",
    name: { es: "FCC — Fresh Car Cpt.", en: "FCC — Fresh Car Cpt." },
    client: "FCC — Fresh Car Cpt.",
    tags: ["Rebranding", "Web", "SEO", "GEO"],
    year: "2026",
    color: "#B8A06A",
    services: {
      es: [
        "Rebranding completo",
        "Diseño y desarrollo web",
        "Portal de reservas integrado",
        "Gestión de redes sociales",
        "SEO y GEO local",
      ],
      en: [
        "Full rebranding",
        "Web design & development",
        "Integrated booking portal",
        "Social media management",
        "Local SEO & GEO",
      ],
    },
    duration: { es: "6 semanas", en: "6 weeks" },
    challenge: {
      es: "FCC contaba con una identidad visual desactualizada y escasa presencia digital en un mercado donde la primera impresión lo es todo. Necesitaban una renovación integral que transmitiera el nivel premium de sus servicios, les posicionara localmente y convirtiera la web en un canal real de captación de clientes con reservas online.",
      en: "FCC had an outdated visual identity and minimal digital presence in a market where first impressions are everything. They needed a full overhaul that conveyed their premium service level, positioned them locally and turned their website into a real client acquisition channel with online bookings.",
    },
    solution: {
      es: "Llevamos a cabo el rebranding completo de la marca: nueva identidad visual, paleta, tipografía y sistema de comunicación. Diseñamos y desarrollamos la web con portal de reservas integrado. Definimos y ejecutamos la estrategia de redes sociales y pusimos en marcha el posicionamiento SEO y GEO local para maximizar la visibilidad orgánica en Igualada y comarca.",
      en: "We carried out a full brand rebranding: new visual identity, palette, typography and communication system. We designed and developed the website with an integrated booking portal. We defined and executed the social media strategy and launched local SEO and GEO positioning to maximise organic visibility in Igualada and the surrounding area.",
    },
    results: [
      {
        label: { es: "Tráfico orgánico local", en: "Local organic traffic" },
        value: "+120%",
      },
      {
        label: { es: "Posición Google Maps Igualada", en: "Google Maps Igualada ranking" },
        value: "Top 3",
      },
      {
        label: { es: "Reservas online (1er trimestre)", en: "Online bookings (Q1)" },
        value: "+340%",
      },
    ],
    nextSlug: "smartclinity",
    imageFolder: "FCC",
  },
  {
    slug: "smartclinity",
    num: "03",
    name: { es: "Smartclinity", en: "Smartclinity" },
    client: "Smartclinity",
    tags: ["Branding", "Web App", "Backend", "Go-to-Market"],
    year: "2026",
    color: "#00A878",
    services: {
      es: [
        "Identidad visual completa",
        "Estrategia go-to-market",
        "Portal de reservas B2B/B2C",
        "Panel de administración",
        "Emails automáticos transaccionales",
      ],
      en: [
        "Full visual identity",
        "Go-to-market strategy",
        "B2B/B2C booking portal",
        "Admin dashboard",
        "Transactional automated emails",
      ],
    },
    duration: { es: "6 semanas", en: "6 weeks" },
    challenge: {
      es: "Smartclinity es una empresa de limpieza industrial a domicilio que partía desde cero: sin presencia digital, sin identidad de marca y sin sistema para gestionar reservas. Necesitaban construir toda la base desde la imagen corporativa hasta un sistema funcional para captar y gestionar clientes B2B y B2C, con un cliente interno poco técnico.",
      en: "Smartclinity is an industrial home-cleaning company that started from zero: no digital presence, no brand identity and no system to manage bookings. They needed to build everything from the ground up — from corporate image to a functional system to attract and manage B2B and B2C clients, with a non-technical internal team.",
    },
    solution: {
      es: "Desarrollamos el proyecto end-to-end: identidad visual completa (logo, paleta azul marina y verde, tipografía), estrategia go-to-market con propuesta de valor, canales y mensajes clave, y un portal de reservas con formulario multi-paso, panel admin visual y emails automáticos de confirmación.",
      en: "We developed the project end-to-end: full visual identity (logo, navy and green palette, typography), go-to-market strategy with value proposition, key channels and messages, and a booking portal with a multi-step form, visual admin panel and automated confirmation emails.",
    },
    results: [
      {
        label: { es: "Reservas gestionadas digitalmente", en: "Digitally managed bookings" },
        value: "100%",
      },
      {
        label: { es: "Reducción tiempo de gestión manual", en: "Manual management time saved" },
        value: "-82%",
      },
      {
        label: { es: "Capacidad operativa escalada", en: "Operational capacity scaled" },
        value: "3x",
      },
    ],
    nextSlug: "moltamerda",
    imageFolder: "Smartclinity",
  },
  {
    slug: "moltamerda",
    num: "04",
    name: { es: "Moltamerda", en: "Moltamerda" },
    client: "Moltamerda",
    tags: ["Web", "Portal de Reservas", "UX/UI"],
    year: "2026",
    color: "#4F46E5",
    services: {
      es: [
        "Diseño web completo",
        "Desarrollo frontend",
        "Sistema de reservas integrado",
      ],
      en: [
        "Full web design",
        "Frontend development",
        "Integrated booking system",
      ],
    },
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "Cliente que necesitaba una presencia web profesional con capacidad para gestionar reservas de forma autónoma. El proyecto requería una solución funcional, intuitiva y lista para entregar al cliente final.",
      en: "A client who needed a professional web presence with the ability to manage bookings autonomously. The project required a functional, intuitive solution ready to hand over to the end client.",
    },
    solution: {
      es: "Diseñamos y desarrollamos la web completa con sistema de reservas integrado. El resultado es una plataforma funcional, con interfaz clara y flujo de reserva optimizado para el usuario final. Proyecto entregado y en producción.",
      en: "We designed and developed the full website with an integrated booking system. The result is a functional platform with a clear interface and optimised booking flow for the end user. Project delivered and in production.",
    },
    results: [
      {
        label: { es: "Lighthouse Performance", en: "Lighthouse Performance" },
        value: "96/100",
      },
      {
        label: { es: "Tiempo de carga", en: "Load time" },
        value: "<1.2s",
      },
      {
        label: { es: "Reservas online desde el lanzamiento", en: "Online bookings since launch" },
        value: "100%",
      },
    ],
    nextSlug: "sh-000-es",
    imageFolder: "Moltamerda",
  },
  {
    slug: "team-espadas",
    num: "05",
    name: { es: "Team Espadas", en: "Team Espadas" },
    client: "Team Espadas",
    tags: ["Branding", "Estrategia", "Desarrollo de Negocio"],
    year: "2026",
    color: "#FF6B35",
    services: {
      es: [
        "Creación de marca desde cero",
        "Branding completo",
        "Modelo de negocio",
        "Estrategia de crecimiento",
      ],
      en: [
        "Brand creation from scratch",
        "Full branding",
        "Business model",
        "Growth strategy",
      ],
    },
    duration: { es: "3 semanas", en: "3 weeks" },
    challenge: {
      es: "Team Espadas es un club de boxeo olímpico con fuerte vocación social fundado por Paco Espadas en Esparraguera. Con más de 40 años de trayectoria en el deporte, necesitaban transformar su proyecto en una marca profesional con un modelo de negocio claro y escalable, capaz de atraer patrocinadores, subvenciones y socios estratégicos.",
      en: "Team Espadas is an Olympic boxing club with a strong social mission, founded by Paco Espadas in Esparraguera. With over 40 years in the sport, they needed to transform their project into a professional brand with a clear, scalable business model capable of attracting sponsors, grants and strategic partners.",
    },
    solution: {
      es: "Creamos la identidad de marca completa: nombre, identidad visual, sistema de comunicación y tono. Desarrollamos el modelo de negocio estructurando las dos vías del proyecto — social y deportiva — y definimos la estrategia de crecimiento con plan de captación de patrocinios, subvenciones y expansión a otras ciudades. Entregamos los materiales necesarios para presentación a inversores y administraciones.",
      en: "We created the full brand identity: name, visual identity, communication system and tone. We developed the business model by structuring the two pillars of the project — social and sporting — and defined the growth strategy with a sponsorship acquisition plan, grant applications and expansion to other cities. We delivered all materials needed for investor and government presentations.",
    },
    results: [
      {
        label: { es: "De cero a marca profesional", en: "Zero to professional brand" },
        value: "3 sem.",
      },
      {
        label: { es: "Patrocinadores potenciales captados", en: "Potential sponsors engaged" },
        value: "4",
      },
      {
        label: { es: "Incremento de socios", en: "Member growth" },
        value: "+100%",
      },
    ],
    nextSlug: "sh-000-es",
    imageFolder: "TeamEspadas",
    hidden: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
