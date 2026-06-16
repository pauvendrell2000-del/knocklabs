import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Loader from "@/components/ui/Loader";
import GlobalChrome from "@/components/ui/GlobalChrome";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <SmoothScroll />
      <ScrollToTop />
      <Loader />
      <div className="relative">
        <CustomCursor />
        <GlobalChrome>{children}</GlobalChrome>
      </div>
      <Analytics />
    </NextIntlClientProvider>
  );
}
