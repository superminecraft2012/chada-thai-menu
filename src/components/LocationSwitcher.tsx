"use client";

import { usePathname, useRouter } from "next/navigation";

const locations = [
  { id: "lynnwood", name: "Lynnwood", path: "/lynnwood" },
  { id: "seattle", name: "Seattle", path: "/seattle" },
];

export default function LocationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Determine current location from path
  const getCurrentLocation = () => {
    if (pathname.startsWith("/seattle")) return "seattle";
    if (pathname.startsWith("/lynnwood")) return "lynnwood";
    return null; // On home page
  };
  
  const currentLocation = getCurrentLocation();

  // Don't show switcher on home page
  if (!currentLocation) return null;

  const handleSwitch = (locationId: string) => {
    if (locationId === currentLocation) return;
    
    // Get the current path without the location prefix
    const pathWithoutLocation = pathname.replace(/^\/(lynnwood|seattle)/, "") || "";
    
    // Navigate to the same page in the other location
    router.push(`/${locationId}${pathWithoutLocation}`);
  };

  return (
    <div className="bg-[#5C0000] text-white no-print">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center py-2 gap-1">
          <span className="text-xs text-white/60 mr-3 uppercase tracking-wider">Location:</span>
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleSwitch(location.id)}
              className={`px-4 py-1.5 text-sm font-medium rounded transition-all ${
                currentLocation === location.id
                  ? "bg-[#D4AF37] text-[#5C0000]"
                  : "bg-[#8B0000] text-white/80 hover:bg-[#8B0000]/80 hover:text-white"
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
