export interface MenuItem {
  name: string;
  description: string;
  price: string;
  spiceLevel?: number;
}

export interface MenuCategory {
  name: string;
  slug: string;
  note?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Appetizers",
    slug: "appetizers",
    items: [
      {
        name: "Spring Rolls",
        description: "Mixed vegetables wrapped in egg roll wrappers, deep-fried. Served with special plum sauce.",
        price: "$11.45",
      },
      {
        name: "Pot Stickers",
        description: "Deep-fried wrapped seasoned chicken and vegetables served with gyoza sauce.",
        price: "$11.45",
      },
      {
        name: "Crab Rangoon",
        description: "Crispy imitation crabmeat blended with cream cheese and celery. Wrapped in thin crepe. Served with sweet & sour sauce.",
        price: "$12.45",
      },
      {
        name: "Fish Cake",
        description: "A blend of fish, curry paste, green beans, and sliced lime leaves. Served with spicy hot cucumber sauce.",
        price: "$13.45",
        spiceLevel: 1,
      },
      {
        name: "Coconut Prawns",
        description: "Deep-fried coconut prawns. Served with sweet and sour sauce.",
        price: "$11.45",
      },
      {
        name: "Crispy Garlic Wings",
        description: "Crispy chicken wings with garlic, served with a special sauce.",
        price: "$13.45",
      },
      {
        name: "Chicken Satay",
        description: "Grilled marinated chicken in coconut milk, curry powder, and garlic on skewers. Served with peanut sauce and cucumber salad.",
        price: "$12.45",
      },
      {
        name: "Moo Ping",
        description: "Grilled marinated pork served with tamarind dip.",
        price: "$12.45",
      },
      {
        name: "Fresh Rolls TV",
        description: "Vermicelli noodles, lettuce, cucumber, and basil. Wrapped in rice paper. Served with our special sauce.",
        price: "$11.45",
      },
      {
        name: "Fresh Rolls (Prawn)",
        description: "Vermicelli noodles, shrimp, lettuce, and basil. Wrapped in rice paper. Served with special sauce.",
        price: "$11.45",
      },
      {
        name: "Tofu Tod",
        description: "Deep-fried tofu. Served with house special sauce.",
        price: "$11.45",
      },
      {
        name: "Chive Cakes",
        description: "Pan-fried chive rice cakes. Served with house special sauce.",
        price: "$11.45",
      },
      {
        name: "Chiang Mai Sausage",
        description: "Grilled spicy Northern Thai sausage.",
        price: "$13.45",
        spiceLevel: 1,
      },
      {
        name: "Esan Sausage",
        description: "Grilled pork herb sausage.",
        price: "$13.45",
      },
      {
        name: "Fried Calamari",
        description: "Deep-fried calamari, served with spicy sauce.",
        price: "$13.45",
      },
      {
        name: "Fried Crispy Pork Belly",
        description: "Crispy pork belly, served with a special sauce.",
        price: "$13.45",
      },
      {
        name: "Chada Platter",
        description: "Variety of all-time favorite appetizers: Spring rolls, pot stickers, crab rangoon, and coconut prawns.",
        price: "$17.95",
      },
    ],
  },
  {
    name: "Soup",
    slug: "soup",
    note: "Choice of chicken, tofu or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Tom Yum",
        description: "Hot and sour soup with lemongrass, lime leaves, and chili paste.",
        price: "$16.45",
        spiceLevel: 1,
      },
      {
        name: "Tom Kha",
        description: "Coconut milk soup with mushrooms, lemongrass, onion, and lime leaves.",
        price: "$16.45",
      },
      {
        name: "Wonton Soup",
        description: "Chicken and shrimp in a wonton broth with bok choy, green onions, and cilantro. (Noodles +$2).",
        price: "$16.45",
      },
    ],
  },
  {
    name: "Salad",
    slug: "salad",
    items: [
      {
        name: "Papaya Salad",
        description: "Papaya salad with carrots, garlic, green beans, tomatoes, and roasted peanuts in lime & chili juice.",
        price: "$13.45",
      },
      {
        name: "Chada's Salad",
        description: "Lettuce, tomato, cucumber, and bean sprouts served with homemade peanut sauce dressing.",
        price: "$11.45",
      },
      {
        name: "Yum Woon Sen",
        description: "Ground chicken, glass noodles, onion, shrimp, cashew nuts, and tomatoes in lime chili sauce.",
        price: "$17.45",
        spiceLevel: 1,
      },
      {
        name: "Yum Beef",
        description: "Grilled beef in spicy lime juice, garnished with red onion, served on fresh lettuce.",
        price: "$16.45",
        spiceLevel: 1,
      },
      {
        name: "Yum Seafood",
        description: "Prawns, squids, mussels, and scallops with lemongrass, onion, and lettuce.",
        price: "$11.45",
        spiceLevel: 1,
      },
      {
        name: "Larb Gai",
        description: "Ground chicken in spicy lime juice, garnished with red and green onion and cilantro, served on fresh lettuce.",
        price: "$18.45",
      },
    ],
  },
  {
    name: "Chada's Seafood",
    slug: "chadas-seafood",
    items: [
      {
        name: "Chada's Seafood",
        description: "Prawns and scallops sautéed with broccoli, bamboo shoots, and bell peppers.",
        price: "$20.45",
      },
      {
        name: "Prawns Delight",
        description: "Prawns sautéed with mild yellow curry, onion, bell peppers, and green onion.",
        price: "$20.45",
      },
      {
        name: "Sizzling Fish",
        description: "Deep-fried boneless trout topped with spicy sauce.",
        price: "$21.45",
      },
      {
        name: "Fisherman Secret",
        description: "Seafood combination sautéed with onion, sweet basil, bell peppers, mushrooms, green beans, and spices.",
        price: "$20.45",
      },
      {
        name: "Phad Talay",
        description: "Seafood combination sautéed with mixed vegetables, fresh mushrooms, and spices.",
        price: "$20.45",
      },
    ],
  },
  {
    name: "Stir-Fried Dishes",
    slug: "stir-fried",
    note: "Choice of chicken, tofu or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Cashew Delight",
        description: "Sautéed cashew nuts, onion, red and green peppers, celery, pineapple, and carrots.",
        price: "$16.95",
      },
      {
        name: "Sautéed Eggplant",
        description: "Deep-fried eggplant stir-fried with bell peppers, carrots, soybean sauce, white pepper, and basil leaves.",
        price: "$16.95",
      },
      {
        name: "Swimming Rama",
        description: "Sautéed spinach topped with homemade delicious peanut sauce.",
        price: "$16.95",
      },
      {
        name: "Stir-Fried Broccoli",
        description: "Sautéed broccoli with oyster sauce.",
        price: "$16.95",
      },
      {
        name: "Phad Basil",
        description: "Sautéed onion, bell peppers, mushrooms, and fresh basil.",
        price: "$16.95",
      },
      {
        name: "Phad Ginger",
        description: "Sautéed ginger with onion, bell peppers, and mushrooms.",
        price: "$16.95",
      },
      {
        name: "Phad Prik Khing",
        description: "Stir-fried green beans, red and green bell peppers, sliced lime leaves, and tasty curry paste.",
        price: "$16.95",
      },
      {
        name: "Phad Garlic",
        description: "Stir-fried fresh garlic, black pepper, and onion. Served on a bed of steamed broccoli.",
        price: "$16.95",
      },
      {
        name: "Phad Green Bean",
        description: "Stir-fried fresh garlic, onion, and green beans.",
        price: "$16.95",
      },
      {
        name: "Black Pepper Beef",
        description: "Stir-fried beef, baby carrots, celery, onion, green onion, and black pepper sauce.",
        price: "$18.45",
      },
    ],
  },
  {
    name: "Thai Noodles",
    slug: "thai-noodles",
    note: "Choice of chicken, tofu or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Phad Thai",
        description: "Thai rice noodles with egg, green onion, ground peanuts, and bean sprouts.",
        price: "$16.95",
      },
      {
        name: "Phad See Ew",
        description: "Stir-fried wide rice noodles with tender broccoli in special sauce and egg.",
        price: "$16.95",
      },
      {
        name: "Phad Kee Mao",
        description: "Stir-fried wide rice noodles with special chili sauce, fresh sweet basil, broccoli, tomato, onion, and egg.",
        price: "$16.95",
        spiceLevel: 1,
      },
      {
        name: "Rad Nah",
        description: "Pan-fried wide rice noodles with tender broccoli topped with special bean gravy sauce.",
        price: "$16.95",
      },
      {
        name: "Chada's Noodle Delight",
        description: "Crispy egg noodles topped with gravy sauce, green onion, mushrooms, and bamboo shoots.",
        price: "$16.95",
      },
      {
        name: "Pad Ba Mee",
        description: "Chow Mein noodles stir-fried with egg, bell peppers, onion, bamboo, bean sprouts, and basil.",
        price: "$16.95",
      },
      {
        name: "Phad Woon Sen",
        description: "Sautéed glass noodles, egg, tomato, onion, pineapple, cabbage, bell peppers, and green onion.",
        price: "$16.95",
      },
      {
        name: "Sukiyaki Noodle",
        description: "Stir-fried glass noodles, egg, Chinese cabbage, green onion, carrots, and sukiyaki sauce.",
        price: "$17.95",
      },
      {
        name: "Singapore Noodle",
        description: "Stir-fried rice vermicelli noodles with egg, bell peppers, bean sprouts, and curry powder.",
        price: "$17.95",
      },
    ],
  },
  {
    name: "Rice Dishes",
    slug: "rice-dishes",
    note: "Choice of chicken, tofu or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Fried Rice",
        description: "Fried rice with tomato, onion, broccoli, and egg.",
        price: "$16.45",
      },
      {
        name: "Pineapple Fried Rice",
        description: "Fried rice with pineapple, tomato, onion, broccoli, and egg.",
        price: "$16.45",
      },
      {
        name: "Basil Fried Rice",
        description: "Fried rice with tomato, onion, red and green bell peppers, sweet basil, and egg.",
        price: "$16.45",
      },
      {
        name: "Ultimate Fried Rice",
        description: "Fried rice with a combination of chicken, pork, beef, prawns, vegetables, egg, and yellow curry powder.",
        price: "$18.45",
      },
    ],
  },
  {
    name: "Special Rice",
    slug: "special-rice",
    items: [
      {
        name: "Seafood Fried Rice",
        description: "Fried rice with a combination of prawns, scallops, and squid, egg, onion, and tomato.",
        price: "$18.45",
      },
      {
        name: "BBQ Pork Fried Rice",
        description: "Fried rice with tomato, onion, broccoli, egg, and topped with BBQ pork.",
        price: "$18.45",
      },
      {
        name: "Crab Fried Rice",
        description: "Fried rice with crabmeat, egg, onions, and green onions.",
        price: "$21.45",
      },
      {
        name: "Basil Krapao Chicken + Fried Egg",
        description: "Ground chicken stir-fried with fresh chili, garlic, and Thai basil leaves. Topped with a fried egg.",
        price: "$18.45",
      },
      {
        name: "Basil Krapao Beef + Fried Egg",
        description: "Ground beef stir-fried with fresh chili, garlic, and Thai basil leaves. Topped with a fried egg.",
        price: "$19.45",
      },
      {
        name: "BBQ Pork & Crispy Pork Belly with Rice",
        description: "BBQ pork with crispy pork belly over rice with red sauce.",
        price: "$18.95",
      },
    ],
  },
  {
    name: "Thai Curry",
    slug: "thai-curry",
    note: "Choice of chicken, tofu or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Red Curry",
        description: "Red curry with coconut milk, bamboo shoots, red and green bell peppers, and basil.",
        price: "$16.95",
        spiceLevel: 1,
      },
      {
        name: "Green Curry",
        description: "Green curry with coconut milk, bamboo shoots, red and green bell peppers, and basil. (Avocado +$2).",
        price: "$16.95",
        spiceLevel: 1,
      },
      {
        name: "Yellow Curry",
        description: "Yellow curry with coconut milk, potatoes, carrots, and onion.",
        price: "$16.95",
      },
      {
        name: "Panang Curry",
        description: "Red curry sauce slowly cooked with coconut milk, red and green bell peppers.",
        price: "$16.95",
        spiceLevel: 1,
      },
      {
        name: "Massaman Curry",
        description: "Spicy curry with coconut milk, potatoes, carrots, onion, and peanuts.",
        price: "$16.95",
        spiceLevel: 1,
      },
      {
        name: "Pumpkin Curry",
        description: "Red curry with coconut milk, pumpkin, red and green bell peppers, and basil.",
        price: "$16.95",
        spiceLevel: 1,
      },
    ],
  },
  {
    name: "Special Curry",
    slug: "special-curry",
    items: [
      {
        name: "Prawns Curry",
        description: "Spicy red curry with prawns, bamboo shoots, pineapple, red and green bell peppers, and basil.",
        price: "$19.45",
        spiceLevel: 2,
      },
      {
        name: "Salmon Curry",
        description: "Spicy red curry with salmon, bamboo shoots, red and green bell peppers, and basil.",
        price: "$20.45",
        spiceLevel: 2,
      },
      {
        name: "Duck Curry",
        description: "Red curry with coconut milk, roasted duck, pineapple, and tomatoes.",
        price: "$26.45",
        spiceLevel: 1,
      },
      {
        name: "Fisherman Curry",
        description: "Prawns, scallops, and squid with basil leaves and bamboo shoots in red curry.",
        price: "$20.45",
        spiceLevel: 1,
      },
    ],
  },
  {
    name: "Chef's Special",
    slug: "chefs-special",
    items: [
      {
        name: "Phad Thai Softshell Crab",
        description: "Thai rice noodles with egg, green onion, ground peanuts, and bean sprouts. Topped with deep-fried softshell crab.",
        price: "$23.95",
      },
      {
        name: "Phad Thai Crab",
        description: "Thai rice noodles with egg, green onion, ground peanuts, and bean sprouts. Topped with crab meat.",
        price: "$23.95",
      },
      {
        name: "Boat Noodle Soup",
        description: "Famous noodle soup with bean sprouts, Chinese broccoli, and garlic oil.",
        price: "$18.95",
      },
      {
        name: "Duck Rice Noodle Soup",
        description: "Rice noodles in duck broth, sliced duck, and bean sprouts, topped with green onion.",
        price: "$19.95",
      },
      {
        name: "Spicy Noodle Beef or Chicken",
        description: "Ground beef (or chicken) stir-fried with fresh chili, garlic, and Thai basil leaves served over wide rice noodles.",
        price: "$19.45",
      },
      {
        name: "Spicy Tom Yum Noodle",
        description: "Ground chicken, noodles, bean sprouts, and onion in hot and sour broth. Topped with ground peanuts.",
        price: "$19.45",
      },
      {
        name: "Chada Noodle",
        description: "Stir-fried wide rice noodles with chicken, prawns, calamari, and egg on a bed of lettuce and spinach. Served with Sriracha sauce.",
        price: "$19.45",
      },
      {
        name: "Noodle Curry Soup",
        description: "Chiang Mai Style - Egg noodle soup in coconut milk curry broth, red onion, bean sprouts, pickled mustard greens, and green onions. Served with chicken and topped with crispy egg noodles and cilantro.",
        price: "$18.45",
      },
      {
        name: "Softshell Crab Delight",
        description: "Fried softshell crabs, curry powder, eggs, celery, bell peppers, yellow onions, scallions, and milk.",
        price: "$23.95",
      },
      {
        name: "Kana Moo Grob",
        description: "Crispy Pork Belly with Chinese broccoli.",
        price: "$19.95",
      },
      {
        name: "Prik Khing Moo Grob",
        description: "Crispy Pork Belly with Prik Khing curry paste and green beans.",
        price: "$19.95",
      },
      {
        name: "Pad Kapraow with Crispy Pork Belly",
        description: "Garlic, chili, Thai holy basil, green beans, and crispy pork belly with a fried egg.",
        price: "$21.95",
      },
      {
        name: "Salmon Panang Curry",
        description: "Grilled salmon with Panang curry sauce.",
        price: "$20.95",
      },
      {
        name: "Papaya Salad with Roasted Hen",
        description: "Papaya salad served with marinated roasted hen.",
        price: "$19.95",
      },
    ],
  },
  {
    name: "Signature Dishes",
    slug: "signature-dishes",
    items: [
      {
        name: "Crispy Garlic Chicken",
        description: "Deep-fried tempura chicken mixed with a special sauce, lime leaves, and basil.",
        price: "$19.45",
      },
      {
        name: "Chada's Famous Chicken",
        description: "Charbroiled marinated whole hen served on fresh lettuce.",
        price: "$19.45",
      },
      {
        name: "Orange Chicken",
        description: "Deep-fried tempura chicken with orange sauce.",
        price: "$19.45",
      },
    ],
  },
  {
    name: "Side Dishes",
    slug: "side-dishes",
    items: [
      {
        name: "Peanut Sauce (Small)",
        description: "",
        price: "$3.00",
      },
      {
        name: "Steamed Brown Rice",
        description: "",
        price: "$4.00",
      },
      {
        name: "Steamed Jasmine Rice",
        description: "",
        price: "$4.00",
      },
      {
        name: "Sticky Rice",
        description: "",
        price: "$4.50",
      },
      {
        name: "Peanut Sauce (Big)",
        description: "",
        price: "$6.00",
      },
      {
        name: "Steamed Vegetable",
        description: "",
        price: "$6.00",
      },
      {
        name: "Roti",
        description: "",
        price: "$5.00",
      },
    ],
  },
  {
    name: "Extra Choices",
    slug: "extra-choices",
    items: [
      {
        name: "Add Extra Chicken",
        description: "",
        price: "$4.00",
      },
      {
        name: "Add Extra Veggies",
        description: "",
        price: "$4.00",
      },
      {
        name: "Add Extra Beef",
        description: "",
        price: "$4.00",
      },
      {
        name: "Add Extra Pork",
        description: "",
        price: "$4.00",
      },
      {
        name: "Add Extra Tofu",
        description: "",
        price: "$4.00",
      },
      {
        name: "Add Extra Noodles",
        description: "",
        price: "$4.00",
      },
      {
        name: "Add Extra Prawns",
        description: "",
        price: "$5.00",
      },
      {
        name: "Add Extra Seafood",
        description: "",
        price: "$6.00",
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string): MenuCategory | undefined => {
  return menuData.find((category) => category.slug === slug);
};
