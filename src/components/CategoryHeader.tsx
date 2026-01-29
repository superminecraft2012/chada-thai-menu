interface CategoryHeaderProps {
  name: string;
  note?: string;
}

export default function CategoryHeader({ name, note }: CategoryHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-2">
        {name}
      </h1>
      <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
      {note && (
        <p className="text-[#5C0000] italic bg-[#D4AF37]/10 inline-block px-4 py-2 rounded-lg">
          {note}
        </p>
      )}
    </div>
  );
}
