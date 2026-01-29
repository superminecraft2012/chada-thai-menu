interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

export default function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="py-3 border-b border-[#D4AF37]/20 last:border-b-0">
      <div className="flex justify-between items-baseline gap-2">
        <h3 className="text-lg font-semibold text-[#8B0000]">{name}</h3>
        <div className="flex-1 border-b border-dotted border-[#8B0000]/30 mx-2 mb-1"></div>
        <span className="text-lg font-bold text-[#5C0000] whitespace-nowrap">{price}</span>
      </div>
      {description && (
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
