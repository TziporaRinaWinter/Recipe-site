const categories = [
  {
    id: "shabbat_and_holiday",
    names: {
      he: "שבת וחג",
      en: "Shabbat & Holiday",
    },
    subcategories: [
      {
        id: "shabbat",
        names: { he: "שבת", en: "Shabbat" },
        imageSrc: "src/image/החלות המדהימות של שבת קודש..jpg",
      },
      {
        id: "rosh_hashana",
        names: { he: "ראש השנה", en: "Rosh Hashanah" },
        imageSrc: "src/image/פאי תפוח בדבש.jpg",
      },
      {
        id: "hanukkah",
        names: { he: "חנוכה", en: "Hanukkah" },
        imageSrc: "src/image/הסופגניות החלביות של אימא 1.jpg",
      },
      {
        id: "purim",
        names: { he: "פורים", en: "Purim" },
        imageSrc: "src/image/משלוח מנות מחופש 1.jpg",
      },
      {
        id: "pesach",
        names: { he: "פסח", en: "Passover" },
        imageSrc: "src/image/מעדן אגוזים וסלרי מפתיע למצות 1.jpg",
      },
      {
        id: "shavuot",
        names: { he: "שבועות", en: "Shavuot" },
        imageSrc: "src/image/עוגת גבינה אמיתית.jpg",
      },
    ]
  },
  {
    id: "other",
    names: {
      he: "עוד",
      en: "Other",
    },
    subcategories: [
      {
        id: "gluten_free",
        names: { he: "ללא גלוטן", en: "Gluten-Free" },
        imageSrc: "./src/assets/לחם הבית.jpg",
      },
      {
        id: "starters",
        names: { he: "ראשונות", en: "Starters" },
        imageSrc: "./src/assets/לחם הבית.jpg",
      },
      {
        id: "main_courses",
        names: { he: "עיקריות", en: "Main Courses" },
        imageSrc: "./src/assets/לחם הבית.jpg",
      },
      {
        id: "sides",
        names: { he: "תוספות", en: "Side Dishes" },
        imageSrc: "./src/assets/לחם הבית.jpg",
      },
      {
        id: "desserts",
        names: { he: "קינוחים", en: "Desserts" },
        imageSrc: "./src/assets/לחם הבית.jpg",
      },
    ],
    imageSrc: "./src/assets/לחם הבית.jpg",
  },
  {
    id: "pastrys",
    names: {
      he: "מאפים",
      en: "Pastrys",
    },
    subcategories: [
      {
        id: "cookies",
        names: { he: "עוגיות", en: "Cookies" },
        imageSrc: "./src/assets/לחם הבית.jpg",
      },
      {
        id: "cakes",
        names: { he: "עוגות", en: "Cakes" },
        imageSrc: "./src/assets/לחם הבית.jpg",
      },
    ],
    imageSrc: "./src/assets/לחם הבית.jpg",
  },
  {
    id: "salads",
    names: {
      he: "סלטים",
      en: "Salads",
    },
    subcategories: [],
    imageSrc: "./src/assets/לחם הבית.jpg",
  },
  {
    id: "soups",
    names: {
      he: "מרקים",
      en: "Soups",
    },
    subcategories: [],
    imageSrc: "./src/assets/לחם הבית.jpg",
  },
  {
    id: "fish",
    names: {
      he: "דגים",
      en: "Fish",
    },
    subcategories: [],
    imageSrc: "./src/assets/לחם הבית.jpg",
  },
  {
    id: "chicken",
    names: {
      he: "עוף",
      en: "Chicken",
    },
    subcategories: [],
    imageSrc: "./src/assets/לחם הבית.jpg",
  },
];

export default categories;
