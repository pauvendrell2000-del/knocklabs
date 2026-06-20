export type ProjectResult = { label: string; value: string };
export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  num: string;
  name: { es: string; en: string };
  tags: string[];
  color: string;
  duration: { es: string; en: string };
  challenge: { es: string; en: string };
  solution: { es: string; en: string };
  results: { label: { es: string; en: string }; value: string }[];
  nextSlug: string;
  imageFolder?: string;
  hidden?: boolean;
  /** Oculta la sección de imagen full-width final (portada) cuando el proyecto no tiene una imagen propia para ella. */
  hidePortada?: boolean;
  /** Estudio colaborador (se muestra como crédito enlazado en la ficha). */
  collaborator?: { name: string; url: string };
};

export const projects: Project[] = [
  {
    slug: "sh-000-es",
    num: "01",
    name: { es: "SH-000-ES", en: "SH-000-ES" },
    tags: ["Branding", "eCommerce", "Apps Ad-hoc", "Estrategia"],
    color: "#C8B99A",
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
    nextSlug: "fcc-web",
    imageFolder: "SH000ES",
  },
  {
    slug: "fcc-web",
    num: "02",
    name: { es: "FCC — Fresh Car Cpt. · Web", en: "FCC — Fresh Car Cpt. · Web" },
    tags: ["Web", "Reservas", "SEO", "GEO"],
    color: "#B8A06A",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "En el detailing de alta gama la primera impresión lo es todo, y la presencia digital de FCC no estaba a la altura de su trabajo. El reto: una web que mostrara cada acabado en su mejor luz, posicionara la marca en su zona y convirtiera las visitas en reservas.",
      en: "In high-end detailing first impressions are everything, and FCC's digital presence didn't match the quality of their work. The challenge: a website that showed every finish in its best light, positioned the brand locally and turned visits into bookings.",
    },
    solution: {
      es: "Web de FCC bajo el concepto \"La perfección es un proceso\". Diseño oscuro y premium que muestra el trabajo de detailing en su mejor luz, con portal de reservas integrado y posicionamiento SEO/GEO local para captar clientes en su zona. La web convierte visitas en reservas y consolida la autoridad de la marca con sus cifras de servicio.",
      en: "FCC's website built around the concept \"Perfection is a process\". A dark, premium design that shows the detailing work in its best light, with an integrated booking portal and local SEO/GEO positioning to capture clients in its area. The site turns visits into bookings and reinforces brand authority with its service figures.",
    },
    results: [
      { label: { es: "Vehículos detallados", en: "Vehicles detailed" }, value: "+800" },
      { label: { es: "Valoración media", en: "Average rating" }, value: "5.0" },
      { label: { es: "Reservas online (Q1)", en: "Online bookings (Q1)" }, value: "+340%" },
    ],
    nextSlug: "fcc-branding",
    imageFolder: "FCCWeb",
    hidePortada: true,
  },
  {
    slug: "fcc-branding",
    num: "03",
    name: { es: "FCC — Fresh Car Cpt. · Branding", en: "FCC — Fresh Car Cpt. · Branding" },
    tags: ["Rebranding", "Identidad Visual", "Papelería"],
    color: "#C9A227",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "La precisión de los acabados de FCC no se reflejaba en su imagen de marca. Necesitaban una identidad tan cuidada como su trabajo, capaz de sostener el posicionamiento premium en cada pieza, del documento al packaging.",
      en: "The precision of FCC's finishes wasn't reflected in their brand image. They needed an identity as refined as their work, able to hold a premium positioning across every piece, from paperwork to packaging.",
    },
    solution: {
      es: "Rebranding completo de FCC. Nueva identidad negro y oro con patrón geométrico propio, tan cuidada como sus acabados, aplicada a un sistema de papelería y marca: carpetas, tarjetas, sobres, llaveros, ambientador y packaging. Una imagen a la altura de un servicio de alta gama.",
      en: "Full rebranding of FCC. A new black-and-gold identity with a proprietary geometric pattern, as refined as their finishes, applied across a stationery and brand system: folders, business cards, envelopes, keyrings, air freshener and packaging. An image worthy of a high-end service.",
    },
    results: [
      { label: { es: "Aplicaciones de marca", en: "Brand applications" }, value: "12+" },
      { label: { es: "Percepción premium", en: "Premium perception" }, value: "+45%" },
      { label: { es: "Identidad", en: "Identity" }, value: "Negro & Oro" },
    ],
    nextSlug: "fcc-local",
    imageFolder: "FCCBranding",
    hidePortada: true,
  },
  {
    slug: "fcc-local",
    num: "04",
    name: { es: "FCC — Fresh Car Cpt. · Local", en: "FCC — Fresh Car Cpt. · Local" },
    tags: ["Branding Físico", "Espacio", "Experiencia"],
    color: "#8A7B3B",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "La experiencia premium de FCC terminaba en la pantalla. Faltaba llevar esa misma sensación al espacio físico: el punto donde el cliente entrega su coche y se forma la impresión definitiva de la marca.",
      en: "FCC's premium experience ended at the screen. The missing piece was carrying that same feeling into the physical space — the point where the client hands over their car and forms their final impression of the brand.",
    },
    solution: {
      es: "Aplicación de la identidad de FCC al espacio físico. Showroom oscuro y sobrio donde la marca negro y oro envuelve la experiencia y eleva el producto —el vehículo— a la categoría de pieza expuesta. Rotulación, ambiente y detalles que trasladan la sensación premium del trabajo de detailing al punto de contacto real con el cliente.",
      en: "FCC's identity applied to the physical space. A dark, understated showroom where the black-and-gold brand wraps the experience and elevates the product —the vehicle— to the status of an exhibited piece. Signage, atmosphere and details that carry the premium feel of the detailing work into the real customer touchpoint.",
    },
    results: [
      { label: { es: "Tiempo en showroom", en: "Time in showroom" }, value: "+35%" },
      { label: { es: "Ticket medio", en: "Average ticket" }, value: "+22%" },
      { label: { es: "Percepción", en: "Perception" }, value: "Alta gama" },
    ],
    nextSlug: "argenpastry-web",
    imageFolder: "FCCLocal",
  },
  {
    slug: "argenpastry-web",
    num: "05",
    name: { es: "Argenpastry · Web", en: "Argenpastry · Web" },
    tags: ["Web", "eCommerce", "UX/UI"],
    color: "#B5651D",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "El producto de Argenpastry entra por los ojos, pero su repostería argentina artesanal no tenía dónde lucir ni cómo venderse online. El reto: una tienda premium donde la fotografía mandara y el catálogo se convirtiera en ventas.",
      en: "Argenpastry's product is made to be devoured with the eyes, but their artisanal Argentine patisserie had nowhere to shine and no way to sell online. The challenge: a premium store where photography led and the catalogue turned into sales.",
    },
    solution: {
      es: "Web premium con tienda online para Argenpastry. Diseño editorial y apetecible, organizado por colecciones de temporada (\"Alfajores / Primavera–Verano\"), con fichas de producto optimizadas para conversión y experiencia responsive en desktop, tablet y móvil. La fotografía propia es la protagonista: el producto se vende solo.",
      en: "Premium website with an online store for Argenpastry. An appetising editorial design, organised by seasonal collections (\"Alfajores / Spring–Summer\"), with product pages optimised for conversion and a responsive experience across desktop, tablet and mobile. The proprietary photography takes centre stage: the product sells itself.",
    },
    results: [
      { label: { es: "Conversión online", en: "Online conversion" }, value: "+38%" },
      { label: { es: "Ticket medio", en: "Average order value" }, value: "+24%" },
      { label: { es: "Lighthouse Performance", en: "Lighthouse Performance" }, value: "98/100" },
    ],
    nextSlug: "argenpastry-foto",
    imageFolder: "ArgenpastryWeb",
    hidePortada: true,
    collaborator: { name: "MRRipley", url: "https://www.mrripley.es" },
  },
  {
    slug: "argenpastry-foto",
    num: "06",
    name: { es: "Argenpastry · Fotografía", en: "Argenpastry · Photography" },
    tags: ["Dirección de Arte", "Fotografía de Producto"],
    color: "#A0522D",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "Sin fotografía propia, el producto de Argenpastry dependía de imágenes prestadas que no transmitían su carácter artesanal. El reto: un banco visual propio que vendiera por sí solo en ficha, redes y campañas de temporada.",
      en: "Without its own photography, Argenpastry's product relied on borrowed images that didn't convey its artisanal character. The challenge: a proprietary visual library that sold on its own across product pages, social media and seasonal campaigns.",
    },
    solution: {
      es: "Banco de fotografía de producto para Argenpastry: alfajores (chocolate blanco, negro, maicena y triple), empanadas y facturas surtidas. Desarrollamos la dirección de arte y un sistema visual propio —bodegones cenitales, planos de colección y banners de campaña— sobre fondos cálidos que realzan textura y apetito. Cada toma está pensada para vender.",
      en: "Product photography library for Argenpastry: alfajores (white, dark, cornstarch and triple chocolate), empanadas and assorted facturas. We developed the art direction and a proprietary visual system —overhead still lifes, collection layouts and campaign banners— on warm backgrounds that enhance texture and craving. Every shot is built to sell.",
    },
    results: [
      { label: { es: "Fotografías de producto", en: "Product photos" }, value: "40+" },
      { label: { es: "CTR en ficha de producto", en: "Product page CTR" }, value: "+52%" },
      { label: { es: "Interacción en redes", en: "Social engagement" }, value: "+60%" },
    ],
    nextSlug: "yucahu-web",
    imageFolder: "ArgenpastryFoto",
    collaborator: { name: "MRRipley", url: "https://www.mrripley.es" },
  },
  {
    slug: "yucahu-web",
    num: "07",
    name: { es: "Yucahú · Web", en: "Yucahú · Web" },
    tags: ["Web", "eCommerce", "UX/UI"],
    color: "#7B1E3A",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "El relato de origen de Yucahú —valle, altitud, variedad— se perdía en cuanto saltaba a lo digital. El reto: una tienda online que sostuviera el posicionamiento de especialidad con la trazabilidad de cada lote.",
      en: "Yucahú's origin story —valley, altitude, variety— got lost the moment it moved online. The challenge: an online store that upheld its specialty positioning through the traceability of every batch.",
    },
    solution: {
      es: "Web con tienda online para Yucahú. Diseño premium y editorial que traslada el lenguaje de la marca al entorno digital, con fichas de producto que detallan origen, altitud, variedad y proceso de cada lote para sostener el posicionamiento de especialidad. Experiencia de compra cuidada y responsive, con la fotografía y el packaging como protagonistas.",
      en: "Website with an online store for Yucahú. A premium, editorial design that carries the brand language into the digital space, with product pages detailing origin, altitude, variety and process for each batch to support the specialty positioning. A refined, responsive shopping experience, with photography and packaging taking centre stage.",
    },
    results: [
      { label: { es: "Conversión online", en: "Online conversion" }, value: "+32%" },
      { label: { es: "Tiempo en página", en: "Time on page" }, value: "+48%" },
      { label: { es: "Trazabilidad por lote", en: "Per-batch traceability" }, value: "100%" },
    ],
    nextSlug: "yucahu-packaging",
    imageFolder: "YucahuWeb",
    hidePortada: true,
  },
  {
    slug: "yucahu-packaging",
    num: "08",
    name: { es: "Yucahú · Packaging", en: "Yucahú · Packaging" },
    tags: ["Branding", "Packaging Premium"],
    color: "#5C1A2E",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "Yucahú tenía un café de especialidad excepcional del Valle del Cibao (República Dominicana), pero ni marca ni packaging a su altura. Había que construir una identidad desde cero y un envase de lujo que comunicara trazabilidad y oficio artesanal.",
      en: "Yucahú had an exceptional single-origin coffee from the Cibao Valley (Dominican Republic), but neither a brand nor packaging to match it. We had to build an identity from scratch and luxury packaging that communicated traceability and artisan craft.",
    },
    solution: {
      es: "Identidad y packaging premium para Yucahú, café de especialidad de origen único del Valle del Cibao (variedad Typica, 1.200m). Construimos la marca desde cero —naming, monograma, sistema gráfico y una paleta burdeos y crema de aire ceremonioso— y la llevamos a un packaging de lujo: estuche, sellos en lacre dorado, papel artesanal con relieve y cerámica. Cada detalle comunica trazabilidad y carácter artesanal.",
      en: "Premium identity and packaging for Yucahú, a single-origin specialty coffee from the Cibao Valley (Typica variety, 1,200m). We built the brand from scratch —naming, monogram, graphic system and a ceremonial burgundy-and-cream palette— and brought it to luxury packaging: gift box, gold wax seals, embossed handmade paper and ceramics. Every detail communicates traceability and artisan character.",
    },
    results: [
      { label: { es: "Disposición a pagar", en: "Willingness to pay" }, value: "+55%" },
      { label: { es: "Origen único trazado", en: "Single origin traced" }, value: "1.200m" },
      { label: { es: "Sistema de packaging", en: "Packaging system" }, value: "Línea completa" },
    ],
    nextSlug: "pastisseria-sala",
    imageFolder: "YucahuPackaging",
    hidePortada: true,
  },
  {
    slug: "pastisseria-sala",
    num: "09",
    name: { es: "Pastisseria Sala", en: "Pastisseria Sala" },
    tags: ["Branding", "Packaging", "Retail"],
    color: "#C26B4A",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "Con más de 150 años de historia, Pastisseria Sala tenía una herencia que su imagen ya no contaba. El reto: una identidad integral que pusiera en valor 1867 con una mirada contemporánea y se desplegara en cada punto de contacto.",
      en: "With over 150 years of history, Pastisseria Sala had a heritage its image no longer told. The challenge: a full identity that brought 1867 to life with a contemporary eye and rolled out across every touchpoint.",
    },
    solution: {
      es: "Identidad integral para Pastisseria Sala. Creamos logotipo y monograma, paleta terracota y crema, tipografía y un sistema gráfico cálido y elegante que pone en valor su herencia con una mirada contemporánea. Lo desplegamos en todo el sistema de marca —packaging premium (cajas y bolsas), uniformes, papelería y experiencia de tienda— para que cada caja que sale por la puerta sea una pieza de comunicación.",
      en: "Full identity for Pastisseria Sala. We created the logotype and monogram, a terracotta-and-cream palette, typography and a warm, elegant graphic system that honours its heritage with a contemporary eye. We rolled it out across the entire brand system —premium packaging (boxes and bags), uniforms, stationery and the in-store experience— so that every box leaving the shop is a piece of communication.",
    },
    results: [
      { label: { es: "Recuerdo de marca", en: "Brand recall" }, value: "+50%" },
      { label: { es: "Herencia activada", en: "Heritage activated" }, value: "1867" },
      { label: { es: "Sistema de marca", en: "Brand system" }, value: "360°" },
    ],
    nextSlug: "moltamerda",
    imageFolder: "PastisseriaSala",
    collaborator: { name: "MRRipley", url: "https://www.mrripley.es" },
  },
  {
    slug: "moltamerda",
    num: "10",
    name: { es: "Moltamerda", en: "Moltamerda" },
    tags: ["Web", "Portal de Reservas", "Panel de Gestión", "UX/UI"],
    color: "#4F46E5",
    duration: { es: "Concluido", en: "Completed" },
    challenge: {
      es: "Moltamerda gestionaba a mano las reservas y la operativa de un servicio especializado de limpieza y fumigación (maquinaria agrícola, naves ganaderas e industriales). El reto: digitalizarlo todo, de la reserva online a la gestión del negocio.",
      en: "Moltamerda was handling bookings and operations for a specialised cleaning and fumigation service by hand (agricultural machinery, livestock and industrial facilities). The challenge: digitise it all, from online booking to running the business.",
    },
    solution: {
      es: "Web y herramienta de gestión a medida para Moltamerda. Diseñamos la web completa con reserva online en menos de dos minutos y construimos un panel de gestión propio: dashboard de negocio con reservas, calendario de servicios, ficha de clientes y control de ingresos y pagos. Plataforma entregada en producción que digitaliza toda la operativa.",
      en: "Website and bespoke management tool for Moltamerda. We designed the full website with online booking in under two minutes and built a custom management panel: a business dashboard with bookings, service calendar, client records and income/payment tracking. A platform delivered to production that digitises the entire operation.",
    },
    results: [
      { label: { es: "Lighthouse Performance", en: "Lighthouse Performance" }, value: "96/100" },
      { label: { es: "Reserva online", en: "Online booking" }, value: "<2 min" },
      { label: { es: "Operativa digitalizada", en: "Operations digitised" }, value: "100%" },
    ],
    nextSlug: "team-espadas",
    imageFolder: "Moltamerda",
    hidePortada: true,
  },
  {
    slug: "team-espadas",
    num: "11",
    name: { es: "Team Espadas", en: "Team Espadas" },
    tags: ["Branding", "Estrategia", "Campaña", "Desarrollo de Negocio"],
    color: "#FF6B35",
    duration: { es: "3 semanas", en: "3 weeks" },
    challenge: {
      es: "Con más de 40 años de trayectoria y una fuerte vocación social, el club de boxeo olímpico de Paco Espadas en Esparraguera seguía funcionando como un proyecto, no como una marca. El reto: convertirlo en una marca profesional con un modelo de negocio claro y escalable, capaz de atraer patrocinadores, subvenciones y socios.",
      en: "With over 40 years in the sport and a strong social mission, Paco Espadas's Olympic boxing club in Esparraguera still ran like a project, not a brand. The challenge: turn it into a professional brand with a clear, scalable business model able to attract sponsors, grants and members.",
    },
    solution: {
      es: "Identidad y estrategia para Team Espadas. Creamos la marca completa —monograma \"E\", sistema visual negro y rojo, tono y dirección de campaña— aplicada al entorno deportivo, merchandising y comunicación en redes (\"Never Give Up\"). Desarrollamos el modelo de negocio estructurando las vías social y deportiva, con materiales listos para presentar a patrocinadores, inversores y administraciones.",
      en: "Identity and strategy for Team Espadas. We created the full brand —\"E\" monogram, black-and-red visual system, tone and campaign direction— applied to the sporting environment, merchandising and social media (\"Never Give Up\"). We developed the business model structuring the social and sporting pillars, with materials ready to present to sponsors, investors and public bodies.",
    },
    results: [
      { label: { es: "De cero a marca profesional", en: "Zero to professional brand" }, value: "3 sem." },
      { label: { es: "Patrocinadores potenciales captados", en: "Potential sponsors engaged" }, value: "4" },
      { label: { es: "Incremento de socios", en: "Member growth" }, value: "+100%" },
    ],
    nextSlug: "sh-000-es",
    imageFolder: "TeamEspadas",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
