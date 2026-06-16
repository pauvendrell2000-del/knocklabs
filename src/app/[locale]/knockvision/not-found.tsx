import Link from "next/link";

// No access to locale from notFound() context, so we default to /es
export default function KnockvisionNotFound() {
  return (
    <div className="bg-cream text-[#1A1A1A] min-h-[80vh] flex flex-col justify-end">
      <div className="max-w-[1920px] mx-auto px-6 md:px-8 lg:px-12 pb-24 md:pb-40 pt-40">
        <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-10">
          404
        </p>
        <h1
          className="font-archivo font-black"
          style={{ fontSize: "clamp(4rem, 14vw, 12rem)", lineHeight: 0.88, letterSpacing: "-0.05em" }}
        >
          Not
          <br />
          <span className="text-[#1A1A1A]/30">found.</span>
        </h1>
        <p
          className="mt-10 max-w-md font-archivo text-[#1A1A1A]/60"
          style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)", letterSpacing: "-0.01em", lineHeight: 1.45 }}
        >
          Esta página no existe o ha sido movida.
        </p>
        <Link
          href="/es/knockvision"
          className="mt-10 inline-flex font-mono text-[11px] tracking-[0.16em] uppercase text-[#1A1A1A] border-b border-[#1A1A1A] pb-0.5 hover:opacity-60 transition-opacity duration-200"
        >
          ← Volver a Knockvision
        </Link>
      </div>
    </div>
  );
}
