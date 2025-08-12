const all_products = [
  {
    id: 1,
    name: "Nintendo Switch (Original)",
    price: 299.99,
    category: "Console",
    image: require("./switch.png"),
    description: "Original Nintendo Switch with hybrid handheld and TV play modes."
  },
  {
    id: 2,
    name: "Nintendo Switch 2",
    price: 399.99,
    category: "Console",
    image: require("./switch2.jpeg"),
    description: "New generation Nintendo Switch with upgraded performance and display."
  },
  {
    id: 3,
    name: "PlayStation 4 Pro",
    price: 399.99,
    category: "Console",
    image: require("./ps4pro.jpeg"),
    description: "High-performance PS4 with 4K support and improved GPU."
  },
  {
    id: 4,
    name: "PlayStation 4 Slim",
    price: 299.99,
    category: "Console",
    image: require("./ps4slim.jpeg"),
    description: "Slimmer, more compact PS4 with same gaming power."
  },
  {
    id: 5,
    name: "PlayStation 5",
    price: 499.99,
    category: "Console",
    image: require("./PS5.webp"),
    description: "Next-gen Sony console with lightning-fast SSD and immersive DualSense controller."
  },
  {
    id: 6,
    name: "PlayStation 5 Pro",
    price: 599.99,
    category: "Console",
    image: require("./ps5pro.jpeg"),
    description: "Upgraded PS5 with enhanced graphics and performance."
  },
  {
    id: 7,
    name: "Xbox Series S",
    price: 299.99,
    category: "Console",
    image: require("./seriesS.jpeg"),
    description: "Affordable all-digital Xbox with fast load times and 1440p gaming."
  },
  {
    id: 8,
    name: "Xbox Series X",
    price: 499.99,
    category: "Console",
    image: require("./seriesX.jpeg"),
    description: "Powerful Xbox with 4K gaming and 1TB SSD."
  },
    {
    id: 9,
    name: "Nintendo Switch OLED",
    price: 349.99,
    category: "Console",
    image: require("./switch_oled.jpg"),
    description: "Enhanced OLED display with vibrant colors and improved audio."
  },
  {
    id: 10,
    name: "Nintendo Switch Lite",
    price: 199.99,
    category: "Console",
    image: require("./switch_lite.jpg"),
    description: "Compact and lightweight console for handheld gaming."
  },
  {
    id: 11,
    name: "PlayStation 5 Digital Edition",
    price: 449.99,
    category: "Console",
    image: require("./ps5_digital.jpg"),
    description: "All-digital version of PS5 with ultra-high-speed SSD."
  },
  {
    id: 12,
    name: "Xbox One S",
    price: 249.99,
    category: "Console",
    image: require("./xbox_one_s.jpg"),
    description: "Slim Xbox One model with 4K video streaming and HDR."
  },
  {
    id: 13,
    name: "Xbox One X",
    price: 399.99,
    category: "Console",
    image: require("./xbox_one_x.jpg"),
    description: "Powerful console with 4K gaming and advanced graphics."
  },
  {
    id: 14,
    name: "Xbox 360",
    price: 199.99,
    category: "Console",
    image: require("./xbox_360.jpg"),
    description: "Classic Microsoft console with a large game library."
  },
  {
    id: 15,
    name: "Xbox Series X Diablo IV Bundle",
    price: 559.99,
    category: "Console",
    image: require("./xbox_series_x_diablo.jpg"),
    description: "Series X bundled with Diablo IV and themed design."
  },
  {
    id: 16,
    name: "Xbox Series S Starter Bundle",
    price: 299.99,
    category: "Console",
    image: require("./xbox_series_s_bundle.jpg"),
    description: "Series S with extra controller and Game Pass."
  },
  {
    id: 17,
    name: "DualSense",
    price: 99.99,
    category: "Console",
    image: require("./ps_classic.jpg"),
    description: ""
  },
   {
    id: 18,
    name: "The Legend of Zelda: Tears of The Kingdom",
    price: 39.99,
    category: "Game",
    image: require("./zelda.png"),
    description: "An epic open-world adventure where Link explores the skies and lands of Hyrule to stop a new ancient threat."
  },
  {
    id: 19,
    name: "Super Mario Jamboree",
    price: 29.99,
    category: "Game",
    image: require("./smj.png"),
    description: "A colorful party game packed with minigames, new boards, and fun multiplayer chaos."
  },
  {
    id: 20,
    name: "Super Smash Bros. Melee",
    price: 49.99,
    category: "Game",
    image: require("./ssb.png"),
    description: "Fast-paced crossover fighting game where Nintendo characters battle in iconic arenas."
  },
  {
    id: 21,
    name: "EA FC26",
    price: 19.99,
    category: "Game",
    image: require("./fc26.png"),
    description: "EA FC26 is a realistic soccer simulation game with updated teams, modes, and immersive gameplay."
  },
  {
    id: 22,
    name: "Super Mario 3D World",
    price: 59.99,
    category: "Game",
    image: require("./3dw.png"),
    description: "A fun, family-friendly 3D platformer where Mario and friends team up to rescue the Sprixie Kingdom."
  },
  {
    id: 23,
    name: "The Last of Us",
    price: 49.99,
    category: "Game",
    image: require("./lou.png"),
    description: "Story-driven action-adventure set in a post-apocalyptic world."
  },
  {
    id: 24,
    name: "Shadow of the Colossus",
    price: 39.99,
    category: "Game",
    image: require("./soc.png"),
    description: "Epic journey to defeat giant creatures in a desolate land."
  },
  {
    id: 25,
    name: "Animal Well",
    price: 24.99,
    category: "Game",
    image: require("./aw.png"),
    description: "A mysterious indie adventure exploring a strange world filled with puzzles and secrets."
  },
  {
    id: 26,
    name: "Uncharted: Legacy of Thieves",
    price: 34.99,
    category: "Game",
    image: require("./lot.png"),
    description: "A thrilling action-packed treasure hunt with stunning visuals and cinematic storytelling."
  },
  {
    id: 27,
    name: "Sonic the Hedgehog",
    price: 19.99,
    category: "Game",
    image: require("./sonic.png"),
    description: "Speedy side-scrolling platformer that started a franchise."
  },
  {
    id: 28,
    name: "Roman Rumble",
    price: 14.99,
    category: "Game",
    image: require("./rr.png"),
    description: "A fast-paced arena brawler where gladiators clash in intense, brutal combat."
  },
  {
    id: 29,
    name: "Hades",
    price: 39.99,
    category: "Game",
    image: require("./hades.png"),
    description: "Award-winning rogue-like action game set in Greek mythology."
  },
  {
    id: 30,
    name: "Demon Slayer 2",
    price: 69.99,
    category: "Game",
    image: require("./demon.png"),
    description: "Demon Slayer 2 is an action-packed anime sequel filled with epic battles and heartfelt moments."
  },
  {
    id: 31,
    name: "Metroid Dread",
    price: 59.99,
    category: "Game",
    image: require("./md.png"),
    description: "Sci-fi action-platformer featuring Samus in a mysterious alien facility."
  },
  {
    id: 32,
    name: "Cuphead",
    price: 29.99,
    category: "Game",
    image: require("./cuphead.png"),
    description: "Cuphead is a challenging run-and-gun game with vintage cartoon-style graphics and tough boss fights."
  },
  {
    id: 33,
    name: "Street Fighter",
    price: 14.99,
    category: "Game",
    image: require("./sf.png"),
    description: "Street Fighter is a classic competitive fighting game known for its iconic characters and combos."
  },
  {
    id: 34,
    name: "Elden Ring",
    price: 19.99,
    category: "Game",
    image: require("./er.png"),
    description: "Elden Ring is a vast open-world action RPG with deep lore, challenging combat, and rich exploration."
  },
  {
    id: 35,
    name: "Call of DUty: Black Ops 6",
    price: 39.99,
    category: "Game",
    image: require("./b06.png"),
    description: "Call of Duty: Black Ops 6 is an intense first-person shooter with fast-paced multiplayer and immersive missions."
  },
  {
    id: 36,
    name: "MarioKart World",
    price: 100.00,
    category: "Game",
    image: require("./mkw.png"),
    description: "MarioKart World is a fun, fast-paced racing game featuring iconic characters and exciting tracks from the Mario universe."
  }
];

export default all_products;