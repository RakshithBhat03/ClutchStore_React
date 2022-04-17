import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  //Bulls
  {
    _id: uuid(),
    categoryName: "Backpack",
    description: "Chicago Bulls Herschel Supply Co. Settlement Backpack",
    discount: "15",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459253/ClutchStore/Bulls/Bags/Chicago_Bulls_Herschel_Supply_Co._Settlement_Backpack_fopyc0.webp",
    inStock: true,
    isFeatured: false,
    name: "Chicago Bulls Backpack",
    price: "2500",
    rating: "4.1",
    team: "Chicago Bulls",
    title: "chicago-bulls-backpack",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    description:
      "Men's Chicago Bulls New Era Black Criss Cross 9FIFTY Trucker Snapback Hat",
    discount: "21",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Bulls/Caps/Men_s_Chicago_Bulls_New_Era_Black_Criss_Cross_9FIFTY_Trucker_Snapback_Hat_ikumvf.webp",
    inStock: true,
    isFeatured: false,
    name: "Chicago Bulls Cap",
    price: "1600",
    rating: "3.8",
    team: "Chicago Bulls",
    title: "chicago-bulls-cap",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Men's Chicago Bulls Michael Jordan Mitchell & Ness Red 1997-98 Hardwood Classics Authentic Player Jersey",
    discount: "6",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459255/ClutchStore/Bulls/Jerseys/Men_s_Chicago_Bulls_Michael_Jordan_Mitchell_Ness_Red_1997-98_Hardwood_Classics_Authentic_Player_Jersey_kzogjk.webp",
    inStock: false,
    isFeatured: false,
    name: "Michael Jordan Jersey",
    price: "18000",
    rating: "4.75",
    team: "Chicago Bulls",
    title: "chicago-bulls-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Youth Chicago Bulls Zach LaVine Fanatics Branded White Fast Break Replica Jersey - Association Edition",
    discount: "18",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459255/ClutchStore/Bulls/Jerseys/Youth_Chicago_Bulls_Zach_LaVine_Fanatics_Branded_White_Fast_Break_Replica_Jersey_-_Association_Edition_whinop.webp",
    inStock: true,
    isFeatured: true,
    name: "Zach LaVine Jersey",
    price: "9900",
    rating: "4.25",
    team: "Chicago Bulls",
    title: "chicago-bulls-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description:
      "Men's Chicago Bulls Fanatics Branded Black Primary Team Logo Pullover Hoodie",
    discount: "12",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459253/ClutchStore/Bulls/Hoodies/Men_s_Chicago_Bulls_Fanatics_Branded_Black_Primary_Team_Logo_Pullover_Hoodie_gqvaj0.webp",
    inStock: true,
    isFeatured: false,
    name: "Chicago Bulls Hoodie",
    price: "8500",
    rating: "3.5",
    team: "Chicago Bulls",
    title: "chicago-bulls-hoodies",
  },
  {
    _id: uuid(),
    categoryName: "Shorts",
    description:
      "Men's Chicago Bulls Nike Red-Black 2021-22 City Edition Swingman Shorts",
    discount: "16",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459254/ClutchStore/Bulls/Shorts/Men_s_Chicago_Bulls_Nike_Red-Black_2021-22_City_Edition_Swingman_Shorts_dmdui9.webp",
    inStock: true,
    isFeatured: false,
    name: "Chicago Bulls Shorts",
    price: "6500",
    rating: "3.8",
    team: "Chicago Bulls",
    title: "chicago-bulls-shorts",
  },

  //Clippers

  {
    _id: uuid(),
    categoryName: "Backpack",
    description:
      "LA Clippers Herschel Supply Co. Blue Satin Settlement Backpack",
    discount: "12",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459255/ClutchStore/Clippers/Bags/LA_Clippers_Herschel_Supply_Co._Blue_Satin_Settlement_Backpack_eix7s5.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Clippers Backpack",
    price: "2800",
    rating: "3.4",
    team: "LA Clippers",
    title: "la-clippers-backpack",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    description:
      "Mens LA Clippers New Era Light Blue-Orange 2021-22 City Edition City Edition Official 59FIFTY Fitted Hat",
    discount: "26",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459254/ClutchStore/Clippers/Caps/Mens_LA_Clippers_New_Era_Light_Blue-Orange_2021-22_City_Edition_City_Edition_Official_59FIFTY_Fitted_Hat_kephgb.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Clippers Cap",
    price: "1900",
    rating: "4.1",
    team: "LA Clippers",
    title: "la-clippers-cap",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Mens LA Clippers Kawhi Leonard Fanatics Branded White Fast Break Replica Player Jersey - Association Edition",
    discount: "16",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459253/ClutchStore/Clippers/Jerseys/Mens_LA_Clippers_Kawhi_Leonard_Fanatics_Branded_White_Fast_Break_Replica_Player_Jersey_-_Association_Edition_emakhu.webp",
    inStock: false,
    isFeatured: false,
    name: "Kawhi Leonard Jersey",
    price: "12000",
    rating: "4.2",
    team: "LA Clippers",
    title: "la-clippers-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Mens LA Clippers Paul George Jordan Brand Black 2020-21 Swingman Jersey - Statement Edition",
    discount: "19",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Clippers/Jerseys/Mens_LA_Clippers_Paul_George_Jordan_Brand_Black_2020-21_Swingman_Jersey_-_Statement_Edition_mm1b3t.webp",
    inStock: true,
    isFeatured: true,
    name: "Paul George Jersey",
    price: "11100",
    rating: "4.3",
    team: "LA Clippers",
    title: "la-clippers-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description:
      "Mens LA Clippers Fanatics Branded Royal Primary Team Logo Pullover Hoodie",
    discount: "21",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Clippers/Hoodies/Mens_LA_Clippers_Fanatics_Branded_Royal_Primary_Team_Logo_Pullover_Hoodie_w07gho.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Clippers Hoodie",
    price: "9500",
    rating: "3.6",
    team: "LA Clippers",
    title: "la-clippers-hoodies",
  },
  {
    _id: uuid(),
    categoryName: "Shorts",
    description:
      "Mens LA Clippers Nike Light Blue-White 2021-22 City Edition Swingman Shorts",
    discount: "14",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Clippers/Shorts/Mens_LA_Clippers_Nike_Light_Blue-White_2021-22_City_Edition_Swingman_Shorts_ftzsp7.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Clippers Shorts",
    price: "7500",
    rating: "3.9",
    team: "LA Clippers",
    title: "la-clippers-shorts",
  },

  //Lakers

  {
    _id: uuid(),
    categoryName: "Backpack",
    description: "Los Angeles Lakers FOCO Big Logo Bungee Backpack",
    discount: "15",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Lakers/Bags/Los_Angeles_Lakers_FOCO_Big_Logo_Bungee_Backpack_xv6cf2.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Lakers Backpack",
    price: "3800",
    rating: "3.7",
    team: "LA Lakers",
    title: "la-lakers-backpack",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    description:
      "Mens Los Angeles Lakers New Era Gray-Turquoise Color Pack 9FIFTY Snapback Hat",
    discount: "16",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459255/ClutchStore/Lakers/Caps/Mens_Los_Angeles_Lakers_New_Era_Gray-Turquoise_Color_Pack_9FIFTY_Snapback_Hat_ve5g1d.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Lakers Cap",
    price: "2900",
    rating: "2.9",
    team: "LA Lakers",
    title: "la-lakers-cap",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Mens Los Angeles Lakers Kobe Bryant Mitchell & Ness Gold Hardwood Classics 2008-09 Authentic Jersey",
    discount: "5",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Lakers/Jerseys/Mens_Los_Angeles_Lakers_Kobe_Bryant_Mitchell_Ness_Gold_Hardwood_Classics_2008-09_Authentic_Jersey_lzptbh.webp",
    inStock: false,
    isFeatured: false,
    name: "Kobe Bryant Jersey",
    price: "19000",
    rating: "4.8",
    team: "LA Lakers",
    title: "la-lakers-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Mens Los Angeles Lakers LeBron James Nike Black City Edition Swingman Jersey",
    discount: "12",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Lakers/Jerseys/Mens_Los_Angeles_Lakers_LeBron_James_Nike_Black_City_Edition_Swingman_Jersey_hlzqk0.webp",
    inStock: true,
    isFeatured: true,
    name: "LeBron James Jersey",
    price: "15000",
    rating: "4.5",
    team: "LA Lakers",
    title: "la-lakers-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description:
      "Mens Los Angeles Lakers Fanatics Branded Black Primary Team Logo Pullover Hoodie",
    discount: "21",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459254/ClutchStore/Lakers/Hoodies/Mens_Los_Angeles_Lakers_Fanatics_Branded_Black_Primary_Team_Logo_Pullover_Hoodie_wzsgvi.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Lakers Hoodie",
    price: "10500",
    rating: "3.8",
    team: "LA Lakers",
    title: "la-lakers-hoodies",
  },
  {
    _id: uuid(),
    categoryName: "Shorts",
    description:
      "Mens Los Angeles Lakers LeBron James Pro Standard Black Team Player Shorts",
    discount: "9",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Lakers/Shorts/Mens_Los_Angeles_Lakers_LeBron_James_Pro_Standard_Black_Team_Player_Shorts_lfhbf9.webp",
    inStock: true,
    isFeatured: false,
    name: "LA Lakers Shorts",
    price: "7500",
    rating: "4",
    team: "LA Lakers",
    title: "la-lakers-shorts",
  },

  //Heat

  {
    _id: uuid(),
    categoryName: "Backpack",
    description: "Miami Heat FOCO Solid Big Logo Backpack",
    discount: "10",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Heat/Bags/Miami_Heat_FOCO_Solid_Big_Logo_Backpack_mdll0p.webp",
    inStock: true,
    isFeatured: false,
    name: "Miami Heat Backpack",
    price: "3800",
    rating: "4.1",
    team: "Miami Heat",
    title: "miami-heat-backpack",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    description:
      "Men's Miami Heat New Era Black 2021-22 City Edition Alternate 59FIFTY Fitted Hat",
    discount: "9",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459254/ClutchStore/Heat/Caps/Men_s_Miami_Heat_New_Era_Black_2021-22_City_Edition_Alternate_59FIFTY_Fitted_Hat_afejuc.webp",
    inStock: true,
    isFeatured: false,
    name: "Miami Heat Cap",
    price: "2900",
    rating: "3.9",
    team: "Miami Heat",
    title: "miami-heat-cap",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Mens Miami Heat Jimmy Butler Fanatics Branded Black 2021-22 Fast Break Replica Jersey - City Edition",
    discount: "15",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459253/ClutchStore/Heat/Jerseys/Mens_Miami_Heat_Jimmy_Butler_Fanatics_Branded_Black_2021-22_Fast_Break_Replica_Jersey_-_City_Edition_lwz19n.webp",
    inStock: false,
    isFeatured: false,
    name: "Jimmy Butler Jersey",
    price: "19000",
    rating: "4.2",
    team: "Miami Heat",
    title: "miami-heat-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Miami Heat Jimmy Butler Nike White 2020-21 Swingman Player Jersey - Association Edition",
    discount: "21",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Heat/Jerseys/Miami_Heat_Jimmy_Butler_Nike_White_2020-21_Swingman_Player_Jersey_-_Association_Edition_kpyexk.webp",
    inStock: true,
    isFeatured: true,
    name: "Miami Heat White Jersey",
    price: "15000",
    rating: "4.5",
    team: "Miami Heat",
    title: "miami-heat-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description:
      "Men's Miami Heat Fanatics Branded Red Primary Team Logo Pullover Hoodie",
    discount: "11",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459254/ClutchStore/Heat/Hoodies/Men_s_Miami_Heat_Fanatics_Branded_Red_Primary_Team_Logo_Pullover_Hoodie_ps5mcb.webp",
    inStock: true,
    isFeatured: false,
    name: "Miami Heat Hoodie",
    price: "10500",
    rating: "4",
    team: "Miami Heat",
    title: "miami-heat-hoodies",
  },
  {
    _id: uuid(),
    categoryName: "Shorts",
    description:
      "Mens Miami Heat Jordan Brand Red-Black 2020-21 Statement Edition Performance Swingman Shorts",
    discount: "8",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459254/ClutchStore/Heat/Shorts/Mens_Miami_Heat_Jordan_Brand_Red-Black_2020-21_Statement_Edition_Performance_Swingman_Shorts_ajk8ol.webp",
    inStock: true,
    isFeatured: false,
    name: "Miami Heat Shorts",
    price: "7500",
    rating: "3.6",
    team: "Miami Heat",
    title: "miami-heat-shorts",
  },

  //Warriors

  {
    _id: uuid(),
    categoryName: "Backpack",
    description: "Golden State Warriors FOCO Big Logo Bungee Backpack",
    discount: "12",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459255/ClutchStore/Warriors/Bags/Golden_State_Warriors_FOCO_Big_Logo_Bungee_Backpack_toxao7.webp",
    inStock: true,
    isFeatured: false,
    name: "Golden State Warriors Backpack",
    price: "4600",
    rating: "3.7",
    team: "Golden State Warriors",
    title: "golden-state-warriors-backpack",
  },
  {
    _id: uuid(),
    categoryName: "Caps",
    description:
      "Mens Golden State Warriors New Era Black-Gold 2021-22 City Edition City Edition Official 59FIFTY Fitted Hat",
    discount: "19",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Warriors/Caps/Mens_Golden_State_Warriors_New_Era_Black-Gold_2021-22_City_Edition_City_Edition_Official_59FIFTY_Fitted_Hat_tztmfr.webp",
    inStock: true,
    isFeatured: false,
    name: "Golden State Warriors Cap",
    price: "5400",
    rating: "3.9",
    team: "Golden State Warriors",
    title: "golden-state-warriors-cap",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Mens Golden State Warriors Stephen Curry Fanatics Branded Gold Fast Break Team Replica Jersey - Statement Edition",
    discount: "8",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Warriors/Jerseys/Mens_Golden_State_Warriors_Stephen_Curry_Fanatics_Branded_Gold_Fast_Break_Team_Replica_Jersey_-_Statement_Edition_o9gnba.webp",
    inStock: false,
    isFeatured: false,
    name: "Stephen Curry Jersey",
    price: "18000",
    rating: "4.6",
    team: "Golden State Warriors",
    title: "golden-state-warriors-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Jerseys",
    description:
      "Mens Golden State Warriors Stephen Curry Fanatics Branded White Fast Break Replica Player Jersey - Association Edition",
    discount: "9",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459257/ClutchStore/Warriors/Jerseys/Mens_Golden_State_Warriors_Stephen_Curry_Fanatics_Branded_White_Fast_Break_Replica_Player_Jersey_-_Association_Edition_q6ebhu.webp",
    inStock: true,
    isFeatured: true,
    name: "Warriors White Jersey",
    price: "16000",
    rating: "4.1",
    team: "Golden State Warriors",
    title: "golden-state-warriors-jerseys",
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description:
      "Mens Golden State Warriors Stephen Curry Fanatics Branded Royal Team Playmaker Name & Number Pullover Hoodie",
    discount: "20",
    fastDelivery: false,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Warriors/Hoodies/Mens_Golden_State_Warriors_Stephen_Curry_Fanatics_Branded_Royal_Team_Playmaker_Name_Number_Pullover_Hoodie_iybtgm.webp",
    inStock: true,
    isFeatured: false,
    name: "Golden State Warriors Hoodie",
    price: "12500",
    rating: "4.1",
    team: "Golden State Warriors",
    title: "golden-state-warriors-hoodies",
  },
  {
    _id: uuid(),
    categoryName: "Shorts",
    description:
      "Mens Golden State Warriors Nike Black 2021-22 City Edition Swingman Shorts",
    discount: "19",
    fastDelivery: true,
    image_URL:
      "https://res.cloudinary.com/clutchaf/image/upload/v1648459256/ClutchStore/Warriors/Shorts/Mens_Golden_State_Warriors_Nike_Black_2021-22_City_Edition_Swingman_Shorts_awwsuf.webp",
    inStock: true,
    isFeatured: false,
    name: "Golden State Warriors Shorts",
    price: "9500",
    rating: "4.1",
    team: "Golden State Warriors",
    title: "golden-state-warriors-shorts",
  },
];
