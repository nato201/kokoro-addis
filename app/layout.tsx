import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOKORO",
  description: "Kokoro Addis Japanese restaurant in the vibrant Bole area of Addis Ababa.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/kokoro-logo-vertical-black.png",
    shortcut: "/kokoro-logo-vertical-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
