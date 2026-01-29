import { notFound } from "next/navigation";
import { menuData, getCategoryBySlug } from "@/data/menuData";
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
      title: "Category Not Found - Chada Thai Lynnwood",
    };
  }

  return {
    title: `${category.name} - Chada Thai Lynnwood`,
    description: `View our ${category.name.toLowerCase()} menu at Chada Thai Lynnwood. ${category.items.length} delicious items to choose from.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 page-break">
      <CategoryHeader name={category.name} note={category.note} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item, index) => (
          <MenuItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {/* Navigation between categories */}
      <div className="mt-12 flex justify-between items-center border-t border-[#D4AF37]/30 pt-8">
        {(() => {
          const currentIndex = menuData.findIndex((c) => c.slug === category.slug);
          const prevCategory = currentIndex > 0 ? menuData[currentIndex - 1] : null;
          const nextCategory = currentIndex < menuData.length - 1 ? menuData[currentIndex + 1] : null;

          return (
            <>
              {prevCategory ? (
                <a
                  href={`/${prevCategory.slug}`}
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
                  href={`/${nextCategory.slug}`}
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
