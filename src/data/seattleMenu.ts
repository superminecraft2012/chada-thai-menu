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
        description: "Mixed vegetables wrapped in an egg roll wrapper, deep-fried. Served with special plum sauce.",
        price: "$10.45",
      },
      {
        name: "Pot Stickers",
        description: "Deep-fried wrapped seasoned chicken and vegetables, served with gyoza sauce.",
        price: "$10.45",
      },
      {
        name: "Crab Rangoon",
        description: "Crispy imitation crabmeat blended with cream cheese and celery. Wrapped in a thin crepe. Served with sweet & sour sauce.",
        price: "$10.45",
      },
      {
        name: "Fish Cake",
        description: "A blend of fish, curry paste, green beans, and sliced lime leaves. Served with spicy hot cucumber sauce.",
        price: "$11.45",
      },
      {
        name: "Coconut Prawns",
        description: "Deep-fried coconut prawns. Served with sweet and sour sauce.",
        price: "$11.45",
      },
      {
        name: "Crispy Garlic Wings",
        description: "Crispy chicken wings with garlic, served with a special sauce.",
        price: "$12.45",
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
        name: "Fresh Rolls (Prawn)",
        description: "Vermicelli noodles, shrimp, lettuce, and basil wrapped in rice paper. Served with special sauce.",
        price: "$11.95",
      },
      {
        name: "Fresh Rolls (Tofu)",
        description: "Vermicelli noodles, lettuce, cucumber, and basil wrapped in rice paper. Served with our special sauce.",
        price: "$10.45",
      },
      {
        name: "Tofu Tod",
        description: "Deep-fried tofu. Served with house special sauce.",
        price: "$10.45",
      },
      {
        name: "Chive Rice Cake Dumpling",
        description: "Pan-fried chive rice cake served with house special sauce.",
        price: "$10.45",
      },
      {
        name: "Fried Crispy Pork Belly",
        description: "Crispy pork belly, served with a special sauce.",
        price: "$12.45",
      },
      {
        name: "Chada Platter",
        description: "Variety of all-time favorite appetizers: Spring Rolls, Pot Stickers, Crab Rangoon, and Coconut Prawns.",
        price: "$15.45",
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
        price: "$12.45",
      },
      {
        name: "Chada's Salad",
        description: "Lettuce, tomato, cucumber, and bean sprouts served with homemade peanut sauce dressing.",
        price: "$10.45",
      },
      {
        name: "Yum Squid",
        description: "Squid with red onion, lemongrass, lime juice, lime leaves, lettuce, and basil.",
        price: "$16.45",
      },
      {
        name: "Yum Gai",
        description: "Chicken with lettuce, onion, roasted peanuts, lime juice, and spices.",
        price: "$14.45",
      },
      {
        name: "Yum Beef or Pork",
        description: "Beef or pork with onion, cucumber, tomato, lime juice, and lettuce.",
        price: "$15.45",
      },
      {
        name: "Yum Seafood",
        description: "Prawns, squid, mussels, and scallops with lemongrass, onion, and lettuce.",
        price: "$18.45",
      },
      {
        name: "Larb Gai",
        description: "Ground chicken in spicy lime juice, garnished with red and green onions and cilantro. Served on fresh lettuce.",
        price: "$14.45",
      },
    ],
  },
  {
    name: "Soup",
    slug: "soup",
    note: "Choice of chicken, tofu, or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Tom Yum",
        description: "Hot and sour soup with lemongrass, lime leaves, and chili paste.",
        price: "$14.45",
      },
      {
        name: "Tom Kha",
        description: "Coconut milk soup with mushrooms, lemongrass, onion, and lime leaves.",
        price: "$14.45",
      },
    ],
  },
  {
    name: "Chada's Seafood",
    slug: "chadas-seafood",
    items: [
      {
        name: "Chada Seafood Combo",
        description: "Prawns and scallops sautéed with broccoli, bamboo shoots, and bell peppers.",
        price: "$19.45",
      },
      {
        name: "Fisherman Secret",
        description: "Seafood combination sautéed with onion, sweet basil, bell peppers, mushrooms, green beans, and spices.",
        price: "$18.45",
      },
      {
        name: "Phad Talay",
        description: "Prawns, scallops, and squid with basil leaves and bamboo shoots in red curry.",
        price: "$18.45",
      },
      {
        name: "Prawns Delight",
        description: "Prawns sautéed with mild yellow curry, onion, bell peppers, and green onions.",
        price: "$18.45",
      },
      {
        name: "Fisherman Curry",
        description: "Seafood combination sautéed with mixed vegetables, fresh mushrooms, and spices.",
        price: "$18.45",
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
        price: "$17.45",
      },
      {
        name: "Chada Famous Chicken",
        description: "Charbroiled marinated half chicken served on fresh lettuce.",
        price: "$16.45",
      },
    ],
  },
  {
    name: "Curries",
    slug: "curries",
    note: "Choice of chicken, tofu, or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Red Curry",
        description: "Red curry with coconut milk, bamboo shoots, red and green bell peppers, and basil.",
        price: "$14.95",
        spiceLevel: 1,
      },
      {
        name: "Green Curry",
        description: "Green curry with coconut milk, bamboo shoots, red and green bell peppers, and basil.",
        price: "$14.95",
        spiceLevel: 1,
      },
      {
        name: "Yellow Curry",
        description: "Yellow curry with coconut milk, potatoes, carrots, and onions.",
        price: "$14.95",
      },
      {
        name: "Panang Curry",
        description: "Red curry sauce slowly cooked with coconut milk, red and green bell peppers.",
        price: "$14.95",
        spiceLevel: 1,
      },
      {
        name: "Massaman Curry",
        description: "Spicy curry with coconut milk, potatoes, carrots, onions, and peanuts.",
        price: "$14.95",
        spiceLevel: 2,
      },
      {
        name: "Pumpkin Curry",
        description: "Red curry with coconut milk, pumpkin, red and green bell peppers, and basil.",
        price: "$14.95",
        spiceLevel: 1,
      },
      {
        name: "Avocado Green",
        description: "Green curry with coconut milk, bamboo shoots, red and green bell peppers, basil, and avocado.",
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
        name: "Red Prawns Curry",
        description: "Spicy red curry prawns, bamboo shoots, pineapple, red and green bell peppers, and basil.",
        price: "$18.45",
      },
      {
        name: "Salmon Red Curry",
        description: "Spicy red curry with salmon, bamboo shoots, red and green bell peppers, and basil.",
        price: "$19.45",
      },
      {
        name: "Duck Curry",
        description: "Red curry with coconut milk, duck, onions, green onions, and tomatoes.",
        price: "$19.45",
      },
    ],
  },
  {
    name: "Stir-Fried Dishes",
    slug: "stir-fried",
    note: "Choice of chicken, tofu, or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Cashew Delight",
        description: "Sautéed cashew nuts, onion, red and green peppers, celery, pineapple, and carrots.",
        price: "$14.95",
      },
      {
        name: "Sautéed Eggplant",
        description: "Deep-fried eggplant stir-fried with bell peppers, carrots, soybean sauce, white pepper, and basil leaves.",
        price: "$14.95",
      },
      {
        name: "Swimming Rama",
        description: "Sautéed spinach topped with homemade delicious peanut sauce.",
        price: "$14.95",
      },
      {
        name: "Stir-Fried Broccoli",
        description: "Sautéed tender broccoli and oyster sauce.",
        price: "$14.95",
      },
      {
        name: "Phad Basil",
        description: "Sautéed onion, bell peppers, mushrooms, and fresh basil.",
        price: "$14.95",
      },
      {
        name: "Phad Ginger",
        description: "Sautéed ginger, onion, bell peppers, and mushrooms.",
        price: "$14.95",
      },
      {
        name: "Sweet & Sour",
        description: "Sautéed cucumber, tomato, onion, pineapple, and bell peppers in sweet and sour sauce.",
        price: "$14.95",
      },
      {
        name: "Phad Pag",
        description: "Sautéed mixed vegetables and oyster sauce.",
        price: "$14.95",
      },
      {
        name: "Phad Prik Khing",
        description: "Stir-fried green beans, red and green bell peppers, sliced lime leaves, and tasty curry paste.",
        price: "$14.95",
      },
      {
        name: "Phad Garlic",
        description: "Stir-fried fresh garlic and black pepper. Served with a bed of steamed broccoli.",
        price: "$14.95",
      },
      {
        name: "Phad Green Bean",
        description: "Stir-fried fresh garlic, onion, and green beans.",
        price: "$14.95",
      },
      {
        name: "Phad Prik Khing Moo Krob",
        description: "Stir-fried green beans, red and green bell peppers, sliced lime leaves, and tasty curry paste with pork belly.",
        price: "$17.95",
      },
      {
        name: "Phad Woonsen",
        description: "Sautéed glass noodles, egg, tomatoes, onion, pineapple, cabbage, bell peppers, and green onions.",
        price: "$15.95",
      },
      {
        name: "Phad Kana Moo Krob",
        description: "Crispy pork belly with Chinese broccoli.",
        price: "$17.95",
      },
    ],
  },
  {
    name: "Noodles",
    slug: "noodles",
    note: "Choice of chicken, tofu, or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Phad Thai (Special)",
        description: "Thai rice noodles with egg, crab, green onion, ground peanuts, and bean sprouts.",
        price: "$16.95",
      },
      {
        name: "Singapore",
        description: "Stir-fried vermicelli noodles with egg, bell peppers, bean sprouts, cabbage, and curry powder.",
        price: "$16.95",
      },
      {
        name: "Phad Thai",
        description: "Thai rice noodles with egg, green onion, ground peanuts, and bean sprouts.",
        price: "$14.95",
      },
      {
        name: "Phad See Lew",
        description: "Stir-fried wide rice noodles with tender broccoli in special sauce and egg.",
        price: "$14.95",
      },
      {
        name: "Phad Kee Mao",
        description: "Stir-fried wide rice noodles with special chili sauce, fresh sweet basil, broccoli, tomato, onion, and egg.",
        price: "$14.95",
      },
      {
        name: "Rad Nah",
        description: "Pan-fried wide rice noodles with tender broccoli, topped with special bean gravy sauce.",
        price: "$14.95",
      },
      {
        name: "Chada's Noodle Delight",
        description: "Crispy egg noodles topped with gravy sauce, green onion, mushrooms, and bamboo shoots.",
        price: "$14.95",
      },
      {
        name: "Pad Ba Mee",
        description: "Chow Mein noodles stir-fried with egg, bell peppers, onion, bamboo shoots, bean sprouts, and basil.",
        price: "$14.95",
      },
      {
        name: "Spicy Noodle Beef",
        description: "Ground beef stir-fried with fresh chili, garlic, and Thai basil leaves, put on top of wide rice noodles.",
        price: "$19.45",
      },
      {
        name: "Spicy Noodle Chicken",
        description: "Stir-fried vermicelli noodles, egg, Chinese cabbage, green onion, carrots, and sukiyaki sauce.",
        price: "$18.45",
      },
      {
        name: "Kuay Teaw Kau Gai",
        description: "Stir-fried flat wide rice noodles with chicken, prawns, calamari, and egg on a bed of lettuce. Served with Sri Racha sauce.",
        price: "$18.45",
      },
      {
        name: "Beef Rice Noodle Soup",
        description: "Rice noodles in beef broth with sliced beef and bean sprouts, topped with green onions.",
        price: "$16.45",
      },
      {
        name: "Beef Balls Rice Noodle Soup",
        description: "Rice noodles in beef broth with beef balls and bean sprouts, topped with green onions.",
        price: "$16.45",
      },
      {
        name: "Noodle Curry Soup",
        description: "Chiang Mai style egg noodle soup in coconut milk with curry paste. Served with chicken, pickled mustard greens, green beans, red onion, and bean sprouts, topped with crispy egg noodles and cilantro.",
        price: "$16.45",
      },
    ],
  },
  {
    name: "Rice Dishes",
    slug: "rice-dishes",
    note: "Choice of chicken, tofu, or veg. Beef +$1, Prawn +$2, Seafood +$4",
    items: [
      {
        name: "Fried Rice",
        description: "Fried rice with tomato, onion, and egg.",
        price: "$14.95",
      },
      {
        name: "Pineapple Fried Rice",
        description: "Fried rice with pineapple, tomato, onion, and egg.",
        price: "$14.95",
      },
      {
        name: "Chili Pepper Fried Rice",
        description: "Fried rice with tomato, onion, red and green bell peppers, sweet basil, and egg.",
        price: "$14.95",
      },
      {
        name: "Ultimate Fried Rice",
        description: "Fried rice with a combination of chicken, pork, beef, prawns, vegetables, egg, and yellow curry powder.",
        price: "$16.45",
      },
      {
        name: "Seafood Fried Rice",
        description: "Fried rice with a combination of prawns, scallops, squid, egg, onion, and tomato.",
        price: "$18.45",
      },
      {
        name: "Crab Fried Rice",
        description: "Fried rice with crabmeat, egg, onions, green onions, and tomatoes.",
        price: "$19.45",
      },
      {
        name: "Basil Fried Rice (Basil Krapao Chicken)",
        description: "Ground chicken stir-fried with fresh chili, garlic, bell peppers, and Thai basil leaves. Topped with a fried egg.",
        price: "$17.45",
      },
      {
        name: "Basil Krapao Beef + Fried Egg",
        description: "Ground beef stir-fried with fresh chili, garlic, bell peppers, and Thai basil leaves. Topped with a fried egg.",
        price: "$18.45",
      },
      {
        name: "Basil Krapao Moo Krob + Fried Egg",
        description: "Ground pork belly stir-fried with fresh chili, garlic, bell peppers, and Thai basil leaves. Topped with a fried egg.",
        price: "$18.45",
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
        price: "$2.00",
      },
      {
        name: "Peanut Sauce (Big)",
        description: "",
        price: "$5.00",
      },
      {
        name: "Steamed Jasmine Rice",
        description: "",
        price: "$3.00",
      },
      {
        name: "Brown Rice & White Rice",
        description: "",
        price: "$3.00",
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
        name: "Add Extra Noodle",
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
  {
    name: "Desserts",
    slug: "desserts",
    items: [
      {
        name: "Black Rice Pudding",
        description: "",
        price: "$6.95",
      },
      {
        name: "Coconut Ice Cream",
        description: "",
        price: "$6.95",
      },
      {
        name: "Fried Banana w/ Coconut Ice Cream",
        description: "",
        price: "$11.45",
      },
      {
        name: "Mango with Sweet Rice",
        description: "Spring-Summer Only",
        price: "$12.45",
      },
      {
        name: "Taro Custard with Sweet Rice",
        description: "",
        price: "$11.45",
      },
      {
        name: "Pumpkin Custard with Sweet Rice",
        description: "",
        price: "$11.45",
      },
    ],
  },
  {
    name: "Drinks",
    slug: "drinks",
    items: [
      {
        name: "Thai Iced Tea",
        description: "",
        price: "$5.00",
      },
      {
        name: "Thai Iced Coffee",
        description: "",
        price: "$5.00",
      },
      {
        name: "Soda",
        description: "",
        price: "$3.00",
      },
      {
        name: "Hot Tea (Small pot)",
        description: "",
        price: "$3.00",
      },
      {
        name: "Hot Tea (Big pot)",
        description: "",
        price: "$6.00",
      },
      {
        name: "Fruity Soda",
        description: "",
        price: "$7.00",
      },
    ],
  },
  {
    name: "Wine & Beer",
    slug: "wine-beer",
    items: [
      {
        name: "White Wine",
        description: "",
        price: "Glass $9 / Bottle $28",
      },
      {
        name: "Red Wine",
        description: "",
        price: "Glass $9 / Bottle $28",
      },
      {
        name: "Beer",
        description: "Leo, Singha, IPA, Stella Artois, Michelob Ultra",
        price: "$7.00",
      },
    ],
  },
  {
    name: "Lunch Combination",
    slug: "lunch-combination",
    note: "Weekdays Mon-Fri, 11am-3pm (non-holidays). Served with steamed Jasmine rice or brown rice and your choice of spring roll or gyoza.",
    items: [
      {
        name: "1. Phad Thai and Cashew Chicken",
        description: "",
        price: "$13.95",
      },
      {
        name: "2. Phad Thai and Red Curry Chicken",
        description: "",
        price: "$13.95",
      },
      {
        name: "3. Phad Thai and Basil Chicken",
        description: "",
        price: "$13.95",
      },
      {
        name: "4. Phad Thai and Swimming Rama Chicken",
        description: "",
        price: "$13.95",
      },
    ],
  },
  {
    name: "Lunch Special",
    slug: "lunch-special",
    note: "Weekdays Mon-Fri, 11am-3pm (non-holidays)",
    items: [
      {
        name: "1. Thai Basil Chicken, Fried Egg and Rice",
        description: "",
        price: "$14.95",
      },
      {
        name: "2. Moo Tod Krathiam Prik Thai, Fried Egg and Rice",
        description: "",
        price: "$14.95",
      },
      {
        name: "3. Thai Black Pepper, Fried Egg and Rice",
        description: "",
        price: "$14.95",
      },
      {
        name: "4. Crispy Garlic Chicken with Rice",
        description: "",
        price: "$14.95",
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string): MenuCategory | undefined => {
  return menuData.find((category) => category.slug === slug);
};
