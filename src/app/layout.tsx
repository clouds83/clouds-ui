import "~/globals.css";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "~/structure/Footer";
import Header from "~/structure/Header";
import Sidebar from "~/structure/Sidebar";
import Container from "~/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "clouds/ui",
  description: "My personal design system",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="flex flex-col bg-gray-50">
        <Header />
        <Container className="mt-14 min-h-[calc(100dvh-3.5rem)] bg-blue-300 md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6 xl:mt-16 xl:min-h-[calc(100dvh-4rem)]">
          <Sidebar></Sidebar>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
