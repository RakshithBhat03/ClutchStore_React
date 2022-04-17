import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Backpack",
    description: "",
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Lakers/Bags/Los_Angeles_Lakers_FOCO_Big_Logo_Bungee_Backpack_xv6cf2.webp",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    description: "",
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Warriors/Caps/Mens_Golden_State_Warriors_New_Era_Black-Gold_2021-22_City_Edition_City_Edition_Official_59FIFTY_Fitted_Hat_tztmfr.webp",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description: "",
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459254/ClutchStore/Heat/Hoodies/Men_s_Miami_Heat_Fanatics_Branded_Red_Primary_Team_Logo_Pullover_Hoodie_ps5mcb.webp",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description: "",
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459255/ClutchStore/Bulls/Jerseys/Men_s_Chicago_Bulls_Michael_Jordan_Mitchell_Ness_Red_1997-98_Hardwood_Classics_Authentic_Player_Jersey_kzogjk.webp",
  },
  {
    _id: uuid(),
    categoryName: "Shorts",
    description: "",
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Clippers/Shorts/Mens_LA_Clippers_Nike_Light_Blue-White_2021-22_City_Edition_Swingman_Shorts_ftzsp7.webp",
  },
];
