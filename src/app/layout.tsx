import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "./icon.png",
  title: "Life Statistic",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
