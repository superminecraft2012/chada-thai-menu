import Image from "next/image";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  spiceLevel?: number;
  vegan?: boolean;
  glutenFree?: boolean;
}

export default function MenuItem({ name, description, price, spiceLevel, vegan, glutenFree }: MenuItemProps) {
  return (
    <div className="py-3 border-b border-[#D4AF37]/30 last:border-b-0">
      <div className="flex justify-between items-baseline gap-2">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        {/* Dietary indicators */}
        {(vegan || glutenFree) && (
          <span className="flex items-center gap-1 shrink-0 relative -top-[1px]">
            {vegan && (
              <span className="w-6 h-6 rounded-full border-2 border-white text-white text-xs font-bold flex items-center justify-center">
                V
              </span>
            )}
            {glutenFree && (
              <span className="w-6 h-6 rounded-full border-2 border-white text-white text-[10px] font-bold flex items-center justify-center">
                GF
              </span>
            )}
          </span>
        )}
        {/* Spice level indicators */}
        {spiceLevel && spiceLevel > 0 && (
          <span className="flex items-center gap-0.5 shrink-0 -mr-[10px]">
            {Array.from({ length: spiceLevel }).map((_, i) => (
              <Image
                key={i}
                src="/PepperIcon.png"
                alt="spicy"
                width={32}
                height={32}
                className="inline-block relative top-[10px] -left-[10px]"
              />
            ))}
          </span>
        )}
        <div className="flex-1 border-b border-dotted border-[#D4AF37]/50 mx-2 mb-1"></div>
        <span className="text-lg font-bold text-[#D4AF37] whitespace-nowrap">{price}</span>
      </div>
      {description && (
        <p className="text-sm text-white/80 mt-1 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
