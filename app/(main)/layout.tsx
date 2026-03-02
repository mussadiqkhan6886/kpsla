import Footer from "@/components/UserComp/Footer";
import Header from "@/components/UserComp/Header";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#2563eb", // Your brand blue
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "KPSLA | Student Leadership Academy Khyber Pakhtunkhwa",
    template: "%s | KPSLA Pakistan",
  },
  description: "KPSLA is the premier Student Leadership Academy in KP, Pakistan. We empower youth through visionary mentorship, leadership workshops, and community engagement programs.",
  keywords: [
    "Student Leadership Pakistan",
    "KPSLA Mardan",
    "Youth Leadership Programs KP",
    "Student Organizations Khyber Pakhtunkhwa",
    "Leadership Skills Workshops",
    "Educational Mentorship Pakistan",
    "Youth Empowerment Initiatives",
    "Peshawar Student Leaders",
    "Leadership Academy KP",
  ],
  authors: [{ name: "KPSLA Team" }],
  creator: "KPSLA",
  publisher: "KPSLA Academy",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://www.kpsla.org", // Replace with your live URL
    siteName: "KPSLA Academy",
    title: "KPSLA | Bridging the Gap Between Potential & Achievement",
    description: "Join the most influential student leadership movement in Khyber Pakhtunkhwa. Transform your potential into leadership achievement.",
    images: [
      {
        url: "/hero.jpg", // Ensure this exists in your public folder
        width: 1200,
        height: 630,
        alt: "KPSLA Student Leadership Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KPSLA | Empowering Future Leaders of Pakistan",
    description: "Developing confident, responsible, and visionary student leaders through structured programs.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}