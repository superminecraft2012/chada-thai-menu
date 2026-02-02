"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData as lynnwoodMenu } from "@/data/lynnwoodMenu";
import { menuData as seattleMenu } from "@/data/seattleMenu";
import ExportButton from "./ExportButton";

export default function Navigation() {
  const pathname = usePathname();
  
  // Determine current location from path
  const getLocationInfo = () => {
    if (pathname.startsWith("/seattle")) return { basePath: "/seattle", name: "Seattle" };
    if (pathname.startsWith("/lynnwood")) return { basePath: "/lynnwood", name: "Lynnwood" };
    return null; // On home page
  };
  
  const locationInfo = getLocationInfo();
  
  // Get the correct menu data for the current location
  const menuData = locationInfo?.name === "Seattle" ? seattleMenu : lynnwoodMenu;
  
  // Check if current path matches, accounting for location prefix
  const isActive = (path: string) => {
    if (!locationInfo) return false;
    const fullPath = locationInfo.basePath + path;
    return pathname === fullPath;
  };

  return (
    <nav className="bg-[#3D0000] shadow-lg sticky top-0 z-50 no-print">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href={locationInfo?.basePath || "/"} className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#D4AF37] font-serif">Chada Thai</span>
            {locationInfo && <span className="text-xs text-white/70">{locationInfo.name}</span>}
          </Link>
          
          {locationInfo && <ExportButton />}
        </div>
        
        {/* Category navigation - only show when in a location */}
        {locationInfo && (
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex gap-1 min-w-max">
              <Link
                href={locationInfo.basePath}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  pathname === locationInfo.basePath
                    ? "bg-[#D4AF37] text-[#3D0000] font-medium"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                Cover
              </Link>
              {menuData.map((category) => (
                <Link
                  key={category.slug}
                  href={`${locationInfo.basePath}/${category.slug}`}
                  className={`px-3 py-1.5 rounded text-sm transition-colors whitespace-nowrap ${
                    isActive(`/${category.slug}`)
                      ? "bg-[#D4AF37] text-[#3D0000] font-medium"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
