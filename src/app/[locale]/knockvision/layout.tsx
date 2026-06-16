import KvNav from "@/components/knockvision/ui/KvNav";
import KvFooter from "@/components/knockvision/ui/KvFooter";

export default function KnockvisionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="kv-root bg-cream text-[#1A1A1A] min-h-screen">
      <KvNav />
      {children}
      <KvFooter locale={params.locale} />
    </div>
  );
}
