const all_products = [
  {
    id: 1,
    name: "Nintendo Switch (Original)",
    price: 299.99,
    category: "Console",
    //: require("./switch.jpeg"),
    description: "Original Nintendo Switch with hybrid handheld and TV play modes."
  },
  {
    id: 2,
    name: "Nintendo Switch 2",
    price: 399.99,
    category: "Console",
    //: require("./250116-nintendo-switch-2-kb-main-efd48a.jpg"),
    description: "New generation Nintendo Switch with upgraded performance and display."
  },
  {
    id: 3,
    name: "PlayStation 4 Pro",
    price: 399.99,
    category: "Console",
    //: require("./ps4pro.jpeg"),
    description: "High-performance PS4 with 4K support and improved GPU."
  },
  {
    id: 4,
    name: "PlayStation 4 Slim",
    price: 299.99,
    category: "Console",
    //: require("./ps4slim.jpeg"),
    description: "Slimmer, more compact PS4 with same gaming power."
  },
  {
    id: 5,
    name: "PlayStation 5",
    price: 499.99,
    category: "Console",
    //: require("./PS5.webp"),
    description: "Next-gen Sony console with lightning-fast SSD and immersive DualSense controller."
  },
  {
    id: 6,
    name: "PlayStation 5 Pro",
    price: 599.99,
    category: "Console",
    //: require("./ps5pro.jpeg"),
    description: "Upgraded PS5 with enhanced graphics and performance."
  },
  {
    id: 7,
    name: "Xbox Series S",
    price: 299.99,
    category: "Console",
    //: require("./seriesS.jpeg"),
    description: "Affordable all-digital Xbox with fast load times and 1440p gaming."
  },
  {
    id: 8,
    name: "Xbox Series X",
    price: 499.99,
    category: "Console",
    //: require("./seriesX.jpeg"),
    description: "Powerful Xbox with 4K gaming and 1TB SSD."
  },
    {
    id: 9,
    name: "Nintendo Switch OLED",
    price: 349.99,
    category: "Console",
    //: require("./switch_oled.jpg"),
    description: "Enhanced OLED display with vibrant colors and improved audio."
  },
  {
    id: 10,
    name: "Nintendo Switch Lite",
    price: 199.99,
    category: "Console",
    //: require("./switch_lite.jpg"),
    description: "Compact and lightweight console for handheld gaming."
  },
  {
    id: 11,
    name: "PlayStation 5 Digital Edition",
    price: 449.99,
    category: "Console",
    //: require("./ps5_digital.jpg"),
    description: "All-digital version of PS5 with ultra-high-speed SSD."
  },
  {
    id: 12,
    name: "Xbox One S",
    price: 249.99,
    category: "Console",
    //: require("./xbox_one_s.jpg"),
    description: "Slim Xbox One model with 4K video streaming and HDR."
  },
  {
    id: 13,
    name: "Xbox One X",
    price: 399.99,
    category: "Console",
    //: require("./xbox_one_x.jpg"),
    description: "Powerful console with 4K gaming and advanced graphics."
  },
  {
    id: 14,
    name: "Xbox 360",
    price: 199.99,
    category: "Console",
    //: require("./xbox_360.jpg"),
    description: "Classic Microsoft console with a large game library."
  },
  {
    id: 15,
    name: "Xbox Series X Diablo IV Bundle",
    price: 559.99,
    category: "Console",
    //: require("./xbox_series_x_diablo.jpg"),
    description: "Series X bundled with Diablo IV and themed design."
  },
  {
    id: 16,
    name: "Xbox Series S Starter Bundle",
    price: 299.99,
    category: "Console",
    //: require("./xbox_series_s_bundle.jpg"),
    description: "Series S with extra controller and Game Pass."
  },
  {
    id: 17,
    name: "PlayStation Classic",
    price: 99.99,
    category: "Console",
    //: require("./ps_classic.jpg"),
    description: "Miniature console with preloaded classic PS1 games."
  },
   {
    id: 18,
    name: "The Legend of Zelda: A Link to the Past",
    price: 39.99,
    category: "Game",
    description: "Classic SNES action-adventure with dungeons, puzzles, and epic storytelling."
  },
  {
    id: 19,
    name: "Super Mario Bros. 3",
    price: 29.99,
    category: "Game",
    description: "Iconic NES platformer featuring power-ups and side-scrolling worlds."
  },
  {
    id: 20,
    name: "Super Smash Bros. Melee",
    price: 49.99,
    category: "Game",
    description: "Fast-paced multiplayer fighting game for the GameCube."
  },
  {
    id: 21,
    name: "Wii Sports",
    price: 19.99,
    category: "Game",
    description: "Motion-controlled sports mini-games including tennis, bowling, and boxing."
  },
  {
    id: 22,
    name: "Super Mario 3D World",
    price: 59.99,
    category: "Game",
    description: "Co-op 3D platforming adventure on Wii U featuring Mario and friends."
  },
  {
    id: 23,
    name: "The Last of Us",
    price: 49.99,
    category: "Game",
    description: "Story-driven action-adventure set in a post-apocalyptic world."
  },
  {
    id: 24,
    name: "Shadow of the Colossus",
    price: 39.99,
    category: "Game",
    description: "Epic journey to defeat giant creatures in a desolate land."
  },
  {
    id: 25,
    name: "Daxter",
    price: 24.99,
    category: "Game",
    description: "Action platformer starring the lovable ottsel from the Jak series."
  },
  {
    id: 26,
    name: "Uncharted: Golden Abyss",
    price: 34.99,
    category: "Game",
    description: "Portable Uncharted game filled with puzzles and treasure hunting."
  },
  {
    id: 27,
    name: "Sonic the Hedgehog",
    price: 19.99,
    category: "Game",
    description: "Speedy side-scrolling platformer that started a franchise."
  },
  {
    id: 28,
    name: "Asteroids",
    price: 14.99,
    category: "Game",
    description: "Classic arcade space shooter with vector graphics and endless action."
  },
  {
    id: 29,
    name: "Hades",
    price: 39.99,
    category: "Game",
    description: "Award-winning rogue-like action game set in Greek mythology."
  },
  {
    id: 30,
    name: "Baldur's Gate 3",
    price: 69.99,
    category: "Game",
    description: "Massive D&D-based RPG with tactical combat and deep choices."
  },
  {
    id: 31,
    name: "Metroid Dread",
    price: 59.99,
    category: "Game",
    description: "Sci-fi action-platformer featuring Samus in a mysterious alien facility."
  },
  {
    id: 32,
    name: "Cuphead",
    price: 29.99,
    category: "Game",
    description: "Run-and-gun shooter with hand-drawn 1930s-style animation."
  },
  {
    id: 33,
    name: "King of Fighters '98",
    price: 14.99,
    category: "Game",
    description: "Arcade-style 2D fighter with a large cast of SNK characters."
  },
  {
    id: 34,
    name: "Earthworm Jim",
    price: 19.99,
    category: "Game",
    description: "Zany platformer with a super-suited worm and weird enemies."
  },
  {
    id: 35,
    name: "Control: Ultimate Edition",
    price: 39.99,
    category: "Game",
    description: "Paranormal third-person shooter with reality-warping powers."
  },
  {
    id: 36,
    name: "Genshin Impact",
    price: 0.00,
    category: "Game",
    description: "Free-to-play open-world action RPG with gacha mechanics and anime visuals."
  }
];

export default all_products;