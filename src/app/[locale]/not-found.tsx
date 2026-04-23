import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center px-6 md:px-12 pt-40 pb-24 max-w-[1400px] mx-auto">
      <p className="section-label mb-6">{"// 404"}</p>
      <h1
        className="font-archivo font-black text-cream mb-6"
        style={{ fontSize: "clamp(5rem, 15vw, 12rem)", letterSpacing: "-0.04em", lineHeight: 0.85 }}
      >
        404
      </h1>
      <p className="font-archivo text-cream/40 text-base mb-10 max-w-md leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
        Esta página no existe. Puede que se haya movido o que la URL sea incorrecta.
      </p>
      <Link
        href="/es"
        className="bg-accent text-cream font-archivo font-semibold px-6 py-3 text-sm hover:bg-cream hover:text-base transition-colors duration-200"
        style={{ letterSpacing: "-0.02em" }}
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}
