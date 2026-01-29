import { notFound } from "next/navigation";
import { menuData, getCategoryBySlug } from "@/data/seattleMenu";
import MenuItem from "@/components/MenuItem";
import CategoryHeader from "@/components/CategoryHeader";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return menuData.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  
  if (!category) {
    return {
      title: "Category Not Found - Chada Thai Seattle",
    };
  }

  return {
    title: `${category.name} - Chada Thai Seattle`,
    description: `View our ${category.name.toLowerCase()} menu at Chada Thai Seattle. ${category.items.length} delicious items to choose from.`,
  };
}

export default async function SeattleCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 print:py-6 print:px-4 page-break">
      {/* Menu header with restaurant name */}
      <div className="text-center mb-6 print:mb-4">
        <h2 className="text-2xl font-bold text-[#D4AF37] tracking-wider">CHADA THAI</h2>
        <p className="text-sm text-[#8B0000]/70 tracking-widest">SEATTLE</p>
      </div>

      <CategoryHeader name={category.name} note={category.note} />

      {/* Single column layout for menu items */}
      <div className="max-w-2xl mx-auto">
        {category.items.map((item, index) => (
          <MenuItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      {/* Decorative footer */}
      <div className="flex items-center justify-center gap-4 mt-10 print:mt-6">
        <div className="w-20 h-px bg-[#D4AF37]/50"></div>
        <div className="text-[#D4AF37] text-xl">✦</div>
        <div className="w-20 h-px bg-[#D4AF37]/50"></div>
      </div>

      {/* Navigation between categories - hidden in print */}
      <div className="mt-8 flex justify-between items-center border-t border-[#D4AF37]/30 pt-6 no-print">
        {(() => {
          const currentIndex = menuData.findIndex((c) => c.slug === category.slug);
          const prevCategory = currentIndex > 0 ? menuData[currentIndex - 1] : null;
          const nextCategory = currentIndex < menuData.length - 1 ? menuData[currentIndex + 1] : null;

          return (
            <>
              {prevCategory ? (
                <a
                  href={`/seattle/${prevCategory.slug}`}
                  className="flex items-center gap-2 text-[#8B0000] hover:text-[#5C0000] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>{prevCategory.name}</span>
                </a>
              ) : (
                <div></div>
              )}
              {nextCategory ? (
                <a
                  href={`/seattle/${nextCategory.slug}`}
                  className="flex items-center gap-2 text-[#8B0000] hover:text-[#5C0000] transition-colors"
                >
                  <span>{nextCategory.name}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <div></div>
              )}
            </>
          );
        })()}
      </div>
    </div>
  );
}
