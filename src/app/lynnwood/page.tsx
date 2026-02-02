import Link from "next/link";
import { menuData } from "@/data/lynnwoodMenu";

export default function LynnwoodHome() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 print:py-6">
      {/* Cover Page / Title */}
      <div className="text-center min-h-[70vh] flex flex-col justify-center">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-24 h-px bg-[#D4AF37]"></div>
          <div className="w-3 h-3 rotate-45 bg-[#D4AF37]"></div>
          <div className="w-24 h-px bg-[#D4AF37]"></div>
        </div>

        {/* Logo placeholder */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-[#D4AF37] bg-gradient-to-br from-[#8B0000] to-[#3D0000] flex items-center justify-center shadow-xl print:shadow-none">
          <div className="text-center">
            <span className="text-4xl font-bold text-[#D4AF37] font-serif">CT</span>
            <p className="text-xs text-white/80 tracking-widest mt-1">EST.</p>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-serif">
          Chada Thai
        </h1>
        <p className="text-xl text-[#D4AF37] tracking-[0.3em] uppercase mb-6">Lynnwood</p>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-24 h-px bg-[#D4AF37]"></div>
          <div className="text-[#D4AF37] text-2xl">✦</div>
          <div className="w-24 h-px bg-[#D4AF37]"></div>
        </div>

        <p className="text-lg text-white/80 max-w-lg mx-auto font-serif italic">
          Authentic Thai Cuisine
        </p>
      </div>

      {/* Menu Index */}
      <div className="mt-16 print:mt-8">
        <h2 className="text-2xl font-bold text-[#D4AF37] text-center mb-8 font-serif">
          Menu
        </h2>
        
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {menuData.map((category) => (
            <Link
              key={category.slug}
              href={`/lynnwood/${category.slug}`}
              className="text-center py-3 px-4 text-white hover:text-[#D4AF37] hover:bg-white/10 rounded transition-colors border-b border-[#D4AF37]/30"
            >
              <span className="font-serif">{category.name}</span>
              <span className="text-xs text-white/60 block mt-1">{category.items.length} items</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-20 h-px bg-[#D4AF37]/50"></div>
          <div className="text-[#D4AF37] text-xl">✦</div>
          <div className="w-20 h-px bg-[#D4AF37]/50"></div>
        </div>
        <p className="text-sm text-white/60 italic">
          Thank you for dining with us
        </p>
      </div>
    </div>
  );
}
