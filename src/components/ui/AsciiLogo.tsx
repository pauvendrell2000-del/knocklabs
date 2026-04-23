"use client";

type Props = {
  className?: string;
  color?: string;
  opacity?: number;
};

const BORDER = "+" + "-".repeat(42) + "+";

export default function AsciiLogo({ className = "", color = "#FF4C00", opacity = 1 }: Props) {
  return (
    <div className={`${className}`} aria-hidden="true" style={{ opacity }}>
      <pre
        className="font-mono text-[10px] leading-[1.2] select-none pointer-events-none whitespace-pre"
        style={{ color }}
      >
        {BORDER}
        {"\n"}
        {"|  KNOCK LABS // CREATIVE STUDIO [ES]    |"}
        {"\n"}
        {BORDER}
      </pre>
      <div
        className="font-archivo font-black mt-3 select-none"
        style={{
          color,
          fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
          letterSpacing: "-0.04em",
          lineHeight: 0.9,
        }}
      >
        Knock
        <br />
        <span style={{ color: "rgba(242,240,235,0.18)" }}>Labs.</span>
      </div>
    </div>
  );
}
