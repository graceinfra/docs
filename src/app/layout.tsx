import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  title: "Grace – Hybrid Mainframe + Cloud Workflows",
  description:
    "Grace is an open source orchestration toolchain for cross-platform mainframe and cloud pipelines, defined in YAML.",
  openGraph: {
    title: "Grace – Hybrid Mainframe + Cloud Workflows",
    description:
      "Orchestrate COBOL jobs, shell scripts, and cloud pipelines from one YAML file.",
    url: "https://graceinfra.org",
    siteName: "Grace",
    images: [
      {
        url: "https://graceinfra.org/og-card.png",
        width: 1200,
        height: 630,
        alt: "Grace – Hybrid Mainframe + Cloud Workflows",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace – Hybrid Mainframe + Cloud Workflows",
    description:
      "Orchestrate COBOL jobs, shell scripts, and cloud pipelines from one YAML file.",
    images: ["https://graceinfra.org/og-card.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${ibmPlexSans.className}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicondark.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
