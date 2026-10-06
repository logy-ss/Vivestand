// The Equipment shop. Without a sport in the address it shows all the sports.
// With one, like equepment.html?sport=football, it shows that sport's products.

// All the sports you can pick. "mark" is the two letters shown on the card.
const SPORTS = [
    { id: "swimming", name: "Swimming", mark: "SW", description: "Pool and open-water essentials" },
    { id: "football", name: "Football", mark: "FB", description: "Match-ready boots and protection" },
    { id: "handball", name: "Handball", mark: "HB", description: "Grip, support and training gear" },
    { id: "volleyball", name: "Volleyball", mark: "VB", description: "Court shoes and knee support" },
    { id: "fitness", name: "Fitness / Gym", mark: "GY", description: "Strength and conditioning tools" },
    { id: "tennis", name: "Tennis", mark: "TN", description: "Rackets, bags and court gear" },
    { id: "karate", name: "Karate", mark: "KT", description: "Training uniforms and protection" },
    { id: "mma", name: "MMA", mark: "MA", description: "Combat training essentials" },
    { id: "kickboxing", name: "Kickboxing", mark: "KB", description: "Striking and conditioning gear" },
    { id: "running", name: "Running", mark: "RN", description: "Run-ready shoes and accessories" },
    { id: "basketball", name: "Basketball", mark: "BB", description: "Court shoes and training gear" },
    { id: "cycling", name: "Cycling", mark: "CY", description: "Ride safer and farther" },
    { id: "gymnastics", name: "Gymnastics", mark: "GM", description: "Flexible training essentials" },
    { id: "ballet", name: "Ballet", mark: "BL", description: "Studio wear and practice gear" }
];

// Every product, grouped by sport. Prices are in Egyptian pounds (EGP).
const PRODUCTS = {
    swimming: [
        { name: "Arena Carbon Air2 Goggles", type: "Training goggles", seller: "Merchant", condition: "Like new", price: 2250 },
        { name: "Speedo Fastskin Suit", type: "Competition suit", seller: "Retired athlete", condition: "Excellent", price: 4250 },
        { name: "FINIS Swim Paddles", type: "Technique equipment", seller: "Merchant", condition: "New", price: 1200 },
        { name: "TYR Alliance Backpack", type: "Swim bag", seller: "Retired athlete", condition: "Excellent", price: 1900 },
        { name: "Aqua Sphere Ear Plugs", type: "Swim accessories", seller: "Merchant", condition: "New", price: 600 },
        { name: "Zoggs Pull Buoy", type: "Training float", seller: "Retired athlete", condition: "Excellent", price: 750 },
        { name: "Speedo Kickboard", type: "Training float", seller: "Merchant", condition: "New", price: 1050 },
        { name: "Finis Tempo Trainer", type: "Swim timer", seller: "Merchant", condition: "New", price: 1600 },
        { name: "Speedo Pull Buoy", type: "Training float", seller: "Retired athlete", condition: "Excellent", price: 900 },
        { name: "TYR Silicone Cap", type: "Swim cap", seller: "Merchant", condition: "New", price: 700 },
        { name: "Arena Swim Snorkel", type: "Technique equipment", seller: "Retired athlete", condition: "Like new", price: 1400 },
        { name: "Speedo Biofuse Fins", type: "Training fins", seller: "Merchant", condition: "New", price: 1700 },
        { name: "Zoggs Mesh Equipment Bag", type: "Swim bag", seller: "Retired athlete", condition: "Excellent", price: 1100 },
        { name: "Aqua Sphere Kayenne Mask", type: "Open-water gear", seller: "Merchant", condition: "Like new", price: 2400 },
        { name: "FINIS Agility Paddles", type: "Technique equipment", seller: "Merchant", condition: "New", price: 1300 },
        { name: "TYR Training Jammers", type: "Training wear", seller: "Retired athlete", condition: "Excellent", price: 1500 },
        { name: "Speedo Pool Sandals", type: "Pool footwear", seller: "Merchant", condition: "New", price: 800 },
        { name: "Arena Nose Clip Set", type: "Swim accessories", seller: "Retired athlete", condition: "Like new", price: 500 }
    ],
    football: [
        { name: "Nike Mercurial Boots", type: "Football boots", seller: "Retired athlete", condition: "Excellent", price: 3500 },
        { name: "Adidas Predator Gloves", type: "Goalkeeper gloves", seller: "Merchant", condition: "New", price: 2100 },
        { name: "G-Form Pro-S Vento", type: "Shin protection", seller: "Merchant", condition: "Like new", price: 1900 },
        { name: "Select Team Match Ball", type: "Match ball", seller: "Retired athlete", condition: "Excellent", price: 1500 },
        { name: "Nike Park Training Bibs", type: "Training wear", seller: "Merchant", condition: "New", price: 1300 },
        { name: "Puma Future Boots", type: "Football boots", seller: "Merchant", condition: "Like new", price: 3100 },
        { name: "Uhlsport Goalkeeper Pants", type: "Goalkeeper wear", seller: "Retired athlete", condition: "Excellent", price: 1750 },
        { name: "Adidas Copa Pure Boots", type: "Football boots", seller: "Merchant", condition: "New", price: 3900 },
        { name: "Nike Academy Ball", type: "Training ball", seller: "Retired athlete", condition: "Excellent", price: 1400 },
        { name: "Puma Future Shin Guards", type: "Shin protection", seller: "Merchant", condition: "Like new", price: 1200 },
        { name: "Uhlsport Starter Gloves", type: "Goalkeeper gloves", seller: "Retired athlete", condition: "Excellent", price: 1800 },
        { name: "Nike Dri-FIT Shorts", type: "Training wear", seller: "Merchant", condition: "New", price: 1200 },
        { name: "Adidas Tiro Track Jacket", type: "Training wear", seller: "Retired athlete", condition: "Like new", price: 2250 },
        { name: "Select Referee Whistle", type: "Match accessory", seller: "Merchant", condition: "New", price: 600 },
        { name: "Puma Future Z Socks", type: "Football socks", seller: "Retired athlete", condition: "Excellent", price: 750 },
        { name: "Nike Club Ball Pump", type: "Ball accessory", seller: "Merchant", condition: "New", price: 700 },
        { name: "G-Form Ankle Sleeves", type: "Ankle support", seller: "Retired athlete", condition: "Like new", price: 1500 },
        { name: "Adidas Team Boot Bag", type: "Equipment bag", seller: "Merchant", condition: "Excellent", price: 1000 }
    ],
    handball: [
        { name: "Select Ultimate Handball", type: "Match ball", seller: "Merchant", condition: "New", price: 2400 },
        { name: "Kempa Attack Three Shoes", type: "Court shoes", seller: "Retired athlete", condition: "Excellent", price: 3200 },
        { name: "McDavid Arm Sleeve", type: "Arm support", seller: "Merchant", condition: "Like new", price: 950 },
        { name: "Hummel Authentic Jersey", type: "Team jersey", seller: "Retired athlete", condition: "Excellent", price: 1600 },
        { name: "Erima Handball Knee Pads", type: "Knee protection", seller: "Merchant", condition: "New", price: 1250 },
        { name: "Kempa Attack Contender Ball", type: "Training ball", seller: "Merchant", condition: "Like new", price: 1400 },
        { name: "Select Handball Resin", type: "Grip accessory", seller: "Retired athlete", condition: "Excellent", price: 850 },
        { name: "Hummel Spirit Handball", type: "Training ball", seller: "Merchant", condition: "New", price: 1750 },
        { name: "Kempa Wing Lite Shoes", type: "Court shoes", seller: "Retired athlete", condition: "Excellent", price: 2900 },
        { name: "Select Protective Shorts", type: "Protective wear", seller: "Merchant", condition: "Like new", price: 1500 },
        { name: "Hummel Core Jersey", type: "Team jersey", seller: "Retired athlete", condition: "Excellent", price: 1400 },
        { name: "Kempa Team Backpack", type: "Equipment bag", seller: "Merchant", condition: "New", price: 1700 },
        { name: "Erima Handball Socks", type: "Court socks", seller: "Retired athlete", condition: "Like new", price: 700 },
        { name: "Select Goalkeeper Pants", type: "Goalkeeper wear", seller: "Merchant", condition: "New", price: 2000 },
        { name: "Kempa Attack Knee Pads", type: "Knee protection", seller: "Retired athlete", condition: "Excellent", price: 1350 },
        { name: "Hummel Wrist Tape", type: "Support accessory", seller: "Merchant", condition: "New", price: 550 },
        { name: "Molten Handball Pump", type: "Ball accessory", seller: "Retired athlete", condition: "Like new", price: 650 },
        { name: "Kempa Training Cones", type: "Training equipment", seller: "Merchant", condition: "New", price: 900 }
    ],
    volleyball: [
        { name: "Mikasa V200W Volleyball", type: "Match ball", seller: "Merchant", condition: "New", price: 3600 },
        { name: "Mizuno Wave Lightning", type: "Court shoes", seller: "Retired athlete", condition: "Excellent", price: 2900 },
        { name: "Asics Gel Knee Pads", type: "Knee protection", seller: "Merchant", condition: "New", price: 1400 },
        { name: "Molten V5M4500 Volleyball", type: "Training ball", seller: "Retired athlete", condition: "Like new", price: 1800 },
        { name: "Nike Team Volleyball Bag", type: "Equipment bag", seller: "Merchant", condition: "New", price: 2000 },
        { name: "Mizuno Volleyball Socks", type: "Court socks", seller: "Retired athlete", condition: "Excellent", price: 800 },
        { name: "Tachikara Soft Practice Ball", type: "Training ball", seller: "Merchant", condition: "New", price: 1250 },
        { name: "Mikasa V300W Volleyball", type: "Training ball", seller: "Merchant", condition: "New", price: 2900 },
        { name: "Asics Upcourt Shoes", type: "Court shoes", seller: "Retired athlete", condition: "Excellent", price: 2400 },
        { name: "Nike Streak Volleyball", type: "Training ball", seller: "Merchant", condition: "Like new", price: 1600 },
        { name: "Mizuno Arm Sleeves", type: "Arm support", seller: "Retired athlete", condition: "Excellent", price: 1000 },
        { name: "Molten Volleyball Cart", type: "Training equipment", seller: "Merchant", condition: "New", price: 4750 },
        { name: "Asics Volleyball Socks", type: "Court socks", seller: "Retired athlete", condition: "Like new", price: 750 },
        { name: "Nike Dri-FIT Jersey", type: "Team jersey", seller: "Merchant", condition: "New", price: 1750 },
        { name: "Mikasa Ball Pump", type: "Ball accessory", seller: "Retired athlete", condition: "Excellent", price: 600 },
        { name: "Mizuno Knee Sleeve", type: "Knee support", seller: "Merchant", condition: "Like new", price: 1200 },
        { name: "Molten Training Cones", type: "Training equipment", seller: "Retired athlete", condition: "New", price: 850 },
        { name: "Nike Club Volleyball Bag", type: "Equipment bag", seller: "Merchant", condition: "Excellent", price: 2100 }
    ],
    fitness: [
        { name: "Rogue Resistance Band Set", type: "Resistance training", seller: "Merchant", condition: "New", price: 1750 },
        { name: "Adjustable Kettlebell", type: "Strength equipment", seller: "Retired athlete", condition: "Like new", price: 4500 },
        { name: "Manduka Pro Mat", type: "Exercise mat", seller: "Merchant", condition: "Excellent", price: 3100 },
        { name: "TRX Suspension Trainer", type: "Bodyweight training", seller: "Retired athlete", condition: "Excellent", price: 3750 },
        { name: "PowerBlock Sport Weights", type: "Adjustable weights", seller: "Merchant", condition: "Like new", price: 9000 },
        { name: "Foam Roller Pro", type: "Recovery equipment", seller: "Retired athlete", condition: "Excellent", price: 1400 },
        { name: "Olympic Barbell Set", type: "Strength equipment", seller: "Merchant", condition: "Like new", price: 12000 },
        { name: "Concept2 Rowing Handle", type: "Rowing accessory", seller: "Merchant", condition: "New", price: 2250 },
        { name: "Bowflex SelectTech Bench", type: "Strength equipment", seller: "Retired athlete", condition: "Excellent", price: 9000 },
        { name: "Nike Training Gloves", type: "Training gloves", seller: "Merchant", condition: "Like new", price: 1100 },
        { name: "Hyperice Massage Ball", type: "Recovery equipment", seller: "Retired athlete", condition: "Excellent", price: 1750 },
        { name: "Gymboss Interval Timer", type: "Training timer", seller: "Merchant", condition: "New", price: 1400 },
        { name: "Reebok Step Platform", type: "Aerobic equipment", seller: "Retired athlete", condition: "Like new", price: 2750 },
        { name: "Ab Wheel Roller", type: "Core equipment", seller: "Merchant", condition: "New", price: 900 },
        { name: "Lacrosse Mobility Ball", type: "Mobility equipment", seller: "Retired athlete", condition: "Excellent", price: 750 },
        { name: "Gymnastik Pilates Ring", type: "Pilates equipment", seller: "Merchant", condition: "New", price: 1000 },
        { name: "Rogue Weightlifting Belt", type: "Weightlifting support", seller: "Retired athlete", condition: "Like new", price: 2100 },
        { name: "Slam Ball 12kg", type: "Conditioning equipment", seller: "Merchant", condition: "Excellent", price: 2500 }
    ],
    tennis: [
        { name: "Wilson Pro Staff 97", type: "Tennis racket", seller: "Retired athlete", condition: "Excellent", price: 6000 },
        { name: "Babolat Pure Drive Bag", type: "Racket bag", seller: "Merchant", condition: "New", price: 2750 },
        { name: "Asics Gel Resolution", type: "Court shoes", seller: "Merchant", condition: "Like new", price: 3400 },
        { name: "Luxilon ALU Power Strings", type: "Racket strings", seller: "Merchant", condition: "New", price: 900 },
        { name: "Tourna Grip XL Pack", type: "Racket grips", seller: "Retired athlete", condition: "Like new", price: 700 },
        { name: "Head Radical Tennis Balls", type: "Tennis balls", seller: "Merchant", condition: "New", price: 600 },
        { name: "Yonex Pro Racket Cover", type: "Racket cover", seller: "Retired athlete", condition: "Excellent", price: 1200 },
        { name: "Head Speed MP Racket", type: "Tennis racket", seller: "Merchant", condition: "New", price: 6750 },
        { name: "Yonex Ezone 98", type: "Tennis racket", seller: "Retired athlete", condition: "Excellent", price: 5500 },
        { name: "Wilson Tennis Backpack", type: "Racket bag", seller: "Merchant", condition: "Like new", price: 2300 },
        { name: "Babolat Team Shorts", type: "Tennis wear", seller: "Retired athlete", condition: "Excellent", price: 1250 },
        { name: "Head Championship Balls", type: "Tennis balls", seller: "Merchant", condition: "New", price: 700 },
        { name: "Wilson Dampener Pack", type: "Racket accessory", seller: "Retired athlete", condition: "Like new", price: 500 },
        { name: "Babolat Syntec Grip", type: "Racket grip", seller: "Merchant", condition: "New", price: 600 },
        { name: "Nike Court Headband", type: "Tennis accessory", seller: "Retired athlete", condition: "Excellent", price: 700 },
        { name: "Yonex Tennis Shoes", type: "Court shoes", seller: "Merchant", condition: "Like new", price: 3100 },
        { name: "Prince Ball Hopper", type: "Training equipment", seller: "Retired athlete", condition: "Excellent", price: 2400 },
        { name: "Head Tennis Net", type: "Court equipment", seller: "Merchant", condition: "New", price: 4500 }
    ],
    karate: [
        { name: "Tokaido Kata Gi", type: "Karate uniform", seller: "Retired athlete", condition: "Excellent", price: 3750 },
        { name: "Arawaza Chest Guard", type: "Protective gear", seller: "Merchant", condition: "New", price: 1700 },
        { name: "Century Focus Mitts", type: "Training pads", seller: "Merchant", condition: "Like new", price: 1450 },
        { name: "Hayashi Karate Belt", type: "Martial arts belt", seller: "Retired athlete", condition: "Excellent", price: 1000 },
        { name: "Adidas Karate Foot Guards", type: "Foot protection", seller: "Merchant", condition: "New", price: 1550 },
        { name: "Shureido Kumite Gloves", type: "Hand protection", seller: "Retired athlete", condition: "Excellent", price: 2250 },
        { name: "Hayashi Karate Head Guard", type: "Head protection", seller: "Merchant", condition: "New", price: 2600 },
        { name: "Arawaza Kumite Gi", type: "Karate uniform", seller: "Merchant", condition: "New", price: 3400 },
        { name: "Tokaido Karate Gloves", type: "Hand protection", seller: "Retired athlete", condition: "Excellent", price: 1900 },
        { name: "Arawaza Shin Guards", type: "Shin protection", seller: "Merchant", condition: "Like new", price: 1750 },
        { name: "Hayashi Chest Protector", type: "Body protection", seller: "Retired athlete", condition: "Excellent", price: 2400 },
        { name: "Tokaido Training Belt", type: "Martial arts belt", seller: "Merchant", condition: "New", price: 900 },
        { name: "Adidas Karate Bag", type: "Equipment bag", seller: "Retired athlete", condition: "Like new", price: 2000 },
        { name: "Century Kick Shield", type: "Training pad", seller: "Merchant", condition: "Excellent", price: 3600 },
        { name: "Arawaza Mouthguard", type: "Mouth protection", seller: "Retired athlete", condition: "New", price: 800 },
        { name: "Tokaido Head Guard", type: "Head protection", seller: "Merchant", condition: "Like new", price: 2750 },
        { name: "Karate Tatami Mat", type: "Training mat", seller: "Retired athlete", condition: "Excellent", price: 4000 },
        { name: "Century Elastic Bands", type: "Training equipment", seller: "Merchant", condition: "New", price: 1050 }
    ],
    mma: [
        { name: "Fairtex BGV1 Gloves", type: "MMA gloves", seller: "Merchant", condition: "New", price: 4200 },
        { name: "Hayabusa Rash Guard", type: "Training wear", seller: "Retired athlete", condition: "Excellent", price: 2100 },
        { name: "Venum Shin Guards", type: "Shin protection", seller: "Merchant", condition: "Like new", price: 2900 },
        { name: "Century Bob Freestanding Bag", type: "Training dummy", seller: "Merchant", condition: "Excellent", price: 10500 },
        { name: "RDX Hand Wraps", type: "Hand protection", seller: "Retired athlete", condition: "Like new", price: 800 },
        { name: "Venum Challenger Mouthguard", type: "Mouth protection", seller: "Merchant", condition: "New", price: 1100 },
        { name: "Tatami No-Gi Fight Shorts", type: "Training wear", seller: "Retired athlete", condition: "Excellent", price: 1600 },
        { name: "Hayabusa T3 Gloves", type: "MMA gloves", seller: "Merchant", condition: "New", price: 4750 },
        { name: "Venum Elite Headgear", type: "Head protection", seller: "Retired athlete", condition: "Excellent", price: 3100 },
        { name: "Fairtex Belly Pad", type: "Body protection", seller: "Merchant", condition: "Like new", price: 5750 },
        { name: "RDX Grappling Shorts", type: "Training wear", seller: "Retired athlete", condition: "Excellent", price: 1400 },
        { name: "Hayabusa Hand Wraps", type: "Hand protection", seller: "Merchant", condition: "New", price: 900 },
        { name: "Venum Contender Groin Guard", type: "Protective gear", seller: "Retired athlete", condition: "Like new", price: 1750 },
        { name: "Fairtex Thai Pads", type: "Training pads", seller: "Merchant", condition: "Excellent", price: 6500 },
        { name: "Tatami BJJ Gi", type: "Martial arts uniform", seller: "Retired athlete", condition: "New", price: 3750 },
        { name: "RDX Focus Mitts", type: "Training pads", seller: "Merchant", condition: "Like new", price: 2250 },
        { name: "Venum Training Bag", type: "Equipment bag", seller: "Retired athlete", condition: "Excellent", price: 2000 },
        { name: "MMA Foam Roller", type: "Recovery equipment", seller: "Merchant", condition: "New", price: 1200 }
    ],
    kickboxing: [
        { name: "Twins Special BGVL-3", type: "Training gloves", seller: "Retired athlete", condition: "Excellent", price: 3900 },
        { name: "Fairtex Heavy Bag", type: "Punching bag", seller: "Merchant", condition: "New", price: 7250 },
        { name: "Top King Ankle Supports", type: "Ankle support", seller: "Merchant", condition: "Like new", price: 1100 },
        { name: "Yokkao Shin Guards", type: "Shin protection", seller: "Retired athlete", condition: "Excellent", price: 3250 },
        { name: "Everlast Speed Bag", type: "Speed bag", seller: "Merchant", condition: "New", price: 2750 },
        { name: "Leone 1947 Head Guard", type: "Head protection", seller: "Retired athlete", condition: "Excellent", price: 3000 },
        { name: "Rival Boxing Hand Wraps", type: "Hand protection", seller: "Merchant", condition: "New", price: 900 },
        { name: "Fairtex BGV14 Gloves", type: "Training gloves", seller: "Merchant", condition: "New", price: 4400 },
        { name: "Twins Special Shin Guards", type: "Shin protection", seller: "Retired athlete", condition: "Excellent", price: 3500 },
        { name: "Yokkao Boxing Shorts", type: "Training wear", seller: "Merchant", condition: "Like new", price: 1600 },
        { name: "Top King Heavy Bag", type: "Punching bag", seller: "Retired athlete", condition: "Excellent", price: 8000 },
        { name: "Fairtex Head Guard", type: "Head protection", seller: "Merchant", condition: "New", price: 3600 },
        { name: "Twins Belly Protector", type: "Body protection", seller: "Retired athlete", condition: "Like new", price: 4900 },
        { name: "Yokkao Hand Wraps", type: "Hand protection", seller: "Merchant", condition: "Excellent", price: 750 },
        { name: "Top King Focus Mitts", type: "Training pads", seller: "Retired athlete", condition: "New", price: 2900 },
        { name: "Fairtex Ankle Supports", type: "Ankle support", seller: "Merchant", condition: "Like new", price: 1000 },
        { name: "Everlast Gym Bag", type: "Equipment bag", seller: "Retired athlete", condition: "Excellent", price: 1800 },
        { name: "Century Kick Shield", type: "Training pad", seller: "Merchant", condition: "New", price: 3400 }
    ],
    running: [
        { name: "Garmin Forerunner 255", type: "Running watch", seller: "Retired athlete", condition: "Excellent", price: 8000 },
        { name: "Saucony Endorphin Speed", type: "Running shoes", seller: "Merchant", condition: "New", price: 5500 },
        { name: "Nathan Hydration Vest", type: "Hydration gear", seller: "Merchant", condition: "Like new", price: 2400 },
        { name: "Balega Performance Socks", type: "Running socks", seller: "Merchant", condition: "New", price: 800 },
        { name: "FlipBelt Running Belt", type: "Running accessory", seller: "Retired athlete", condition: "Excellent", price: 1100 },
        { name: "Hoka Clifton Running Shoes", type: "Running shoes", seller: "Merchant", condition: "Like new", price: 5250 },
        { name: "Garmin HRM-Dual Strap", type: "Heart-rate monitor", seller: "Retired athlete", condition: "Excellent", price: 2250 },
        { name: "Nike Pegasus 41", type: "Running shoes", seller: "Merchant", condition: "New", price: 5000 },
        { name: "Asics Gel Nimbus", type: "Running shoes", seller: "Retired athlete", condition: "Excellent", price: 4750 },
        { name: "Garmin Forerunner 55", type: "Running watch", seller: "Merchant", condition: "Like new", price: 5250 },
        { name: "Skechers Running Cap", type: "Running accessory", seller: "Retired athlete", condition: "Excellent", price: 750 },
        { name: "Nathan Handheld Bottle", type: "Hydration gear", seller: "Merchant", condition: "New", price: 1000 },
        { name: "Brooks Running Jacket", type: "Running wear", seller: "Retired athlete", condition: "Like new", price: 2250 },
        { name: "CEP Compression Sleeves", type: "Running support", seller: "Merchant", condition: "Excellent", price: 1750 },
        { name: "Puma Running Waistpack", type: "Running accessory", seller: "Retired athlete", condition: "New", price: 900 },
        { name: "Shokz OpenRun Headphones", type: "Running electronics", seller: "Merchant", condition: "Like new", price: 6000 },
        { name: "Salomon Trail Shoes", type: "Trail shoes", seller: "Retired athlete", condition: "Excellent", price: 4250 },
        { name: "Polar H10 Sensor", type: "Heart-rate monitor", seller: "Merchant", condition: "New", price: 4500 }
    ],
    basketball: [
        { name: "Spalding TF-1000", type: "Game basketball", seller: "Merchant", condition: "New", price: 2750 },
        { name: "Nike GT Cut 3", type: "Basketball shoes", seller: "Retired athlete", condition: "Excellent", price: 4750 },
        { name: "McDavid Hex Knee Pads", type: "Knee protection", seller: "Merchant", condition: "Like new", price: 1600 },
        { name: "SKLZ Dribble Goggles", type: "Ball handling trainer", seller: "Merchant", condition: "New", price: 900 },
        { name: "Wilson Evolution Indoor Ball", type: "Training basketball", seller: "Retired athlete", condition: "Excellent", price: 2100 },
        { name: "Spalding Dribble Stick", type: "Ball handling trainer", seller: "Merchant", condition: "New", price: 1300 },
        { name: "Jordan Elite Crew Socks", type: "Basketball socks", seller: "Retired athlete", condition: "Like new", price: 750 },
        { name: "Nike LeBron Witness", type: "Basketball shoes", seller: "Merchant", condition: "New", price: 5250 },
        { name: "Under Armour Curry Shorts", type: "Basketball wear", seller: "Retired athlete", condition: "Excellent", price: 1400 },
        { name: "Wilson NCAA Ball", type: "Training basketball", seller: "Merchant", condition: "Like new", price: 1750 },
        { name: "Nike Elite Sleeves", type: "Arm support", seller: "Retired athlete", condition: "Excellent", price: 1000 },
        { name: "SKLZ Agility Ladder", type: "Training equipment", seller: "Merchant", condition: "New", price: 1600 },
        { name: "Spalding Ball Bag", type: "Equipment bag", seller: "Retired athlete", condition: "Like new", price: 1500 },
        { name: "Jordan Jumpman Jersey", type: "Team jersey", seller: "Merchant", condition: "Excellent", price: 2250 },
        { name: "Baden Shooter Basketball", type: "Training basketball", seller: "Retired athlete", condition: "New", price: 1900 },
        { name: "Nike Pro Compression Tights", type: "Training wear", seller: "Merchant", condition: "Like new", price: 1500 },
        { name: "Vertimax Jump Trainer", type: "Jump training", seller: "Retired athlete", condition: "Excellent", price: 7500 },
        { name: "Spalding Coach Board", type: "Training accessory", seller: "Merchant", condition: "New", price: 1200 }
    ],
    cycling: [
        { name: "Giro Register Helmet", type: "Cycling helmet", seller: "Merchant", condition: "New", price: 3250 },
        { name: "Shimano SPD Pedals", type: "Bike components", seller: "Retired athlete", condition: "Excellent", price: 2500 },
        { name: "Castelli Cycling Jersey", type: "Cycling wear", seller: "Merchant", condition: "Like new", price: 2200 },
        { name: "Lezyne Pocket Drive Pump", type: "Bike pump", seller: "Merchant", condition: "New", price: 1500 },
        { name: "Garmin Edge 530", type: "Cycling computer", seller: "Retired athlete", condition: "Excellent", price: 6750 },
        { name: "Kryptonite U-Lock", type: "Bike security", seller: "Merchant", condition: "New", price: 2100 },
        { name: "Pearl Izumi Cycling Gloves", type: "Cycling gloves", seller: "Retired athlete", condition: "Like new", price: 1000 },
        { name: "Specialized Torch Helmet", type: "Cycling helmet", seller: "Merchant", condition: "New", price: 4750 },
        { name: "Shimano Cycling Shoes", type: "Cycling shoes", seller: "Retired athlete", condition: "Excellent", price: 4250 },
        { name: "Wahoo Elemnt Bolt", type: "Cycling computer", seller: "Merchant", condition: "Like new", price: 9000 },
        { name: "Topeak Mini Pump", type: "Bike pump", seller: "Retired athlete", condition: "Excellent", price: 1200 },
        { name: "Pearl Izumi Bib Shorts", type: "Cycling wear", seller: "Merchant", condition: "New", price: 3100 },
        { name: "Park Tool Repair Kit", type: "Bike tools", seller: "Retired athlete", condition: "Like new", price: 2400 },
        { name: "CamelBak Podium Bottle", type: "Hydration gear", seller: "Merchant", condition: "Excellent", price: 700 },
        { name: "Bontrager Bike Gloves", type: "Cycling gloves", seller: "Retired athlete", condition: "New", price: 1100 },
        { name: "Abus Folding Lock", type: "Bike security", seller: "Merchant", condition: "Like new", price: 2750 },
        { name: "Continental Road Tyre", type: "Bike component", seller: "Retired athlete", condition: "Excellent", price: 1900 },
        { name: "Thule Bike Rack", type: "Transport equipment", seller: "Merchant", condition: "New", price: 7500 }
    ],
    gymnastics: [
        { name: "Spieth Training Grips", type: "Hand grips", seller: "Retired athlete", condition: "Excellent", price: 1800 },
        { name: "Tumbl Trak Panel Mat", type: "Training mat", seller: "Merchant", condition: "Like new", price: 7000 },
        { name: "GK Elite Leotard", type: "Competition wear", seller: "Merchant", condition: "New", price: 2900 },
        { name: "Aai Vaulting Board", type: "Training equipment", seller: "Merchant", condition: "Excellent", price: 11000 },
        { name: "Omnigym Wristbands", type: "Gymnastics accessory", seller: "Retired athlete", condition: "Like new", price: 900 },
        { name: "Spieth Balance Beam Mat", type: "Safety mat", seller: "Merchant", condition: "Excellent", price: 8250 },
        { name: "Tumbl Trak Handstand Blocks", type: "Training blocks", seller: "Retired athlete", condition: "Like new", price: 1600 },
        { name: "GK Elite Training Leotard", type: "Training wear", seller: "Merchant", condition: "New", price: 2400 },
        { name: "Spieth Uneven Bars Grips", type: "Hand grips", seller: "Retired athlete", condition: "Excellent", price: 2000 },
        { name: "Tumbl Trak Incline Mat", type: "Training mat", seller: "Merchant", condition: "Like new", price: 6250 },
        { name: "Aai Balance Beam", type: "Training equipment", seller: "Retired athlete", condition: "Excellent", price: 9500 },
        { name: "Spieth Pommel Horse Handles", type: "Training equipment", seller: "Merchant", condition: "New", price: 2750 },
        { name: "GK Elite Warm-Up Jacket", type: "Training wear", seller: "Retired athlete", condition: "Like new", price: 2100 },
        { name: "Tumbl Trak Panel Mat", type: "Safety mat", seller: "Merchant", condition: "Excellent", price: 6750 },
        { name: "Omnigym Ankle Supports", type: "Joint support", seller: "Retired athlete", condition: "New", price: 950 },
        { name: "Spieth Chalk Bowl", type: "Training accessory", seller: "Merchant", condition: "Like new", price: 1250 },
        { name: "Aai Practice Rings", type: "Training equipment", seller: "Retired athlete", condition: "Excellent", price: 2250 },
        { name: "GK Elite Hair Kit", type: "Gymnastics accessory", seller: "Merchant", condition: "New", price: 600 }
    ],
    ballet: [
        { name: "Bloch Synthesis Pointe Shoes", type: "Pointe shoes", seller: "Retired athlete", condition: "Like new", price: 2100 },
        { name: "Capezio Studio Leotard", type: "Dancewear", seller: "Merchant", condition: "New", price: 1900 },
        { name: "So Danca Ballet Bag", type: "Dance bag", seller: "Merchant", condition: "Excellent", price: 1500 },
        { name: "Gaynor Minden Tights", type: "Dancewear", seller: "Retired athlete", condition: "Excellent", price: 1000 },
        { name: "Harlequin Dance Floor Roll", type: "Studio equipment", seller: "Merchant", condition: "Like new", price: 5750 },
        { name: "Bloch Warm-Up Booties", type: "Dancewear", seller: "Merchant", condition: "New", price: 1700 },
        { name: "Sansha Canvas Ballet Shoes", type: "Ballet shoes", seller: "Retired athlete", condition: "Excellent", price: 1300 },
        { name: "Bloch Serenade Pointe Shoes", type: "Pointe shoes", seller: "Merchant", condition: "New", price: 2400 },
        { name: "Capezio Hanami Leotard", type: "Dancewear", seller: "Retired athlete", condition: "Excellent", price: 1750 },
        { name: "Bloch Warm-Up Sweater", type: "Dancewear", seller: "Merchant", condition: "Like new", price: 2100 },
        { name: "Sansha Ballet Tights", type: "Dancewear", seller: "Retired athlete", condition: "Excellent", price: 900 },
        { name: "Capezio Foot Undies", type: "Dance accessories", seller: "Merchant", condition: "New", price: 800 },
        { name: "Bloch Dance Bag", type: "Dance bag", seller: "Retired athlete", condition: "Like new", price: 1700 },
        { name: "Harlequin Practice Mat", type: "Studio equipment", seller: "Merchant", condition: "Excellent", price: 3750 },
        { name: "Capezio Ballet Skirt", type: "Dancewear", seller: "Retired athlete", condition: "New", price: 1250 },
        { name: "Bloch Gel Toe Pads", type: "Pointe accessory", seller: "Merchant", condition: "Like new", price: 700 },
        { name: "Sansha Canvas Slippers", type: "Ballet shoes", seller: "Retired athlete", condition: "Excellent", price: 1100 },
        { name: "Bunheads Ribbon Kit", type: "Pointe accessory", seller: "Merchant", condition: "New", price: 550 }
    ]
};

// Make one element with a class and some text, e.g. makeElement("h3", "title", "Hello").
function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

// 3500 becomes "EGP 3,500".
function formatPrice(price) {
    return "EGP " + price.toLocaleString("en-EG");
}

// Look up a sport by its id. Gives back undefined if there is no such sport.
function findSport(sportId) {
    for (let i = 0; i < SPORTS.length; i++) {
        if (SPORTS[i].id === sportId) {
            return SPORTS[i];
        }
    }
    return undefined;
}

// One card per sport. Each card is a plain link to that sport's products.
function showSports() {
    const grid = document.getElementById("sport-grid");
    for (let i = 0; i < SPORTS.length; i++) {
        const sport = SPORTS[i];
        const card = makeElement("a", "sport-card", "");
        card.href = "equepment.html?sport=" + sport.id + "#products";
        card.appendChild(makeElement("span", "sport-mark", sport.mark));
        card.appendChild(makeElement("span", "sport-name", sport.name));
        card.appendChild(makeElement("span", "sport-description", sport.description));
        card.appendChild(makeElement("span", "sport-arrow", "→"));
        grid.appendChild(card);
    }
}

// Put a product in the cart. If it is already there, add one more of it.
function addToCart(sport, product, button) {
    const cart = loadCart();

    let found = undefined;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].sport === sport.id && cart[i].name === product.name) {
            found = cart[i];
        }
    }

    if (found === undefined) {
        found = { sport: sport.id, mark: sport.mark, name: product.name, price: product.price, quantity: 1 };
        cart.push(found);
    } else {
        found.quantity = found.quantity + 1;
    }

    saveCart(cart);
    button.textContent = "Added ✓ (" + found.quantity + " in cart)";
}

function makeProductCard(sport, product) {
    const card = makeElement("article", "product-card", "");

    const picture = makeElement("div", "product-visual", "");
    picture.appendChild(makeElement("span", "", sport.mark));
    picture.appendChild(makeElement("small", "", "ORIGINAL"));
    card.appendChild(picture);

    const details = makeElement("div", "product-details", "");

    const meta = makeElement("div", "product-meta", "");
    meta.appendChild(makeElement("span", "", product.type));
    meta.appendChild(makeElement("span", "verified", "Verified"));
    details.appendChild(meta);

    details.appendChild(makeElement("h3", "", product.name));

    const info = makeElement("div", "product-info", "");
    info.appendChild(makeElement("span", "", "Seller: " + product.seller));
    info.appendChild(makeElement("span", "", "Condition: " + product.condition));
    details.appendChild(info);

    const footer = makeElement("div", "product-footer", "");
    footer.appendChild(makeElement("strong", "", formatPrice(product.price)));
    const button = makeElement("button", "add-button", "Add to cart");
    button.type = "button";
    button.addEventListener("click", function () {
        addToCart(sport, product, button);
    });
    footer.appendChild(button);
    details.appendChild(footer);

    card.appendChild(details);
    return card;
}

function showProducts(sport) {
    const products = PRODUCTS[sport.id];

    // This class hides the big welcome box and the sports list (see equepment.css).
    document.body.classList.add("product-view");

    document.getElementById("products-title").textContent = sport.name + " equipment";
    document.getElementById("products-count").textContent = products.length + " verified community listings";

    const grid = document.getElementById("product-grid");
    for (let i = 0; i < products.length; i++) {
        grid.appendChild(makeProductCard(sport, products[i]));
    }
}

const address = new URLSearchParams(window.location.search);
const chosenSport = findSport(address.get("sport"));

if (chosenSport === undefined) {
    // No sport picked yet (or one we don't sell): show the sports to choose from.
    showSports();
    document.getElementById("products").style.display = "none";
} else {
    showProducts(chosenSport);
}
