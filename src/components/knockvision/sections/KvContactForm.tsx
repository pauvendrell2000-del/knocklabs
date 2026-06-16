"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import KvReveal from "@/components/knockvision/ui/KvReveal";

type Status = "idle" | "sending" | "ok" | "error";

export default function KvContactForm() {
  const t = useTranslations("knockvision.contactPage");
  const [status, setStatus] = useState<Status>("idle");
  const mountedAt = useRef(Date.now());

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    website: "",
  });

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          message: form.message,
          projectType: form.projectType || undefined,
          website: form.website,
          source: "knockvision",
          elapsed: Date.now() - mountedAt.current,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      setForm({ name: "", email: "", company: "", projectType: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#1A1A1A]/20 py-3.5 font-archivo text-base text-[#1A1A1A] placeholder-[#1A1A1A]/35 focus:outline-none focus:border-kv-accent transition-colors duration-200";

  return (
    <section className="bg-cream text-[#1A1A1A] pt-36 md:pt-48 pb-24 md:pb-48">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">

        <KvReveal variant="fade" delay={0.1}>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-8">
            {t("label")}
          </p>
        </KvReveal>

        <KvReveal variant="up" delay={0.15} duration={0.9}>
          <h1
            className="font-archivo font-black mb-16 md:mb-24"
            style={{ fontSize: "clamp(2.75rem, 8vw, 7rem)", lineHeight: 0.9, letterSpacing: "-0.045em" }}
          >
            {t("title")}
          </h1>
        </KvReveal>

        {status === "ok" ? (
          <KvReveal variant="up" delay={0} duration={0.7}>
            <div className="py-16 border-t border-[#1A1A1A]/10">
              <p
                className="font-archivo font-black"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "-0.035em" }}
              >
                {t("ok")}
              </p>
            </div>
          </KvReveal>
        ) : (
          <KvReveal variant="up" delay={0.25} duration={0.7}>
            <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-10 md:grid-cols-2">
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange("website")}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              <label className="block">
                <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-1">
                  {t("name")} *
                </span>
                <input required type="text" value={form.name} onChange={onChange("name")} className={inputClass} />
              </label>

              <label className="block">
                <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-1">
                  {t("email")} *
                </span>
                <input required type="email" value={form.email} onChange={onChange("email")} className={inputClass} />
              </label>

              <label className="block">
                <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-1">
                  {t("company")}
                </span>
                <input type="text" value={form.company} onChange={onChange("company")} className={inputClass} />
              </label>

              <label className="block">
                <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-1">
                  {t("projectType")}
                </span>
                <select value={form.projectType} onChange={onChange("projectType")} className={`${inputClass} appearance-none cursor-pointer`}>
                  <option value="">—</option>
                  <option value="Architectural Visualization">{t("typeArch")}</option>
                  <option value="Product Rendering">{t("typeProduct")}</option>
                  <option value="Interior & Retail">{t("typeInterior")}</option>
                  <option value="Campaign Imagery">{t("typeCampaign")}</option>
                  <option value="AI + 3D Workflow">{t("typeAi")}</option>
                </select>
              </label>

              <label className="block md:col-span-2">
                <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/40 mb-1">
                  {t("message")} *
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange("message")}
                  className={`${inputClass} resize-none`}
                />
              </label>

              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-[#1A1A1A]/10">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex font-archivo font-semibold px-7 py-3.5 text-sm bg-kv-accent text-[#1A1A1A] hover:bg-[#57ABD0] transition-colors duration-200 disabled:opacity-50"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {status === "sending" ? t("sending") : t("submit")}
                </button>
                {status === "error" && (
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#1A1A1A]/60">
                    {t("error")}
                  </span>
                )}
              </div>
            </form>
          </KvReveal>
        )}
      </div>
    </section>
  );
}
