const categories = [
  {
    id: "shabbat_and_holiday",
    names: {
      he: "שבת וחג",
      en: "Shabbat & Holiday",
    },
    subcategories: [
      { id: "shabbat", names: { he: "שבת", en: "Shabbat" } },
      { id: "rosh_hashana", names: { he: "ראש השנה", en: "Rosh Hashanah" } },
      { id: "hanukkah", names: { he: "חנוכה", en: "Hanukkah" } },
      { id: "purim", names: { he: "פורים", en: "Purim" } },
      { id: "pesach", names: { he: "פסח", en: "Passover" } },
      { id: "shavuot", names: { he: "שבועות", en: "Shavuot" } },
    ],
  },
  {
    id: "other",
    names: {
      he: "עוד",
      en: "Other",
    },
    subcategories: [
      { id: "gluten_free", names: { he: "ללא גלוטן", en: "Gluten-Free" } },
      { id: "starters", names: { he: "ראשונות", en: "Starters" } },
      { id: "main_courses", names: { he: "עיקריות", en: "Main Courses" } },
      { id: "sides", names: { he: "תוספות", en: "Side Dishes" } },
      { id: "desserts", names: { he: "קינוחים", en: "Desserts" } },
    ],
  },
  {
    id: "pastrys",
    names: {
      he: "מאפים",
      en: "Pastrys",
    },
    subcategories: [
      { id: "cookies", names: { he: "עוגיות", en: "Cookies" } },
      { id: "cakes", names: { he: "עוגות", en: "Cakes" } },
    ],
  },
  {
    id: "salads",
    names: {
      he: "סלטים",
      en: "Salads",
    },
    subcategories: [],
  },
  {
    id: "soups",
    names: {
      he: "מרקים",
      en: "Soups",
    },
    subcategories: [],
  },
  {
    id: "fish",
    names: {
      he: "דגים",
      en: "Fish",
    },
    subcategories: [],
  },
  {
    id: "chicken",
    names: {
      he: "עוף",
      en: "Chicken",
    },
    subcategories: [],
  },
];

export default categories;
