import Image from "next/image";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#D4AF37]/30 hover:shadow-lg transition-shadow duration-300">
      {/* Image placeholder - ready for photos */}
      <div className="relative h-48 bg-gradient-to-br from-[#8B0000]/10 to-[#D4AF37]/20 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <svg
              className="w-16 h-16 mx-auto text-[#8B0000]/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs text-[#8B0000]/40 mt-2">Photo coming soon</p>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-lg font-bold text-[#8B0000]">{name}</h3>
          <span className="text-lg font-bold text-[#5C0000] whitespace-nowrap">{price}</span>
        </div>
        {description && (
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
