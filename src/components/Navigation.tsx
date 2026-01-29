"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "@/data/menuData";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#8B0000] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#D4AF37]">Chada Thai</span>
            <span className="text-sm text-white/80">Lynnwood</span>
          </Link>
        </div>
        
        {/* Category navigation */}
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-1 min-w-max">
            <Link
              href="/"
              className={`px-3 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "bg-[#FFF8F0] text-[#8B0000]"
                  : "text-white/90 hover:bg-[#5C0000] hover:text-white"
              }`}
            >
              Home
            </Link>
            {menuData.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className={`px-3 py-2 rounded-t-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === `/${category.slug}`
                    ? "bg-[#FFF8F0] text-[#8B0000]"
                    : "text-white/90 hover:bg-[#5C0000] hover:text-white"
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
