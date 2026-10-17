// Ember & Oak's menu. The Menu page reads everything from here, so editing
// this file is all it takes to change an item, a price, or the section order.
// Sections and items appear on the page in the order they are written below.

// Every sized drink comes in these three sizes (fluid ounces).
export type DrinkSize = 12 | 16 | 20;

// One price for each size, keyed by size: { 12: 4.5, 16: 5.0, 20: 5.5 }.
// Every size is required and each can appear only once, so a drink can't
// be missing a size or have two prices for the same one.
export type SizedPrice = Record<DrinkSize, number>;

// A price is either one number (a croissant, a syrup shot)
// or a sized price (a latte). Prices are plain numbers in US dollars,
// e.g. 4.5 for $4.50; use 0 for something that is free.
export type Price = number | SizedPrice;

export interface MenuItem {
  name: string;
  description?: string;
  price: Price;
}

export interface MenuSection {
  name: string;
  items: MenuItem[];
}

export const menu: MenuSection[] = [
  {
    name: 'Coffee & Lattes',
    items: [
      {
        name: 'Drip Coffee',
        description: 'Our rotating house roast, brewed fresh every hour.',
        price: { 12: 2.75, 16: 3.25, 20: 3.75 },
      },
      {
        name: 'Americano',
        description: 'Two shots of espresso topped with hot water.',
        price: { 12: 3.5, 16: 4.0, 20: 4.5 },
      },
      {
        name: 'Cappuccino',
        description: 'Espresso under a thick cap of velvety foam.',
        price: { 12: 4.25, 16: 4.75, 20: 5.25 },
      },
      {
        name: 'Latte',
        description: 'Espresso and steamed milk with a thin layer of foam.',
        price: { 12: 4.5, 16: 5.0, 20: 5.5 },
      },
      {
        name: 'Ember Mocha',
        description: 'Espresso, dark chocolate, and steamed milk with a pinch of cinnamon.',
        price: { 12: 5.0, 16: 5.5, 20: 6.0 },
      },
    ],
  },
  {
    name: 'Iced & Blended',
    items: [
      {
        name: 'Cold Brew',
        description: 'Steeped for 18 hours for a smooth, chocolatey finish.',
        price: { 12: 4.0, 16: 4.5, 20: 5.0 },
      },
      {
        name: 'Iced Latte',
        description: 'Espresso and cold milk over ice.',
        price: { 12: 4.75, 16: 5.25, 20: 5.75 },
      },
      {
        name: 'Caramel Frappé',
        description: 'Espresso blended with milk, ice, and house caramel.',
        price: { 12: 5.5, 16: 6.0, 20: 6.5 },
      },
      {
        name: 'Mango Smoothie',
        description: 'Mango, banana, and yogurt. No coffee in this one.',
        price: { 12: 5.75, 16: 6.25, 20: 6.75 },
      },
    ],
  },
  {
    name: 'Seasonals & Specials',
    items: [
      {
        name: 'Maple Oak Latte',
        description: 'Our fall favorite: real maple syrup, espresso, and a toasted oak-smoked sugar rim.',
        price: { 12: 5.25, 16: 5.75, 20: 6.25 },
      },
      {
        name: 'Spiced Pear Chai',
        description: 'House chai simmered with pear and warm spices.',
        price: { 12: 4.75, 16: 5.25, 20: 5.75 },
      },
      {
        name: 'Apple Cider Scone',
        description: 'Baked each morning with local apples and a cider glaze.',
        price: 4.25,
      },
    ],
  },
  {
    name: 'Tea',
    items: [
      {
        name: 'English Breakfast',
        description: 'Bold black tea that stands up to milk.',
        price: { 12: 3.0, 16: 3.5, 20: 4.0 },
      },
      {
        name: 'Jasmine Green',
        description: 'Light and floral green tea.',
        price: { 12: 3.0, 16: 3.5, 20: 4.0 },
      },
      {
        name: 'Chamomile Mint',
        description: 'Caffeine-free and calming.',
        price: { 12: 3.0, 16: 3.5, 20: 4.0 },
      },
      {
        name: 'Chai Latte',
        description: 'Our house-made chai concentrate with steamed milk.',
        price: { 12: 4.5, 16: 5.0, 20: 5.5 },
      },
    ],
  },
  {
    name: 'Baked Goods',
    items: [
      {
        name: 'Butter Croissant',
        description: 'Flaky, golden, and baked in-house every morning.',
        price: 3.75,
      },
      {
        name: 'Blueberry Muffin',
        description: 'Packed with berries and topped with crumble.',
        price: 3.5,
      },
      {
        name: 'Morning Bun',
        description: 'Croissant dough rolled with orange zest and cinnamon sugar.',
        price: 4.25,
      },
      {
        name: 'Chocolate Chip Cookie',
        description: 'Brown butter dough, dark chocolate, flaky salt.',
        price: 2.75,
      },
    ],
  },
  {
    name: 'Breakfast',
    items: [
      {
        name: 'Avocado Toast',
        description: 'Smashed avocado on sourdough with chili flakes and lemon.',
        price: 9.5,
      },
      {
        name: 'Breakfast Sandwich',
        description: 'Egg, cheddar, and bacon or tomato on a toasted English muffin.',
        price: 8.75,
      },
      {
        name: 'Overnight Oats',
        description: 'Oats soaked in oat milk with berries and toasted almonds.',
        price: 7.0,
      },
      {
        name: 'Yogurt Parfait',
        description: 'Greek yogurt, house granola, and seasonal fruit.',
        price: 6.5,
      },
    ],
  },
  {
    name: 'Milk, Syrup & Sugar',
    items: [
      { name: 'Oat milk', price: 0.75 },
      { name: 'Almond milk', price: 0.75 },
      { name: 'Extra espresso shot', price: 1.0 },
      { name: 'Vanilla, caramel, or hazelnut syrup', price: 0.75 },
      { name: 'Real maple syrup', price: 1.0 },
      { name: 'Cane sugar, honey, or stevia', price: 0 },
    ],
  },
];
