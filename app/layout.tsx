import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rizzer.io'),
  title: {
    default: "Rizzer - Your AI Dating Coach | Master Modern Dating with Confidence",
    template: "%s | Rizzer"
  },
  description: "Rizzer combines AI intelligence with dating psychology to give you personalized conversation starters, date ideas, and relationship insights that actually work. Download now for iOS and Android.",
  keywords: [
    "dating app",
    "AI dating coach",
    "conversation starters",
    "date ideas",
    "relationship advice",
    "dating tips",
    "AI dating assistant",
    "dating psychology",
    "modern dating",
    "dating confidence"
  ],
  authors: [{ name: "Cyriac Zeh", url: "https://www.linkedin.com/in/cyriac-zeh/" }],
  creator: "Cyriac Zeh",
  publisher: "Rizzer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rizzer.io",
    siteName: "Rizzer",
    title: "Rizzer - Your AI Dating Coach",
    description: "Master modern dating with AI-powered conversation starters, personalized date ideas, and intelligent relationship management.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rizzer - Your AI Dating Coach",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizzer - Your AI Dating Coach",
    description: "Master modern dating with confidence using AI-powered tools.",
    images: ["/og-image.png"],
    creator: "@rizzerapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://rizzer.io" />
        <meta name="theme-color" content="#FE3C72" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
