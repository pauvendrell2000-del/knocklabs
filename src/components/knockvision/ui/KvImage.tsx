import NextImage from "next/image";
import type { KvImage as KvImageType, KvRatio } from "@/data/knockvision-projects";
import KvPlaceholder from "./KvPlaceholder";

const RATIO_TO_CLASS: Record<KvRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/5":  "aspect-[4/5]",
  "1/1":  "aspect-square",
  "3/4":  "aspect-[3/4]",
  "9/16": "aspect-[9/16]",
};

export default function KvImage({
  image,
  className = "",
  priority = false,
  sizes = "100vw",
}: {
  image: KvImageType;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const ratio = image.ratio ?? "4/5";

  if (image.src.startsWith("placeholder://")) {
    return <KvPlaceholder label={image.alt} ratio={ratio} className={className} />;
  }

  return (
    <div
      className={`relative w-full ${RATIO_TO_CLASS[ratio]} overflow-hidden ${className}`}
      style={{ backgroundColor: "#D8D3C8" }}
    >
      <NextImage
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
      />
    </div>
  );
}
