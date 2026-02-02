import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="text-center min-h-[80vh] flex flex-col justify-center">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-24 h-px bg-[#D4AF37]"></div>
          <div className="w-3 h-3 rotate-45 bg-[#D4AF37]"></div>
          <div className="w-24 h-px bg-[#D4AF37]"></div>
        </div>

        {/* Logo */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-[#D4AF37] bg-gradient-to-br from-[#8B0000] to-[#3D0000] flex items-center justify-center shadow-xl">
          <div className="text-center">
            <span className="text-4xl font-bold text-[#D4AF37] font-serif">CT</span>
            <p className="text-xs text-white/80 tracking-widest mt-1">EST.</p>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-serif">
          Chada Thai
        </h1>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-24 h-px bg-[#D4AF37]"></div>
          <div className="text-[#D4AF37] text-2xl">✦</div>
          <div className="w-24 h-px bg-[#D4AF37]"></div>
        </div>

        <p className="text-lg text-white/80 max-w-lg mx-auto font-serif italic mb-12">
          Select a Location
        </p>

        {/* Location buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lynnwood"
            className="px-8 py-4 bg-[#D4AF37] text-[#5C0000] text-xl font-serif font-bold rounded-lg hover:bg-[#F4E4BC] transition-colors shadow-lg"
          >
            Lynnwood
          </Link>
          <Link
            href="/seattle"
            className="px-8 py-4 bg-[#D4AF37] text-[#5C0000] text-xl font-serif font-bold rounded-lg hover:bg-[#F4E4BC] transition-colors shadow-lg"
          >
            Seattle
          </Link>
        </div>
      </div>
    </div>
  );
}
