"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "en" ? "en" : "es";

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-start justify-center px-6 md:px-12 pt-40 pb-24 max-w-[1400px] mx-auto">
      <p className="section-label mb-6">{"// Error"}</p>
      <h1
        className="font-archivo font-black text-cream mb-6"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.03em", lineHeight: 0.92 }}
      >
        {locale === "es" ? "Algo salió mal." : "Something went wrong."}
      </h1>
      <p className="font-archivo text-cream/40 text-base mb-10 max-w-md leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
        {locale === "es"
          ? "Se produjo un error inesperado. Puedes intentarlo de nuevo o volver al inicio."
          : "An unexpected error occurred. You can try again or go back home."}
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-accent text-cream font-archivo font-semibold px-6 py-3 text-sm hover:bg-cream hover:text-base transition-colors duration-200"
          style={{ letterSpacing: "-0.02em" }}
        >
          {locale === "es" ? "Intentar de nuevo" : "Try again"}
        </button>
        <Link
          href={`/${locale}`}
          className="border border-cream/20 text-cream/60 font-archivo text-sm px-6 py-3 hover:text-cream hover:border-cream/40 transition-colors duration-200"
          style={{ letterSpacing: "-0.02em" }}
        >
          {locale === "es" ? "← Inicio" : "← Home"}
        </Link>
      </div>
    </div>
  );
}
