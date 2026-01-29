export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  name: string;
  slug: string;
  note?: string;
  items: MenuItem[];
}

// Seattle menu - add items here
export const menuData: MenuCategory[] = [];

export const getCategoryBySlug = (slug: string): MenuCategory | undefined => {
  return menuData.find((category) => category.slug === slug);
};
