import { colours, type ColourKey } from "./colours";

export type FoodKey =
  | "Bak Chor Mee"
  | "Ban Mian"
  | "Carrot Cake"
  | "Char Kway Teow"
  | "Chendol"
  | "Chicken Chop"
  | "Chicken Teriyaki Don"
  | "Economic Rice"
  | "Fishball Noodles"
  | "Guo Tie"
  | "Hainanese Chicken Rice"
  | "Hokkien Mee"
  | "Indian Rojak"
  | "Kaya Toast and Eggs"
  | "Kway Chap"
  | "Laksa"
  | "Mala Xiang Guo"
  | "Mee Goreng"
  | "Mee Rebus"
  | "Nasi Briyani"
  | "Nasi Lemak"
  | "Oyster Omelette"
  | "Prawn Noodles"
  | "Roast Meat Rice"
  | "Roti Prata"
  | "Satay"
  | "Sliced Fish Soup"
  | "Sup Kambing"
  | "Wanton Mee"
  | "Yong Tau Foo";

export type FoodDataType = {
  name: FoodKey;
  isHalal: boolean;
  recordId: string;
  file: string;
  colours: ColourKey[];
};

export const foods: FoodDataType[] = [
  {
    name: "Bak Chor Mee" as FoodKey,
    isHalal: false,
    recordId: "recHMGDzl67uBNqdg",
    file: "bak_chor_mee",
  },
  {
    name: "Ban Mian" as FoodKey,
    isHalal: false,
    recordId: "recRqxTnCm44nvXL3",
    file: "ban_mian",
  },
  {
    name: "Carrot Cake" as FoodKey,
    isHalal: true,
    recordId: "rec54Edgr9JbOoCxK",
    file: "carrot_cake",
  },
  {
    name: "Char Kway Teow" as FoodKey,
    isHalal: false,
    recordId: "recGwfDAhwnKVifta",
    file: "char_kway_teow",
  },
  {
    name: "Chendol" as FoodKey,
    isHalal: true,
    recordId: "reciHP5jttqsMHObo",
    file: "chendol",
  },
  {
    name: "Chicken Chop" as FoodKey,
    isHalal: true,
    recordId: "recKyn3fSFwpwoGSd",
    file: "chicken_chop",
  },
  {
    name: "Chicken Teriyaki Don" as FoodKey,
    isHalal: true,
    recordId: "recCglc0jrSI8ZxE9",
    file: "chicken_teriyaki_don",
  },
  {
    name: "Economic Rice" as FoodKey,
    isHalal: false,
    recordId: "recEqH6isNTBtLYl9",
    file: "economic_rice",
  },
  {
    name: "Fishball Noodles" as FoodKey,
    isHalal: true,
    recordId: "reck5cwi53N0eHEu2",
    file: "fishball_noodles",
  },
  {
    name: "Guo Tie" as FoodKey,
    isHalal: false,
    recordId: "recsaBbCy3AA0QwbJ",
    file: "guo_tie",
  },
  {
    name: "Hainanese Chicken Rice" as FoodKey,
    isHalal: true,
    recordId: "recmZs7VmBIDqlyqO",
    file: "hainanese_chicken_rice",
  },
  {
    name: "Hokkien Mee" as FoodKey,
    isHalal: true,
    recordId: "rec6tRH50yTYVaHqz",
    file: "hokkien_mee",
  },
  {
    name: "Indian Rojak" as FoodKey,
    isHalal: true,
    recordId: "recfjUMFEwIDOxZNS",
    file: "indian_rojak",
  },
  {
    name: "Kaya Toast and Eggs" as FoodKey,
    isHalal: true,
    recordId: "recG4I2HCkUQ1WquK",
    file: "kaya_toast_and_eggs",
  },
  {
    name: "Kway Chap" as FoodKey,
    isHalal: false,
    recordId: "recmZQ4lHBee0PZ3v",
    file: "kway_chap",
  },
  {
    name: "Laksa" as FoodKey,
    isHalal: true,
    recordId: "rec0jpBlj8jpraXo9",
    file: "laksa",
  },
  {
    name: "Mala Xiang Guo" as FoodKey,
    isHalal: true,
    recordId: "rec5F7adh85i0hnVa",
    file: "mala_xiang_guo",
  },
  {
    name: "Mee Goreng" as FoodKey,
    isHalal: true,
    recordId: "recyoGjihLN1s4FsG",
    file: "mee_goreng",
  },
  {
    name: "Mee Rebus" as FoodKey,
    isHalal: true,
    recordId: "recNfYG7cW0tCwekr",
    file: "mee_rebus",
  },
  {
    name: "Nasi Briyani" as FoodKey,
    isHalal: true,
    recordId: "rece7tq26IYKPHe7O",
    file: "nasi_briyani",
  },
  {
    name: "Nasi Lemak" as FoodKey,
    isHalal: true,
    recordId: "recF8jI5MLCp93HsO",
    file: "nasi_lemak",
  },
  {
    name: "Oyster Omelette" as FoodKey,
    isHalal: true,
    recordId: "rec0DNy3NqlMtmjPZ",
    file: "oyster_omelette",
  },
  {
    name: "Prawn Noodles" as FoodKey,
    isHalal: false,
    recordId: "rec8uZfhmMkE5JjZz",
    file: "prawn_noodles",
  },
  {
    name: "Roast Meat Rice" as FoodKey,
    isHalal: false,
    recordId: "recVBkItO4h30OLv2",
    file: "roast_meat_rice",
  },
  {
    name: "Roti Prata" as FoodKey,
    isHalal: true,
    recordId: "recROgSLnPgUfMYQG",
    file: "roti_prata",
  },
  {
    name: "Satay" as FoodKey,
    isHalal: true,
    recordId: "rechlZ5DWmKl1YTgq",
    file: "satay",
  },
  {
    name: "Sliced Fish Soup" as FoodKey,
    isHalal: true,
    recordId: "recks7diQU5WY4bKy",
    file: "sliced_fish_soup",
  },
  {
    name: "Sup Kambing" as FoodKey,
    isHalal: true,
    recordId: "recDKceZDLQNgJrFw",
    file: "sup_kambing",
  },
  {
    name: "Wanton Mee" as FoodKey,
    isHalal: false,
    recordId: "recElJELi7tw5maQj",
    file: "wanton_mee",
  },
  {
    name: "Yong Tau Foo" as FoodKey,
    isHalal: false,
    recordId: "rec1ZGz2smzh9hUY0",
    file: "yong_tau_foo",
  },
].map((item) => ({ ...item, colours }));
