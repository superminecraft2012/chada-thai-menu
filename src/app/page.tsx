import Link from "next/link";
import { menuData } from "@/data/menuData";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        {/* Logo placeholder */}
        <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8B0000] to-[#5C0000] flex items-center justify-center shadow-xl border-4 border-[#D4AF37]">
          <div className="text-center">
            <span className="text-3xl font-bold text-[#D4AF37]">CT</span>
            <p className="text-xs text-white/80">EST. LYNNWOOD</p>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-[#8B0000] mb-4">
          Chada Thai
        </h1>
        <p className="text-xl text-[#5C0000] mb-2">Lynnwood</p>
        <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the authentic flavors of Thailand with our carefully crafted dishes, 
          made with fresh ingredients and traditional recipes.
        </p>
      </div>

      {/* Menu Categories Grid */}
      <h2 className="text-3xl font-bold text-[#8B0000] text-center mb-8">
        Our Menu
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuData.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden border border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Category image placeholder */}
            <div className="h-32 bg-gradient-to-br from-[#8B0000]/20 to-[#D4AF37]/20 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#8B0000]/30 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            
            <div className="p-4 text-center">
              <h3 className="font-bold text-[#8B0000] group-hover:text-[#5C0000] transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {category.items.length} items
              </p>
            </div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#D4AF37] transform rotate-45 translate-x-4 -translate-y-4"></div>
          </Link>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-16 text-center bg-[#8B0000] rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
          Visit Us Today
        </h2>
        <p className="text-white/80 max-w-xl mx-auto">
          Browse our menu categories above to see our full selection of 
          authentic Thai dishes. Click on any category to view all items.
        </p>
      </div>
    </div>
  );
}
