# Knockvision — Design System
> Documento de referencia para Claude Design / Figma / implementación

---

## 1. IDENTIDAD DE MARCA

**Nombre:** Knockvision  
**Posición:** Departamento visual independiente de Knocklabs  
**Tagline:** Premium architectural visualization & product rendering studio  
**Tono:** Calmado, preciso, editorial. Confianza sin estridencia. La imagen habla, el texto acompaña.

---

## 2. COLORES

### Paleta principal

| Token | Hex | Uso |
|-------|-----|-----|
| `kv-dark` | `#151515` | Fondo principal secciones oscuras (hero, CTA final) |
| `kv-dark-alt` | `#1A1A1A` | Texto principal sobre fondos claros, nav al hacer scroll |
| `cream` | `#F2F0EB` | Fondo claro de secciones (manifesto, proceso, footer, categorías) |
| `kv-accent` | `#6EC1E4` | Gulf Blue. Link activo nav, números de proceso/servicios/categorías, hover arrows, filtro activo, focus de formulario, botón submit, botón CTA final, cursor y barra de scroll en páginas KV |
| `kv-accent-hover` | `#57ABD0` | Hover de botones con `bg-kv-accent` (~10% más oscuro) |

> Knockvision usa **Gulf Blue `#6EC1E4`** como color accent (frente al naranja `#FF4C00` de Knocklabs): azul polvo de las liveries Gulf — premium, sereno, distintivo. Definido en el branding pack de Knockvision. Aparece puntualmente como señal activa, nunca como relleno de fondo masivo.

### Variantes de opacidad (uso frecuente sobre cream)

```
[#1A1A1A]/[0.09]   — Bordes divisores sobre fondo cream (el más usado)
[#1A1A1A]/[0.07]   — Borde nav scrolled (shadow sutilísima)
[#1A1A1A]/[0.04]   — Shadow line bajo nav
[#1A1A1A]/25       — Números de proceso, números de categoría
[#1A1A1A]/30       — Labels mono, copyright, legal
[#1A1A1A]/35       — Labels sección (ligero más presente)
[#1A1A1A]/45       — Nav links inactivos
[#1A1A1A]/50       — Texto body secundario, descriptores footer
[#1A1A1A]/55       — Nav links footer
```

### Variantes de opacidad (uso sobre fondo oscuro)

```
white/30    — Descriptor mono hero
white/35    — Tercera línea del headline hero (efecto de desvanecido)
white/40    — Texto de proceso (hidden desktop)
white/50    — Label top hero
white/60    — Sub copy hero
white/70    — Nav links inactivos (modo transparente, hero page)
cream/20    — Borde botón secundario CTA final
cream/30    — Label mono CTA final
cream/50    — Nav links inactivos (al hacer scroll)
```

---

## 3. TIPOGRAFÍA

### Familias

| Rol | Familia | Pesos | Variable CSS |
|-----|---------|-------|-------------|
| **Display / Body** | Archivo | 400, 500, 600, 900 | `--font-archivo` |
| **Mono / Labels** | DM Mono | 400, 500 | `--font-dm-mono` |

> Mismas familias que Knocklabs. Knockvision las usa con mayor austeridad: casi todo en 900 (Black) para los titulares, y mono en `text-[10px]` para todos los labels.

### Escala tipográfica

| Elemento | clamp() | Peso | Contexto |
|----------|---------|------|---------|
| Hero headline | `clamp(2.5rem, 8.5vw, 8.5rem)` | 900 | Las 3 líneas del hero |
| Manifesto / Footer claim | `clamp(2rem, 5.5vw, 5rem)` | 900 | Párrafo editorial grande |
| CTA final headline | `clamp(2.25rem, 7vw, 6.5rem)` | 900 | Sección contacto |
| Categorías lista | `clamp(1.5rem, 4.2vw, 3.75rem)` | 900 | Lista editorial de categorías |
| Process step title | `clamp(1.35rem, 1.9vw, 1.85rem)` | 900 | Títulos de los 4 pasos |
| Nav brand | `clamp(0.78rem, 0.9vw, 0.9rem)` | 900 | "KNOCKVISION" wordmark nav |
| Body hero sub | `clamp(0.9rem, 1.1vw, 1.1rem)` | 400 | Sub-copy hero |
| Body descriptor footer | `clamp(0.88rem, 0.9vw, 0.95rem)` | 400 | Descriptor pie de página |
| Process step desc | `clamp(0.85rem, 0.92vw, 0.95rem)` | 400 | Descripción de cada paso |
| Nav links | `text-sm` (0.875rem) | 500 | Links de navegación |
| Label mono (global) | `text-[10px]` (0.625rem) | 400 | Todos los labels uppercase |

### Letter-spacing

| Valor | Uso |
|-------|-----|
| `-0.05em` | Hero headline, footer claim, CTA headline, mobile nav |
| `-0.045em` | Manifesto body |
| `-0.04em` | Nav brand "KNOCKVISION", lista categorías |
| `-0.035em` | Process step titles |
| `-0.025em` | Texto de apoyo desktop (proceso) |
| `-0.02em` | Nav links, botones, footer nav links |
| `-0.01em` | Body sub-copy |
| `-0.005em` | Process step desc |
| `tracking-[0.18em]` | Todos los labels DM Mono uppercase |
| `tracking-[0.16em]` | Footer bottom bar (copyright, legal) |

### Line-height

| Valor | Uso |
|-------|-----|
| `0.97` | CTA final headline, footer claim |
| `1.00` | Hero headline (leading-none), process step title |
| `1.04` | Manifesto body |
| `1.55` | Sub-copy hero |
| `1.60` | Process step desc, footer descriptor |

---

## 4. ESPACIADO

### Padding horizontal (igual que Knocklabs)

| Breakpoint | Tailwind | px |
|------------|----------|----|
| Mobile | `px-6` | 24px |
| Tablet `md:` | `px-8` | 32px |
| Desktop `lg:` | `px-12` | 48px |

### Padding vertical por sección

| Sección | Tailwind | Aprox px |
|---------|----------|---------|
| Hero | `100svh` (full) | — |
| Manifesto | `py-28 md:py-56` | 112/224px |
| Proceso | `py-24 md:py-44` | 96/176px |
| Categorías | `py-20 md:py-44` | 80/176px |
| CTA final | `py-32 md:py-60` | 128/240px |
| Footer main | `pt-20 md:pt-32 pb-16 md:pb-24` | 80/128 · 64/96px |
| Footer bottom bar | `py-6` | 24px |

### Max-widths

| Token | Valor | Uso |
|-------|-------|-----|
| Global wrapper | `1920px` | Contenedor máximo de toda la microweb |
| CTA headline | `14em` | `max-width` del título del CTA final |
| Footer descriptor | `max-w-sm` (384px) | Texto descriptor footer |

### Grid

- Base: **12 columnas** (`grid-cols-12`)
- Manifesto: columna 1 (label) + columnas 3–12 (texto) → patrón `col-span-1` + `col-span-10 col-start-3`
- Footer: `col-span-7` (claim) + `col-span-2 col-start-9` (nav) + `col-span-2 col-start-11` (studio)
- Sub-copy hero: `md:col-span-4 md:col-start-9` (anclado a la derecha)
- Proceso: `grid-cols-1 md:grid-cols-4` (4 pasos en desktop)

---

## 5. BORDES Y RADIO

### Principio

**Sin radio (sharp corners)** — igual que Knocklabs. Cero `border-radius` en toda la interfaz.

### Bordes

| Clase | Color | Contexto |
|-------|-------|---------|
| `border-[#1A1A1A]/[0.09]` | rgba `#1A1A1A` 9% | Divisor de secciones, pasos de proceso, categorías |
| `border-[#1A1A1A]/[0.07]` | rgba `#1A1A1A` 7% | Borde inferior nav al hacer scroll |
| `border-cream/20` | rgba cream 20% | Botón secundario CTA final (reposo) |
| `border-cream/50` | rgba cream 50% | Botón secundario CTA final (hover) |

### Líneas divisorias

- `h-px` (1px) — único grosor de divisor. Nunca más.
- Las secciones sobre `bg-cream` usan `border-t border-[#1A1A1A]/[0.09]` al inicio.
- La lista de categorías usa `border-t` en cada `<li>` + `last:border-b`.

---

## 6. EFECTOS

> Knockvision **no tiene** grain de textura, ASCII patterns ni mix-blend-difference. La ausencia de efectos es parte de la identidad premium. Solo imagen y tipografía. El cursor global y la barra de scroll del viewport se tiñen de Gulf Blue `#6EC1E4` en rutas `/knockvision` (clase `html.kv-page`, añadida por `KvNav`).

### Overlay de imagen (hero)

```
linear-gradient(to bottom,
  rgba(26,26,26, 0)    30%,
  rgba(26,26,26, 0.55) 65%,
  rgba(26,26,26, 0.88) 100%
)
```

Transparente en la parte superior, oscuro en la inferior para leer el texto sobre la imagen.

### Nav scroll transition

```
bg-cream/90 backdrop-blur-md
border-b border-[#1A1A1A]/[0.07]
shadow-[0_1px_0_rgba(26,26,26,0.04)]
```

Transición: `duration-500` con `transition-all`.

---

## 7. ANIMACIÓN

### KvReveal — componente base

Todas las entradas de contenido usán `KvReveal`, que usa `IntersectionObserver` (threshold `0.06`, rootMargin `-40px` bottom) y activa la animación una sola vez.

**Easing:** `[0.19, 1, 0.22, 1]` — out-expo. Asentamiento rápido, sin rebote. Feel editorial.

### Variantes de KvReveal

| Variant | Movimiento inicial | Uso |
|---------|-------------------|-----|
| `fade` | `opacity: 0` | Labels mono, headers de sección |
| `up` | `opacity: 0, y: 18px` | Titulares, cuerpos de texto, steps |
| `left` | `opacity: 0, x: -14px` | — (disponible) |
| `scale` | `opacity: 0, scale: 0.97` | — (disponible) |

### Curva de nav

```
cubic-bezier(0.65, 0, 0.35, 1)
```
Usada en: entrada del nav, hamburger, mobile overlay, underline de links activos.

### Duraciones y delays de KvReveal

| ms | Uso |
|----|-----|
| 500ms | Labels fade (`duration={0.5}`) |
| 650ms | Categorías list items (`duration={0.65}`) |
| 750ms | Process steps (`duration={0.75}`) |
| 850ms | CTA sub-content (`duration={0.85}`) |
| 1000ms | Hero headline, manifesto body (`duration={1}` – `1.1`) |

### Delays de entrada del hero

```
Label top:    delay 0.08
Headline 1:   delay 0.12
Headline 2:   delay 0.19
Headline 3:   delay 0.26
Sub-copy:     delay 0.38
```

### Delays escalonados (listas)

```
Categorías:    0.05 * i
Process steps: 0.08 + 0.09 * i
```

### Nav entrada

```
initial: { y: -80, opacity: 0 }
animate: { y: 0, opacity: 1 }
transition: { duration: 0.65, ease: EASE, delay: 0.08 }
```

---

## 8. COMPONENTES CLAVE

### KvNav

```
Wordmark:     "KNOCKVISION" · Archivo Black (900) · clamp(0.78rem, 0.9vw, 0.9rem)
Tracking:     -0.04em
Altura:       clamp(60px, 5.5vw, 84px)
Estado hero:  transparent + text-white (sobre imagen)
Estado scroll: bg-cream/90 backdrop-blur-md + text-[#1A1A1A]
Links:        text-sm, font-medium (500), -0.02em tracking
Underline:    h-px, scale-x-0 → scale-x-100 en hover (duration: 300ms, ease cubic)
Aux:          DM Mono text-[10px] tracking-[0.18em] uppercase (locale / ↗ Knocklabs)
```

### KvReveal

```
Wrapper animado universal.
Props: variant, delay, duration, as (tag HTML), className
IntersectionObserver: threshold 0.06, rootMargin "0px 0px -40px 0px"
Easing: [0.19, 1, 0.22, 1]
```

### Label de sección (mono)

```
Familia:   DM Mono
Size:      text-[10px] (0.625rem)
Tracking:  tracking-[0.18em]
Uppercase: sí
Color:     text-[#1A1A1A]/30 · text-[#1A1A1A]/35 (sobre cream)
           text-cream/30 (sobre oscuro)
Margin-b:  variable — mb-6 (footer), mb-10 (CTA), mb-12 md:mb-16 (categorías), mb-20 md:mb-28 (proceso)
```

### Botón primario (cream sobre oscuro)

```
Texto:    Archivo SemiBold (600)
Size:     text-sm (0.875rem) · tracking: -0.02em
Padding:  px-7 py-3.5
Fondo:    bg-cream (#F2F0EB)
Color:    text-[#1A1A1A]
Hover:    bg-[#E8E5DB]
Radius:   0 (sharp)
```

### Botón secundario (ghost sobre oscuro)

```
Texto:    Archivo SemiBold (600)
Size:     text-sm · tracking: -0.02em
Padding:  px-7 py-3.5
Fondo:    transparent
Borde:    border border-cream/20
Color:    text-cream
Hover:    border-cream/50 · text-cream
```

### Número de proceso / ítem

```
Familia:  DM Mono
Size:     text-[10px] (0.625rem)
Tracking: tracking-[0.18em]
Uppercase: sí
Color:    text-[#1A1A1A]/25 (proceso) · text-[#1A1A1A]/30 (categorías)
```

### Flecha de categoría (hover reveal)

```
Font:      DM Mono text-[10px] tracking-[0.18em] uppercase
Color:     text-[#1A1A1A]/0 → text-[#1A1A1A]/40 on hover
Transform: translate-x-2 → translate-x-0 on hover
Suffix:    " ↗"
```

---

## 9. ALTURAS Y ASPECT RATIOS

| Elemento | Ratio/Altura |
|----------|-------------|
| Nav height | `clamp(60px, 5.5vw, 84px)` |
| Hero height | `100svh` (min 560px) |
| Hero image fill | `object-cover object-center` |

---

## 10. ESTRUCTURA DE PÁGINAS

### Layout general (home)

```
KvHero            → 100svh · bg-dark image · text-white
KvManifesto       → bg-cream · border-t
KvCategories      → bg-cream · border-t
KvProcess         → bg-cream · border-t
KvShowcase        → bg-cream (proyectos destacados)
KvFinalCTA        → bg-[#151515] · text-cream
KvFooter          → bg-cream · border-t
```

### Contraste / accesibilidad

- `#F2F0EB` sobre `#151515` — ratio ≈ 16:1 (AAA)
- `#1A1A1A` sobre `#F2F0EB` — ratio ≈ 15:1 (AAA)
- `white` sobre `rgba(26,26,26,0.88)` — ratio ≈ 14:1 (AAA)

---

## 11. RUTAS

```
/knockvision                    → Home (microweb landing)
/knockvision/proyectos          → Grid de proyectos (con filtro por categoría)
/knockvision/proyectos/[slug]   → Detalle de proyecto
/knockvision/arquitectura       → Servicio: arquitectura
/knockvision/producto           → Servicio: producto
/knockvision/contacto           → Formulario de contacto
```

---

## 12. DATOS Y CONTENIDO

```
src/data/knockvision-projects.ts   → Proyectos y categorías (kvCategories, kvProjects)
src/data/knockvision-showcase.ts   → Selección de proyectos para la home
```

Categorías disponibles (kvCategories):
- Arquitectura residencial
- Arquitectura comercial
- Producto & packaging
- Render exterior
- Render interior
- Visualización urbanística

---

## 13. COMPONENTES DE LA MICROWEB

```
components/knockvision/
  ui/
    KvNav.tsx            → Navegación propia de Knockvision
    KvFooter.tsx         → Footer propio de Knockvision
    KvReveal.tsx         → Wrapper de animación IntersectionObserver
    KvImage.tsx          → Imagen optimizada con placeholder
    KvPlaceholder.tsx    → Placeholder de render (ratio configurable)
  sections/
    KvHero.tsx           → Hero full-screen con imagen
    KvManifesto.tsx      → Párrafo editorial grande
    KvCategories.tsx     → Lista editorial de categorías/servicios
    KvProcess.tsx        → 4 pasos del proceso (grid)
    KvShowcase.tsx       → Proyectos destacados home
    KvRecentProjects.tsx → Proyectos recientes
    KvByKnocklabs.tsx    → Sello "By Knocklabs"
    KvFinalCTA.tsx       → Sección final de llamada a acción
    KvProjectsGrid.tsx   → Grid de proyectos (/proyectos)
    KvProjectsHeader.tsx → Cabecera de la página proyectos
    KvProjectDetail.tsx  → Contenido de detalle de proyecto
    KvServiceLanding.tsx → Landing de servicio (arquitectura/producto)
    KvServicesList.tsx   → Lista de servicios en landing
    KvContactForm.tsx    → Formulario de contacto
```
