# Modo Mantenimiento — Knock Labs

Cómo activar o desactivar la pantalla **"En construcción"** que se muestra en toda la web.

## TL;DR

Todo se controla con un único flag, `MAINTENANCE_MODE`, que aparece **idéntico en 3 archivos**.
Para cambiar de estado hay que ponerlo igual en los tres (`true` = mantenimiento, `false` = web normal),
hacer commit y push a `main`. Vercel redesplegará producción automáticamente.

## Estado actual

🔴 **MANTENIMIENTO ACTIVO** (`MAINTENANCE_MODE = true`)

> Actualiza esta línea cada vez que cambies el flag, para tener el estado de un vistazo.

## Los 3 archivos a editar

El flag está declarado igual en cada uno:

```ts
// Flip to false when the site is ready to go live
const MAINTENANCE_MODE = true;
```

| Archivo | Qué hace cuando está en `true` |
|---|---|
| `src/middleware.ts` | Redirige cualquier sub-ruta (`/es/about`, `/en/work`, …) al home de su idioma (`/es`, `/en`). |
| `src/app/[locale]/page.tsx` | Muestra `<UnderConstruction />` en lugar de la home real (`<HomeContent />`). |
| `src/components/ui/GlobalChrome.tsx` | Oculta el Nav y el Footer globales. |

El componente de la pantalla está en `src/components/ui/UnderConstruction.tsx` (no hace falta tocarlo).

## Reactivar la web (volver a la normalidad)

1. En **los 3 archivos** de la tabla, cambia:
   ```ts
   const MAINTENANCE_MODE = true;
   ```
   por:
   ```ts
   const MAINTENANCE_MODE = false;
   ```
2. Actualiza la sección **Estado actual** de este archivo a 🟢 web normal.
3. Commit y push a `main`:
   ```bash
   git add src/middleware.ts "src/app/[locale]/page.tsx" src/components/ui/GlobalChrome.tsx MAINTENANCE.md
   git commit -m "chore: disable maintenance mode"
   git push origin main
   ```
4. Vercel desplegará producción en 1–2 min. La web volverá a funcionar completa.

## Volver a activar el mantenimiento

Lo mismo pero al revés: pon `MAINTENANCE_MODE = true` en los 3 archivos, actualiza el estado a 🔴,
y commit + push a `main`.

## Notas

- Mantén **siempre el mismo valor** en los tres archivos. Si quedan desincronizados, la web se comporta de forma incoherente (p. ej. se ve la home real pero sin Nav, o redirige pero muestra contenido).
- El repo de Vercel despliega producción desde la rama `main`, por eso se hace push directo a `main`.
- El contenido/animación de la pantalla (titular, email de contacto, fondo ASCII) se edita en `src/components/ui/UnderConstruction.tsx`.
