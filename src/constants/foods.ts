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

export type FoodFile =
  | "bak_chor_mee"
  | "ban_mian"
  | "carrot_cake"
  | "char_kway_teow"
  | "chendol"
  | "chicken_chop"
  | "chicken_teriyaki_don"
  | "economic_rice"
  | "fishball_noodles"
  | "guo_tie"
  | "hainanese_chicken_rice"
  | "hokkien_mee"
  | "indian_rojak"
  | "kaya_toast_and_eggs"
  | "kway_chap"
  | "laksa"
  | "mala_xiang_guo"
  | "mee_goreng"
  | "mee_rebus"
  | "nasi_briyani"
  | "nasi_lemak"
  | "oyster_omelette"
  | "prawn_noodles"
  | "roast_meat_rice"
  | "roti_prata"
  | "satay"
  | "sliced_fish_soup"
  | "sup_kambing"
  | "wanton_mee"
  | "yong_tau_foo";

export type FoodDataType = {
  name: FoodKey;
  isHalal: boolean;
  recordId: string;
  file: FoodFile;
  colours: ColourKey[];
};

export const foods: FoodDataType[] = [
  {
    name: "Bak Chor Mee" as FoodKey,
    isHalal: false,
    recordId: "recHMGDzl67uBNqdg",
    file: "bak_chor_mee" as FoodFile,
  },
  {
    name: "Ban Mian" as FoodKey,
    isHalal: false,
    recordId: "recRqxTnCm44nvXL3",
    file: "ban_mian" as FoodFile,
  },
  {
    name: "Carrot Cake" as FoodKey,
    isHalal: true,
    recordId: "rec54Edgr9JbOoCxK",
    file: "carrot_cake" as FoodFile,
  },
  {
    name: "Char Kway Teow" as FoodKey,
    isHalal: false,
    recordId: "recGwfDAhwnKVifta",
    file: "char_kway_teow" as FoodFile,
  },
  {
    name: "Chendol" as FoodKey,
    isHalal: true,
    recordId: "reciHP5jttqsMHObo",
    file: "chendol" as FoodFile,
  },
  {
    name: "Chicken Chop" as FoodKey,
    isHalal: true,
    recordId: "recKyn3fSFwpwoGSd",
    file: "chicken_chop" as FoodFile,
  },
  {
    name: "Chicken Teriyaki Don" as FoodKey,
    isHalal: true,
    recordId: "recCglc0jrSI8ZxE9",
    file: "chicken_teriyaki_don" as FoodFile,
  },
  {
    name: "Economic Rice" as FoodKey,
    isHalal: false,
    recordId: "recEqH6isNTBtLYl9",
    file: "economic_rice" as FoodFile,
  },
  {
    name: "Fishball Noodles" as FoodKey,
    isHalal: true,
    recordId: "reck5cwi53N0eHEu2",
    file: "fishball_noodles" as FoodFile,
  },
  {
    name: "Guo Tie" as FoodKey,
    isHalal: false,
    recordId: "recsaBbCy3AA0QwbJ",
    file: "guo_tie" as FoodFile,
  },
  {
    name: "Hainanese Chicken Rice" as FoodKey,
    isHalal: true,
    recordId: "recmZs7VmBIDqlyqO",
    file: "hainanese_chicken_rice" as FoodFile,
  },
  {
    name: "Hokkien Mee" as FoodKey,
    isHalal: true,
    recordId: "rec6tRH50yTYVaHqz",
    file: "hokkien_mee" as FoodFile,
  },
  {
    name: "Indian Rojak" as FoodKey,
    isHalal: true,
    recordId: "recfjUMFEwIDOxZNS",
    file: "indian_rojak" as FoodFile,
  },
  {
    name: "Kaya Toast and Eggs" as FoodKey,
    isHalal: true,
    recordId: "recG4I2HCkUQ1WquK",
    file: "kaya_toast_and_eggs" as FoodFile,
  },
  {
    name: "Kway Chap" as FoodKey,
    isHalal: false,
    recordId: "recmZQ4lHBee0PZ3v",
    file: "kway_chap" as FoodFile,
  },
  {
    name: "Laksa" as FoodKey,
    isHalal: true,
    recordId: "rec0jpBlj8jpraXo9",
    file: "laksa" as FoodFile,
  },
  {
    name: "Mala Xiang Guo" as FoodKey,
    isHalal: true,
    recordId: "rec5F7adh85i0hnVa",
    file: "mala_xiang_guo" as FoodFile,
  },
  {
    name: "Mee Goreng" as FoodKey,
    isHalal: true,
    recordId: "recyoGjihLN1s4FsG",
    file: "mee_goreng" as FoodFile,
  },
  {
    name: "Mee Rebus" as FoodKey,
    isHalal: true,
    recordId: "recNfYG7cW0tCwekr",
    file: "mee_rebus" as FoodFile,
  },
  {
    name: "Nasi Briyani" as FoodKey,
    isHalal: true,
    recordId: "rece7tq26IYKPHe7O",
    file: "nasi_briyani" as FoodFile,
  },
  {
    name: "Nasi Lemak" as FoodKey,
    isHalal: true,
    recordId: "recF8jI5MLCp93HsO",
    file: "nasi_lemak" as FoodFile,
  },
  {
    name: "Oyster Omelette" as FoodKey,
    isHalal: true,
    recordId: "rec0DNy3NqlMtmjPZ",
    file: "oyster_omelette" as FoodFile,
  },
  {
    name: "Prawn Noodles" as FoodKey,
    isHalal: false,
    recordId: "rec8uZfhmMkE5JjZz",
    file: "prawn_noodles" as FoodFile,
  },
  {
    name: "Roast Meat Rice" as FoodKey,
    isHalal: false,
    recordId: "recVBkItO4h30OLv2",
    file: "roast_meat_rice" as FoodFile,
  },
  {
    name: "Roti Prata" as FoodKey,
    isHalal: true,
    recordId: "recROgSLnPgUfMYQG",
    file: "roti_prata" as FoodFile,
  },
  {
    name: "Satay" as FoodKey,
    isHalal: true,
    recordId: "rechlZ5DWmKl1YTgq",
    file: "satay" as FoodFile,
  },
  {
    name: "Sliced Fish Soup" as FoodKey,
    isHalal: true,
    recordId: "recks7diQU5WY4bKy",
    file: "sliced_fish_soup" as FoodFile,
  },
  {
    name: "Sup Kambing" as FoodKey,
    isHalal: true,
    recordId: "recDKceZDLQNgJrFw",
    file: "sup_kambing" as FoodFile,
  },
  {
    name: "Wanton Mee" as FoodKey,
    isHalal: false,
    recordId: "recElJELi7tw5maQj",
    file: "wanton_mee" as FoodFile,
  },
  {
    name: "Yong Tau Foo" as FoodKey,
    isHalal: false,
    recordId: "rec1ZGz2smzh9hUY0",
    file: "yong_tau_foo" as FoodFile,
  },
].map((item) => ({ ...item, colours }));
