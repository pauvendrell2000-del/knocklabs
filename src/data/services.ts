export type ServiceOffering = { title: { es: string; en: string }; desc: { es: string; en: string } };
export type ServiceStep = { num: string; title: { es: string; en: string }; desc: { es: string; en: string } };

export type Service = {
  slug: string;
  num: string;
  color: string;
  name: { es: string; en: string };
  tagline: { es: string; en: string };
  intro: { es: string; en: string };
  tags: string[];
  offerings: ServiceOffering[];
  process: ServiceStep[];
  deliverables: { es: string[]; en: string[] };
  idealFor: { es: string; en: string };
  nextSlug: string;
};

export const services: Service[] = [
  {
    slug: "marketing",
    num: "01",
    color: "#FF4C00",
    name: { es: "Marketing 360°", en: "Marketing 360°" },
    tagline: {
      es: "Estrategia, performance y growth que mueve métricas de negocio.",
      en: "Strategy, performance and growth that moves business metrics.",
    },
    intro: {
      es: "Diseñamos y ejecutamos estrategias de marketing integrales que conectan awareness, conversión y fidelización. Trabajamos con datos, no con intuiciones, y medimos cada euro invertido en relación al impacto real en tu negocio.",
      en: "We design and execute integrated marketing strategies connecting awareness, conversion and retention. We work with data, not gut feelings, and measure every euro invested against real business impact.",
    },
    tags: ["SEM", "SEO", "Social Ads", "Growth"],
    offerings: [
      {
        title: { es: "Estrategia digital", en: "Digital strategy" },
        desc: {
          es: "Análisis de mercado, buyer personas, funnel mapping y plan de medios a 12 meses.",
          en: "Market analysis, buyer personas, funnel mapping and 12-month media plan.",
        },
      },
      {
        title: { es: "SEM & paid media", en: "SEM & paid media" },
        desc: {
          es: "Google Ads, Meta, LinkedIn, TikTok. Gestión activa con pujas automatizadas y creatividad iterativa.",
          en: "Google Ads, Meta, LinkedIn, TikTok. Active management with automated bidding and iterative creative.",
        },
      },
      {
        title: { es: "SEO técnico y de contenidos", en: "Technical & content SEO" },
        desc: {
          es: "Auditoría técnica, arquitectura de información, clustering de keywords y producción editorial.",
          en: "Technical audit, information architecture, keyword clustering and editorial production.",
        },
      },
      {
        title: { es: "Growth hacking", en: "Growth hacking" },
        desc: {
          es: "Experimentación continua con mentalidad lean: hipótesis, test, medición y escalado.",
          en: "Continuous experimentation with lean mindset: hypothesis, test, measurement and scale.",
        },
      },
    ],
    process: [
      { num: "01", title: { es: "Auditoría", en: "Audit" }, desc: { es: "Estado actual de canales, tracking y competencia.", en: "Current state of channels, tracking and competition." } },
      { num: "02", title: { es: "Plan", en: "Plan" }, desc: { es: "Roadmap trimestral con KPIs claros y budget distribuido.", en: "Quarterly roadmap with clear KPIs and distributed budget." } },
      { num: "03", title: { es: "Activación", en: "Activation" }, desc: { es: "Lanzamos campañas, SEO y contenidos en paralelo.", en: "We launch campaigns, SEO and content in parallel." } },
      { num: "04", title: { es: "Iteración", en: "Iteration" }, desc: { es: "Review semanal, ajustes de puja, creatividades y páginas.", en: "Weekly review, bid adjustments, creative and page updates." } },
    ],
    deliverables: {
      es: ["Plan estratégico anual", "Dashboards en tiempo real", "Informes mensuales con lectura de negocio", "Biblioteca de creatividades y copys"],
      en: ["Annual strategic plan", "Real-time dashboards", "Monthly reports with business reading", "Creative and copy library"],
    },
    idealFor: {
      es: "Negocios con tracción inicial que necesitan escalar adquisición sin perder rentabilidad.",
      en: "Businesses with initial traction that need to scale acquisition without losing profitability.",
    },
    nextSlug: "tecnologia",
  },
  {
    slug: "tecnologia",
    num: "02",
    color: "#00D9C0",
    name: { es: "Tecnología", en: "Technology" },
    tagline: {
      es: "Producto digital, automatización e infraestructura que escala contigo.",
      en: "Digital product, automation and infrastructure that scales with you.",
    },
    intro: {
      es: "Construimos producto digital con foco en velocidad, mantenibilidad y coste cloud optimizado. Desde MVPs validables en semanas hasta plataformas SaaS de producción con millones de usuarios.",
      en: "We build digital product focused on speed, maintainability and optimized cloud cost. From MVPs validatable in weeks to production SaaS platforms with millions of users.",
    },
    tags: ["Web", "Apps", "SaaS", "Cloud"],
    offerings: [
      {
        title: { es: "Webs y landing pages", en: "Websites & landing pages" },
        desc: { es: "Next.js, performance-first, accesibilidad AA, SEO-ready desde el día uno.", en: "Next.js, performance-first, AA accessibility, SEO-ready from day one." },
      },
      {
        title: { es: "Apps móviles", en: "Mobile apps" },
        desc: { es: "iOS y Android nativos o React Native, según el caso de uso y presupuesto.", en: "Native iOS/Android or React Native, depending on use case and budget." },
      },
      {
        title: { es: "SaaS y plataformas", en: "SaaS & platforms" },
        desc: { es: "Multi-tenant, auth, billing, roles y analytics listos para crecer.", en: "Multi-tenant, auth, billing, roles and analytics ready to grow." },
      },
      {
        title: { es: "Automatización & cloud", en: "Automation & cloud" },
        desc: { es: "Integraciones con APIs, n8n/Make, AWS/Vercel, CI/CD y observabilidad.", en: "API integrations, n8n/Make, AWS/Vercel, CI/CD and observability." },
      },
    ],
    process: [
      { num: "01", title: { es: "Discovery", en: "Discovery" }, desc: { es: "Problema, usuarios, stack actual y limitaciones.", en: "Problem, users, current stack and constraints." } },
      { num: "02", title: { es: "Arquitectura", en: "Architecture" }, desc: { es: "Diseño técnico, decisiones de stack, trade-offs documentados.", en: "Technical design, stack decisions, documented trade-offs." } },
      { num: "03", title: { es: "Sprints", en: "Sprints" }, desc: { es: "Entregas cada 2 semanas con demo en staging.", en: "Deliveries every 2 weeks with staging demo." } },
      { num: "04", title: { es: "Producción", en: "Production" }, desc: { es: "Deploy, monitoring, SLA y handover técnico.", en: "Deploy, monitoring, SLA and technical handover." } },
    ],
    deliverables: {
      es: ["Código fuente en tu repo", "Documentación técnica", "Pipeline CI/CD configurado", "Dashboard de métricas y errores"],
      en: ["Source code in your repo", "Technical documentation", "Configured CI/CD pipeline", "Metrics and error dashboard"],
    },
    idealFor: {
      es: "Equipos que necesitan lanzar rápido sin comprometer la base técnica a largo plazo.",
      en: "Teams that need to ship fast without compromising the long-term technical foundation.",
    },
    nextSlug: "legal",
  },
  {
    slug: "legal",
    num: "03",
    color: "#C8FF00",
    name: { es: "Legal & Economía", en: "Legal & Finance" },
    tagline: {
      es: "Acompañamiento legal, fiscal y financiero para tomar decisiones con cabeza.",
      en: "Legal, tax and financial advisory to make decisions wisely.",
    },
    intro: {
      es: "Asesoramiento que conecta la realidad legal con la operativa del negocio. No te entregamos informes de 80 páginas: te damos la decisión concreta, el riesgo cuantificado y el siguiente paso.",
      en: "Advisory that connects legal reality with business operations. We don't deliver 80-page reports: we give you the concrete decision, quantified risk and the next step.",
    },
    tags: ["Legal", "Fiscal", "Finanzas"],
    offerings: [
      {
        title: { es: "Asesoría legal continuada", en: "Ongoing legal advisory" },
        desc: { es: "Contratos, RGPD, propiedad intelectual, términos y condiciones.", en: "Contracts, GDPR, intellectual property, terms and conditions." },
      },
      {
        title: { es: "Fiscalidad y estructura", en: "Tax & structure" },
        desc: { es: "Optimización fiscal, estructura societaria, internacionalización.", en: "Tax optimization, corporate structure, internationalization." },
      },
      {
        title: { es: "Modelado financiero", en: "Financial modeling" },
        desc: { es: "Proyecciones a 3 años, unit economics, escenarios y sensibilidad.", en: "3-year projections, unit economics, scenarios and sensitivity." },
      },
      {
        title: { es: "Due diligence", en: "Due diligence" },
        desc: { es: "Revisión legal y financiera en procesos de inversión o adquisición.", en: "Legal and financial review in investment or acquisition processes." },
      },
    ],
    process: [
      { num: "01", title: { es: "Mapeo", en: "Mapping" }, desc: { es: "Identificamos riesgos legales y fiscales actuales.", en: "We identify current legal and tax risks." } },
      { num: "02", title: { es: "Priorización", en: "Prioritization" }, desc: { es: "Qué corregir ya, qué puede esperar, qué es opcional.", en: "What to fix now, what can wait, what is optional." } },
      { num: "03", title: { es: "Ejecución", en: "Execution" }, desc: { es: "Redactamos, negociamos y presentamos lo necesario.", en: "We draft, negotiate and file what's needed." } },
      { num: "04", title: { es: "Vigilancia", en: "Monitoring" }, desc: { es: "Revisiones trimestrales y alertas regulatorias.", en: "Quarterly reviews and regulatory alerts." } },
    ],
    deliverables: {
      es: ["Contratos tipo adaptados", "Modelo financiero editable", "Informe ejecutivo de riesgos", "Calendario fiscal anual"],
      en: ["Adapted template contracts", "Editable financial model", "Executive risk report", "Annual tax calendar"],
    },
    idealFor: {
      es: "Fundadores que no quieren sorpresas regulatorias y necesitan cifras claras para decidir.",
      en: "Founders who don't want regulatory surprises and need clear numbers to decide.",
    },
    nextSlug: "aceleradora",
  },
  {
    slug: "aceleradora",
    num: "04",
    color: "#FF4C00",
    name: { es: "Aceleradora", en: "Accelerator" },
    tagline: {
      es: "Metodologías lean y conexión con capital para proyectos en fase temprana.",
      en: "Lean methodologies and capital connections for early-stage projects.",
    },
    intro: {
      es: "Para proyectos validando modelo o buscando primer capital. Acompañamos la construcción del MVP, la validación del mercado y la preparación de la ronda con inversores alineados al sector.",
      en: "For projects validating model or raising first capital. We support MVP building, market validation and round preparation with sector-aligned investors.",
    },
    tags: ["Incubación", "Lean", "Inversores"],
    offerings: [
      {
        title: { es: "Validación de mercado", en: "Market validation" },
        desc: { es: "Customer discovery, tests de disposición a pagar y pivotes informados.", en: "Customer discovery, willingness-to-pay tests and informed pivots." },
      },
      {
        title: { es: "MVP lean", en: "Lean MVP" },
        desc: { es: "Producto mínimo que valide el supuesto más arriesgado en 6-8 semanas.", en: "Minimum product that validates the riskiest assumption in 6-8 weeks." },
      },
      {
        title: { es: "Pitch deck & data room", en: "Pitch deck & data room" },
        desc: { es: "Narrativa, cifras, escenarios y documentación lista para inversor.", en: "Narrative, numbers, scenarios and investor-ready documentation." },
      },
      {
        title: { es: "Conexión con inversores", en: "Investor connections" },
        desc: { es: "Red propia de business angels y fondos para rondas pre-seed y seed.", en: "Proprietary network of business angels and funds for pre-seed and seed rounds." },
      },
    ],
    process: [
      { num: "01", title: { es: "Assessment", en: "Assessment" }, desc: { es: "Evaluamos equipo, mercado, tracción y product-market fit.", en: "We evaluate team, market, traction and product-market fit." } },
      { num: "02", title: { es: "Roadmap", en: "Roadmap" }, desc: { es: "Plan de 90 días con hitos de validación claros.", en: "90-day plan with clear validation milestones." } },
      { num: "03", title: { es: "Sprint semanal", en: "Weekly sprint" }, desc: { es: "Review de métricas, experimentos y decisiones go/no-go.", en: "Metrics review, experiments and go/no-go decisions." } },
      { num: "04", title: { es: "Fundraising", en: "Fundraising" }, desc: { es: "Preparamos y acompañamos la conversación con inversores.", en: "We prepare and accompany investor conversations." } },
    ],
    deliverables: {
      es: ["Plan de validación de 90 días", "MVP funcional", "Pitch deck final", "Warm intros a inversores"],
      en: ["90-day validation plan", "Functional MVP", "Final pitch deck", "Warm investor intros"],
    },
    idealFor: {
      es: "Equipos fundadores en fase pre-seed o seed con hipótesis claras por validar.",
      en: "Founding teams at pre-seed or seed stage with clear hypotheses to validate.",
    },
    nextSlug: "diseno",
  },
  {
    slug: "diseno",
    num: "05",
    color: "#F2F0EB",
    name: { es: "Diseño", en: "Design" },
    tagline: {
      es: "Identidad, producto digital y dirección creativa que diferencia.",
      en: "Identity, digital product and creative direction that differentiates.",
    },
    intro: {
      es: "Diseño como herramienta estratégica, no como decoración. Construimos sistemas que escalan desde el logo hasta la app, manteniendo coherencia en cada punto de contacto con tu cliente.",
      en: "Design as strategic tool, not decoration. We build systems that scale from logo to app, keeping coherence at every touchpoint with your customer.",
    },
    tags: ["Branding", "UX/UI", "Creativo"],
    offerings: [
      {
        title: { es: "Identidad de marca", en: "Brand identity" },
        desc: { es: "Estrategia, naming, logotipo, sistema gráfico y manual de uso.", en: "Strategy, naming, logo, graphic system and usage manual." },
      },
      {
        title: { es: "UX/UI", en: "UX/UI" },
        desc: { es: "Research, wireframes, prototipo interactivo y design system en Figma.", en: "Research, wireframes, interactive prototype and Figma design system." },
      },
      {
        title: { es: "Dirección creativa", en: "Creative direction" },
        desc: { es: "Campañas, arte final, producción audiovisual y coherencia global.", en: "Campaigns, final art, audiovisual production and global coherence." },
      },
      {
        title: { es: "Motion & 3D", en: "Motion & 3D" },
        desc: { es: "Animación UI, reels sociales, 3D para producto y packaging digital.", en: "UI animation, social reels, product 3D and digital packaging." },
      },
    ],
    process: [
      { num: "01", title: { es: "Research", en: "Research" }, desc: { es: "Mercado, referentes, usuarios y posicionamiento.", en: "Market, references, users and positioning." } },
      { num: "02", title: { es: "Concepto", en: "Concept" }, desc: { es: "Territorio creativo y rutas de exploración visual.", en: "Creative territory and visual exploration routes." } },
      { num: "03", title: { es: "Sistema", en: "System" }, desc: { es: "Tokens, componentes y guías de aplicación.", en: "Tokens, components and application guides." } },
      { num: "04", title: { es: "Entrega", en: "Delivery" }, desc: { es: "Archivos finales, design system vivo y formación al equipo.", en: "Final files, living design system and team training." } },
    ],
    deliverables: {
      es: ["Manual de marca", "Design system en Figma", "Recursos exportables", "Plantillas de campaña"],
      en: ["Brand manual", "Figma design system", "Exportable assets", "Campaign templates"],
    },
    idealFor: {
      es: "Marcas que necesitan dar un salto cualitativo en percepción sin perder su esencia.",
      en: "Brands that need a qualitative leap in perception without losing their essence.",
    },
    nextSlug: "comunicacion",
  },
  {
    slug: "comunicacion",
    num: "06",
    color: "#FF4C00",
    name: { es: "Comunicación & IA", en: "Comms & AI" },
    tagline: {
      es: "Contenidos, redes sociales y automatización inteligente con IA aplicada.",
      en: "Content, social media and intelligent automation with applied AI.",
    },
    intro: {
      es: "Producimos el contenido que alimenta tu marca, y automatizamos con IA todo lo que no necesita mano humana. Resultado: mayor output, más consistencia y equipo enfocado en lo que sí importa.",
      en: "We produce the content that feeds your brand, and automate with AI everything that doesn't need human hands. Result: more output, more consistency and a team focused on what matters.",
    },
    tags: ["Contenido", "Social", "IA"],
    offerings: [
      {
        title: { es: "Gestión de redes sociales", en: "Social media management" },
        desc: { es: "Estrategia, calendario, producción y community management.", en: "Strategy, calendar, production and community management." },
      },
      {
        title: { es: "Contenido editorial", en: "Editorial content" },
        desc: { es: "Blog, newsletters, casos de uso y whitepapers con voz de marca.", en: "Blog, newsletters, use cases and whitepapers with brand voice." },
      },
      {
        title: { es: "Automatización con IA", en: "AI automation" },
        desc: { es: "Agentes, workflows y pipelines que ahorran horas cada semana.", en: "Agents, workflows and pipelines that save hours each week." },
      },
      {
        title: { es: "Audiovisual", en: "Audiovisual" },
        desc: { es: "Reels, vídeo corporativo, podcasts y producción in-situ.", en: "Reels, corporate video, podcasts and on-site production." },
      },
    ],
    process: [
      { num: "01", title: { es: "Voz y territorio", en: "Voice & territory" }, desc: { es: "Definimos tono, pilares y narrativa anual.", en: "We define tone, pillars and annual narrative." } },
      { num: "02", title: { es: "Plan editorial", en: "Editorial plan" }, desc: { es: "Calendario trimestral de formatos, canales y objetivos.", en: "Quarterly calendar of formats, channels and goals." } },
      { num: "03", title: { es: "Producción", en: "Production" }, desc: { es: "Equipo editorial y automatizaciones conviven en el mismo pipeline.", en: "Editorial team and automations coexist in the same pipeline." } },
      { num: "04", title: { es: "Medición", en: "Measurement" }, desc: { es: "Analytics de contenido, engagement y conversión por canal.", en: "Content analytics, engagement and conversion per channel." } },
    ],
    deliverables: {
      es: ["Guía de voz de marca", "Calendario editorial", "Biblioteca de plantillas", "Workflows automatizados"],
      en: ["Brand voice guide", "Editorial calendar", "Template library", "Automated workflows"],
    },
    idealFor: {
      es: "Marcas que producen poco o de forma inconsistente y quieren escalar sin contratar a diez personas.",
      en: "Brands producing little or inconsistently that want to scale without hiring ten people.",
    },
    nextSlug: "marketing",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
