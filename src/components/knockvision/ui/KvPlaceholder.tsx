import type { KvRatio } from "@/data/knockvision-projects";

const RATIO_TO_CLASS: Record<KvRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/5":  "aspect-[4/5]",
  "1/1":  "aspect-square",
  "3/4":  "aspect-[3/4]",
  "9/16": "aspect-[9/16]",
};

export default function KvPlaceholder({
  label,
  ratio = "4/5",
  className = "",
}: {
  label: string;
  ratio?: KvRatio;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${RATIO_TO_CLASS[ratio]} overflow-hidden ${className}`}
      style={{ backgroundColor: "#D8D3C8" }}   // warm stone — clearly distinct from cream
    >
      {/* Subtle diagonal texture via gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(0,0,0,0.025) 40px, rgba(0,0,0,0.025) 41px)",
        }}
      />
      <div className="absolute inset-0 flex items-end p-5 md:p-7">
        <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#1A1A1A]/40">
          {label}
        </span>
      </div>
    </div>
  );
}
