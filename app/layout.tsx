import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyperStream CCTV APP",
  description: "Created by US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:text-slate-300 dark:bg-slate-900 bg-slate-400 subpixel-antialiased">
        <section>
          <Header />
        </section>
        <main className="max-w-8xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
