import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const vazirFont = localFont({
  src: "../../public/fonts/Vazirmatn-Regular.woff2",
});

export const metadata: Metadata = {
  title: "شبکه هوشمند",
  description: "گروه توسعه آریا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={vazirFont.className}>{children}</body>
    </html>
  );
}
