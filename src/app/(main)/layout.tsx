import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
    </html>
  );
}
