interface CategoryHeaderProps {
  name: string;
  note?: string;
  imageSlot?: boolean;
}

export default function CategoryHeader({ name, note, imageSlot = true }: CategoryHeaderProps) {
  return (
    <div className="text-center mb-8 print:mb-6">
      {/* Optional image slot at top of category */}
      {imageSlot && (
        <div className="w-full max-w-md mx-auto h-48 mb-6 rounded-lg bg-gradient-to-br from-[#8B0000]/5 to-[#D4AF37]/10 border-2 border-dashed border-[#D4AF37]/40 flex items-center justify-center print:hidden">
          <p className="text-sm text-[#8B0000]/40 italic">Category image (optional)</p>
        </div>
      )}
      
      {/* Decorative top border */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-16 h-px bg-[#D4AF37]"></div>
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
        <div className="w-16 h-px bg-[#D4AF37]"></div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-3 font-serif">
        {name}
      </h1>
      
      {/* Decorative bottom border */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-16 h-px bg-[#D4AF37]"></div>
        <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
        <div className="w-16 h-px bg-[#D4AF37]"></div>
      </div>
      
      {note && (
        <p className="text-[#5C0000] italic text-sm bg-[#D4AF37]/10 inline-block px-4 py-2 rounded">
          {note}
        </p>
      )}
    </div>
  );
}
