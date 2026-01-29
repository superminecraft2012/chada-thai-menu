"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/data/menuData";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#8B0000] shadow-lg sticky top-0 z-50 no-print">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#D4AF37] font-serif">Chada Thai</span>
            <span className="text-xs text-white/70">Lynnwood</span>
          </Link>
          
          <button 
            onClick={() => window.print()}
            className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
        
        {/* Category navigation */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-1 min-w-max">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                pathname === "/"
                  ? "bg-[#FFF8F0] text-[#8B0000] font-medium"
                  : "text-white/80 hover:bg-[#5C0000] hover:text-white"
              }`}
            >
              Cover
            </Link>
            {menuData.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className={`px-3 py-1.5 rounded text-sm transition-colors whitespace-nowrap ${
                  pathname === `/${category.slug}`
                    ? "bg-[#FFF8F0] text-[#8B0000] font-medium"
                    : "text-white/80 hover:bg-[#5C0000] hover:text-white"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
