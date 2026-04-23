# Knock Labs — Design System
> Documento de referencia para Claude Design / Figma / implementación

---

## 1. IDENTIDAD DE MARCA

**Nombre:** Knock Labs  
**Tagline:** Creative Studio · Madrid  
**Claim:** We build brands that deserve to be seen.  
**Tono:** Directo, técnico, sin adornos. Confianza sin arrogancia.

---

## 2. COLORES

### Paleta principal

| Token | Hex | Uso |
|-------|-----|-----|
| `base` | `#0D0D0D` | Fondo oscuro principal, texto sobre fondo claro |
| `cream` | `#F2F0EB` | Fondo claro, texto sobre fondo oscuro |
| `accent` | `#FF4C00` | Color de acción: CTAs, hovers, subrayados activos |
| `dark01` | `#1A1A1A` | Hover de tarjetas oscuras, fondo alternativo oscuro |
| `dark02` | `#2A2A2A` | Bordes sobre fondo oscuro, divisores |

### Variantes de opacidad (uso frecuente)

```
cream/10   rgba(242, 240, 235, 0.10)  — Bordes muy sutiles
cream/15   rgba(242, 240, 235, 0.15)  — Bordes botones secundarios
cream/20   rgba(242, 240, 235, 0.20)  — Iconos decorativos
cream/25   rgba(242, 240, 235, 0.25)  — Tags/chips de texto
cream/30   rgba(242, 240, 235, 0.30)  — Texto metadata secundario
cream/40   rgba(242, 240, 235, 0.40)  — Texto body secundario
cream/50   rgba(242, 240, 235, 0.50)  — Texto nav/links inactivos
cream/60   rgba(242, 240, 235, 0.60)  — Texto body medio

base/06    rgba(13, 13, 13, 0.06)     — Bordes ultra sutiles (fondo claro)
base/08    rgba(13, 13, 13, 0.08)     — Tags/chips (fondo claro)
base/10    rgba(13, 13, 13, 0.10)     — Divisores (fondo claro)
base/40    rgba(13, 13, 13, 0.40)     — Metadata (fondo claro)
base/50    rgba(13, 13, 13, 0.50)     — Texto secundario (fondo claro)
base/60    rgba(13, 13, 13, 0.60)     — Texto body (fondo claro)
base/70    rgba(13, 13, 13, 0.70)     — Texto principal reducido (fondo claro)
```

### Color adicional de apoyo

| Hex | Uso |
|-----|-----|
| `#EBE8E0` | Fondo de placeholder de imagen, variante cream más oscura |

### Colores de proyectos/servicios (dinámicos)

Cada proyecto y servicio lleva un color de acento individual. Los disponibles:

| Servicio | Hex |
|----------|-----|
| Marketing 360° | `#FF4C00` |
| Tecnología | `#00D9C0` |
| Legal & Economía | `#C8FF00` |
| Aceleradora | `#FF4C00` |
| Diseño | `#F2F0EB` |
| Comunicación & IA | `#FF4C00` |

---

## 3. TIPOGRAFÍA

### Familias

| Rol | Familia | Pesos | Variable CSS |
|-----|---------|-------|-------------|
| **Display / Body** | Archivo | 400, 500, 600, 900 | `--font-archivo` |
| **Mono / Labels** | DM Mono | 400, 500 | `--font-dm-mono` |

### Escala tipográfica (fluid)

| Nombre | clamp() | Peso | Uso |
|--------|---------|------|-----|
| Display | `clamp(4rem, 12vw, 10rem)` | 900 | clase `.display` |
| Hero | `clamp(3.5rem, 10vw, 9rem)` | 900 | Títulos de página/hero |
| H1 grande | `clamp(3rem, 9vw, 8rem)` | 900 | About, Work |
| H2 sección | `clamp(2.5rem, 5vw, 4.5rem)` | 900 | CTA, secciones |
| H2 medio | `clamp(2rem, 3.5vw, 3rem)` | 900 | Cabeceras de sección |
| H3 card | `clamp(1.5rem, 2.2vw, 2rem)` | 900 | Títulos de tarjeta |
| H3 detalle | `clamp(1.35rem, 2vw, 1.75rem)` | 900 | Offerings/steps |
| Body grande | `text-xl` (1.25rem) | 400 | Descripciones largas |
| Body | `text-base` (1rem) | 400 | Texto corriente |
| Body pequeño | `text-sm` (0.875rem) | 400–500 | Metadata, tags |
| Nav badge | `clamp(0.75rem, 1vw, 0.9rem)` | 900 | Badge "KNOCK" |
| Label | `clamp(0.65rem, 0.8vw, 0.75rem)` | 300 | `.section-label` |
| Mono texto | `text-xs` (0.75rem) | 400–500 | Labels DM Mono |
| Mono pequeño | `text-[10px]` (0.625rem) | 400 | Metadata fina |
| Mono mínimo | `text-[9px]` (0.5625rem) | 400 | Tags en cards |

### Letter-spacing

| Valor | Uso típico |
|-------|-----------|
| `-0.06em` | Badge KNOCK, monograma KL |
| `-0.04em` | Títulos hero de detalle |
| `-0.035em` | Títulos de sección principales |
| `-0.03em` | H3 en tarjetas |
| `-0.025em` | Títulos de pasos/proceso |
| `-0.02em` | Nav links, botones |
| `-0.015em` | Textos de descripción large |
| `-0.01em` | Body corriente |
| `0` | Default |
| `tracking-wide` | Footer legal |
| `tracking-widest` | Labels uppercase mono |

### Line-height

| Valor | Uso |
|-------|-----|
| `0.88` | Títulos muy grandes (hero detail) |
| `0.9` | `.display`, sección hero |
| `0.95` | Títulos de sección |
| `1` | Headings estándar |
| `1.05` | Cards de servicio |
| `1.1` | Headings pequeños |
| `1.3` | Listas de metadatos |
| `1.4` | Descripciones body |
| `relaxed (≈1.625)` | Párrafos largos |

---

## 4. ESPACIADO

### Padding horizontal por breakpoint

| Breakpoint | Tailwind | px |
|------------|----------|----|
| Mobile | `px-6` | 24px |
| Tablet `md:` | `px-8` | 32px |
| Desktop `lg:` | `px-12` | 48px |

### Padding vertical por tipo de sección

| Tipo | Tailwind | Aprox px |
|------|----------|---------|
| Sección estándar | `py-24 md:py-32` | 96–128px |
| Sección CTA grande | `py-32 md:py-40` | 128–160px |
| Hero interior | `pt-36 pb-16 md:pb-24` | 144/64–96px |
| Footer | `pt-20 md:pt-24 pb-10` | 80/96–40px |

### Max-widths

| Token | Valor | Uso |
|-------|-------|-----|
| Global wrapper | `1920px` | Contenedor máximo de toda la web |
| Texto readable | `52ch–58ch` | Párrafos largos |
| Texto corto | `46ch` | Subtítulos |
| Taglines | `22ch` | Taglines centradas |
| Texto pequeño | `max-w-sm` (384px) | Columnas de texto |

### Sistema de grid

- Base: **12 columnas** (`grid-cols-12`)
- Divisor visual: `gap-px` + `bg-dark02` o `bg-[#0D0D0D]/10` (crea líneas de 1px entre tarjetas)
- Tarjetas de servicios/proyectos: `grid-cols-1 md:grid-cols-3`
- Detalle: `md:col-span-4` / `md:col-span-8` (patrón 4+8 para label+contenido)
- Process: `grid-cols-1 md:grid-cols-4` (4 pasos en desktop)

---

## 5. BORDES Y RADIO

### Bordes

| Clase | Color | Contexto |
|-------|-------|---------|
| `border-dark02` | `#2A2A2A` | Divisores sobre fondo oscuro |
| `border-[#0D0D0D]/10` | rgba base 10% | Divisores sobre fondo claro |
| `border-cream/[0.06]` | rgba cream 6% | Borde nav al hacer scroll |
| `border-cream/15` | rgba cream 15% | Botones secundarios |
| `border-cream/40` | rgba cream 40% | Botones secundarios (hover) |
| `border-cream/[0.08]` | rgba cream 8% | Tags/chips de texto |

### Radio de borde

**Sin radio (sharp corners)** — principio de diseño. Cero `border-radius` en toda la interfaz excepto:
- `rounded-full` — cursor dot y pulse dot (elementos circulares decorativos)

### Líneas divisorias

- `h-px` (1px) — divisores de sección, separadores de lista
- `h-[2px]` (2px) — líneas de acento de color en process steps
- Patrón `bg-dark02` con `gap-px` en grids = crea grid de líneas 1px

---

## 6. SOMBRAS Y EFECTOS

### Grain/noise

- SVG `feTurbulence` aplicado como `body::after`
- `opacity: 0.4`, `mix-blend-mode: overlay`
- Cubre toda la pantalla (`z-index: 99998`)
- Efecto de textura analógica sobre toda la interfaz

### Mix-blend-mode

- `mix-blend-difference` — cursor ring (invierte colores bajo el cursor)
- `mix-blend-mode: overlay` — capa grain

### ASCII patterns

- Fondo animado de caracteres ASCII en hero y cards de servicios
- `opacity: 0.18` (hero), `opacity: 0.05` (cards)
- Color configurable por sección

---

## 7. ANIMACIÓN

### Curva de easing principal

```
cubic-bezier(0.65, 0, 0.35, 1)
```
Equivalente a "Power3 InOut". Usada en: nav, page transitions, hero lines, loader exit, service/project bands.

### Otras curvas

| Curva | Uso |
|-------|-----|
| `[0.25, 0.46, 0.45, 0.94]` | ScrollReveal (ease-out suave) |
| `linear` | Loader scroll de texto |
| `spring { stiffness: 50, damping: 16 }` | Contadores de stats |

### Duraciones estándar

| ms | Uso |
|----|-----|
| 150 | Micro-interacciones (scale botón) |
| 200 | Color transitions (hover) |
| 250 | Cursor, arrow hover |
| 300 | Nav underline, móvil item reveal |
| 600 | Label fade-in hero |
| 700 | ScrollReveal estándar |
| 800 | Nav entrada |
| 900 | Secciones grandes `whileInView` |
| 1000 | Hero headline `RevealLine` |
| 1200 | Loader total |
| 1800 | CTA arrow loop infinito |

### Delays de entrada hero

```
Label:      delay 0.15
Headline 1: delay 0.25
Headline 2: delay 0.33
Headline 3: delay 0.41
Headline 4: delay 0.49
Sub:        delay 0.65
CTAs:       delay 0.75
```

---

## 8. COMPONENTES CLAVE

### Badge / Logo mark

```
Texto:          KNOCK
Fondo claro:    bg-cream (#F2F0EB) · text-base (#0D0D0D)
Fondo oscuro:   bg-base (#0D0D0D) · text-cream (#F2F0EB)
Hover:          bg-accent (#FF4C00) · text-cream
Font:           Archivo Black (900)
Size:           clamp(0.75rem, 1vw, 0.9rem)
Tracking:       -0.06em
Padding:        px-3 py-1.5
Border-radius:  0 (sharp)
```

### Botón primario (CTA)

```
Texto:    Archivo SemiBold (600)
Size:     text-sm (0.875rem) · tracking: -0.02em
Padding:  px-5 py-3
Fondo:    bg-accent (#FF4C00)
Color:    text-cream (#F2F0EB)
Hover:    bg-cream / text-base
Radius:   0 (sharp)
```

### Botón secundario (ghost)

```
Texto:    Archivo Medium (500)
Size:     text-sm · tracking: -0.02em
Padding:  px-5 py-3
Fondo:    transparent
Color:    text-cream/50
Borde:    border border-cream/15
Hover:    text-cream · border-cream/40
```

### Section label

```
Familia:   DM Mono
Size:      clamp(0.65rem, 0.8vw, 0.75rem)
Peso:      300
Tracking:  tracking-widest
Uppercase: sí
Color:     text-cream/40 (fondo oscuro) · text-[#0D0D0D]/40 (fondo claro)
Prefijo:   "// " antes del texto
Margin-b:  mb-6 · mb-8 · mb-14 (variable por contexto)
```

### Tag / Chip

```
Familia:  DM Mono
Size:     text-[10px] (0.625rem)
Tracking: tracking-widest
Uppercase: sí
Padding:  px-2.5 py-1
Borde:    border border-cream/[0.08] (oscuro) · border-[#0D0D0D]/08 (claro)
Color:    text-cream/25 (oscuro) · text-[#0D0D0D]/40 (claro)
Radius:   0 (sharp)
```

### Número de proceso/item

```
Familia:  DM Mono
Size:     text-xs (0.75rem)
Tracking: tracking-widest
Color:    text-accent/70 · text-[#0D0D0D]/40
```

---

## 9. ALTURAS Y ASPECT RATIOS

| Elemento | Ratio/Altura |
|----------|-------------|
| Nav height | `clamp(64px, 8vw, 104px)` |
| Hero min-height | `100vh` |
| Featured image (proyecto) | `16:8` |
| Galería de detalle | `4:3` |
| Full-width imagen | `21:10` |
| Service color band | `16:6` |
| Sobre visual | `1:1` (square) |

---

## 10. ESTRUCTURA DE PÁGINAS

### Layout oscuro → claro (patrón principal)

```
Header/Hero      → bg-base (#0D0D0D) + text-cream
Sección de info  → bg-cream + text-base
Sección de cards → bg-base + tarjetas dark01/dark02
Sección light    → bg-cream (team, process, deliverables)
ContactCTA       → bg-base + accent
Footer           → bg-base
```

### Contraste / accesibilidad

- `#FF4C00` sobre `#0D0D0D` — ratio ≈ 3.8:1 (AA para large text)
- `#F2F0EB` sobre `#0D0D0D` — ratio ≈ 16.5:1 (AAA)
- `#0D0D0D` sobre `#F2F0EB` — ratio ≈ 16.5:1 (AAA)

---

## 11. ARCHIVOS DE LOGO INCLUIDOS

```
branding/
  logo-badge.svg          → Badge "KNOCK" fondo claro
  logo-badge-dark.svg     → Badge "KNOCK" fondo oscuro
  logo-badge-accent.svg   → Badge "KNOCK" fondo acento
  logo-monogram.svg       → Monograma "KL"
  logo-wordmark.svg       → Wordmark "KNOCK LABS"
  logo-full.svg           → Lockup completo (badge + subtítulo)
```
