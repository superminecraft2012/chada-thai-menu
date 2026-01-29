interface CategoryHeaderProps {
  name: string;
  note?: string;
}

export default function CategoryHeader({ name, note }: CategoryHeaderProps) {
  return (
    <div className="text-center mb-8 print:mb-6">
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
