"use client";

import { usePathname, useRouter } from "next/navigation";

const locations = [
  { id: "lynnwood", name: "Lynnwood", path: "" },
  { id: "seattle", name: "Seattle", path: "/seattle" },
];

export default function LocationSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isSeattle = pathname.startsWith("/seattle");
  const currentLocation = isSeattle ? "seattle" : "lynnwood";

  const handleSwitch = (locationId: string) => {
    if (locationId === currentLocation) return;
    
    if (locationId === "seattle") {
      // Going to Seattle - add /seattle prefix
      const currentPath = pathname === "/" ? "" : pathname;
      router.push(`/seattle${currentPath}`);
    } else {
      // Going to Lynnwood - remove /seattle prefix
      const newPath = pathname.replace(/^\/seattle/, "") || "/";
      router.push(newPath);
    }
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
