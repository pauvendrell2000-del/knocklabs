export type KvLocale = "es" | "en";
export type KvBilingual = { es: string; en: string };

export type KvCategory =
  | "architecture"
  | "product"
  | "interiors"
  | "food-packaging"
  | "retail-hospitality"
  | "ai-experiments";

export type KvRatio = "16/9" | "4/5" | "1/1" | "3/4" | "9/16";

export type KvImage = {
  src: string;
  alt: string;
  ratio?: KvRatio;
};

export type KvEditorialBlockKind =
  | "context"
  | "challenge"
  | "direction"
  | "production"
  | "deliverables"
  | "result";

export type KvEditorialBlock = {
  kind: KvEditorialBlockKind;
  title: KvBilingual;
  body: KvBilingual;
};

export type KvCredit = { role: string; name: string };

export type KvProject = {
  slug: string;
  num: string;
  title: KvBilingual;
  category: KvCategory;
  cover: KvImage;
  hero: KvImage;
  topGallery: KvImage[];
  blocks: KvEditorialBlock[];
  finalGallery: KvImage[];
  credits: KvCredit[];
  nextSlug: string;
  featured?: boolean;
};

export const kvCategories: { id: KvCategory; label: KvBilingual }[] = [
  { id: "architecture", label: { es: "Arquitectura", en: "Architecture" } },
  { id: "product",      label: { es: "Producto",     en: "Product" } },
];

export type KvService = {
  num: string;
  key: string;
  title: KvBilingual;
  desc: KvBilingual;
};

export const kvServices: KvService[] = [
  {
    num: "01",
    key: "architectural-visualization",
    title: { es: "Visualización arquitectónica", en: "Architectural Visualization" },
    desc: {
      es: "Render de edificios, vivienda, oficinas y espacios singulares para estudios y promotores.",
      en: "Renders of buildings, housing, offices and singular spaces for studios and developers.",
    },
  },
  {
    num: "02",
    key: "product-rendering",
    title: { es: "Render de producto", en: "Product Rendering" },
    desc: {
      es: "Visualización 3D de producto para lanzamientos, e-commerce y campañas premium.",
      en: "3D product visualization for launches, e-commerce and premium campaigns.",
    },
  },
  {
    num: "03",
    key: "interior-retail",
    title: { es: "Interiores y retail", en: "Interior & Retail" },
    desc: {
      es: "Espacios interiores, hospitality, tiendas y showrooms con dirección de arte editorial.",
      en: "Interior spaces, hospitality, stores and showrooms with editorial art direction.",
    },
  },
  {
    num: "04",
    key: "campaign-imagery",
    title: { es: "Imagen de campaña", en: "Campaign Imagery" },
    desc: {
      es: "Imagen 3D para campañas de marca con dirección visual y producción completa.",
      en: "3D imagery for brand campaigns with full visual direction and production.",
    },
  },
  {
    num: "05",
    key: "ai-3d-workflow",
    title: { es: "Workflow IA + 3D", en: "AI + 3D Workflow" },
    desc: {
      es: "Pipelines híbridos de IA generativa y 3D para ampliar capacidad creativa y velocidad.",
      en: "Hybrid pipelines combining generative AI and 3D to expand creative range and speed.",
    },
  },
];

const img = (slug: string, n: number, ratio: KvRatio = "4/5", alt = ""): KvImage => ({
  src: `/knockvision/proyectos/${slug}/${String(n).padStart(2, "0")}.webp`,
  alt: alt || slug,
  ratio,
});

export const kvProjects: KvProject[] = [
  // ── 01 VILLA PETRA ──────────────────────────────────────────────────────
  {
    slug: "villa-petra",
    num: "01",
    title: { es: "Villa Petra", en: "Villa Petra" },
    category: "architecture",
    cover: img("villa-petra", 2, "4/5", "Villa Petra — exterior mediterráneo con piscina"),
    hero:  img("villa-petra", 2, "16/9", "Villa Petra — terraza con vistas al mar"),
    topGallery: [
      img("villa-petra", 3, "4/5", "Villa Petra — volúmenes en ménsula"),
      img("villa-petra", 4, "4/5", "Villa Petra — piscina infinita"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Villa Petra es una residencia privada en una ladera mediterránea concebida como diálogo entre la naturaleza bruta y el habitar refinado. Volúmenes en ménsula de piedra caliza y madera cálida flotan sobre un paisaje aterrazado de olivos y matorral silvestre, enmarcando vistas ininterrumpidas del mar. Cada espacio se orienta hacia la luz — una arquitectura que escucha tanto como habla.",
          en: "Villa Petra is a private Mediterranean hillside residence conceived as a dialogue between raw nature and refined living. Cantilevered volumes of limestone and warm timber float above a terraced landscape of olive trees and wild scrub, framing uninterrupted views of the sea below. Every space is oriented toward the light — an architecture that listens as much as it speaks.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "La residencia se integra sin esfuerzo en la pendiente, desapareciendo en la ladera vista desde arriba mientras se abre dramáticamente hacia la costa. La vidriería de suelo a techo disuelve el límite entre interior y exterior, permitiendo que la brisa mediterránea circule por estancias que se sienten a la vez resguardadas e ilimitadas.",
          en: "The residence integrates seamlessly with the slope, disappearing into the hillside from above while opening dramatically toward the coast below. Floor-to-ceiling glazing dissolves the boundary between interior and exterior, allowing the Mediterranean breeze to move freely through living spaces that feel at once sheltered and boundless.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Terrazas en ménsula sobre ladera natural — Fachada de piedra y madera con materiales mediterráneos locales — Piscina desbordante integrada en el paisaje — Muros acristalados de toda altura con vistas directas al mar — Espacios de vida interior-exterior con ventilación natural — Jardín privado con olivos adultos y plantaciones autóctonas.",
          en: "Cantilevered terraces over a natural hillside setting — Stone and timber façade with local Mediterranean materials — Infinity-edge pool integrated into the landscape — Full-height glazed walls with direct sea views — Indoor-outdoor living spaces with natural ventilation — Private garden with mature olive trees and native plantings.",
        },
      },
    ],
    finalGallery: [
      img("villa-petra", 5, "4/5", "Villa Petra — detalle interior"),
      img("villa-petra", 6, "4/5", "Villa Petra — jardín de olivos"),
      img("villa-petra", 7, "16/9", "Villa Petra — vista panorámica"),
      img("villa-petra", 8, "4/5", "Villa Petra — fachada nocturna"),
    ],
    credits: [
      { role: "Typology",      name: "Private Residential Villa" },
      { role: "Location",      name: "Mediterranean Coast" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "resort-wadi",
    featured: true,
  },

  // ── 02 RESORT WADI ──────────────────────────────────────────────────────
  {
    slug: "resort-wadi",
    num: "02",
    title: { es: "Resort Wadi", en: "Resort Wadi" },
    category: "architecture",
    cover: img("resort-wadi", 9, "4/5", "Resort Wadi — resort completo con oasis y montañas"),
    hero:  img("resort-wadi", 2, "16/9", "Resort Wadi — piscina reflectante en el desierto"),
    topGallery: [
      img("resort-wadi", 3, "4/5", "Resort Wadi — suite con vistas al oasis"),
      img("resort-wadi", 4, "4/5", "Resort Wadi — terraza y palmeras"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Resort Wadi extrae su lenguaje arquitectónico de las formas dramáticas de la geología desértica: planos inclinados, superficies erosionadas, piedra punteada de cactus. El resort se organiza en torno a una larga piscina reflectante flanqueada por una rítmica columnata de aletas de hormigón inclinadas — masivas, ligeramente irregulares, proyectando sombras profundas sobre el agua y la terraza solar inferior.",
          en: "Resort Wadi draws its architectural language from the dramatic forms of desert geology: inclined planes, eroded surfaces, cactus-punctuated stone. The resort is organized around a long reflecting pool flanked by a rhythmic colonnade of angled concrete fins — massive, slightly irregular, casting deep shadows across the water and the sun-deck below.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "Las suites miran hacia dentro y hacia afuera simultáneamente — muros de piedra e interiores cálidos dan a balcones privados con vistas a un oasis de palmeras datileras, mientras las montañas se alzan en la distancia media. La paleta material se extrae directamente del paisaje: hormigón visto, piedra local oscura, enlucido ocre y la terracota profunda de la cerámica regional.",
          en: "Guest suites look inward and outward simultaneously — stone walls and warm interiors face private balconies overlooking an oasis of date palms, while mountains rise in the middle distance. The material palette is drawn directly from the landscape: raw concrete, dark local stone, ochre plaster, and the deep terracotta of regional ceramics.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Espectacular columnata de aletas de hormigón inclinadas sobre piscina reflectante — Entorno de oasis desértico con palmeras y telón de montañas — Suites con muros de piedra y mobiliario cálido — Balcones privados con panoramas del oasis y la montaña — Paleta de terracota, hormigón visto y piedra — Piscina infinita como columna vertebral arquitectónica exterior.",
          en: "Dramatic inclined concrete fin colonnade over reflecting pool — Desert oasis setting with date palms and mountain backdrop — Suite interiors with stone accent walls and warm soft furnishings — Private balconies with oasis and mountain panoramas — Terracotta, raw concrete, and stone material palette throughout — Infinity-edge pool as central outdoor architectural spine.",
        },
      },
    ],
    finalGallery: [
      img("resort-wadi", 5, "4/5", "Resort Wadi — detalle cerámica"),
      img("resort-wadi", 6, "4/5", "Resort Wadi — interior suite"),
      img("resort-wadi", 7, "16/9", "Resort Wadi — atardecer sobre el oasis"),
      img("resort-wadi", 8, "4/5", "Resort Wadi — patio nocturno"),
      img("resort-wadi", 9, "16/9", "Resort Wadi — vista aérea"),
    ],
    credits: [
      { role: "Typology",      name: "Luxury Desert Resort" },
      { role: "Location",      name: "Arid / Desert Oasis" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "villa-cipresso",
    featured: true,
  },

  // ── 03 VILLA CIPRESSO ────────────────────────────────────────────────────
  {
    slug: "villa-cipresso",
    num: "03",
    title: { es: "Villa Cipresso", en: "Villa Cipresso" },
    category: "architecture",
    cover: img("villa-cipresso", 3, "4/5", "Villa Cipresso — exterior con piscina y ladera toscana"),
    hero:  img("villa-cipresso", 2, "16/9", "Villa Cipresso — piscina con panorama de colinas"),
    topGallery: [
      img("villa-cipresso", 3, "4/5", "Villa Cipresso — terraza de piedra"),
      img("villa-cipresso", 4, "4/5", "Villa Cipresso — voladizo de madera"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Villa Cipresso es una residencia privada en una ladera soleada en el interior, donde hileras de cipreses y olivos centenarios definen un paisaje que apenas ha cambiado en siglos. La casa está construida en piedra caliza cálida — la misma piedra que la ladera aterrazada que la sostiene — y coronada con amplios planos de madera cálida que se extienden hacia el exterior para proteger la terraza de la piscina.",
          en: "Villa Cipresso is a private residence set within a sun-drenched inland hillside, where rows of cypress and ancient olive trees define a landscape that has barely changed in centuries. The house is built from warm limestone — the same stone as the terraced hillside beneath it — and topped with wide planes of warm timber that extend outward to shade the pool terrace below.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "La piscina es el corazón de la vida al aire libre: un espejo de agua quieta frente al panorama de colinas ondulantes, su superficie captando la niebla matinal que asciende desde el valle cada amanecer. Los interiores están directamente conectados a este mundo exterior mediante muros acristalados de suelo a techo que desaparecen completamente en verano, transformando la casa en un pabellón paisajístico.",
          en: "The pool is the heart of outdoor life here: a mirror of still water facing the panorama of rolling hills, its surface catching the morning mist that rises from the valley each dawn. The interiors are directly connected to this outdoor world through full-height glazed walls that disappear entirely in summer, transforming the house into an extended landscape pavilion.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Construcción en piedra caliza cálida con amplios voladizos de madera — Piscina infinita orientada hacia el panorama de colinas — Muros acristalados correderos de suelo a techo — Paisaje de cipreses y olivos centenarios — Terraza de piedra cubierta con tumbonas — Integración orgánica con la topografía de la ladera.",
          en: "Warm limestone construction with wide timber canopy planes — Infinity pool oriented toward rolling inland hill panorama — Full-height sliding glazed walls for indoor-outdoor living — Landscape of mature cypress and olive trees — Covered stone terrace with sun loungers — Organic integration with the hillside topography.",
        },
      },
    ],
    finalGallery: [
      img("villa-cipresso", 5, "4/5", "Villa Cipresso — interior sala"),
      img("villa-cipresso", 6, "4/5", "Villa Cipresso — detalle carpintería"),
      img("villa-cipresso", 7, "16/9", "Villa Cipresso — vista aérea ladera"),
      img("villa-cipresso", 8, "4/5", "Villa Cipresso — acceso principal"),
      img("villa-cipresso", 9, "16/9", "Villa Cipresso — atardecer toscano"),
    ],
    credits: [
      { role: "Typology",      name: "Private Hillside Villa" },
      { role: "Location",      name: "Inland Mediterranean / Tuscan Hills" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "selva-sancta",
    featured: true,
  },

  // ── 04 SELVA SANCTA ──────────────────────────────────────────────────────
  {
    slug: "selva-sancta",
    num: "04",
    title: { es: "Selva Sancta", en: "Selva Sancta" },
    category: "architecture",
    cover: img("selva-sancta", 1, "4/5", "Selva Sancta — villas entre el dosel"),
    hero:  img("selva-sancta", 2, "16/9", "Selva Sancta — piscina privada en la jungla"),
    topGallery: [
      img("selva-sancta", 3, "4/5", "Selva Sancta — tejado de terracota entre palmeras"),
      img("selva-sancta", 4, "4/5", "Selva Sancta — veranda cubierta"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Selva Sancta es un eco-resort de jungla compuesto por una constelación de villas privadas entretejidas en un paisaje tropical denso. Visto desde arriba, el resort es apenas distinguible de la selva misma — tejados de terracota emergen entre copas de palmeras y doseles arbóreos, piscinas individuales destellando en claros de verde. La arquitectura se subordina completamente a la naturaleza.",
          en: "Selva Sancta is a jungle eco-resort composed of a constellation of private villas woven into a dense tropical landscape. Seen from above, the resort is barely distinguishable from the jungle itself — tiled terracotta rooftops emerge between palm crowns and tree canopies, individual pools glinting in clearings of green. The architecture defers entirely to nature.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "Cada villa es un mundo autónomo: un pabellón de muros de piedra con tejado de terracota, que se abre a través de verandas cubiertas a una piscina privada y jardín. Los caminos entre villas son suaves, informales, sombreados. El resort no tiene entrada ni vestíbulo grandiosos — la llegada es gradual, silenciosa, deliberada. Los huéspedes no van a Selva Sancta. Desaparecen en él.",
          en: "Each villa is a self-contained world: a stone-walled pavilion with a terracotta-tiled roof, opening through covered verandas onto a private pool and garden. Pathways between villas are soft, informal, shaded. The resort has no grand entrance or lobby — arrival is gradual, quiet, deliberate. Guests do not go to Selva Sancta. They disappear into it.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Plan disperso de villas integradas en la selva existente — Construcción en piedra natural con tejados de teja de terracota — Piscina privada para cada unidad de villa — Senderos paisajísticos y corredores de jardín tropical — Plan aéreo optimizado para privacidad e inmersión natural — Huella sostenible con mínimo desbroce del terreno.",
          en: "Dispersed villa plan integrated into existing jungle — Natural stone construction with terracotta tile roofing — Private plunge pool for each villa unit — Landscaped pathways and tropical garden corridors — Aerial master plan optimized for privacy and nature immersion — Sustainable footprint with minimal site clearing.",
        },
      },
    ],
    finalGallery: [
      img("selva-sancta", 5, "4/5", "Selva Sancta — interior villa"),
      img("selva-sancta", 6, "4/5", "Selva Sancta — jardín nocturno"),
      img("selva-sancta", 7, "16/9", "Selva Sancta — vista aérea resort"),
      img("selva-sancta", 8, "4/5", "Selva Sancta — detalle piedra y agua"),
    ],
    credits: [
      { role: "Typology",      name: "Eco-Resort / Jungle Retreat" },
      { role: "Location",      name: "Tropical Jungle / Southeast Asia" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "casa-roca",
    featured: true,
  },

  // ── 05 CASA ROCA ─────────────────────────────────────────────────────────
  {
    slug: "casa-roca",
    num: "05",
    title: { es: "Casa Roca", en: "Casa Roca" },
    category: "architecture",
    cover: img("casa-roca", 2, "4/5", "Casa Roca — vista aérea exterior con valle"),
    hero:  img("casa-roca", 2, "16/9", "Casa Roca — piscina al ras con el valle"),
    topGallery: [
      img("casa-roca", 3, "4/5", "Casa Roca — terraza escalonada"),
      img("casa-roca", 4, "4/5", "Casa Roca — voladizo sobre la roca"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Casa Roca es una residencia privada excavada en una ladera mediterránea rocosa, sus volúmenes de granito gris escalonándose por la pendiente en una composición más geológica que arquitectónica. La casa emerge del paisaje en lugar de posarse sobre él — sus muros de contención, terrazas y voladizos son extensiones de las formaciones rocosas naturales que definen el solar. Desde el otro lado del valle, el edificio es casi invisible.",
          en: "Casa Roca is a private residence carved into a rocky Mediterranean hillside, its grey granite volumes stepping down the slope in a composition that reads more geological than architectural. The house emerges from the landscape rather than sitting upon it — its retaining walls, terraces, and cantilevers all extensions of the natural rock formations that define the site. From across the valley, the building is almost invisible.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "Los espacios habitables se abren al valle en un único panorama ininterrumpido, el horizonte extendiéndose desde el olivar hasta la sierra lejana. Una estrecha piscina infinita discurre al ras de la terraza inferior, su borde acuático coincidiendo con la caída del terreno de manera tan precisa que piscina y valle parecen continuos. La paleta material es absoluta en su contención: granito gris local, vidrio transparente y hormigón visto.",
          en: "The living spaces face the valley in a single unbroken panorama, the horizon stretching from olive grove to distant mountain ridge. A narrow infinity pool runs flush with the lower terrace, its water edge coinciding with the fall of the land so precisely that pool and valley appear continuous. The material palette is absolute in its restraint: local grey granite, clear glass, and raw concrete.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Construcción en granito gris emparejada con la roca natural del solar — Volúmenes aterrazados que descienden orgánicamente por la pendiente — Vistas panorámicas al valle y la montaña desde todos los espacios — Piscina de borde al ras que se funde con el paisaje — Terraza en voladizo sobre formación rocosa natural — Interiores de hormigón visto y piedra con detallado mínimo.",
          en: "Grey granite construction matched to natural site rock — Terraced volumes stepping organically down the slope — Panoramic valley and mountain views from all main spaces — Flush-edge infinity pool merging with the landscape — Cantilevered terrace over natural rock formation — Raw concrete and stone interiors with minimal detailing.",
        },
      },
    ],
    finalGallery: [
      img("casa-roca", 5, "4/5", "Casa Roca — interior salón"),
      img("casa-roca", 6, "16/9", "Casa Roca — fachada al atardecer"),
      img("casa-roca", 7, "4/5", "Casa Roca — detalle muro de piedra"),
      img("casa-roca", 8, "4/5", "Casa Roca — escalera exterior"),
      img("casa-roca", 9, "16/9", "Casa Roca — vista desde el valle"),
    ],
    credits: [
      { role: "Typology",      name: "Private Rocky Hillside Villa" },
      { role: "Location",      name: "Mediterranean Inland Valley" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "resort-aegeo",
  },

  // ── 06 RESORT AEGEO ──────────────────────────────────────────────────────
  {
    slug: "resort-aegeo",
    num: "06",
    title: { es: "Resort Aegeo", en: "Resort Aegeo" },
    category: "architecture",
    cover: img("resort-aegeo", 1, "4/5", "Resort Aegeo — suite con vistas al Egeo"),
    hero:  img("resort-aegeo", 2, "16/9", "Resort Aegeo — terraza del restaurante"),
    topGallery: [
      img("resort-aegeo", 3, "4/5", "Resort Aegeo — piscina en la roca"),
      img("resort-aegeo", 4, "4/5", "Resort Aegeo — interior suite de piedra"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Resort Aegeo comparte el paisaje costero griego y la materialidad pétrea de su proyecto hermano, pero se concibe en torno a una experiencia fundamentalmente diferente: el interior. Donde el exterior del resort es todo dramatismo junto a la piscina y terraza panorámica, el diseño de Aegeo se centra en la calidad de sus suites privadas — habitaciones con muros de piedra, vanos de ventana profundos, camas con lino y el sonido del agua y las cigarras.",
          en: "Resort Aegeo shares the coastal Greek landscape and stone materiality of its sister project, but is conceived around a fundamentally different experience: the interior. Where the resort's exterior is all poolside drama and panoramic terrace, Aegeo's design centers on the quality of its private suites — stone-walled rooms with deep window recesses, linen-draped beds, and the sound of water and cicadas.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "Los espacios públicos — la terraza del restaurante, el salón, el jardín de llegada — se disponen de modo que cada uno revela el mar de forma inesperada, como destino en lugar de telón de fondo. Los huéspedes descubren la vista moviéndose por el resort, no desde un punto fijo. El resultado es un establecimiento que premia la exploración: cada camino dobla una esquina y ofrece algo nuevo.",
          en: "Public spaces — the restaurant terrace, the lounge, the arrival garden — are arranged so that each reveals the sea unexpectedly, as a destination rather than a backdrop. Guests discover the view by moving through the resort, not from a fixed vantage point. The result is a property that rewards exploration: every path turns a corner and offers something new.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Suites de piedra con ventanas de vano profundo y vistas al mar — Revelación secuencial del mar a través del paisajismo y la arquitectura — Terraza cubierta de restaurante con panorama del Egeo — Jardín de llegada con fuente de agua y plantación de piedra local — Piscinas privadas talladas en roca a nivel de suite — Paleta interior de lino, piedra y madera natural.",
          en: "Stone suite interiors with deep-set windows and sea views — Sequential reveal of sea views through landscape and architecture — Covered restaurant terrace with panoramic Aegean panorama — Arrival garden with water feature and local stone planting — Rock-cut private pools at suite level — Linen, stone, and raw timber interior material palette.",
        },
      },
    ],
    finalGallery: [
      img("resort-aegeo", 5, "4/5", "Resort Aegeo — jardín de llegada"),
      img("resort-aegeo", 6, "4/5", "Resort Aegeo — detalle pétreo"),
      img("resort-aegeo", 7, "16/9", "Resort Aegeo — atardecer en la costa"),
      img("resort-aegeo", 8, "4/5", "Resort Aegeo — piscina nocturna"),
      img("resort-aegeo", 9, "16/9", "Resort Aegeo — panorámica del Egeo"),
    ],
    credits: [
      { role: "Typology",      name: "Luxury Boutique Resort / Hotel" },
      { role: "Location",      name: "Greek Island / Aegean Coast" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "villa-palapa",
  },

  // ── 07 VILLA PALAPA ──────────────────────────────────────────────────────
  {
    slug: "villa-palapa",
    num: "07",
    title: { es: "Villa Palapa", en: "Villa Palapa" },
    category: "architecture",
    cover: img("villa-palapa", 3, "4/5", "Villa Palapa — vista aérea villa en la jungla"),
    hero:  img("villa-palapa", 2, "16/9", "Villa Palapa — tejados de terracota entre árboles"),
    topGallery: [
      img("villa-palapa", 3, "4/5", "Villa Palapa — veranda cubierta"),
      img("villa-palapa", 4, "4/5", "Villa Palapa — detalle carpintería tropical"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Villa Palapa es una residencia privada tropical organizada en torno a un patio central y piscina — una arquitectura introvertida que da la espalda al mundo y se abre completamente al cielo. La casa se lee desde el exterior como una serie de pabellones con tejados de terracota que emergen entre la copa de los árboles, sus líneas de cubierta reflejando la irregularidad orgánica de la jungla que presiona contra cada muro.",
          en: "Villa Palapa is a tropical private residence organized around a central courtyard and pool — an introverted architecture that turns its back on the world and opens entirely to the sky. The house reads from the exterior as a series of terracotta-tiled pavilions rising through the tree canopy, their rooflines echoing the organic irregularity of the jungle that presses against every wall.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "En el interior, el patio es un mundo propio: una generosa piscina bordeada de piedra pulida, verandas sombreadas cubiertas de plantas, y el silencio particular de un jardín cerrado por todos sus lados. Los pabellones que lo rodean — sala de estar, comedor, dormitorios — se definen por su apertura, cada espacio fluyendo directamente al patio a través de amplios umbrales cubiertos. El interior nunca es del todo interior. El exterior nunca es del todo exterior.",
          en: "Within, the courtyard is a world of its own: a generous pool lined by polished stone, shaded verandas hung with plants, and the particular silence of a garden enclosed on all sides. The pavilions that surround it — living, dining, sleeping — are defined by their openness, each space flowing directly into the courtyard through wide covered thresholds. The inside is never quite inside. The outside is never quite outside.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Planta centrada en el patio con piscina y jardín central — Cubiertas de terracota integradas en la copa de los árboles — Muros de piedra natural y carpintería de madera oscura cálida — Verandas cubiertas en todos los lados que dan al patio — Plantación tropical dentro e inmediatamente alrededor del patio — Planta de pabellones que permite ventilación natural cruzada.",
          en: "Courtyard-focused plan with central pool and garden — Terracotta-tiled rooflines integrated into tree canopy — Natural stone walls and warm dark timber joinery throughout — Covered verandas on all courtyard-facing sides — Tropical planting within and immediately around the courtyard — Pavilion plan allowing natural cross-ventilation throughout.",
        },
      },
    ],
    finalGallery: [
      img("villa-palapa", 5, "4/5", "Villa Palapa — sala de estar abierta"),
      img("villa-palapa", 6, "16/9", "Villa Palapa — vista aérea del patio"),
      img("villa-palapa", 7, "4/5", "Villa Palapa — dormitorio con jardín"),
      img("villa-palapa", 8, "4/5", "Villa Palapa — detalle piedra y agua"),
      img("villa-palapa", 9, "16/9", "Villa Palapa — atardecer tropical"),
    ],
    credits: [
      { role: "Typology",      name: "Private Tropical Courtyard Villa" },
      { role: "Location",      name: "Tropical / Southeast Asia" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "villa-cenote",
  },

  // ── 08 VILLA CENOTE ──────────────────────────────────────────────────────
  {
    slug: "villa-cenote",
    num: "08",
    title: { es: "Villa Cenote", en: "Villa Cenote" },
    category: "architecture",
    cover: img("villa-cenote", 2, "4/5", "Villa Cenote — exterior curvo con jardín y mar"),
    hero:  img("villa-cenote", 2, "16/9", "Villa Cenote — piscina turquesa frente al Caribe"),
    topGallery: [
      img("villa-cenote", 3, "4/5", "Villa Cenote — columnata de madera pálida"),
      img("villa-cenote", 4, "4/5", "Villa Cenote — espacio habitable abierto"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Villa Cenote es una villa privada caribeña organizada en torno a la relación elemental entre masa y agua. Un gran voladizo de hormigón visto — grueso, sombreado, generoso — se proyecta sobre una piscina curva de agua turquesa que se disuelve en su borde lejano en el mar más allá. El voladizo descansa sobre columnas de madera pálida, cálidas frente al hormigón gris. Bajo él, el espacio habitable está completamente abierto: sin muros, sin vidrio, solo sombra y brisa.",
          en: "Villa Cenote is a private Caribbean villa organized around the elemental relationship between mass and water. A single great canopy of raw concrete — thick, shadowed, generous — projects over a curved pool of turquoise water that dissolves at its far edge into the sea beyond. The canopy rests on columns of pale timber, warm against the grey concrete. Beneath it, the living area is fully open: no walls, no glass, only shade and breeze.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "La piscina es la arquitectura. Con forma de curva expansiva que refleja la línea de costa, su agua turquesa actúa como horizonte secundario — un mar en primer plano que enmarca el mar real más allá. La villa está diseñada para habitarse desde el agua, sus espacios dispuestos en torno a la experiencia de nadar, flotar, mirar hacia el exterior. No hay estancias superfluas aquí.",
          en: "The pool is the architecture. Shaped as a sweeping curve that mirrors the coastline, its turquoise water acts as a secondary horizon — a foreground sea that frames the real sea beyond. The villa is designed to be occupied from the water, its spaces arranged around the experience of swimming, floating, looking outward. There are no superfluous rooms here.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Voladizo monolítico de hormigón con columnata abierta bajo él — Piscina curva de forma libre como elemento arquitectónico principal — Terraza de piscina que se disuelve visualmente en el mar Caribe — Salón y comedor completamente al aire libre con exposición a la brisa marina — Columnas estructurales y detalles de techo en madera pálida — Paleta material minimalista: hormigón, madera, agua.",
          en: "Monolithic concrete canopy with open colonnade beneath — Curved freeform pool as primary architectural element — Pool terrace dissolving visually into the Caribbean sea — Full open-air living and dining with sea breeze exposure — Pale timber structural columns and ceiling detailing — Minimalist material palette: concrete, timber, water.",
        },
      },
    ],
    finalGallery: [
      img("villa-cenote", 5, "4/5", "Villa Cenote — detalle hormigón y madera"),
      img("villa-cenote", 6, "16/9", "Villa Cenote — atardecer caribeño"),
      img("villa-cenote", 7, "4/5", "Villa Cenote — borde de piscina al mar"),
    ],
    credits: [
      { role: "Typology",      name: "Private Luxury Villa" },
      { role: "Location",      name: "Caribbean Coast" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "villa-xero",
  },

  // ── 09 VILLA XERÓ ────────────────────────────────────────────────────────
  {
    slug: "villa-xero",
    num: "09",
    title: { es: "Villa Xeró", en: "Villa Xeró" },
    category: "architecture",
    cover: img("villa-xero", 6, "4/5", "Villa Xeró — exterior patio con piscina y montañas rojas"),
    hero:  img("villa-xero", 2, "16/9", "Villa Xeró — patio con piscina y cactus"),
    topGallery: [
      img("villa-xero", 3, "4/5", "Villa Xeró — voladizo de sombreado pasivo"),
      img("villa-xero", 4, "4/5", "Villa Xeró — interior de hormigón y arte"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Villa Xeró es una residencia privada en el desierto diseñada para un paisaje de extremos — días abrasadores, atardeceres eléctricos, noches de claridad absoluta. La arquitectura responde con igual fortitud: gruesos muros de hormigón visto y piedra local absorben el calor durante el día y lo liberan lentamente por la noche, regulando el clima interior a través de la masa más que de la mecánica. Planos horizontales de hormigón se extienden hacia el exterior, proyectando sombra profunda sobre los espacios habitables acristalados que brillan en ámbar al anochecer.",
          en: "Villa Xeró is a private desert residence designed for a landscape of extremes — scorching days, electric sunsets, nights of absolute clarity. The architecture responds with equal fortitude: thick walls of raw concrete and local stone absorb heat by day and release it slowly through the night, regulating the interior climate through mass rather than mechanics. Horizontal planes of concrete reach outward, casting deep shadow over glazed living spaces that glow amber at dusk.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "La casa se organiza en torno a una piscina en patio central, un contrapunto fresco al árido paisaje que la rodea. Plantaciones xéricas — yuca, agave, cactus columnares — animan el plano del suelo sin necesitar riego y sin pedir nada a la tierra. En el interior, obras de arte de la región cuelgan frente a muros de hormigón visto en estancias de considerada contención.",
          en: "The house is organized around a central courtyard pool, a cool counterpoint to the arid landscape that surrounds it. Xeric plantings — yucca, agave, columnar cactus — animate the ground plane, requiring no irrigation and asking nothing of the land. Inside, artworks collected from the region hang against raw concrete walls in rooms of considered restraint.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Construcción de hormigón y piedra con gran masa térmica — Profundos voladizos para sombreado solar pasivo — Piscina infinita en patio como núcleo climático de la vivienda — Paisajismo xérico con especies desérticas autóctonas — Integración de obra de arte en muros interiores de hormigón — Espacios habitables acristalados de plena anchura con vistas a la piscina y el desierto.",
          en: "Thermally massive concrete and stone construction — Deep cantilevered overhangs for passive solar shading — Courtyard infinity pool as the home's climatic core — Xeric landscaping with native desert species — Artwork integration with raw concrete interior walls — Full-width glazed living spaces with pool and desert views.",
        },
      },
    ],
    finalGallery: [
      img("villa-xero", 5, "4/5", "Villa Xeró — atardecer sobre el desierto"),
      img("villa-xero", 6, "16/9", "Villa Xeró — vista patio nocturno"),
      img("villa-xero", 7, "4/5", "Villa Xeró — detalle agave y hormigón"),
      img("villa-xero", 8, "4/5", "Villa Xeró — sala principal"),
      img("villa-xero", 9, "16/9", "Villa Xeró — panorámica paisaje árido"),
    ],
    credits: [
      { role: "Typology",      name: "Private Desert Residence" },
      { role: "Location",      name: "Desert / Arid Landscape" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "pabellon-ola",
  },

  // ── 10 PABELLÓN OLA ──────────────────────────────────────────────────────
  {
    slug: "pabellon-ola",
    num: "10",
    title: { es: "Pabellón Ola", en: "Pabellón Ola" },
    category: "architecture",
    cover: img("pabellon-ola", 1, "4/5", "Pabellón Ola — forma orgánica en el promontorio"),
    hero:  img("pabellon-ola", 2, "16/9", "Pabellón Ola — fachada costera"),
    topGallery: [
      img("pabellon-ola", 3, "4/5", "Pabellón Ola — torre de observación"),
      img("pabellon-ola", 4, "4/5", "Pabellón Ola — paseo costero"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Pabellón Ola es un centro cultural y cívico público concebido como presencia escultórica en un promontorio costero. Su forma blanca fluida — orgánica, ósea, casi geológica — se eleva desde el borde del agua como una ola congelada en el tiempo. El edificio es simultáneamente infraestructura e icono, un destino visible desde tierra y mar.",
          en: "Pabellón Ola is a public cultural and civic center conceived as a sculptural presence on a coastal promontory. Its fluid white form — organic, bone-like, almost geological — rises from the water's edge like a wave frozen in time. The building is simultaneously infrastructure and icon, a destination visible from land and sea alike.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "La estructura alberga espacios de exposición, salas de actuación y una torre de observación panorámica que corona la composición. Accedido por un amplio paseo costero, el edificio invita a los visitantes a circunnavegar su forma, descubriendo nuevas perspectivas en cada giro. En el interior, las curvas de la cubierta se traducen en interiores abovedados bañados de luz natural filtrada a través de aperturas acristaladas.",
          en: "The structure houses exhibition spaces, performance halls, and a panoramic observation tower that crowns the composition. Accessed by a sweeping coastal walkway, the building invites visitors to circle its form, discovering new perspectives at every turn. Inside, the curves of the shell translate into soaring vaulted interiors washed with natural light filtered through glazed apertures.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Forma orgánica escultórica en una península costera — Programa mixto: cultura, exposición, observación — Torre central con vistas panorámicas de 360° — Paseo público continuo alrededor del edificio — Espacios interiores fluidos con iluminación natural cenital — Materialidad de inspiración marina: hormigón blanco, vidrio.",
          en: "Sculptural organic form on a coastal peninsula — Mixed-use program: culture, exhibition, observation — Central tower with panoramic 360° views — Continuous public promenade around the building — Fluid interior spaces with natural top-lighting — Marine-inspired materiality: white concrete, glass.",
        },
      },
    ],
    finalGallery: [
      img("pabellon-ola", 5, "16/9", "Pabellón Ola — interior sala de exposición"),
      img("pabellon-ola", 6, "4/5", "Pabellón Ola — vistas desde la torre"),
      img("pabellon-ola", 7, "16/9", "Pabellón Ola — iluminación nocturna"),
    ],
    credits: [
      { role: "Typology",      name: "Cultural / Civic Center" },
      { role: "Location",      name: "Coastal Promontory" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "casa-enredadera",
  },

  // ── 11 CASA ENREDADERA ───────────────────────────────────────────────────
  {
    slug: "casa-enredadera",
    num: "11",
    title: { es: "Casa Enredadera", en: "Casa Enredadera" },
    category: "architecture",
    cover: img("casa-enredadera", 5, "4/5", "Casa Enredadera — entrada con arco y puente en la jungla"),
    hero:  img("casa-enredadera", 2, "16/9", "Casa Enredadera — terraza privada en la jungla"),
    topGallery: [
      img("casa-enredadera", 3, "4/5", "Casa Enredadera — recepción de piedra artesanal"),
      img("casa-enredadera", 4, "4/5", "Casa Enredadera — vestíbulo jardín"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Casa Enredadera es un alojamiento boutique tropical concebido en torno a la idea de disolución — del límite entre interior y exterior, entre edificio y bosque. Sus formas son suaves, redondeadas, casi botánicas: conchas de hormigón curvas cubiertas de plantas trepadoras, interiores que respiran con la jungla exterior. Las habitaciones se abren a través de puertas de madera de toda altura a terrazas privadas donde el jardín se acerca.",
          en: "Casa Enredadera is a tropical boutique lodge conceived around the idea of dissolution — of the boundary between interior and exterior, between building and forest. Its forms are soft, rounded, almost botanical: curving concrete shells draped in climbing plants, interiors that breathe with the jungle outside. Rooms open through full-height timber-framed doors onto private terraces where the garden presses close.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "Los espacios públicos del alojamiento continúan este lenguaje. Un mostrador de recepción de piedra artesanal ancla un vestíbulo abierto que da a un jardín de rocas tropicales, palmeras y plantas de gran hoja. Carpintería de madera oscura, pantallas de ratán y artefactos cerámicos de la región dan al interior calidez y profundidad cultural. Este es un lugar que honra su contexto en cada decisión material.",
          en: "The lodge's public spaces continue this language. A handcrafted stone reception counter anchors an open lobby that faces a garden of tropical boulders, palms, and giant-leafed shade plants. Dark wood joinery, rattan lampshades, and ceramic artifacts curated from the region give the interior warmth and cultural depth. This is a place that honors its context in every material decision.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Arquitectura curva orgánica integrada en la vegetación tropical — Suites con apertura total a terrazas privadas de jungla — Interiores de recepción con piedra y madera oscura de artesanía — Colección curada de artefactos y cerámicas regionales — Vestíbulo jardín tropical con paisajismo de rocas — Carpintería de madera de toda altura en todo el proyecto.",
          en: "Organic curved architecture integrated into tropical vegetation — Bedroom suites opening fully to private jungle terraces — Artisan-crafted stone and dark timber reception interiors — Curated collection of regional artifacts and ceramics — Tropical garden lobby with boulder landscaping — Full-height timber fenestration throughout.",
        },
      },
    ],
    finalGallery: [
      img("casa-enredadera", 5, "4/5", "Casa Enredadera — dormitorio suite"),
      img("casa-enredadera", 6, "4/5", "Casa Enredadera — detalle ratan y cerámica"),
      img("casa-enredadera", 7, "16/9", "Casa Enredadera — jardín exterior"),
      img("casa-enredadera", 8, "4/5", "Casa Enredadera — fachada nocturna"),
      img("casa-enredadera", 9, "16/9", "Casa Enredadera — vista general resort"),
    ],
    credits: [
      { role: "Typology",      name: "Boutique Tropical Lodge" },
      { role: "Location",      name: "Tropical Rainforest" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "arena-penasco",
  },

  // ── 12 ARENA PEÑASCO ─────────────────────────────────────────────────────
  {
    slug: "arena-penasco",
    num: "12",
    title: { es: "Arena Peñasco", en: "Arena Peñasco" },
    category: "architecture",
    cover: img("arena-penasco", 7, "4/5", "Arena Peñasco — vista aérea estadio en acantilado costero"),
    hero:  img("arena-penasco", 2, "16/9", "Arena Peñasco — elipse metálica frente al océano"),
    topGallery: [
      img("arena-penasco", 3, "4/5", "Arena Peñasco — paseo público perimetral"),
      img("arena-penasco", 4, "4/5", "Arena Peñasco — vista interior del campo"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Arena Peñasco es un estadio deportivo y de eventos costero concebido como una elipse de acero asentada dramáticamente en un acantilado rocoso sobre el océano. La cubierta metálica del edificio — envejecida, texturada, monolítica — evoca el carácter geológico de la costa mientras afirma una presencia cívica audaz visible desde kilómetros de distancia. Es a la vez infraestructura y pieza del paisaje.",
          en: "Arena Peñasco is a coastal sports and events stadium conceived as a steel ellipse set dramatically on a rocky clifftop above the ocean. The building's metallic shell — weathered, textured, monolithic — echoes the geological character of the coast while asserting a bold civic presence visible from miles away. It is at once a piece of infrastructure and a piece of landscape.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "El interior se abre hacia arriba en una elipse perfecta, inundando el campo de luz natural y dando a los espectadores un encuadre superior de cielo. En el perímetro, paseos públicos permiten a los visitantes circunnavegar el edificio y experimentar su relación con el mar desde todos los ángulos. Al anochecer, la piel metálica capta los últimos rayos del sol, convirtiendo el estadio en un farol sobre los acantilados.",
          en: "The interior opens upward in a perfect ellipse, flooding the pitch with natural light and giving spectators an overhead frame of sky. Around the perimeter, public walkways allow visitors to circumnavigate the building and experience its relationship with the sea from every angle. At dusk, the metallic skin catches the last light of the sun, turning the stadium into a lantern above the cliffs.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Estructura de cubierta metálica elíptica en acantilados costeros — Estadio al aire libre con vistas panorámicas al mar — Fachada de acero patinable con evolución material natural — Experiencia panorámica para espectadores: campo, mar y cielo — Paseo público continuo a nivel del estadio — Hito costero visible desde tierra y mar.",
          en: "Elliptical metallic shell structure on coastal cliffs — Open-air stadium with full sea surround — Weathered steel façade with natural material evolution — Panoramic spectator experience: pitch, sea, and sky — Continuous public promenade at stadium level — Dramatic coastal landmark visible from land and water.",
        },
      },
    ],
    finalGallery: [
      img("arena-penasco", 5, "4/5", "Arena Peñasco — detalle fachada metálica"),
      img("arena-penasco", 6, "16/9", "Arena Peñasco — estadio iluminado"),
      img("arena-penasco", 7, "4/5", "Arena Peñasco — vista desde el mar"),
      img("arena-penasco", 8, "16/9", "Arena Peñasco — amanecer costero"),
    ],
    credits: [
      { role: "Typology",      name: "Sports / Events Stadium" },
      { role: "Location",      name: "Rocky Coastal Cliff" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "auditorio-luna",
  },

  // ── 13 AUDITORIO LUNA ────────────────────────────────────────────────────
  {
    slug: "auditorio-luna",
    num: "13",
    title: { es: "Auditorio Luna", en: "Auditorio Luna" },
    category: "architecture",
    cover: img("auditorio-luna", 1, "4/5", "Auditorio Luna — cubierta ondulante de hormigón blanco"),
    hero:  img("auditorio-luna", 2, "16/9", "Auditorio Luna — claraboya elíptica al cielo nocturno"),
    topGallery: [
      img("auditorio-luna", 3, "4/5", "Auditorio Luna — plaza pública exterior"),
      img("auditorio-luna", 4, "4/5", "Auditorio Luna — interior sala de actuaciones"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Auditorio Luna es un centro de artes escénicas concebido como un gesto puro de curvatura — un vasto dosel ondulante de hormigón blanco que se eleva en cada borde como una ola rompiéndose a cámara lenta. El gesto definitorio del edificio es su apertura central: un gran vacío elíptico que enmarca el cielo nocturno sobre la sala de actuaciones, conectando público y artistas con el universo que los rodea.",
          en: "Auditorio Luna is a performing arts center conceived as a pure gesture of curvature — a vast undulating canopy of white concrete that rises at either edge like a wave breaking in slow motion. The building's defining gesture is its central opening: a great elliptical void that frames the night sky above the performance hall, connecting audience and performers to the universe above them.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "La forma de la estructura es generada por las exigencias acústicas de la sala interior, actuando la cubierta blanca simultáneamente como techo, muro y resonador. El perímetro del edificio se disuelve a nivel de suelo en una plaza pública que funciona durante todo el año como espacio de reunión al aire libre, anfiteatro y mercado. Arte y vida cívica coexisten en Auditorio Luna; el edificio nunca está cerrado.",
          en: "The structure's form is generated by the acoustic demands of the hall within, the white shell acting simultaneously as roof, wall, and resonator. The perimeter of the building dissolves at grade into a public plaza that functions year-round as an open-air gathering space, amphitheater, and market. Art and civic life coexist at Auditorio Luna; the building is never closed.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Cubierta de hormigón blanco ondulante como gesto arquitectónico principal — Claraboya elíptica central abierta al cielo nocturno — Auditorio principal con rendimiento acústico de primer nivel — Plaza pública circundante para uso cívico durante todo el año — Aparcamiento subterráneo e infraestructura de servicio — Presencia nocturna iluminada como hito.",
          en: "Undulating white concrete shell as primary architectural gesture — Central elliptical skylight opening to the night sky — Main auditorium with world-class acoustic performance — Surrounding public plaza for year-round civic use — Underground parking and service infrastructure — Illuminated nighttime presence as landmark.",
        },
      },
    ],
    finalGallery: [
      img("auditorio-luna", 5, "4/5", "Auditorio Luna — detalle hormigón"),
      img("auditorio-luna", 6, "4/5", "Auditorio Luna — anfiteatro exterior"),
      img("auditorio-luna", 7, "16/9", "Auditorio Luna — vista nocturna"),
      img("auditorio-luna", 8, "16/9", "Auditorio Luna — panorámica de ladera"),
    ],
    credits: [
      { role: "Typology",      name: "Performing Arts Center / Cultural Building" },
      { role: "Location",      name: "Mountain / Hillside City" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "torre-palma",
  },

  // ── 14 TORRE PALMA ───────────────────────────────────────────────────────
  {
    slug: "torre-palma",
    num: "14",
    title: { es: "Torre Palma", en: "Torre Palma" },
    category: "architecture",
    cover: img("torre-palma", 2, "4/5", "Torre Palma — frontal con piscina amenities y palmeras"),
    hero:  img("torre-palma", 2, "16/9", "Torre Palma — balcones acristalados frente al mar"),
    topGallery: [
      img("torre-palma", 3, "4/5", "Torre Palma — porte-cochère de llegada"),
      img("torre-palma", 4, "4/5", "Torre Palma — planta amenidades con piscina"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Torre Palma es una torre residencial de lujo diseñada para un contexto urbano tropical, donde la densidad de la ciudad se encuentra con la escala del cielo. El edificio se eleva como una forma compuesta y disciplinada — revestimiento de piedra caliza y balcones acristalados de toda altura organizados en un ritmo que otorga a cada residencia su propio espacio de vida exterior. A nivel de calle, un porte-cochère de doble altura en piedra y madera proporciona una secuencia de llegada graciosa protegida del calor.",
          en: "Torre Palma is a luxury residential tower designed for a tropical urban context, where the density of the city meets the scale of the sky. The building rises as a composed, disciplined form — limestone cladding and full-height glazed balconies organized in a rhythm that gives each residence its own outdoor living space. At street level, a double-height stone and timber porte-cochère provides a gracious arrival sequence shielded from the heat by deep overhangs.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "El diseño de la torre reconcilia dos ambiciones: el deseo horizontal de conectarse con el paisaje y el mar, y la lógica vertical de un edificio que debe rendir a escala urbana. La vidriería de suelo a techo maximiza las vistas desde cada residencia, mientras la piel de piedra caliza asegura que el edificio pertenezca a su contexto costero independientemente de su altura.",
          en: "The tower's design reconciles two ambitions: the horizontal desire to connect with the landscape and the sea, and the vertical logic of a building that must perform at urban scale. Floor-to-ceiling glazing maximizes views from every residence, while the limestone skin ensures the building belongs to its coastal context regardless of its height.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Torre residencial de gran altura en piedra caliza y vidrio — Balcones acristalados de toda altura para cada residencia — Llegada de lujo con porte-cochère de piedra y madera — Paisajismo tropical integrado a nivel de suelo y podio — Planta de amenidades premium con piscina, gimnasio y salón — Vistas panorámicas sin obstrucción de ciudad y litoral.",
          en: "High-rise residential tower in limestone and glass — Full-height glazed balconies for each residence — Luxury porte-cochère arrival with stone and timber canopy — Tropical landscaping integrated at ground and podium level — Premium amenity floor with pool, gym, and lounge — Unobstructed panoramic views of city and coastline.",
        },
      },
    ],
    finalGallery: [
      img("torre-palma", 5, "4/5", "Torre Palma — interior residencia"),
      img("torre-palma", 6, "16/9", "Torre Palma — piscina en planta amenidades"),
      img("torre-palma", 7, "4/5", "Torre Palma — detalle fachada caliza"),
      img("torre-palma", 8, "16/9", "Torre Palma — vista aérea ciudad y mar"),
    ],
    credits: [
      { role: "Typology",      name: "Luxury Residential Tower" },
      { role: "Location",      name: "Tropical Coastal City" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "kimko-house",
  },

  // ── 15 KIMKO HOUSE ───────────────────────────────────────────────────────
  {
    slug: "kimko-house",
    num: "15",
    title: { es: "Kimko House", en: "Kimko House" },
    category: "architecture",
    cover: img("kimko-house", 1, "4/5", "Kimko House — pabellón sobre el lago"),
    hero:  img("kimko-house", 2, "16/9", "Kimko House — terraza de madera sobre el agua"),
    topGallery: [
      img("kimko-house", 3, "4/5", "Kimko House — jardín zen con linternas de piedra"),
      img("kimko-house", 4, "4/5", "Kimko House — cerezos en flor y niebla"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "Kimko House es una residencia privada de retiro concebida como extensión del paisaje japonés que la rodea. Anchas losas de hormigón y amplios planos de madera cálida se proyectan sobre un lago tranquilo, su superficie reflejando los cerezos en flor y la niebla del amanecer. La arquitectura habla el lenguaje del lugar — contenida, horizontal, profundamente presente.",
          en: "Kimko House is a private retreat residence conceived as an extension of the Japanese landscape that surrounds it. Wide concrete slabs and broad warm timber planes project over a still lake, its surface reflecting cherry blossoms and morning mist. The architecture speaks the language of the place — restrained, horizontal, deeply present.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "Las estancias se abren completamente al jardín de piedra y al agua a través de muros acristalados de suelo a techo que desaparecen en los meses cálidos. Linternas de piedra, pinos enanos y grava rastrillada definen una transición gradual entre edificio y naturaleza — un jardín que es también umbral, un silencio que es también bienvenida.",
          en: "The rooms open fully to the stone garden and water through floor-to-ceiling glazed walls that disappear in the warm months. Stone lanterns, dwarf pines, and raked gravel define a gradual transition between building and nature — a garden that is also threshold, a silence that is also welcome.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Estructura proyectada sobre lago con plataforma de madera sobre el agua — Vidriería de suelo a techo con apertura total al jardín y el lago — Jardín de piedra zen con linternas y pinos enanos — Materiales: hormigón, madera natural y piedra local — Orientación hacia el agua y los cerezos — Cubierta plana de amplio vuelo para sombreado y contemplación.",
          en: "Structure projecting over lake with timber deck above the water — Floor-to-ceiling glazing opening fully to garden and lake — Zen stone garden with stone lanterns and dwarf pines — Materials: concrete, natural timber and local stone — Orientation toward water and cherry blossom trees — Wide-eave flat roof for shade and contemplation.",
        },
      },
    ],
    finalGallery: [
      img("kimko-house", 5, "4/5", "Kimko House — interior minimalista"),
      img("kimko-house", 6, "4/5", "Kimko House — dormitorio con vistas al lago"),
      img("kimko-house", 7, "16/9", "Kimko House — amanecer con niebla"),
      img("kimko-house", 8, "4/5", "Kimko House — jardín de piedra al atardecer"),
      img("kimko-house", 9, "16/9", "Kimko House — panorámica del bosque"),
    ],
    credits: [
      { role: "Typology",      name: "Private Retreat Residence" },
      { role: "Location",      name: "Japanese Forest Lake" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "north-bistro",
  },

  // ── 16 NORTH BISTRO ──────────────────────────────────────────────────────
  {
    slug: "north-bistro",
    num: "16",
    title: { es: "North Bistro", en: "North Bistro" },
    category: "architecture",
    cover: img("north-bistro", 6, "4/5", "North Bistro — exterior en acantilado nevado"),
    hero:  img("north-bistro", 2, "16/9", "North Bistro — vistas panorámicas al fiordo"),
    topGallery: [
      img("north-bistro", 3, "4/5", "North Bistro — interior con mobiliario nórdico"),
      img("north-bistro", 4, "4/5", "North Bistro — gran vano acristalado"),
    ],
    blocks: [
      {
        kind: "context",
        title: { es: "Contexto", en: "Context" },
        body: {
          es: "North Bistro es un restaurante de autor situado en un promontorio rocoso de altura, donde la arquitectura emerge directamente de la roca como si siempre hubiera estado allí. La cubierta de hormigón — suavemente arqueada, tosca, monolítica — se mimetiza con las formaciones pétreas que la rodean, convirtiéndose en parte indistinguible del acantilado nevado. Un único gran vano acristalado enmarca el panorama del fiordo con precisión escenográfica.",
          en: "North Bistro is a destination restaurant set on a high rocky promontory, where the architecture emerges directly from the rock as if it had always been there. The concrete shell — gently arched, raw, monolithic — mimics the stone formations that surround it, becoming an indistinguishable part of the snowy cliff. A single large glazed opening frames the fjord panorama with scenographic precision.",
        },
      },
      {
        kind: "direction",
        title: { es: "Dirección visual", en: "Visual Direction" },
        body: {
          es: "El interior es deliberadamente austero: paredes de hormigón visto, mobiliario de madera nórdica de líneas limpias, luz indirecta cálida. La arquitectura nunca compite con la vista — existe únicamente para contenerla y enmarcarla. Cenar aquí es habitar el paisaje, no observarlo.",
          en: "The interior is deliberately austere: raw concrete walls, clean-lined Nordic timber furniture, warm indirect light. The architecture never competes with the view — it exists only to contain and frame it. To dine here is to inhabit the landscape, not merely observe it.",
        },
      },
      {
        kind: "deliverables",
        title: { es: "Características", en: "Key Features" },
        body: {
          es: "Cubierta de hormigón arqueada esculpida en el acantilado rocoso nevado — Gran vano acristalado único con vistas panorámicas al fiordo — Interiores de hormigón visto con mobiliario de madera nórdica — Integración total con la topografía rocosa natural — Acceso dramático por camino de roca y nieve — Iluminación interior cálida e indirecta.",
          en: "Arched concrete shell sculpted into a snowy rocky cliff — Single large glazed opening with panoramic fjord views — Raw concrete interiors with Nordic timber furniture — Full integration with the natural rocky topography — Dramatic access path through rock and snow — Warm indirect interior lighting.",
        },
      },
    ],
    finalGallery: [
      img("north-bistro", 5, "4/5", "North Bistro — mesa con vistas al fiordo"),
      img("north-bistro", 6, "4/5", "North Bistro — detalle hormigón y nieve"),
      img("north-bistro", 7, "16/9", "North Bistro — exterior nevado"),
      img("north-bistro", 8, "16/9", "North Bistro — acceso al restaurante"),
    ],
    credits: [
      { role: "Typology",      name: "Destination Restaurant / Gastronomy" },
      { role: "Location",      name: "Nordic Fjord Cliff" },
      { role: "Status",        name: "Concept / Render" },
      { role: "Visualization", name: "Knockvision" },
    ],
    nextSlug: "villa-petra",
  },
];

export function getKvProjectBySlug(slug: string): KvProject | undefined {
  return kvProjects.find((p) => p.slug === slug);
}

export function getKvNextProject(slug: string): KvProject | undefined {
  const current = getKvProjectBySlug(slug);
  if (!current) return undefined;
  return getKvProjectBySlug(current.nextSlug);
}
