import type { Metadata } from "next";
import "./globals.css";
import LocationSwitcher from "@/components/LocationSwitcher";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Chada Thai - Menu",
  description: "Authentic Thai cuisine in Lynnwood and Seattle. View our full menu of appetizers, soups, salads, curries, noodles, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LocationSwitcher />
        <Navigation />
        <main className="min-h-screen bg-[#3D0000] print:bg-white">
          {children}
        </main>
        <footer className="bg-[#3D0000] text-white py-6 no-print">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-[#D4AF37] font-serif">Chada Thai</h2>
            <p className="text-white/70 text-sm">Lynnwood & Seattle, WA</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
