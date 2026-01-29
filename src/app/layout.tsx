import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Chada Thai Lynnwood - Menu",
  description: "Authentic Thai cuisine in Lynnwood. View our full menu of appetizers, soups, salads, curries, noodles, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-[#8B0000] text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-2">Chada Thai</h2>
            <p className="text-white/80">Lynnwood, WA</p>
            <p className="text-sm text-white/60 mt-4">
              Thank you for dining with us!
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
