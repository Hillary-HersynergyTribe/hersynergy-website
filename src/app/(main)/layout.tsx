import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hersynergy Tribe",
  description:
    "The premier community equipping women to navigate mid - senior level careers with confidence and connection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header></Header>
        <div className="pt-58px">{children}</div>
        <Footer></Footer>
      </body>

      <Script id="mcjs" strategy="lazyOnload">
        {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/7a5f6f6f4f4f4f4f4f4f4f4f4/7a5f6f6f4f4f4f4f4f4f4f4f4.js");`}
      </Script>

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />

      <Script strategy="lazyOnload">
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
					page_path: window.location.pathname,
					});
				`}
      </Script>
    </html>
  );
}
