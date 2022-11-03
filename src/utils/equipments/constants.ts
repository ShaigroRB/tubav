import { Equipment, TranslatedName } from "./types";

export const EQUIPMENT_IDS: Record<Equipment, number[]> = {
  grey: [
    31, 35, 36, 37, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 64, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 84, 88, 89, 94, 96, 97, 98, 99, 100, 101, 102, 103, 104,
    105, 106, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 123, 124, 125, 126, 127, 133, 134, 135, 136, 137, 155, 158, 161,
    162, 163, 164, 167, 168, 169, 170, 172, 173, 174, 175, 176, 177, 178, 179,
    180, 181, 182, 183, 184, 185, 186, 187, 191, 193, 194, 198, 200, 202, 203,
    219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233,
    234, 235, 236, 237, 238, 239, 240, 241, 242, 244, 248, 249, 250, 259, 261,
    265, 266, 267, 270, 271, 272, 273, 275, 276, 292, 298, 302, 303, 305, 306,
    307, 308, 309, 310, 311, 312, 313, 321, 322, 323, 324, 333, 336, 378, 441,
    442, 524, 686, 1000,
  ],
  weapon: [
    1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 29, 34, 38, 82, 83, 85, 86,
    87, 91, 92, 93, 107, 156, 157, 159, 160, 188, 189, 190, 195, 199, 205, 251,
    252, 254, 258, 274, 279, 280, 281, 282, 283, 284, 287, 288, 291, 293, 294,
    295, 297, 299, 301, 337, 338, 342, 343, 345, 346, 347, 348, 349, 350, 353,
    354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 367, 368, 369, 370,
    371, 373, 374, 376, 382, 383, 384, 385, 386, 387, 401, 402, 403, 404, 405,
    425, 426, 427, 428, 430, 444, 445, 449, 452, 453, 454, 455, 456, 458, 499,
    500, 501, 503, 504, 520, 521, 522, 523, 525, 561, 575, 576, 577, 578, 579,
    580, 602, 603, 604, 605, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617,
    618, 619, 620, 621, 622, 644, 645, 646, 647, 648, 649, 650, 652, 653, 654,
    655, 656, 657, 676, 677, 678, 679, 680, 681, 682, 683, 684, 687, 688, 704,
    705, 707, 708, 709, 723, 724, 725, 727, 728, 729, 748, 749, 750, 751, 752,
    753, 789, 790, 792, 793, 794, 795, 807, 808, 809, 810, 812, 814, 818, 824,
    831, 832, 842, 843, 844, 852, 853, 854, 855, 856, 857, 885, 892, 893, 894,
    895, 896, 897, 898, 909, 932, 933, 934, 935, 936, 937, 940, 942, 946, 948,
    952, 954, 959, 960, 963, 966, 968, 969, 970, 996, 997, 998, 999, 1007,
  ],
  shield: [3, 289, 290, 459, 460, 502, 706, 791, 811, 817],
  hat: [
    18, 19, 20, 21, 22, 45, 50, 128, 129, 130, 131, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 214, 215, 216,
    217, 218, 260, 262, 263, 277, 278, 325, 326, 327, 328, 329, 330, 331, 332,
    334, 335, 375, 388, 390, 391, 392, 408, 409, 410, 411, 412, 413, 414, 415,
    416, 417, 418, 419, 420, 421, 422, 423, 424, 443, 461, 462, 463, 464, 465,
    466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 526, 527,
    528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 569, 570, 571, 572, 573,
    574, 623, 624, 625, 626, 627, 628, 658, 659, 660, 661, 662, 663, 664, 665,
    666, 667, 668, 669, 698, 699, 700, 701, 702, 703, 712, 713, 714, 715, 716,
    717, 742, 743, 744, 745, 746, 747, 766, 767, 768, 769, 770, 771, 815, 816,
    822, 823, 829, 830, 836, 837, 838, 839, 840, 841, 879, 880, 881, 882, 883,
    884, 886, 887, 888, 889, 890, 891, 941, 943, 947, 949, 953, 955, 979, 980,
    981, 982, 983, 984, 990, 991, 992, 993, 994, 995,
  ],
  accessory: [
    23, 24, 25, 62, 63, 165, 166, 171, 243, 245, 246, 247, 255, 256, 264, 268,
    269, 304, 314, 316, 318, 320, 365, 366, 393, 479, 480, 481, 482, 483, 484,
    485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 538,
    539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553,
    554, 555, 556, 557, 558, 559, 560, 651, 670, 671, 672, 673, 674, 675, 732,
    733, 734, 735, 736, 737, 738, 739, 755, 756, 757, 758, 759, 819, 820, 826,
    827, 833, 834, 861, 862, 863, 864, 865, 866, 867, 904, 905, 906, 907, 944,
    945, 950, 951, 956, 957, 971, 972, 973, 974, 989, 1002, 1003, 1004, 1005,
  ],
};

export const EQUIPMENT_NAMES: Record<number, TranslatedName> = {
  1: {
    en: "Bazooka",
    fr: "Bazooka",
  },
  2: {
    en: "Shotgun",
    fr: "Fusil à pompe",
  },
  3: {
    en: "Shield",
    fr: "Bouclier",
  },
  4: {
    en: "Grenade",
    fr: "Grenade",
  },
  5: {
    en: "Nightstick",
    fr: "Gourdin",
  },
  6: {
    en: "Axe",
    fr: "Hache",
  },
  7: {
    en: "Grenade launcher",
    fr: "Lance grenade",
  },
  8: {
    en: "Ham",
    fr: "Jambon",
  },
  9: {
    en: "Dynamite",
    fr: "Dynamite",
  },
  11: {
    en: "Lager beer",
    fr: "Bière blonde",
  },
  12: {
    en: "Hunting bow",
    fr: "Arc de chasse",
  },
  13: {
    en: "Hunting knife",
    fr: "Couteau de chasse",
  },
  14: {
    en: "Bear trap",
    fr: "Piège à ours",
  },
  15: {
    en: "Magic wand",
    fr: "Baguette magique",
  },
  16: {
    en: "Bazooka du Dev",
    fr: "Bazooka du Dev",
  },
  17: {
    en: "Aile de poulet",
    fr: "Aile de poulet",
  },
  18: {
    en: "Princess Hat",
    fr: "Chapeau de Fée",
  },
  19: {
    en: "Ranger Hood",
    fr: "Capuchon",
  },
  20: {
    en: "Soldier Helmet",
    fr: "Casque de Soldat",
  },
  21: {
    en: "Glutton Tongue",
    fr: "Langue du Glouton",
  },
  22: {
    en: "Viking Helmet",
    fr: "Casque de Viking",
  },
  23: {
    en: "Sunglasses",
    fr: "Lunettes de Soleil",
  },
  24: {
    en: "Glasses",
    fr: "Lunettes",
  },
  25: {
    en: "Golden glasses",
    fr: "Golden glasses",
  },
  26: {
    en: "Metal",
    fr: "Métal",
  },
  27: {
    en: "Gunpowder",
    fr: "Poudre à canon",
  },
  28: {
    en: "Jewel",
    fr: "Joyau",
  },
  29: {
    en: "Shovel",
    fr: "Pelle",
  },
  30: {
    en: "Wood",
    fr: "Bois",
  },
  31: {
    en: "Weat Stalk",
    fr: "Epis de blé",
  },
  32: {
    en: "Cloth",
    fr: "Tissu",
  },
  33: {
    en: "Resin",
    fr: "Résine",
  },
  34: {
    en: "Bat",
    fr: "Batte",
  },
  35: {
    en: "Bazookartichoke",
    fr: "Bazookartichaut",
  },
  36: {
    en: "Lumberjack Axe",
    fr: "Hache du bûcheron",
  },
  37: {
    en: "Gatling gun",
    fr: "Sulfateuse",
  },
  38: {
    en: "Dark beer",
    fr: "Bière brune",
  },
  39: {
    en: "Chewing gum",
    fr: "Chewing gum",
  },
  40: {
    en: "Le Clad",
    fr: "Le Clad",
  },
  41: {
    en: "Helmet of Last Resort",
    fr: "Casque d'ultime recours",
  },
  42: {
    en: "Warrior Braids",
    fr: "Tresses guerrières",
  },
  43: {
    en: "Propeller Beanie",
    fr: "Coiffe de l'ingénu",
  },
  44: {
    en: "Ghoul Hood",
    fr: "Cagoule goule",
  },
  45: {
    en: "Green Hood",
    fr: "Bonnet vert",
  },
  46: {
    en: "Chef's Hat",
    fr: "Toque du chef",
  },
  47: {
    en: "Sergeant Kevin's Cap",
    fr: "Casquette du sergent kevin",
  },
  48: {
    en: "Wolf Skin Hood",
    fr: "Peau de loup",
  },
  49: {
    en: "The Gaul",
    fr: "Le Gaulois",
  },
  50: {
    en: "The Donut Eater",
    fr: "Mangeur de donuts",
  },
  51: {
    en: "The Rusky",
    fr: "Ruskoff",
  },
  52: {
    en: "The Gimdor",
    fr: "Le Gimdor",
  },
  53: {
    en: "Burger",
    fr: "Burger",
  },
  54: {
    en: "Blowgun",
    fr: "Sarbacane",
  },
  55: {
    en: "Straw",
    fr: "Paille",
  },
  56: {
    en: "3D Glasses",
    fr: "Lunettes 3D",
  },
  57: {
    en: "Snorkeling Mask",
    fr: "Le Tuba masqué",
  },
  58: {
    en: "Cigar",
    fr: "Cigare",
  },
  59: {
    en: "Party Whistle",
    fr: "Sifflet festif",
  },
  60: {
    en: "Bubble Pipe",
    fr: "Pipe à bulles",
  },
  61: {
    en: "Party Glasses",
    fr: "Lunettes de soirée",
  },
  62: {
    en: "Specs",
    fr: "Binocles",
  },
  63: {
    en: "Monocle",
    fr: "Monocle",
  },
  64: {
    en: "Spiked Shield",
    fr: "Bouclier à pics",
  },
  65: {
    en: "Candy Cane",
    fr: "Sucre d'Orge",
  },
  66: {
    en: "Carbon Steel Bow",
    fr: "Arc de carbone",
  },
  67: {
    en: "I rule Bow",
    fr: "Arc dit Rules",
  },
  69: {
    en: "The Critic",
    fr: "Le Critiqueur",
  },
  70: {
    en: "Tonfaq v1",
    fr: "Tonfaq v1"
  },
  71: {
    en: "Tonfaq",
    fr: "Tonfaq",
  },
  72: {
    en: "Tonfaq v2",
    fr: "Tonfaq v2"
  },
  73: {
    en: "Gallic Shield",
    fr: "Bouclier Gaulois",
  },
  74: {
    en: "Plated Shield",
    fr: "Bouclier en plaque",
  },
  75: {
    en: "Bazookarton",
    fr: "Bazookarton",
  },
  76: {
    en: "Hammer",
    fr: "Marteau",
  },
  77: {
    en: "Axteroid",
    fr: "Hache Téroïde",
  },
  78: {
    en: "Sugarcane Blowgun",
    fr: "Sarbacane à sucre",
  },
  79: {
    en: "Black Blowgun",
    fr: "Sarbacane noire",
  },
  80: {
    en: "Aboriginal Blowgun",
    fr: "Sarbacane Aborigène",
  },
  81: {
    en: "Wheat Beer",
    fr: "Bière blanche",
  },
  82: {
    en: "Champagne",
    fr: "Champagne",
  },
  83: {
    en: "Ladle",
    fr: "Louche",
  },
  84: {
    en: "Jackhammer",
    fr: "Marteau piqueur",
  },
  85: {
    en: "Tetanus Trap",
    fr: "Piège Tétanos",
  },
  86: {
    en: "Jaws",
    fr: "La Machoire",
  },
  87: {
    en: "Aggressive Trap",
    fr: "Piège agressif",
  },
  88: {
    en: "Tenamyte",
    fr: "Les 10 namites",
  },
  89: {
    en: "Surprise dynamite",
    fr: "Dynamite surprise",
  },
  91: {
    en: "Chicken Leg",
    fr: "Cuisse de poulet",
  },
  92: {
    en: "Sickle",
    fr: "Serpe",
  },
  93: {
    en: "Machete",
    fr: "Machette",
  },
  94: {
    en: "Leek",
    fr: "Poireau",
  },
  96: {
    en: "Sticky Grenade",
    fr: "Ventouse explosive",
  },
  97: {
    en: "Smoke Grenade",
    fr: "Fumigène",
  },
  98: {
    en: "Percussion Grenade",
    fr: "Grenade à percussion",
  },
  99: {
    en: "Healing Blowgun 42",
    fr: "Sarbadrianna 42",
  },
  100: {
    en: "The OS-100",
    fr: "L'OS-100",
  },
  101: {
    en: "Number's thiner",
    fr: "Le Régulateur d'espèces",
  },
  102: {
    en: "Rifle of the Unknown Soldier",
    fr: "Le fusil du soldat méconnu",
  },
  103: {
    en: "Boardingun",
    fr: "Abordagenitor",
  },
  104: {
    en: "Bazookarnage",
    fr: "Bazookarnage",
  },
  105: {
    en: "Throwing Hatchet ",
    fr: "Hachette de lancer",
  },
  106: {
    en: "Throwing Knife",
    fr: "Couteau de lancer",
  },
  107: {
    en: "The Stunner",
    fr: "L'assommeuse",
  },
  108: {
    en: "The Stunner v1",
    fr: "L'assomeuse v1"
  },
  109: {
    en: "Butcher's Knife",
    fr: "Le Fendoir du boucher",
  },
  110: {
    en: "Cloth Belt",
    fr: "Ceinture en tissu",
  },
  111: {
    en: "Rope",
    fr: "La corde",
  },
  112: {
    en: "Chains",
    fr: "Chaines",
  },
  113: {
    en: "Ghoul Belt",
    fr: "Ceinture Goule",
  },
  114: {
    en: "Leather Belt",
    fr: "Ceinture de cuir",
  },
  115: {
    en: "Floating Duck",
    fr: "La bouée canard",
  },
  116: {
    en: "Jailer's Belt",
    fr: "Le passe-partout",
  },
  117: {
    en: "Sheriff's Star",
    fr: "Etoile de Sherif",
  },
  118: {
    en: "Bronze Medal",
    fr: "Médaille de Bronze",
  },
  119: {
    en: "Silver Medal",
    fr: "Médaille d'Argent",
  },
  120: {
    en: "Gold Medal",
    fr: "Médaille d'Or",
  },
  121: {
    en: "Peace Badge",
    fr: "Peace and Love",
  },
  122: {
    en: "Flower Badge",
    fr: "Badge Floral",
  },
  123: {
    en: "Sponsor's Belt",
    fr: "Ceinture du mécène",
  },
  124: {
    en: "Ryu",
    fr: "Ryu",
  },
  125: {
    en: "Bowl of Rice",
    fr: "Bol de riz",
  },
  126: {
    en: "Sake",
    fr: "Sake",
  },
  127: {
    en: "The Magic Log",
    fr: "La Buche magique",
  },
  128: {
    en: "Party Hat",
    fr: "Chapeau festif",
  },
  129: {
    en: "Party Hat",
    fr: "Chapeau festif",
  },
  130: {
    en: "Party Hat",
    fr: "Chapeau festif",
  },
  131: {
    en: "Party Hat",
    fr: "Chapeau festif",
  },
  133: {
    en: "Miner Helmet",
    fr: "Casque de Mineur",
  },
  134: {
    en: "Pistol",
    fr: "Pistolet",
  },
  135: {
    en: "Defensive Panel",
    fr: "Panel défensif",
  },
  136: {
    en: "Shovel-Pickaxe",
    fr: "Pelle-pioche",
  },
  137: {
    en: "Nail Dynamite",
    fr: "Dynamite à clous",
  },
  138: {
    en: "Robin Hood-Hood",
    fr: "Le Roob",
  },
  139: {
    en: "The Plucked",
    fr: "L'emplumé",
  },
  140: {
    en: "Masked Hood",
    fr: "Le lecteur",
  },
  141: {
    en: "The Corsair",
    fr: "Le Corsaire",
  },
  142: {
    en: "Redbeard Helm",
    fr: "Le Heaume Issyde",
  },
  143: {
    en: "Anarchist's Bandanna",
    fr: "Bandanarchique",
  },
  144: {
    en: "The Graduate",
    fr: "Le Diplômé",
  },
  145: {
    en: "UFC Bucket",
    fr: "UFC Bucket",
  },
  146: {
    en: "Can Hat",
    fr: "Cascanette",
  },
  147: {
    en: "Cooking Pot",
    fr: "La casserole",
  },
  148: {
    en: "Green Beret",
    fr: "Beret vert",
  },
  149: {
    en: "Nub's Cowboy Hat",
    fr: "Chapeau du Nub bovin",
  },
  150: {
    en: "Construction Helmet",
    fr: "Casque de chantier",
  },
  151: {
    en: "Illuminated Miner's Hat",
    fr: "Chapeau du mineur éclairé",
  },
  152: {
    en: "Lantern",
    fr: "La lanterne",
  },
  153: {
    en: "The Misunderstood Genius",
    fr: "Le génie incompris",
  },
  154: {
    en: "Victor Le Chapeau",
    fr: "Victor Le Chapeau",
  },
  155: {
    en: "Shovel-Wrench",
    fr: "Pelle-clé",
  },
  156: {
    en: "Swiss Army Knife",
    fr: "Couteau suisse",
  },
  157: {
    en: "Pasta",
    fr: "Coquillettes",
  },
  158: {
    en: "Bolognese-Thrower",
    fr: "Lance-bolognaise",
  },
  159: {
    en: "Wasabi Gas",
    fr: "Gaz wazabi",
  },
  160: {
    en: "Land Mine",
    fr: "Mine",
  },
  161: {
    en: "White Horns",
    fr: "Cornes Blanches",
  },
  162: {
    en: "Brown Horns",
    fr: "Cornes Brunes",
  },
  163: {
    en: "Angel Wings",
    fr: "Aile d'ange",
  },
  164: {
    en: "Demon Wings",
    fr: "Aile de démon",
  },
  165: {
    en: "Elf Ears",
    fr: "Oreille elfique",
  },
  166: {
    en: "Goblin Ears",
    fr: "Oreille de farfadet",
  },
  167: {
    en: "Uni-Horn",
    fr: "Li-corne",
  },
  168: {
    en: "Rainbow Uni-Horn",
    fr: "Li-corne Arc-en-ciel",
  },
  169: {
    en: "Panda Hat",
    fr: "Chapeau panda",
  },
  170: {
    en: "Laser Glasses",
    fr: "Lunettes laser",
  },
  171: {
    en: "Rock Glasses",
    fr: "Lunettes de rock",
  },
  172: {
    en: "Incognito Mask",
    fr: "Masque incognito",
  },
  173: {
    en: "Aviation Goggles",
    fr: "Lunettes d'aviation",
  },
  174: {
    en: "Biker Goggles",
    fr: "Lunettes Motardes",
  },
  175: {
    en: "Gas Mask",
    fr: "Masque à gaz",
  },
  176: {
    en: "Toast",
    fr: "La Tartine",
  },
  177: {
    en: "Fake Scar",
    fr: "Fausse cicatrice",
  },
  178: {
    en: "Ethernet Belt",
    fr: "Ceinture ethernet",
  },
  179: {
    en: "Barrel Belt",
    fr: "Ceinture baril",
  },
  180: {
    en: "Champion's Belt",
    fr: "Ceinture du champion",
  },
  181: {
    en: "Handyman's Belt",
    fr: "Ceinture du bricoleur",
  },
  182: {
    en: "Ammo Belt",
    fr: "Ceinture de munitions",
  },
  183: {
    en: "Security Badge",
    fr: "Badge de sécurité",
  },
  184: {
    en: "Tissue",
    fr: "Mouchoir",
  },
  185: {
    en: "Smiley Sticker",
    fr: "Sticker Smiley",
  },
  186: {
    en: "Death Sticker",
    fr: "Sticker Mort",
  },
  187: {
    en: "Burger Sticker",
    fr: "Sticker Burger",
  },
  188: {
    en: "Koma Mine",
    fr: "Mine Koma",
  },
  189: {
    en: "The Log",
    fr: "Le Tronc",
  },
  190: {
    en: "Soul Sucker Axe",
    fr: "Hache Hackfois",
  },
  191: {
    en: "Marthor",
    fr: "Marthor",
  },
  192: {
    en: "Jetpack",
    fr: "Jetpack",
  },
  193: {
    en: "Resupply Panel",
    fr: "Panel de ravitaillement",
  },
  194: {
    en: "Offensive Panel",
    fr: "Panel offensif",
  },
  195: {
    en: "Elf Bow",
    fr: "Arc Elfique",
  },
  196: {
    en: "Arc du Dev",
    fr: "Arc du Dev",
  },
  197: {
    en: "Bouclier du dev",
    fr: "Bouclier du dev",
  },
  198: {
    en: "Short Bow",
    fr: "Arc court",
  },
  199: {
    en: "Beans",
    fr: "Flageolets",
  },
  200: {
    en: "Soup",
    fr: "Soupe",
  },
  201: {
    en: "Lance-grenade du Dev",
    fr: "Lance-grenade du Dev",
  },
  202: {
    en: "Bazookadum",
    fr: "Bazookadum",
  },
  203: {
    en: "Survivor's Panel",
    fr: "Panel de survie",
  },
  204: {
    en: "Casque Zombie Soldat",
    fr: "Casque Zombie Soldat",
  },
  205: {
    en: "Bras Zombie",
    fr: "Bras Zombie",
  },
  206: {
    en: "Casque Zombie Viking",
    fr: "Casque Zombie Viking",
  },
  207: {
    en: "Bras Zombie",
    fr: "Bras Zombie",
  },
  208: {
    en: "Casque Zombie Glouton",
    fr: "Casque Zombie Glouton",
  },
  209: {
    en: "Bras Zombie",
    fr: "Bras Zombie",
  },
  210: {
    en: "Casque Zombie Rodeur",
    fr: "Casque Zombie Rodeur",
  },
  211: {
    en: "Bras Zombie",
    fr: "Bras Zombie",
  },
  212: {
    en: "Casque Zombie Mineur",
    fr: "Casque Zombie Mineur",
  },
  213: {
    en: "Bras Zombie",
    fr: "Bras Zombie",
  },
  214: {
    en: "Casque Zombie Soldat",
    fr: "Casque Zombie Soldat",
  },
  215: {
    en: "Casque Zombie Viking",
    fr: "Casque Zombie Viking",
  },
  216: {
    en: "Casque Zombie Glouton",
    fr: "Casque Zombie Glouton",
  },
  217: {
    en: "Casque Zombie Rodeur",
    fr: "Casque Zombie Rodeur",
  },
  218: {
    en: "Casque Zombie Mineur",
    fr: "Casque Zombie Mineur",
  },
  219: {
    en: "Werewolf Sideburns",
    fr: "Rouflaquettes garou",
  },
  220: {
    en: "Vampire Fangs",
    fr: "Canines de vampire",
  },
  221: {
    en: "Lollipop",
    fr: "Sucette",
  },
  222: {
    en: "Guts",
    fr: "Entrailles",
  },
  223: {
    en: "Bionic Heart",
    fr: "Coeur bionique",
  },
  224: {
    en: "DeVille Horns",
    fr: "Cornes des Moniaques",
  },
  225: {
    en: "Snake Tongue",
    fr: "Langue de vipère",
  },
  226: {
    en: "Pumpkin Sticker",
    fr: "Sticker Citrouille",
  },
  227: {
    en: "Ceinture chauve-souris",
    fr: "Ceinture chauve-souris",
  },
  228: {
    en: "Knife Headband",
    fr: "Serre-tête  Couteau",
  },
  229: {
    en: "Arrow Headband",
    fr: "Serre-tête  Flèche",
  },
  230: {
    en: "Hangman's Rope",
    fr: "Corde de pendu",
  },
  231: {
    en: "Red Stain",
    fr: "Tache rouge",
  },
  232: {
    en: "Pierced Shirt",
    fr: "Le transpercé",
  },
  233: {
    en: "Fork",
    fr: "Fourchette",
  },
  234: {
    en: "Stake",
    fr: "Pieu",
  },
  235: {
    en: "Garlic Necklace",
    fr: "Collier d'ail",
  },
  236: {
    en: "Cauldron Belt",
    fr: "Ceinture chaudron",
  },
  237: {
    en: "Decapitation Scar",
    fr: "Cicatrice de décapité",
  },
  238: {
    en: "Mummy Mask",
    fr: "Masque de momie",
  },
  239: {
    en: "Mummy Bandages",
    fr: "Bandelettes de momie",
  },
  240: {
    en: "Hockey Mask",
    fr: "Masque de hockey",
  },
  241: {
    en: "Hungry Teeth",
    fr: "Ventre affamé",
  },
  242: {
    en: "Ceinture boa",
    fr: "Ceinture boa",
  },
  243: {
    en: "Sticker Le Batman",
    fr: "Sticker Le Batman",
  },
  244: {
    en: "Vers",
    fr: "Vers",
  },
  245: {
    en: "Cicatrice de dissequé",
    fr: "Cicatrice de dissequé",
  },
  246: {
    en: "Stitches",
    fr: "Coutures",
  },
  247: {
    en: "Sticker Araignée",
    fr: "Sticker Araignée",
  },
  248: {
    en: "Bazookartery",
    fr: "Bazookartère",
  },
  249: {
    en: "Hemoglowine",
    fr: "Hémoglobibine",
  },
  250: {
    en: "Pumpkin Dynamite",
    fr: "Dynamite Citrouille",
  },
  251: {
    en: "Soul Bow",
    fr: "Arc Ame",
  },
  252: {
    en: "Skull Shovel-Pickaxe",
    fr: "Pelle-pios",
  },
  253: {
    en: "testItem",
    fr: "testItem",
  },
  254: {
    en: "Thumbs Up",
    fr: "Coud'pouce",
  },
  255: {
    en: "Tweetbelt",
    fr: "Tweeture",
  },
  256: {
    en: "Googlasses",
    fr: "Gloosses",
  },
  257: {
    en: "Moineau de l'amitié",
    fr: "Moineau de l'amitié",
  },
  258: {
    en: "Remote-Controlled Mine",
    fr: "Mine Télécommandée",
  },
  259: {
    en: "Turkey Head",
    fr: "Tête de dinde",
  },
  260: {
    en: "Snowman's Head",
    fr: "Tête de bonhomme de neige",
  },
  261: {
    en: "Christmas Tree Head",
    fr: "Tête de sapin",
  },
  262: {
    en: "Red Santa Hat",
    fr: "Bonnet rouge à ponpon",
  },
  263: {
    en: "Green Elf Hat",
    fr: "Bonnet de Lutin",
  },
  264: {
    en: "Striped Scarf",
    fr: "Echarpe rayée",
  },
  265: {
    en: "Carrot",
    fr: "La Carotte",
  },
  266: {
    en: "Reindeer Ears",
    fr: "Oreilles de renne",
  },
  267: {
    en: "Snowflake Badge",
    fr: "Badge flocon",
  },
  268: {
    en: "Ski Mask",
    fr: "Masque de ski",
  },
  269: {
    en: "Christmas Lights",
    fr: "Guirlande lumineuse",
  },
  270: {
    en: "Sled Shield",
    fr: "Bouclier Luge",
  },
  271: {
    en: "Candy Cane Shotgun",
    fr: "Sucre d'orge à pompe",
  },
  272: {
    en: "Mistletoe",
    fr: "Branche de gui",
  },
  273: {
    en: "Poisoned Gift",
    fr: "Cadeau empoisonné",
  },
  274: {
    en: "Explosive Gummy Bear",
    fr: "Gélatinours explosif",
  },
  275: {
    en: "Christmas Grenade",
    fr: "Grenade de noël",
  },
  276: {
    en: "Yule Log",
    fr: "Bûche de noël",
  },
  277: {
    en: "Strawberry Rubber Helmet",
    fr: "Scaphandre à la fraise",
  },
  278: {
    en: "Rubber Helmet",
    fr: "Scaphandre en latex",
  },
  279: {
    en: "Candy",
    fr: "Bonbon",
  },
  280: {
    en: "Sour Candy",
    fr: "Bonbon acidulé",
  },
  281: {
    en: "Bazookaramel",
    fr: "Bazookaramel",
  },
  282: {
    en: "Badwater",
    fr: "Badwater",
  },
  283: {
    en: "The Eraser",
    fr: "L'Effaceur",
  },
  284: {
    en: "Bazookool",
    fr: "Bazookool",
  },
  287: {
    en: "Halberd",
    fr: "Hallebarde",
  },
  288: {
    en: "Absinthe",
    fr: "Absinthe",
  },
  289: {
    en: "Ram Shield",
    fr: "Bouclier Belier",
  },
  290: {
    en: "Winged Shield",
    fr: "Bouclier ailé",
  },
  291: {
    en: "Cannon Bow",
    fr: "Arcanon",
  },
  292: {
    en: "Crossbow",
    fr: "Arbalète",
  },
  293: {
    en: "Camouflaged Trap",
    fr: "Piège camouflé",
  },
  294: {
    en: "Spring Trap",
    fr: "Trappe sur ressort",
  },
  295: {
    en: "Bouncing Ball Launcher",
    fr: "Lance-balles-rebondissantes",
  },
  297: {
    en: "La Baguette",
    fr: "Baguette de pain",
  },
  298: {
    en: "Tag Panel",
    fr: "Panel du chat perché",
  },
  299: {
    en: "Shovel-Bat",
    fr: "Pelle-batte",
  },
  301: {
    en: "Bomb",
    fr: "Bombe",
  },
  302: {
    en: "Surgical Mask",
    fr: "Masque médical",
  },
  303: {
    en: "Lei",
    fr: "Collier de fleur",
  },
  304: {
    en: "Eye Patch",
    fr: "Cache-oeil",
  },
  305: {
    en: "Pirate Belt",
    fr: "Ceinture du pirate",
  },
  306: {
    en: "Kilt",
    fr: "Kilt",
  },
  307: {
    en: "Judo Belt",
    fr: "Ceinture de Judo",
  },
  308: {
    en: "Tie",
    fr: "Cravate",
  },
  309: {
    en: "Bow Tie",
    fr: "Noeud pap'",
  },
  310: {
    en: "Ace of Hearts",
    fr: "L'As de Coeur",
  },
  311: {
    en: "Ace of Clubs",
    fr: "L'As de Trefle",
  },
  312: {
    en: "Ace of Diamonds",
    fr: "L'As de Carreau",
  },
  313: {
    en: "Ace of Spaces",
    fr: "L'As de Pique",
  },
  314: {
    en: "Ediogames T-shirt",
    fr: "T-shirt Ediogames",
  },
  315: {
    en: "Belt with Holster",
    fr: "Ceinture porte pistolet",
  },
  316: {
    en: "Magnifying  Glasses",
    fr: "Culs-de-bouteille",
  },
  317: {
    en: "tête enflammé",
    fr: "tête enflammé",
  },
  318: {
    en: "Grass Skirt",
    fr: "Pagne des îles",
  },
  319: {
    en: "Corsair Straps",
    fr: "Sangles de corsaire",
  },
  320: {
    en: "Black Leather Belt",
    fr: "Ceinture de cuir noir",
  },
  321: {
    en: "Pie in the Face",
    fr: "Tarte pour figure",
  },
  322: {
    en: "The Funnel",
    fr: "L'Entonnoir",
  },
  323: {
    en: "French Beret",
    fr: "Beret frenchy",
  },
  324: {
    en: "Rotating Light Helmet",
    fr: "Casque gyrophare",
  },
  325: {
    en: "Gold Digger",
    fr: "Le Chercheur d'or",
  },
  326: {
    en: "Cube Head",
    fr: "Coiffe cubique",
  },
  327: {
    en: "Draconic Helm",
    fr: "Casque draconique",
  },
  328: {
    en: "Samurai Helmet",
    fr: "Le Samurakiri",
  },
  329: {
    en: "Conquistador Helmet",
    fr: "Le Conquistador",
  },
  330: {
    en: "Police Hat",
    fr: "Casquette de police",
  },
  331: {
    en: "Trainer Cap",
    fr: "Casquette du dresseur",
  },
  332: {
    en: "Mafioso Hat",
    fr: "Chapeau mafieux",
  },
  333: {
    en: "Executioner's Hood",
    fr: "Capuche du bourreau",
  },
  334: {
    en: "The Plucker",
    fr: "L'emplumeur",
  },
  335: {
    en: "Assassin's Hood",
    fr: "Capuche d'assassin",
  },
  336: {
    en: "Elisive Panel",
    fr: "Panel de l'insaisissable",
  },
  337: {
    en: "Frag Grenade",
    fr: "Grenade à fragmentation",
  },
  338: {
    en: "Rocket",
    fr: "Fusée d'artifice",
  },
  340: {
    en: "Amnesia Pill",
    fr: "Pilule d'amnésie",
  },
  341: {
    en: "Inventory Expansion",
    fr: "Agrandissement d'inventaire",
  },
  342: {
    en: "Amaryllis Bow",
    fr: "Arcaryllidaceae",
  },
  343: {
    en: "Compass Bow",
    fr: "Comp-arc",
  },
  344: {
    en: "The Umbrella",
    fr: "Le Parapluie",
  },
  345: {
    en: "Racquet",
    fr: "La Raquette",
  },
  346: {
    en: "Bazookool",
    fr: "Bazookool",
  },
  347: {
    en: "Shaken Cocktail",
    fr: "Cocktail agité",
  },
  348: {
    en: "Nitro Bomb",
    fr: "Nitro Bombe",
  },
  349: {
    en: "Kebab",
    fr: "Kebab",
  },
  350: {
    en: "Tooth Mace",
    fr: "Masse molaire",
  },
  351: {
    en: "Aigle explosif",
    fr: "Aigle explosif",
  },
  352: {
    en: "Aigle Bombardier",
    fr: "Aigle Bombardier",
  },
  353: {
    en: "Beach Sparrow",
    fr: "Moineau des plages",
  },
  354: {
    en: "Python Revolver",
    fr: "Revolver Python",
  },
  355: {
    en: "Sling",
    fr: "Fronde",
  },
  356: {
    en: "Fuel lamp",
    fr: "Lampe à huile",
  },
  357: {
    en: "Libur Sword",
    fr: "Epée de Libur",
  },
  358: {
    en: "Grenayudem Thrower",
    fr: "Lance-grenayudem",
  },
  359: {
    en: "Eskenife ",
    fr: "Epéesken",
  },
  360: {
    en: "PhendrAxe",
    fr: "PhendrAxe",
  },
  361: {
    en: "Bowawa",
    fr: "Wawarc",
  },
  362: {
    en: "FartyBoy",
    fr: "FartyBoy",
  },
  363: {
    en: "Bazookairka",
    fr: "Bazookairka",
  },
  364: {
    en: "Freyjailbreaker",
    fr: "Freyjalafraise",
  },
  365: {
    en: "DTC T-Shirt",
    fr: "T-Shirt DTC",
  },
  366: {
    en: "Cat Tail Belt",
    fr: "Ceinture queue de chat",
  },
  367: {
    en: "Caton",
    fr: "Châton",
  },
  368: {
    en: "Tazer",
    fr: "Tazer",
  },
  369: {
    en: "Firework Rocket",
    fr: "Feu d'artifice",
  },
  370: {
    en: "Katana",
    fr: "Katana",
  },
  371: {
    en: "Shuriken",
    fr: "Shuriken",
  },
  372: {
    en: "Invisibility",
    fr: "Invisibilité",
  },
  373: {
    en: "Makibishi",
    fr: "Makibishi",
  },
  374: {
    en: "Kirbybougnax",
    fr: "Kirbybougnache",
  },
  375: {
    en: "Ninja Hood",
    fr: "Capuche de ninja",
  },
  376: {
    en: "Furtive Katana",
    fr: "Katana furtif",
  },
  377: {
    en: "The Way Out",
    fr: "Echappatoire",
  },
  378: {
    en: "Teleportation Panel",
    fr: "Panel du voyageur",
  },
  379: {
    en: "Blue Easter Egg",
    fr: "Oeuf de Pâques Bleu",
  },
  380: {
    en: "Red Easter Egg",
    fr: "Oeuf de Pâques Rouge",
  },
  381: {
    en: "The Burn Out",
    fr: "Fuite brûlante",
  },
  382: {
    en: "Kunai Teleporter",
    fr: "Kunai de téléportation",
  },
  383: {
    en: "Makiwazabishi",
    fr: "Makiwazabishi",
  },
  384: {
    en: "Corrosive Makibishi",
    fr: "Makibishi corrosif",
  },
  385: {
    en: "Kunai Transposer",
    fr: "Kunai de transposition",
  },
  386: {
    en: "Aerokatana",
    fr: "Katanaérien",
  },
  387: {
    en: "Mini-Capsule-Ball",
    fr: "MiniCapsuleBall",
  },
  388: {
    en: "Ninja Zombie Helmet",
    fr: "Casque Zombie Ninja",
  },
  389: {
    en: "Zombie Arm",
    fr: "Bras de Zombie",
  },
  390: {
    en: "Fukin taoru",
    fr: "Fukin taoru",
  },
  391: {
    en: "Wicker Sugegasa",
    fr: "Sugegaza en osier",
  },
  392: {
    en: "Blue Wicker Sugegasa",
    fr: "Sugegaza en osier bleu",
  },
  393: {
    en: "Bionic Eye",
    fr: "Oeil bionique",
  },
  394: {
    en: "Soldier's Tomb",
    fr: "Tombe Soldat",
  },
  395: {
    en: "Viking's Tomb",
    fr: "Tombe Viking",
  },
  396: {
    en: "Glutton's Tomb",
    fr: "Tombe Glouton",
  },
  397: {
    en: "Ranger's Tomb",
    fr: "Tombe Rodeur",
  },
  398: {
    en: "Miner's Tomb",
    fr: "Tombe Mineur",
  },
  399: {
    en: "Ninja's Tomb",
    fr: "Tombe Ninja",
  },
  401: {
    en: "Brandy",
    fr: "Eau de vie",
  },
  402: {
    en: "Sharpened Maki",
    fr: "Makipointe",
  },
  403: {
    en: "Flash Grenade",
    fr: "Grenade Flash",
  },
  404: {
    en: "Dot3 Shuriken",
    fr: "Shuriken Dot3",
  },
  405: {
    en: "Cursed Blowgun",
    fr: "Sarbacane maudite",
  },
  406: {
    en: "Blinding escape",
    fr: "Fuite aveuglante",
  },
  407: {
    en: "Healing escape",
    fr: "Fuite curative",
  },
  408: {
    en: "Rubik's Cube",
    fr: "RubiksCube",
  },
  409: {
    en: "Squamata",
    fr: "Le Squamata",
  },
  410: {
    en: "Spaghettifro",
    fr: "Afrobolo",
  },
  411: {
    en: "Frankensnub",
    fr: "Frankensnub",
  },
  412: {
    en: "Fedora the explorer",
    fr: "Fedora d'explorateur",
  },
  413: {
    en: "Tricorn",
    fr: "Tricorne",
  },
  414: {
    en: "Cobra's solid crate",
    fr: "Carton solide del cobra",
  },
  415: {
    en: "The Commando",
    fr: "Le Commando",
  },
  416: {
    en: "Renaissance Wig",
    fr: "Perruque Renaissance",
  },
  417: {
    en: "Red Turban",
    fr: "Turban rouge",
  },
  418: {
    en: "The Fragment Dealer",
    fr: "Le dealer de Fragments",
  },
  419: {
    en: "Ediogames Headband",
    fr: "Bandeau Ediogames",
  },
  420: {
    en: "Moomoo Hat",
    fr: "Vache MeuhMeuh",
  },
  421: {
    en: "Fireman's Helmet",
    fr: "Casque Pompier",
  },
  422: {
    en: "Monokeke Hood",
    fr: "Le Monokéké",
  },
  423: {
    en: "The Good Gul",
    fr: "Le Bon Gul",
  },
  424: {
    en: "Pineapple Boy",
    fr: "L'AnanasBoy",
  },
  425: {
    en: "Ryu Gatling Gun",
    fr: "RyuFateuse",
  },
  426: {
    en: "Katana Blowgun",
    fr: "Sarbakatana",
  },
  427: {
    en: "Japaxe Nechpo",
    fr: "Japache Nechpo",
  },
  428: {
    en: "Wasabi Jar",
    fr: "Jarre wazabi",
  },
  429: {
    en: "Jetpack Rocket",
    fr: "Fusée jetpack",
  },
  430: {
    en: "Maki Spikes",
    fr: "Makipics",
  },
  431: {
    en: "Soldier Rune",
    fr: "Rune Soldat",
  },
  432: {
    en: "Viking Rune",
    fr: "Rune Viking",
  },
  433: {
    en: "Ninja Rune",
    fr: "Rune Ninja",
  },
  434: {
    en: "Miner Rune",
    fr: "Rune Mineur",
  },
  435: {
    en: "Glutton Rune",
    fr: "Rune Glouton",
  },
  436: {
    en: "Ranger Rune",
    fr: "Rune Rodeur",
  },
  437: {
    en: "2014 Japan Rune",
    fr: "Rune Japan 2014",
  },
  438: {
    en: "Live Rune",
    fr: "Rune Vive",
  },
  439: {
    en: "Detonating Rune",
    fr: "Rune Détonante",
  },
  440: {
    en: "Guard's Rune",
    fr: "Rune Du Garde",
  },
  441: {
    en: "Champion's Crown",
    fr: "Couronne du Champion",
  },
  442: {
    en: "Party Hat",
    fr: "Chapeau festif",
  },
  443: {
    en: "Party Hat",
    fr: "Chapeau festif",
  },
  444: {
    en: "Bazookalamari",
    fr: "Bazookalamar",
  },
  445: {
    en: "Laser Katana",
    fr: "Katana laser",
  },
  446: {
    en: "Paralyzing Rune",
    fr: "Rune Paralysante",
  },
  447: {
    en: "Explosive Rune",
    fr: "Rune Explosive",
  },
  448: {
    en: "Burst Rune",
    fr: "Rune Rafale",
  },
  449: {
    en: "Vampire Bow",
    fr: "Dracularc",
  },
  450: {
    en: "Spiked Trap",
    fr: "piège à pics",
  },
  451: {
    en: "Mass Invisibility",
    fr: "Invisibilité de masse",
  },
  452: {
    en: "Katanagony",
    fr: "Katanagonie",
  },
  453: {
    en: "Kunai of Disappearances",
    fr: "Kunai de disparition",
  },
  454: {
    en: "Last Hope Grenade",
    fr: "Grenade du dernier espoir",
  },
  455: {
    en: "Dumbies",
    fr: "Dumbies",
  },
  456: {
    en: "Super Candy",
    fr: "Super bonbon",
  },
  457: {
    en: "Cloning Scroll",
    fr: "Parchemin de clonage",
  },
  458: {
    en: "Shovel-Mace",
    fr: "Pelle-masse",
  },
  459: {
    en: "Random Shield",
    fr: "Boucliéventuel",
  },
  460: {
    en: "Kaptain Karnage's Shield",
    fr: "Bouclier du captain Karnage",
  },
  461: {
    en: "Mountie Hat",
    fr: "Le Tabarnak",
  },
  462: {
    en: "The Watermelon",
    fr: "La Pastèque",
  },
  463: {
    en: "Crockett Hat",
    fr: "L'amateur de croquettes",
  },
  464: {
    en: "The Leper Chaun",
    fr: "Lépreux Chun",
  },
  465: {
    en: "Olympic Beard",
    fr: "Barbe Olympique",
  },
  466: {
    en: "The Barrel",
    fr: "Le Tonneau",
  },
  467: {
    en: "The Beekeeper",
    fr: "L'Apiculteur",
  },
  468: {
    en: "Fox Hood",
    fr: "Cagoupil",
  },
  469: {
    en: "Necroticap",
    fr: "Bonnécrotique",
  },
  470: {
    en: "Jester Hat",
    fr: "Bonnet de Bouffon",
  },
  471: {
    en: "Big Fish",
    fr: "Gros poisson",
  },
  472: {
    en: "Fish Bowl",
    fr: "Bocal",
  },
  473: {
    en: "Diving Helmet",
    fr: "Préservateur",
  },
  474: {
    en: "Deerstalker Cap",
    fr: "Sherloquesses",
  },
  475: {
    en: "Top hat",
    fr: "Haut de forme",
  },
  476: {
    en: "Skull Jaw",
    fr: "Machoire cranienne",
  },
  477: {
    en: "SlenderNub Mask",
    fr: "SlenderNub",
  },
  478: {
    en: "Rorschach Mask",
    fr: "Masque de roffchraerch",
  },
  479: {
    en: "Headphones",
    fr: "Casque audio",
  },
  480: {
    en: "Flower",
    fr: "Fleur",
  },
  481: {
    en: "Punk Hair",
    fr: "Crète Punk",
  },
  482: {
    en: "Skull Barrette",
    fr: "Barrette tête de mort",
  },
  483: {
    en: "Rabbit Ears",
    fr: "Oreilles de Lapine",
  },
  484: {
    en: "Piercing",
    fr: "Piercing",
  },
  485: {
    en: "Halo",
    fr: "Auréole",
  },
  486: {
    en: "Red Ribbon",
    fr: "Ruban rouge",
  },
  487: {
    en: "Red Nose",
    fr: "Nez Rouge",
  },
  488: {
    en: "DWI glasses",
    fr: "Lunettes DWI",
  },
  489: {
    en: "Lipstick",
    fr: "Rouge à lèvres",
  },
  490: {
    en: "Lipstick Stains",
    fr: "Traces de bisous",
  },
  491: {
    en: "Cloud Belt",
    fr: "Ceinture nuageuse",
  },
  492: {
    en: "Goth Belt",
    fr: "Ceinture gothique",
  },
  493: {
    en: "Rainbelt",
    fr: "Rainbowture",
  },
  494: {
    en: "Banana Belt",
    fr: "Ceinture banane",
  },
  495: {
    en: "Falling Suspenders",
    fr: "Bretelles tombantes",
  },
  496: {
    en: "Handbag",
    fr: "Sac à main",
  },
  497: {
    en: "Prehistoric Loincloth",
    fr: "Pagne préhistorique",
  },
  498: {
    en: "Tighty-Whities",
    fr: "Le slip neuf",
  },
  499: {
    en: "Brick Maki",
    fr: "Maki Briques",
  },
  500: {
    en: "Pixel Shovel-Pickaxe",
    fr: "Pelle-Pioche Pixel",
  },
  501: {
    en: "Riddle Trap",
    fr: "Question piège",
  },
  502: {
    en: "Not Your Ordinary Shield",
    fr: "Bouclier atypique",
  },
  503: {
    en: "Spicy UFC Bucket",
    fr: "Spicy Bucket UFC",
  },
  504: {
    en: "Whale Musket",
    fr: "Fusil balogner pour biroloq",
  },
  505: {
    en: "Death Corps Dimension 1 Rune",
    fr: "Rune Death Corp Dimension 1",
  },
  506: {
    en: "Painful Rune",
    fr: "Rune Douloureuse",
  },
  507: {
    en: "Fast Rune",
    fr: "Rune Véloce",
  },
  508: {
    en: "Death Corps Tomb",
    fr: "Tombe Death Corp",
  },
  509: {
    en: "Wooden Chest",
    fr: "Coffre en bois",
  },
  510: {
    en: "Iron Chest",
    fr: "Coffre en fer",
  },
  511: {
    en: "Golden Chest",
    fr: "Coffre en or",
  },
  512: {
    en: "Supply Chest",
    fr: "Coffre de ressources",
  },
  513: {
    en: "Lottery Ticket",
    fr: "Ticket de loterie",
  },
  514: {
    en: "Panel du Dev",
    fr: "Panel du Dev",
  },
  515: {
    en: "Halfdead's Arm",
    fr: "Bras de Casimor",
  },
  516: {
    en: "Halfdead's Arm",
    fr: "Bras de Casimor",
  },
  517: {
    en: "Halfdead's Eye",
    fr: "Oeil de Casimor",
  },
  518: {
    en: "Halfdead's Rage",
    fr: "Rage Casimorienne",
  },
  519: {
    en: "Parachute",
    fr: "Parachute",
  },
  520: {
    en: "Vampire Hunter Crossbow",
    fr: "Arbalète du chasseur de vampire",
  },
  521: {
    en: "Black Smoke Bomb",
    fr: "Fumigène noir",
  },
  522: {
    en: "Scythe",
    fr: "La Faux",
  },
  523: {
    en: "Eye Thrower",
    fr: "Lance-oeil",
  },
  524: {
    en: "Gourmet Panel",
    fr: "Panel Gourmand",
  },
  525: {
    en: "Katadaver",
    fr: "Katadavre",
  },
  526: {
    en: "Bat Ranger",
    fr: "Batrodeur",
  },
  527: {
    en: "Bat Glutton",
    fr: "Batglouton",
  },
  528: {
    en: "Bat Soldier",
    fr: "Batsoldat",
  },
  529: {
    en: "Bat Viking",
    fr: "Batviking",
  },
  530: {
    en: "Bat Miner",
    fr: "Batmineur",
  },
  531: {
    en: "Bat Ninja",
    fr: "Batninja",
  },
  532: {
    en: "Pumpkin Ranger",
    fr: "Citrouille rodeur",
  },
  533: {
    en: "Pumpkin Glutton",
    fr: "Citrouille glouton",
  },
  534: {
    en: "Pumpkin Soldier",
    fr: "Citrouille soldat",
  },
  535: {
    en: "Pumpkin Viking",
    fr: "Citrouille viking",
  },
  536: {
    en: "Pumpkin Miner",
    fr: "Citrouille mineur",
  },
  537: {
    en: "Pumpkin Ninja",
    fr: "Citrouille ninja",
  },
  538: {
    en: "Bat Ears",
    fr: "Oreilles de chauve-souris",
  },
  539: {
    en: "Pierced Apple",
    fr: "Pomme transpercée",
  },
  540: {
    en: "Mandibles",
    fr: "Mandibules",
  },
  541: {
    en: "Vampire Collar",
    fr: "Col de vampire",
  },
  542: {
    en: "Not-Quite-DeVille Horns",
    fr: "Cornes pas moniaques",
  },
  543: {
    en: "Warty Nose",
    fr: "Nez verreux",
  },
  544: {
    en: "Hannibal's Mask",
    fr: "Masque Hannibal",
  },
  545: {
    en: "Prisoner's Necklace",
    fr: "Collier de prisonnier ",
  },
  546: {
    en: "Skeleton Gas Mask",
    fr: "Masque à gaz squelette",
  },
  547: {
    en: "The Thing in a Glove",
    fr: "La chose dans un gant",
  },
  548: {
    en: "Creepy Lipstick",
    fr: "Rouge à lèvres flippant",
  },
  549: {
    en: "Big Eyes",
    fr: "Gros yeux",
  },
  550: {
    en: "Mouth.zip",
    fr: "Bouche.zip",
  },
  551: {
    en: "Nose Bone",
    fr: "Os de nez",
  },
  552: {
    en: "Skeleton Ribs",
    fr: "Côte de squelette",
  },
  553: {
    en: "Scratch Marks",
    fr: "Griffures",
  },
  554: {
    en: "Hungry Tummy",
    fr: "Ventre affamé",
  },
  555: {
    en: "Gastric Intruder",
    fr: "Intru gastrique",
  },
  556: {
    en: "Belly Hand",
    fr: "Main dans le ventre",
  },
  557: {
    en: "Pumpkin Handbag",
    fr: "Sac à main citrouille",
  },
  558: {
    en: "Cauldron Handbag",
    fr: "Sac à main chaudron",
  },
  559: {
    en: "Bat Belt",
    fr: "Bature",
  },
  560: {
    en: "Bat Badge",
    fr: "Bat Badge",
  },
  561: {
    en: "Foam Bat",
    fr: "Batte en mousse",
  },
  562: {
    en: "Slicing Rune",
    fr: "Rune Tranchante",
  },
  563: {
    en: "Edible Rune",
    fr: "Rune Comestible ",
  },
  564: {
    en: "Resonant Rune",
    fr: "Rune Résonante",
  },
  565: {
    en: "2014 Halloween Rune",
    fr: "Rune Halloween 2014",
  },
  566: {
    en: "2013 Halloween Rune",
    fr: "Rune Halloween 2013",
  },
  567: {
    en: "Premium Multipass",
    fr: "Multipass premium",
  },
  568: {
    en: "Rewindoquest",
    fr: "Rembobinoquête",
  },
  569: {
    en: "Christmas Ornament",
    fr: "La Boule de Noël",
  },
  570: {
    en: "Christmas Bell",
    fr: "La Cloche de Noël",
  },
  571: {
    en: "Krampus",
    fr: "Père hacheur",
  },
  572: {
    en: "Christmas Ninja",
    fr: "Ninja de Noël",
  },
  573: {
    en: "Ice Cube Hat",
    fr: "Le Glaçon",
  },
  574: {
    en: "Sleigh Bell Hood",
    fr: "Le Grelot de Noël",
  },
  575: {
    en: "Christmas Star",
    fr: "Etoile de Noël",
  },
  576: {
    en: "Up gun",
    fr: "Le Up",
  },
  577: {
    en: "Bazoogift",
    fr: "Bazookado",
  },
  578: {
    en: "Ice Knife",
    fr: "Couteau de glace",
  },
  579: {
    en: "Bottle of Bubbly",
    fr: "Bouteille de mousseux",
  },
  580: {
    en: "Turkey Bomb",
    fr: "La Dinde explosive",
  },
  581: {
    en: "Chocolate",
    fr: "Chocolat",
  },
  582: {
    en: "Thumbstone",
    fr: "Tombe notifiée",
  },
  583: {
    en: "Hashtomb",
    fr: "Tombe dièse",
  },
  584: {
    en: "Trench Rune",
    fr: "Rune des Tranchées",
  },
  585: {
    en: "Versatile Rune",
    fr: "Rune Versatile",
  },
  586: {
    en: "Cardboard Soldier's Rune",
    fr: "Rune du Soldat en Carton",
  },
  587: {
    en: "2014 Christmas Rune",
    fr: "Rune Noël 2014",
  },
  588: {
    en: "2013 Christmas Rune",
    fr: "Rune Noël 2013",
  },
  589: {
    en: "Count Kheel Converter",
    fr: "Convertisseur Comte Kheel",
  },
  590: {
    en: "GK Bazookarnage",
    fr: "Bazookarnage MK",
  },
  591: {
    en: "GK Golden Gun",
    fr: "Pistolet d'Or MK",
  },
  592: {
    en: "GK Cane",
    fr: "Canne MK",
  },
  593: {
    en: "GK Shooting Grenade",
    fr: "Grenadoucissante MK",
  },
  594: {
    en: "Hunger Rune",
    fr: "Rune de l'affamé",
  },
  595: {
    en: "Playful Rune",
    fr: "Rune Joueuse ",
  },
  596: {
    en: "Clean Rune",
    fr: "Rune propre",
  },
  597: {
    en: "Leathery Rune",
    fr: "Rune coriace",
  },
  598: {
    en: "Rewindoquest Chest",
    fr: "Coffre de rembobinoquêtes",
  },
  599: {
    en: "Coordinate Rune",
    fr: "Rune Coordonnée",
  },
  600: {
    en: "Frivolous Rune",
    fr: "Rune Frivole",
  },
  601: {
    en: "Death Corps Dimension 2 Rune",
    fr: "Rune Death Corp Dimension 2",
  },
  602: {
    en: "Hitgo Crossbow",
    fr: "Arbalète Hitgo",
  },
  603: {
    en: "Fishing Rod",
    fr: "Canne à pêche",
  },
  604: {
    en: "Petroleum Lamp",
    fr: "Lampe à pétrole",
  },
  605: {
    en: "Remote Controlled Bazooka",
    fr: "Bazooka téléguidé",
  },
  606: {
    en: "Grappling Iron",
    fr: "Grappin",
  },
  607: {
    en: "Multi-Clone Scroll",
    fr: "Multiclonage",
  },
  608: {
    en: "Tranquilizer Blowgun",
    fr: "Sarbacalmant",
  },
  609: {
    en: "Javelin",
    fr: "Javelot",
  },
  610: {
    en: "Cannon",
    fr: "Canon",
  },
  611: {
    en: "Flail",
    fr: "Fléau",
  },
  612: {
    en: "Magic Potion",
    fr: "Potion magique",
  },
  613: {
    en: "Grandma's Delicious Jam",
    fr: "Confiture Bonne Mamy",
  },
  614: {
    en: "Mystery Dynamite",
    fr: "Dynamite interrogative",
  },
  615: {
    en: "Carrot Blowgun",
    fr: "Sarbacarotte",
  },
  616: {
    en: "Shark Trap",
    fr: "Tête de requin",
  },
  617: {
    en: "Molotov Cocktail",
    fr: "Cocktail Molotov",
  },
  618: {
    en: "Knot Pistol",
    fr: "Pistolet noué",
  },
  619: {
    en: "Laser Darkatana",
    fr: "Darkatana laser",
  },
  620: {
    en: "Thunderbolt Kunai",
    fr: "L'éclair jaune",
  },
  621: {
    en: "Screwdriver",
    fr: "Tournevis",
  },
  622: {
    en: "Bazooktulu",
    fr: "Bazooktulu",
  },
  623: {
    en: "Sir Joy's Helm",
    fr: "Heaume du chevalier Joie",
  },
  624: {
    en: "Hot Dog Hat",
    fr: "Chapeau Hot-dog",
  },
  625: {
    en: "Beetle Mask",
    fr: "Masque de Scarabée",
  },
  626: {
    en: "Absolute Hero's Hood",
    fr: "Capuche du héro absolu",
  },
  627: {
    en: "The Bubionic Beak",
    fr: "Le Bubec",
  },
  628: {
    en: "Fishing Hat",
    fr: "Chapeau  pêché",
  },
  629: {
    en: "Familier test",
    fr: "Familier test",
  },
  630: {
    en: "Hector Plasm",
    fr: "Hector Plasme",
  },
  631: {
    en: "Your imaginary friend",
    fr: "L'ami imaginaire",
  },
  632: {
    en: "Sashimi",
    fr: "Sashimi",
  },
  633: {
    en: "Omelet",
    fr: "Omelette",
  },
  634: {
    en: "Honey Bro",
    fr: "Mayo",
  },
  635: {
    en: "Pandaloon",
    fr: "Pandadidou",
  },
  636: {
    en: "Silver Cloud",
    fr: "Silver Cloud",
  },
  637: {
    en: "Kikram",
    fr: "Kikram",
  },
  638: {
    en: "T-Rekt",
    fr: "T-Rekt",
  },
  639: {
    en: "Tack O'Bell",
    fr: "McLoch",
  },
  640: {
    en: "Easter Pack",
    fr: "Pack de Paques",
  },
  641: {
    en: "Persistent Rune",
    fr: "Rune Persistante",
  },
  642: {
    en: "Unusual Rune",
    fr: "Rune Insolite",
  },
  643: {
    en: "Propelled Rune",
    fr: "Rune Propulsée",
  },
  644: {
    en: "Golden Shovel",
    fr: "Pelle Dorée",
  },
  645: {
    en: "Camera",
    fr: "Appareil photo",
  },
  646: {
    en: "Cotton Candy",
    fr: "Barbe à papa",
  },
  647: {
    en: "Sonicola",
    fr: "Soni Cola",
  },
  648: {
    en: "Medusator",
    fr: "Médusator",
  },
  649: {
    en: "Daisy Bow",
    fr: "Arcabellis ",
  },
  650: {
    en: "Katanaway",
    fr: "Katanabsent",
  },
  651: {
    en: "Fairy Belt",
    fr: "Faeriture",
  },
  652: {
    en: "Real Axe",
    fr: "Hache Arnée",
  },
  653: {
    en: "Mouse Trap",
    fr: "Souricière",
  },
  654: {
    en: "Blinding Mine",
    fr: "Mine Aveuglante",
  },
  655: {
    en: "EMP Grenade",
    fr: "Grenade IEM",
  },
  656: {
    en: "Patator 24",
    fr: "Patator 24",
  },
  657: {
    en: "Teleportation Maki",
    fr: "Maki de téléportation",
  },
  658: {
    en: "Beach Bandana",
    fr: "Bandana des plages",
  },
  659: {
    en: "Umbrella Hood",
    fr: "Capuche parasol",
  },
  660: {
    en: "Panama Hat",
    fr: "Roland Chapos",
  },
  661: {
    en: "Sand Hood",
    fr: "Cagoule des sables",
  },
  662: {
    en: "Swimming Cap",
    fr: "Bonnet de bain",
  },
  663: {
    en: "Diva Hat",
    fr: "Chapeau diva",
  },
  664: {
    en: "The Bob",
    fr: "Le Bob",
  },
  665: {
    en: "The Sombrero",
    fr: "Le Sombrero",
  },
  666: {
    en: "Shark Hat",
    fr: "Sharkapuche",
  },
  667: {
    en: "Surfer Wig",
    fr: "Coupe de surfeur",
  },
  668: {
    en: "Beach Towel",
    fr: "Serviette de plage",
  },
  669: {
    en: "Horned Bucket",
    fr: "Seau à cornes",
  },
  670: {
    en: "Swimsuit",
    fr: "Maillot de bain",
  },
  671: {
    en: "Sun goggles",
    fr: "Lunettes 2 soleil",
  },
  672: {
    en: "Bikini",
    fr: "Bikini",
  },
  673: {
    en: "Palmoral Protection",
    fr: "Protection Palmoral",
  },
  674: {
    en: "Inner Tube",
    fr: "Bouée pneu",
  },
  675: {
    en: "Floating Crocodile",
    fr: "Bouée croco",
  },
  676: {
    en: "Tonfaqatana",
    fr: "Tonfaqatana",
  },
  677: {
    en: "Mini kunai",
    fr: "Mini kunai",
  },
  678: {
    en: "Japanese Bow",
    fr: "Japarc Nechpo",
  },
  679: {
    en: "Kobe Beef",
    fr: "Boeuf de Kobé",
  },
  680: {
    en: "Ryu Pistol",
    fr: "Ryugun",
  },
  681: {
    en: "Shurikawai",
    fr: "Shurikawai",
  },
  682: {
    en: "Paraxsol",
    fr: "Parachsol",
  },
  683: {
    en: "Palmoral Sun Block",
    fr: "Flacon de Palmoral",
  },
  684: {
    en: "Plastic Shovel",
    fr: "Pelle en plastique",
  },
  685: {
    en: "Water-Propelled Jetpack",
    fr: "Jet nautique",
  },
  686: {
    en: "Sandtry",
    fr: "Sandtry",
  },
  687: {
    en: "Sharkatana",
    fr: "Sharkatana",
  },
  688: {
    en: "Bee Blowgun",
    fr: "Sarbacabeille",
  },
  689: {
    en: "Mushtashu",
    fr: "Mushtashu",
  },
  690: {
    en: "Adolfin",
    fr: "Grobid",
  },
  691: {
    en: "Beach Ball",
    fr: "Ballon",
  },
  692: {
    en: "Sandcastle Tomb",
    fr: "Tombe chateau de sable",
  },
  693: {
    en: "Umbrella Tomb",
    fr: "Tombe parasol",
  },
  694: {
    en: "2013 Japan Rune",
    fr: "Rune Japan 2013",
  },
  695: {
    en: "2015 Japan Rune",
    fr: "Rune Japan 2015",
  },
  696: {
    en: "Divergent Rune",
    fr: "Rune Divergente",
  },
  697: {
    en: "Hot Rune",
    fr: "Rune Chaleureuse",
  },
  698: {
    en: "Brain Helmet",
    fr: "Casque céphalé",
  },
  699: {
    en: "Cyclops Mask",
    fr: "Le Mononoeil",
  },
  700: {
    en: "Wedding Cake Wig",
    fr: "La Pièce Montée",
  },
  701: {
    en: "Chicken Hood",
    fr: "Capuchicken",
  },
  702: {
    en: "Funky Nub",
    fr: "Funky Nub",
  },
  703: {
    en: "Tighty-Whities Mask",
    fr: "Le Masque Slip",
  },
  704: {
    en: "Blowgatlingun",
    fr: "Sarbacartillerie",
  },
  705: {
    en: "Torch",
    fr: "Torche",
  },
  706: {
    en: "Cookie Shield",
    fr: "Boucooklier",
  },
  707: {
    en: "Morning Star",
    fr: "Masse d'arme",
  },
  708: {
    en: "Net",
    fr: "Filet",
  },
  709: {
    en: "Big Wrench",
    fr: "Grosse clé",
  },
  710: {
    en: "Troll Dance",
    fr: "Danse du Troll",
  },
  711: {
    en: "Davai Dance",
    fr: "Danse du Davai",
  },
  712: {
    en: "Viking Mummy",
    fr: "Momie Viking",
  },
  713: {
    en: "Ninja Mummy",
    fr: "Momie Ninja",
  },
  714: {
    en: "Ranger Mummy",
    fr: "Momie Rodeur",
  },
  715: {
    en: "Glutton Mummy",
    fr: "Momie Glouton",
  },
  716: {
    en: "Soldier Mummy",
    fr: "Momie Soldat",
  },
  717: {
    en: "Miner Mummy",
    fr: "Momie Mineur",
  },
  718: {
    en: "Halloween Tomb",
    fr: "Tombe d'Halloween",
  },
  719: {
    en: "Vertebrae Ring",
    fr: "Anneau vertébré",
  },
  720: {
    en: "Acid Cauldron",
    fr: "Chaudron d'acide",
  },
  721: {
    en: "Spooky Chest",
    fr: "Coffre effrayant",
  },
  722: {
    en: "Super Spooky Chest",
    fr: "Monstrueux coffre effrayant",
  },
  723: {
    en: "Shishkanub",
    fr: "Brochette de Nubs",
  },
  724: {
    en: "Vertebrae Launcher",
    fr: "Lance vertébrale",
  },
  725: {
    en: "Zombie Trap",
    fr: "Piège zombie",
  },
  726: {
    en: "Bat Wings",
    fr: "Ailes de chauve-souris",
  },
  727: {
    en: "Jack O'Lantern",
    fr: "Lanterne citrouille",
  },
  728: {
    en: "DeVille Stars",
    fr: "Etoiles des Moniaques",
  },
  729: {
    en: "Devil's Pitchfork",
    fr: "Fourche diabolique",
  },
  730: {
    en: "Karakara",
    fr: "Karakara",
  },
  731: {
    en: "Zombie Dance",
    fr: "Danse du Zombie",
  },
  732: {
    en: "Stomach Scabbard",
    fr: "Fourreau ventral",
  },
  733: {
    en: "Hand Glasses",
    fr: "Manoculus",
  },
  734: {
    en: "Devil Horns",
    fr: "Diabolus cornas",
  },
  735: {
    en: "Head Crusher",
    fr: "Presse-méninges",
  },
  736: {
    en: "Bat Barrette",
    fr: "Bat barette",
  },
  737: {
    en: "Pumpkin Glasses",
    fr: "Lunettes cucurbitesques",
  },
  738: {
    en: "Devil's Belt",
    fr: "Diable au corps",
  },
  739: {
    en: "Centi-Eyes",
    fr: "Cent oeils",
  },
  740: {
    en: "2015 Halloween Rune",
    fr: "Rune Halloween 2015",
  },
  741: {
    en: "Not Your Ordinary Rune",
    fr: "Rune Atypique",
  },
  742: {
    en: "Hockey Helmet",
    fr: "Casque de hockey",
  },
  743: {
    en: "The Pale Wanderer",
    fr: "Le pâle déambulateur",
  },
  744: {
    en: "Gift Mask",
    fr: "Mascadeau",
  },
  745: {
    en: "Gingerbread Head",
    fr: "Tête de pain d'épices",
  },
  746: {
    en: "Candle Head",
    fr: "Tête de cire",
  },
  747: {
    en: "The Inuit",
    fr: "L'inuit",
  },
  748: {
    en: "Festive Blowgun",
    fr: "Sarbacotillon",
  },
  749: {
    en: "Winter Sucker Axe",
    fr: "Hache Hackiver",
  },
  750: {
    en: "The Joy of Giving",
    fr: "Le plaisir d'offrir",
  },
  751: {
    en: "Snowball Thrower",
    fr: "Lance boules de neige",
  },
  752: {
    en: "Kandy Kane Katana",
    fr: "Lame orgée",
  },
  753: {
    en: "Shovel-Teddy",
    fr: "Pelle-Teddy",
  },
  754: {
    en: "Teddy",
    fr: "Ted",
  },
  755: {
    en: "Thermometer",
    fr: "Thermomètre",
  },
  756: {
    en: "Candy Cane Belt",
    fr: "Ceinture sucre d'orge",
  },
  757: {
    en: "Scratchy Scarf",
    fr: "Echarpe qui gratte",
  },
  758: {
    en: "Neon Glasses",
    fr: "Lunettes néon",
  },
  759: {
    en: "Sheepskin Earmuffs",
    fr: "Cache oreilles moumoute ",
  },
  760: {
    en: "2015 Christmas Rune",
    fr: "Rune Noël 2015",
  },
  761: {
    en: "Ice Token",
    fr: "Jeton de glace",
  },
  762: {
    en: "Christmas Chest",
    fr: "Coffre de noel",
  },
  763: {
    en: "Big Christmas Chest",
    fr: "Grand coffre de noel",
  },
  764: {
    en: "Huge Christmas Chest",
    fr: "Enorme coffre de noel",
  },
  765: {
    en: "Ice Fragment",
    fr: "Fragment de glace",
  },
  766: {
    en: "Pink Soldier Hat",
    fr: "Chapeau Soldat Rose",
  },
  767: {
    en: "Pink Viking Hat",
    fr: "Chapeau Viking Rose",
  },
  768: {
    en: "Pink Glutton Hat",
    fr: "Chapeau Glouton Rose",
  },
  769: {
    en: "Pink Ranger Hat",
    fr: "Chapeau Rodeur Rose",
  },
  770: {
    en: "Pink Miner Hat",
    fr: "Chapeau Mineur Rose",
  },
  771: {
    en: "Pink Ninja Hat",
    fr: "Chapeau Ninja Rose",
  },
  772: {
    en: "Tomb of the Stone-Hearted ",
    fr: "Tombe du Coeur de Pierre ",
  },
  773: {
    en: "EMF Pill",
    fr: "Pilule d'EPF",
  },
  774: {
    en: "EMF Pill Chest",
    fr: "Coffre de pilules d'EPF",
  },
  775: {
    en: "St. Pickup-Line’s Day Chest",
    fr: "Coffre de St. Baratin",
  },
  776: {
    en: "Giveaway Chest",
    fr: "Coffre à offrir",
  },
  777: {
    en: "Weapons Chest",
    fr: "Coffre d'armes",
  },
  778: {
    en: "Accessory Chest",
    fr: "Coffre accessoire",
  },
  779: {
    en: "Hat Chest",
    fr: "Coffre chapeau",
  },
  780: {
    en: "Rare Weapon Chest",
    fr: "Coffre d'arme rare",
  },
  781: {
    en: "Super Easter Pack",
    fr: "Pack de toupaques",
  },
  782: {
    en: "Soldier Chest",
    fr: "Coffre Soldat",
  },
  783: {
    en: "Viking Chest",
    fr: "Coffre Viking",
  },
  784: {
    en: "Glutton Chest",
    fr: "Coffre Glouton",
  },
  785: {
    en: "Ranger Chest",
    fr: "Coffre Rodeur",
  },
  786: {
    en: "Miner Chest",
    fr: "Coffre Mineur",
  },
  787: {
    en: "Ninja Chest",
    fr: "Coffre Ninja",
  },
  788: {
    en: "Easter Tack O’Bell",
    fr: "Mc Arotte",
  },
  789: {
    en: "Golden Shovel-Pickaxe",
    fr: "Pelle-pioche dorée",
  },
  790: {
    en: "Crapling Gun",
    fr: "Nesfast",
  },
  791: {
    en: "Carotene Shield",
    fr: "Boucliaimable",
  },
  792: {
    en: "Rainbow",
    fr: "Arc-en-ciel",
  },
  793: {
    en: "Hell’s Bell",
    fr: "Bell Hélène",
  },
  794: {
    en: "Paper Airplane",
    fr: "Origavion",
  },
  795: {
    en: "Maceroom",
    fr: "Massamanite",
  },
  796: {
    en: "Golden Easter Egg",
    fr: "Oeuf de Pâques Doré",
  },
  797: {
    en: "Skullie",
    fr: "Minicrano",
  },
  798: {
    en: "Skullachu",
    fr: "Crano",
  },
  799: {
    en: "Skullasaur",
    fr: "Cranolosse",
  },
  800: {
    en: "Schwarzen-Egger",
    fr: "John Deuf",
  },
  801: {
    en: "Chick Norris",
    fr: "John Chick",
  },
  802: {
    en: "Brooster Willis",
    fr: "John Chikenegger",
  },
  803: {
    en: "Tika",
    fr: "Tikaa",
  },
  804: {
    en: "Abzu",
    fr: "Apsû",
  },
  805: {
    en: "Tiamat",
    fr: "Tiamat",
  },
  806: {
    en: "Roll of Lottery Tickets",
    fr: "Rouleau de Tickets de Loterie",
  },
  807: {
    en: "Katanakuma Kun",
    fr: "Katanakuma Kun",
  },
  808: {
    en: "Festival Rocket",
    fr: "Fuséstivale",
  },
  809: {
    en: "The Reviewer",
    fr: "Le Fhyousil",
  },
  810: {
    en: "Machetsu",
    fr: "Machétsu",
  },
  811: {
    en: "Ryu Shield",
    fr: "Ryuclier",
  },
  812: {
    en: "Namazu",
    fr: "Namazu",
  },
  813: {
    en: "Rune Japan 2016",
    fr: "Rune Japan 2016",
  },
  814: {
    en: "Katanakuma Sama",
    fr: "Katanakuma Sama",
  },
  815: {
    en: "Mr. Murder",
    fr: "Mister Murder",
  },
  816: {
    en: "The Simple Sample",
    fr: "Le Sampleur Manichéen",
  },
  817: {
    en: "Le Badum Tish",
    fr: "Le Boubou Tchh",
  },
  818: {
    en: "Rockin’ Katana",
    fr: "Katanardrock",
  },
  819: {
    en: "Aviator Glasses",
    fr: "Les aviators",
  },
  820: {
    en: "Spiky Necklace",
    fr: "Collier à pics",
  },
  821: {
    en: "Goat Skull Tomb",
    fr: "Tombe crâne de bouc",
  },
  822: {
    en: "Dreadlock Hat",
    fr: "Bonnet à dreadlocks",
  },
  823: {
    en: "Hippie-Dippy ‘Do",
    fr: "La Coupipi",
  },
  824: {
    en: "Hookaboom",
    fr: "La Chicha",
  },
  825: {
    en: "Mystery Jetpack",
    fr: "Mystery Jet-Pack",
  },
  826: {
    en: "Rainbow Scarf",
    fr: "Foularainbow",
  },
  827: {
    en: "Round Glasses",
    fr: "Lunettes rondes",
  },
  828: {
    en: "Hippie’s Tomb",
    fr: "Tombe hippie",
  },
  829: {
    en: "The Hooligan",
    fr: "Le Hooligan",
  },
  830: {
    en: "The Gangsta",
    fr: "Le Wesh",
  },
  831: {
    en: "Soundwave Bow",
    fr: "Arcàonde",
  },
  832: {
    en: "Vinyl Launcher",
    fr: "Lance Vinyle",
  },
  833: {
    en: "UBling Necklace",
    fr: "Collier Ubies",
  },
  834: {
    en: "Graffiti Belt",
    fr: "La Graffiture",
  },
  835: {
    en: "Revealing Amp",
    fr: "L'ampli révélateur",
  },
  836: {
    en: "The King",
    fr: "Le King",
  },
  837: {
    en: "Jon’s Headband",
    fr: "Le bandeau de Jon",
  },
  838: {
    en: "Sabertooth Head",
    fr: "Coiffe dents de sabre",
  },
  839: {
    en: "Snailmet",
    fr: "Moluskocasko",
  },
  840: {
    en: "Le Mime",
    fr: "Le Mime",
  },
  841: {
    en: "Bambouflage",
    fr: "Bambouflage",
  },
  842: {
    en: "Squeaky Hammer",
    fr: "Marteau Couineur",
  },
  843: {
    en: "Anchor",
    fr: "Ancre",
  },
  844: {
    en: "Holy Dynamite",
    fr: "Sainte 10 namites",
  },
  845: {
    en: "Sergeant Kevin’s Pack",
    fr: "Pack du Sergent Kevin",
  },
  846: {
    en: "Raider’s Pack",
    fr: "Pack du Guerrier avoinisé",
  },
  847: {
    en: "Forest Hunter’s Pack",
    fr: "Pack du Chasseur sylvain",
  },
  848: {
    en: "Chubby Nub’s Pack",
    fr: "Pack du Gros Nub",
  },
  849: {
    en: "Foreman’s Pack",
    fr: "Pack du Chef de chantier",
  },
  850: {
    en: "Silent Assassin’s Pack",
    fr: "Pack de l'Assassin silencieux",
  },
  851: {
    en: "Starter Pack ",
    fr: "Pack de Démarrage ",
  },
  852: {
    en: "Bazookalamity",
    fr: "Bazookataclysme",
  },
  853: {
    en: "Skull Mace ",
    fr: "Masse crânienne ",
  },
  854: {
    en: "Pumpkin Launcher",
    fr: "Lance potiron",
  },
  855: {
    en: "Chainsword ",
    fr: "Epée tronçonneuse ",
  },
  856: {
    en: "Skull Shovel",
    fr: "Pelle crâne",
  },
  857: {
    en: "Spiderweb",
    fr: "Toile d'araignée",
  },
  858: {
    en: "Nub Statue Tomb",
    fr: "Tombe statue Nubienne",
  },
  859: {
    en: "Bone",
    fr: "Os",
  },
  860: {
    en: "Bloody Fish Bowl",
    fr: "Bocal de sang",
  },
  861: {
    en: "Hypnotic Glasses",
    fr: "Lunettes hypnotiques",
  },
  862: {
    en: "Thorny Crown",
    fr: "Couronne piquante",
  },
  863: {
    en: "Bloody Horns",
    fr: "Cornes ensanglantées",
  },
  864: {
    en: "Third Eye",
    fr: "3e oeil",
  },
  865: {
    en: "Demon Lifesaver",
    fr: "Bouée Diable",
  },
  866: {
    en: "Army Belt",
    fr: "Ceinture armée",
  },
  867: {
    en: "Vodoo Belt",
    fr: "Ceinture vaudou",
  },
  868: {
    en: "Aronia",
    fr: "Aronia",
  },
  869: {
    en: "Medlar",
    fr: "Medlar",
  },
  870: {
    en: "Elder",
    fr: "Elder",
  },
  871: {
    en: "Betsy the Bad Bat",
    fr: "Betsy bad bat",
  },
  872: {
    en: "2016 Halloween Rune",
    fr: "Rune Halloween 2016",
  },
  873: {
    en: "2015 Halloween Chest",
    fr: "Coffre Halloween 2015",
  },
  874: {
    en: "2014 Halloween Chest",
    fr: "Coffre Halloween 2014",
  },
  875: {
    en: "2013 Halloween Chest",
    fr: "Coffre Halloween 2013",
  },
  876: {
    en: "2016 Ominous Chest (accessory)",
    fr: "Coffre inquiétant 2016 (access)",
  },
  877: {
    en: "2016 Ominous Chest (hat)",
    fr: "Coffre inquiétant 2016 (chapeau)",
  },
  878: {
    en: "2016 Nightmarish Chest",
    fr: "Coffre cauchemardesque 2016",
  },
  879: {
    en: "Soldier Ghost",
    fr: "Fantôme Soldat",
  },
  880: {
    en: "Viking Ghost",
    fr: "Fantôme Viking",
  },
  881: {
    en: "Ranger Ghost",
    fr: "Fantôme Rodeur",
  },
  882: {
    en: "Glutton Ghost",
    fr: "Fantôme Glouton",
  },
  883: {
    en: "Miner Ghost",
    fr: "Fantôme Mineur",
  },
  884: {
    en: "Ninja Ghost",
    fr: "Fantôme Ninja",
  },
  885: {
    en: "Bazookatastrophe",
    fr: "Bazookatastrophe",
  },
  886: {
    en: "Winter Soldier",
    fr: "Soldat de l'hiver",
  },
  887: {
    en: "Ancient Pachyderm",
    fr: "L'ancien pachyderme",
  },
  888: {
    en: "The Hunted Mother",
    fr: "La mère chassée",
  },
  889: {
    en: "Shivering Chatterer",
    fr: "Le jaboteur frileux",
  },
  890: {
    en: "Ludwig",
    fr: "Ludwig",
  },
  891: {
    en: "Lone Wolf",
    fr: "Chef de meute solitaire",
  },
  892: {
    en: "Balero",
    fr: "Bilboquet",
  },
  893: {
    en: "Stalagmaki",
    fr: "Stalagmaki",
  },
  894: {
    en: "Festive Land Mine",
    fr: "Minoux",
  },
  895: {
    en: "Cold Grip",
    fr: "Les mors de froid",
  },
  896: {
    en: "Ice Rifle",
    fr: "Fusil des glaces",
  },
  897: {
    en: "Coniferous Bow",
    fr: "Arconifère",
  },
  898: {
    en: "Decorated Coniferous Bow",
    fr: "Arconifère décoré",
  },
  899: {
    en: "2013 Christmas Chest",
    fr: "Coffre Noël 2013",
  },
  900: {
    en: "2014 Christmas Chest",
    fr: "Coffre Noël 2014",
  },
  901: {
    en: "2015 Christmas Chest",
    fr: "Coffre Noël 2015",
  },
  902: {
    en: "2016 Christmas Rune",
    fr: "Rune Noël 2016",
  },
  903: {
    en: "Reigndeer",
    fr: "Le Renne des neiges",
  },
  904: {
    en: "Cooler Glasses",
    fr: "Lunettes du rafraîchisseur",
  },
  905: {
    en: "Snowman Shirt",
    fr: "Snowmen shirt",
  },
  906: {
    en: "Winter Skirt",
    fr: "Jupe hivernale",
  },
  907: {
    en: "Candy Cane in the Membrane",
    fr: "Sucre d'orge dans le crâne",
  },
  908: {
    en: "Imaginary Sweetheart",
    fr: "L'amour imaginaire",
  },
  909: {
    en: "Golden Jackhammer",
    fr: "Marteau piqueur doré",
  },
  910: {
    en: "Chocofowl",
    fr: "Chococotte",
  },
  911: {
    en: "Wizard Hat",
    fr: "Chapeau de Mage",
  },
  912: {
    en: "",
    fr: "Boule de feu",
  },
  913: {
    en: "",
    fr: "Éclair",
  },
  914: {
    en: "",
    fr: "Stalagmites",
  },
  915: {
    en: "",
    fr: "Sceptre",
  },
  916: {
    en: "",
    fr: "Stalactites",
  },
  917: {
    en: "",
    fr: "Soin",
  },
  918: {
    en: "",
    fr: "Lance flamme",
  },
  919: {
    en: "",
    fr: "Blizzard",
  },
  920: {
    en: "",
    fr: "Guérison",
  },
  921: {
    en: "",
    fr: "Mur de flammes",
  },
  922: {
    en: "",
    fr: "Vitesse lumière",
  },
  923: {
    en: "",
    fr: "Lien défensif",
  },
  924: {
    en: "",
    fr: "Sceptre du Pyromancien",
  },
  925: {
    en: "",
    fr: "Sceptre du Cryomancien",
  },
  926: {
    en: "",
    fr: "Sceptre de l'Electromancien",
  },
  927: {
    en: "",
    fr: "Sceptre du mage blanc",
  },
  928: {
    en: "",
    fr: "Sceptre de l'initié",
  },
  929: {
    en: "",
    fr: "Chapeau d'Enchanteur",
  },
  930: {
    en: "",
    fr: "Le Verrou Noir",
  },
  931: {
    en: "",
    fr: "Foudre",
  },
  932: {
    en: "Explosive Onigiri",
    fr: "Onigiri explosif",
  },
  933: {
    en: "Ryu Axe",
    fr: "Hache Ryu",
  },
  934: {
    en: "Crystal Ball Launcher",
    fr: "Lance boules de cristal",
  },
  935: {
    en: "Geisha's Bow",
    fr: "Geisharc",
  },
  936: {
    en: "Surprise Ball",
    fr: "Boule surprise",
  },
  937: {
    en: "Fugu",
    fr: "Fugu",
  },
  938: {
    en: "Torii Tomb",
    fr: "Tombe Torii",
  },
  939: {
    en: "Rune Japan 2017",
    fr: "Rune Japan 2017",
  },
  940: {
    en: "Darkester Bow",
    fr: "Darkularc",
  },
  941: {
    en: "Ghoul Cowl",
    fr: "Masque goule",
  },
  942: {
    en: "Carbon Maiden",
    fr: "Carbon Maiden",
  },
  943: {
    en: "David's Child",
    fr: "Enfant de David",
  },
  944: {
    en: "Satanic Cross",
    fr: "Croix Satanique",
  },
  945: {
    en: "Mark of the Sick",
    fr: "Marque du baiser",
  },
  946: {
    en: "Terrible Head Cutter",
    fr: "Hache Hack Heech",
  },
  947: {
    en: "Khal Dreado",
    fr: "Khal Dreadeux ",
  },
  948: {
    en: "Peace pipe",
    fr: "Calumet de la paix",
  },
  949: {
    en: "Tam",
    fr: "Le Tam",
  },
  950: {
    en: "Red Eyes",
    fr: "Yeux injectés de sang",
  },
  951: {
    en: "Rainbow Peace Headband",
    fr: "Bandeau de la paix arc-en-ciel",
  },
  952: {
    en: "Red Mike",
    fr: "Micro Rouge",
  },
  953: {
    en: "Double bandana",
    fr: "Double bandana",
  },
  954: {
    en: "Spray Paint",
    fr: "Bombe de peinture",
  },
  955: {
    en: "Breakdancer",
    fr: "Le Breakdanseur",
  },
  956: {
    en: "The served",
    fr: "Le douché",
  },
  957: {
    en: "Uber Watch",
    fr: "Uber Watch",
  },
  958: {
    en: "Tamer's Rune",
    fr: "Rune du Dompteur",
  },
  959: {
    en: "Frying Pan",
    fr: "Poêle à frire",
  },
  960: {
    en: "Valviken",
    fr: "Valviken",
  },
  961: {
    en: "Promo Tomb",
    fr: "Tombe Promo",
  },
  962: {
    en: "Collective Amnesia Pill",
    fr: "Pilule d'amnésie collective",
  },
  963: {
    en: "Boredingun",
    fr: "Lamuertagenitora",
  },
  964: {
    en: "Skeleton Shield",
    fr: "Bouclier squelette",
  },
  965: {
    en: "Shield of the Skeleton King",
    fr: "Bouclier du Roi squelette",
  },
  966: {
    en: "Monstrous Jaw",
    fr: "Monstrueuse Machoire",
  },
  967: {
    en: "Cumulo 3000",
    fr: "Cumulo 3000",
  },
  968: {
    en: "Bloody Blade",
    fr: "Lame Sanglante",
  },
  969: {
    en: "Candy bucket",
    fr: "Panier de friandises",
  },
  970: {
    en: "Dirework Rocket",
    fr: "Feu Darktifice",
  },
  971: {
    en: "Goat horns",
    fr: "Cornes de bouc",
  },
  972: {
    en: "DeVille Smile",
    fr: "Sourire des Moniaques",
  },
  973: {
    en: "Hypnotic pupils",
    fr: "Pupilles hypnotiques",
  },
  974: {
    en: "Circular belt",
    fr: "Ceinture circulaire",
  },
  975: {
    en: "Cursed Stump",
    fr: "Tombe Sylvestre",
  },
  976: {
    en: "Lil' Casimor",
    fr: "Mini Casimor",
  },
  977: {
    en: "2017 Halloween Rune",
    fr: "Rune Halloween 2017",
  },
  978: {
    en: "2016 Halloween Chest",
    fr: "Coffre Halloween 2016",
  },
  979: {
    en: "Muerte Soldier",
    fr: "Soldat Muerte",
  },
  980: {
    en: "Muerte Viking",
    fr: "Viking Muerte",
  },
  981: {
    en: "Muerte Glutton",
    fr: "Glouton Muerte",
  },
  982: {
    en: "Muerte Ranger",
    fr: "Rôdeur Muerte",
  },
  983: {
    en: "Muerte Miner",
    fr: "Mineur Muerte",
  },
  984: {
    en: "Muerte Ninja",
    fr: "Ninja Muerte",
  },
  985: {
    en: "Old Ominous Chest (accessory)",
    fr: "Vieux coffre inquiétant (access)",
  },
  986: {
    en: "Ominous Chest (accessory)",
    fr: "Coffre inquiétant (accessoire)",
  },
  987: {
    en: "Ominous Chest (hat)",
    fr: "Coffre inquiétant (chapeau)",
  },
  988: {
    en: "Nightmarish Chest",
    fr: "Coffre cauchemardesque",
  },
  989: {
    en: "Blue braid",
    fr: "Tresse bleue",
  },
  990: {
    en: "Nutcracker",
    fr: "Casse-noisette",
  },
  991: {
    en: "Snowy Viking",
    fr: "Viking des neiges",
  },
  992: {
    en: "Xmas hood",
    fr: "Capuche de Noël",
  },
  993: {
    en: "Strawberry hat",
    fr: "Bonnet fraise",
  },
  994: {
    en: "Snowy Miner",
    fr: "Mineur des glaces",
  },
  995: {
    en: "Atnas",
    fr: "Atnas",
  },
  996: {
    en: "Bazookicecube",
    fr: "Bazookicecube",
  },
  997: {
    en: "X - maxe",
    fr: "X - mache",
  },
  998: {
    en: "Hadsis Crossbow",
    fr: "Arbalète Hadsis",
  },
  999: {
    en: "Tetrobone bar",
    fr: "Tetrobone",
  },
  1000: {
    en: "Festive panel",
    fr: "Panel festif",
  },
  1001: {
    en: "Frost Burn Out",
    fr: "Fuite brûlante gelée",
  },
  1002: {
    en: "Gift belt",
    fr: "Ceinture de cadeaux",
  },
  1003: {
    en: "Fir glasses",
    fr: "Lunettes sapin",
  },
  1004: {
    en: "Nub Xmas Doll",
    fr: "Poupées Nubs de Noël",
  },
  1005: {
    en: "Snow tie",
    fr: "Cravate des neiges",
  },
  1006: {
    en: "Chimney Tomb",
    fr: "Tombe cheminée",
  },
  1007: {
    en: "Sleigh Bazooka",
    fr: "Bazooka-traineau",
  },
  1008: {
    en: "Lilfoo",
    fr: "Tiyé",
  },
  1009: {
    en: "Foo",
    fr: "Yé",
  },
  1010: {
    en: "Bigfoo",
    fr: "Groyé",
  },
  1011: {
    en: "2016 Christmas Chest",
    fr: "Coffre Noël 2016",
  },
  1012: {
    en: "Guild Token",
    fr: "Jeton de Caserne",
  },
  1013: {
    en: "Rewindoguildoquest",
    fr: "Rembobinoguildoquête",
  },
  1014: {
    en: "2017 Christmas Rune",
    fr: "Rune Noël 2017",
  },
  1015: {
    en: "2017 Christmas accessory chest",
    fr: "Coffre accessoire de Noël",
  },
  1016: {
    en: "2017 Christmas hat chest",
    fr: "Coffre chapeau de Noël 2017",
  },
  1017: {
    en: "",
    fr: "Enorme coffre des glaces",
  },
};
